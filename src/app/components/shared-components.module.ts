import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { IonicModule } from '@ionic/angular';
import { DrawerComponent } from './drawer/drawer.component';



@NgModule({
  declarations: [FeedComponent,DrawerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FeedComponent,DrawerComponent]
})
export class SharedComponentsModule { }
 