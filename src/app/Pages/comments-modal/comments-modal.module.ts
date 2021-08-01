import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentsModalPageRoutingModule } from './comments-modal-routing.module';

import { CommentsModalPage } from './comments-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommentsModalPageRoutingModule
  ],
  declarations: [CommentsModalPage]
})
export class CommentsModalPageModule {}
