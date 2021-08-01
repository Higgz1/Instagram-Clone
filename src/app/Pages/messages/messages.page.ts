import { Component, OnInit } from '@angular/core';
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
  
  constructor(public modalController: ModalController,
    private usersService: UsersService,
    public loadingController: LoadingController,
    ) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers(){
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
      loading.dismiss();
    });
  }

}
