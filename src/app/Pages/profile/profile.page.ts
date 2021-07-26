import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute,) {
    this.user = JSON.parse(this.route.snapshot.paramMap.get('user'));
   }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log(this.user)

  }

}
