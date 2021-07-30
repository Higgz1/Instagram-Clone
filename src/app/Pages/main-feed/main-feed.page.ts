import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, LoadingController, ModalController } from '@ionic/angular';
import { DrawerComponent } from 'src/app/components/drawer/drawer.component';
import { DrawerService } from 'src/app/Services/Drawer/drawer.service';
import { ImagesService } from 'src/app/Services/Images/images.service';
import { UsersService } from 'src/app/Services/Users/users.service';
import { StoriesModalPage } from '../stories-modal/stories-modal.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';





@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.page.html',
  styleUrls: ['./main-feed.page.scss'],
})
export class MainFeedPage implements OnInit {
  users: any;
  images: any;
  combined: any;
  page: number;
  newUsers: any;
  newImages: any;
  newCombined: any;
  set = {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesOffsetBefore: 0,
  };
  public isShown = false;

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild(DrawerComponent) drawer: DrawerComponent;
  backdropVisible = false;


  constructor(
    private router: Router,
    private usersService: UsersService,
    private drawerService: DrawerService,
    private imagesService: ImagesService,
    public loadingController: LoadingController,
    private socialSharing: SocialSharing,
    public modalController: ModalController,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.drawerService.drawerOpen.subscribe(drawerData => {
      if (drawerData && drawerData.open) {
        this.drawer.openDrawer();
      }
    })
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadData();
  }

  ShareWhatsapp(){
    // this.socialSharing.shareViaWhatsApp(this.text, this.imgurl, this.link);
  }

  ShareFacebook(){
    // this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.imgurl, null /* url */, 'Copia Pega!');
  }

  SendEmail(){
    this.socialSharing.shareViaEmail('text', 'subject', ['email@address.com']);
  }

  SendTwitter(){
    // this.socialSharing.shareViaTwitter(this.text, this.imgurl, this.link);
  }

  SendInstagram(){
    // this.socialSharing.shareViaInstagram(this.text, this.imgurl);
  }

  async loadData() {
    this.page = Math.floor((Math.random() * 100) + 1);
    if (this.page >= 90) {
      this.page = this.page - 40;
    }

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();

    this.usersService.getUsers(this.page).subscribe((resp: any) => {
      // console.log('Users', resp.results);
      this.users = resp.results;

      this.imagesService.getImages(this.page).subscribe((resp: any) => {
        // console.log('Images', resp);
        this.images = resp;

        this.combined = this.users.map((user, index) => {
          return { user: user, picture: this.images[index] };
        });
        // console.log(this.combined);

      });

      loading.dismiss();
    });
  }

  moreData(event) {
    this.page++
    // console.log('page increments', this.page);

    this.usersService.getUsers(this.page).subscribe((resp: any) => {

      this.newUsers = resp.results;
      this.imagesService.getImages(this.page).subscribe((resp: any) => {

        this.newImages = resp;

        this.newCombined = this.newUsers.map((newUser, index) => {
          return { user: newUser, picture: this.newImages[index] };
        });
        // console.log('new combined', this.newCombined);
        this.combined.push(...this.newCombined)

      });
      event.target.complete();
    });
  }

  refresh(event) {
    this.loadData().then(() => {
      event.target.complete();
    });
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  fabDisplay(event) {
    const screenSize = event.target.clientHeight;

    let bottomPosition = screenSize + event.detail.scrollTop;
    if (bottomPosition >= 4200) {
      this.isShown = true;
    } else if (bottomPosition < 2000) {
      this.isShown = false;
    }
  }

  profile(user) {
    // console.log(user);
    this.router.navigate(['/profile', { user: JSON.stringify(user) }]);
  }

  async storiesImage(item) {
    const modal = await this.modalController.create({
      component: StoriesModalPage,
      componentProps: {
        'item': item
      }
    })
    return await modal.present();
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }

  closeDrawer() {
    this.drawer.closeDrawer();
  }


}
