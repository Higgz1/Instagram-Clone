import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoriesModalPageRoutingModule } from './stories-modal-routing.module';

import { StoriesModalPage } from './stories-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoriesModalPageRoutingModule
  ],
  declarations: [StoriesModalPage]
})
export class StoriesModalPageModule {}
