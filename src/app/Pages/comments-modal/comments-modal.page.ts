import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.page.html',
  styleUrls: ['./comments-modal.page.scss'],
})
export class CommentsModalPage implements OnInit {
  user;
  constructor(public modalController: ModalController,) { }

  ngOnInit() {
    console.log(this.user);
  }

  close() {
    this.modalController.dismiss();
  }
}
