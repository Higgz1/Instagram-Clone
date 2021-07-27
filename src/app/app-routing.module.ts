import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-feed',
    pathMatch: 'full'
  },
  {
    path: 'main-feed',
    loadChildren: () => import('./pages/main-feed/main-feed.module').then( m => m.MainFeedPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },  {
    path: 'posts',
    loadChildren: () => import('./Pages/posts/posts.module').then( m => m.PostsPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
