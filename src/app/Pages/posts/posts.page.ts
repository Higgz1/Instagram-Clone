import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { DrawerComponent } from 'src/app/components/drawer/drawer.component';
import { DrawerService } from 'src/app/Services/Drawer/drawer.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild(DrawerComponent) drawer: DrawerComponent;
  user: any;
  images: any;
  id: any;
  nimages: any;
  backdropVisible = false;

  constructor(private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private drawerService: DrawerService,

    ) {
    this.user = JSON.parse(this.route.snapshot.paramMap.get('user')) || 0;
    this.nimages = JSON.parse(this.route.snapshot.paramMap.get('images')) || 0;
    this.id = JSON.parse(this.route.snapshot.paramMap.get('selectedId')) || 0;
    this.topImage();

    this.drawerService.drawerOpen.subscribe(drawerData => {
      if (drawerData && drawerData.open) {
        this.drawer.openDrawer();
      }
    })

  }

  ngOnInit() {
    console.log(this.id);
  }
  ionViewDidEnter() {
    // this.scrollToLabel();
  }

  topImage() {
    var first = this.id;
    this.images = this.nimages.sort(function (x, y) { return x.id == first ? -1 : y.id == first ? 1 : 0; });
    // console.log('new position',this.nimages);
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }

  closeDrawer() {
    this.drawer.closeDrawer();
  }


}
