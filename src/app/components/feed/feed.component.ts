import { Component, Input, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedComponent implements OnInit {
  @Input() feed: any;
  @Input() post: any;
  @Input() user: any;
  likes: number;



  constructor(private router: Router,) { }

  ngOnInit() {
    this.likes = this.getLikes();
   }

  profile(user) {
    console.log(user)
    this.router.navigate(['/profile', { user: JSON.stringify(user) }]);
  }

  getLikes(){
    return Math.floor((Math.random() * 100) + 1);
  }
}
