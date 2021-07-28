import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesModalPage } from './stories-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StoriesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesModalPageRoutingModule {}
