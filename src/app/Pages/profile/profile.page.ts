import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/Services/Images/images.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  Images: Object;
  page: number;
  followers: number;
  following: number;
  posts: number;
  

  constructor(private route: ActivatedRoute,
    private imagesService: ImagesService,) {
    this.user = JSON.parse(this.route.snapshot.paramMap.get('user')) || 0;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getImages();
  }

  getImages() {
    this.page = Math.floor((Math.random() * 100) + 1);
    if (this.page >= 90) {
      this.page = this.page - 40;
    }

    this.imagesService.getImages(this.page).subscribe((resp:any) => {
      console.log(resp.length);

      this.Images = resp;
      this.posts = resp.length;
      this.followers = this.getFollowers();
      this.following = this.getFollowing();
    })
  }

  getFollowers() {
    return Math.floor((Math.random() * 100000) + 1);
  }

  getFollowing() {
    return Math.floor((Math.random() * 10000) + 1);
  }

}
