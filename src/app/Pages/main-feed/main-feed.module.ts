import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainFeedPageRoutingModule } from './main-feed-routing.module';

import { MainFeedPage } from './main-feed.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainFeedPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MainFeedPage]
})
export class MainFeedPageModule {}
