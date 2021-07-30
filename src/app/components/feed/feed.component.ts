import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { GestureController } from '@ionic/angular';

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
  ;





  constructor(private router: Router, private gestureCtrl: GestureController) { }

  ngAfterViewInit(): void {
    // const imageArray = this.Images.toArray();
    // console.log(imageArray)

    // this.doubleTap();
  }

  ngOnInit() {
    this.likes = this.getLikes();

  }

  profile(user) {
    console.log(user)
    this.router.navigate(['/profile', { user: JSON.stringify(user) }]);
  }

  getLikes() {
    return Math.floor((Math.random() * 100) + 1);
  }

  toggleActive() {
    this.isLiked = !this.isLiked;
    if (this.isLiked == true) {
      this.toShowIcon = 'heart';

    } else {
      this.toShowIcon = 'heart-outline'
    }

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
}
