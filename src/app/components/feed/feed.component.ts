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

  

  constructor(private router: Router,) { }

  ngOnInit() { }

  profile(user) {
    console.log(user)
    this.router.navigate(['/profile', { user: JSON.stringify(user) }]);

  }
}
