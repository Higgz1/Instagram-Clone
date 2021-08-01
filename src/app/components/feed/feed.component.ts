import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { GestureController, ModalController } from '@ionic/angular';
import { CommentsModalPage } from 'src/app/Pages/comments-modal/comments-modal.page';
import { MessagesModalPage } from 'src/app/pages/messages-modal/messages-modal.page';
import { DrawerService } from 'src/app/Services/Drawer/drawer.service';
// import { DrawerService } from 'src/app/Services/Drawer/drawer.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements AfterViewInit {
  @Input() feed: any;
  @Input() post: any;
  @Input() user: any;
  @ViewChild('Img', { read: ElementRef }) Images: ElementRef;
  private lastOnStart: number = 0;
  private DOUBLE_CLICK_THRESHOLD: number = 500;
  likes: number;
  isLiked = false;
  count: number = 0;
  show = false;
  toShowIcon = 'heart-outline';
  bookmarked = false;
  toShowBookmark = 'bookmark-outline';
  ;





  constructor(private router: Router, 
    private drawerService: DrawerService,
    public modalController: ModalController,
    private gestureCtrl: GestureController) { }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.likes = this.getLikes();

  }
 
  profile(user) {
    // console.log(user)
    this.router.navigate(['/profile', { user: JSON.stringify(user) }]);
  }

  async comments(user){
    const modal = await this.modalController.create({
      component: CommentsModalPage,
      componentProps: {
        'user': user
      }
    })
    return await modal.present();

  }

  openInfo(feed) {
    console.log(feed.picture);
    this.drawerService.openDrawer(feed);
  }
 
  postOpenInfo(post){
    this.drawerService.postOpenDrawer(post);

  }

  getLikes() {
    return Math.floor((Math.random() * 100) + 1);
  }

  doubleTap() {

    const gesture = this.gestureCtrl.create({
      el: this.Images.nativeElement,
      gestureName: 'double click',
      threshold: 0,
      onStart: () => {
        const now = Date.now();

        if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
          // console.log('lift off');
          this.isLiked = true;
          this.showImage();

          this.lastOnStart = 0;
        } else {
          this.lastOnStart = now;
        }
      }
    });
    gesture.enable();


  }

  showImage() {
    setTimeout(() => {
      this.show = true;
    }, 3000);
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked == true) {
      this.toShowIcon = 'heart';

    } else {
      this.toShowIcon = 'heart-outline'
    }

  }

  toggleBookmark() {
    this.bookmarked = !this.bookmarked;
    if (this.bookmarked == true) {
      this.toShowBookmark = 'bookmark';

    } else {
      this.toShowBookmark = 'bookmark-outline'
    }
  }

  async message(){
    const modal = await this.modalController.create({
      component: MessagesModalPage,
      componentProps: {
      }
    })
    return await modal.present();
  }
}
