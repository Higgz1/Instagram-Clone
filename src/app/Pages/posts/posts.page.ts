import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  user: any;
  images: any;
  id: any;
  nimages: any;

  constructor(private route: ActivatedRoute,) {
    this.user = JSON.parse(this.route.snapshot.paramMap.get('user')) || 0;
    this.images = JSON.parse(this.route.snapshot.paramMap.get('images')) || 0;
    this.id = JSON.parse(this.route.snapshot.paramMap.get('selectedId')) || 0;
  }

  ngOnInit() {
    console.log(this.id);
  }
  ionViewDidEnter() {
    // this.scrollToLabel();
  }

  scrollToLabel() {

    var first = this.id;
    this.nimages = this.images.sort(function(x,y){ return x == first ? -1 : y == first ? 1 : 0; });
    console.log('new position',this.nimages);
  }


}
