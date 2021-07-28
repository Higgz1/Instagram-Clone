import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-stories-modal',
  templateUrl: './stories-modal.page.html',
  styleUrls: ['./stories-modal.page.scss'],
})
export class StoriesModalPage implements OnInit {

  item;

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

}
