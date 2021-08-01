import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { UsersService } from 'src/app/Services/Users/users.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  page: number;
  users: any;
  user: any = { isChecked: false };
  isSent = false;
  checked: any[];
  visability: boolean;
  usersToSend: any[];

  constructor(
    private router: Router,
    public modalController: ModalController,
    private usersService: UsersService,
    public loadingController: LoadingController,
  ) {
    this.usersToSend = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    // this.isSent = false;
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
      console.log('Users', resp.results);
      this.users = resp.results;

      // for (let i = 0; i < this.users.length; i++) {
      //   this.users[i].checkBox = false;
      // };

      loading.dismiss();
    });
  }

  toggleSend() {
    console.log('user')

    if (this.user.isChecked = false) {
      this.isSent = true;

    } else {
      this.isSent = false;
    }

  }

  profile(user) {
    // console.log(user)
    this.router.navigate(['/profile', { user: JSON.stringify(user) }]);
  }

  // test(event){
  //   // console.log(event.detail.checked);
  //   this.checked = [];
  //   if(event.detail.checked == true){
  //   this.checked.push(event.detail.checked);
  //   }
  //   else if(event.detail.checked == false){
  //     this.checked.pop();
  //   }
  //   console.log(this.checked.length);

  //   // this.checked.push(event.detail.checked);




  // }

  onChange(user) {

    let index = this.usersToSend.indexOf(user);

    if (this.usersToSend.indexOf(user) == -1) {
      this.usersToSend.push(user);
      console.log('push', this.usersToSend);

    }
    else {

      this.usersToSend.splice(index, 1);
      console.log('spliced', this.usersToSend);

    }


  }


}
