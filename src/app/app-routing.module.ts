import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main-feed',
    loadChildren: () => import('./Pages/main-feed/main-feed.module').then( m => m.MainFeedPageModule)
  },
  {
    path: '',
    redirectTo: 'main-feed',
    pathMatch: 'full'
  },
  {
    path: 'stories-modal',
    loadChildren: () => import('./pages/stories-modal/stories-modal.module').then( m => m.StoriesModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
