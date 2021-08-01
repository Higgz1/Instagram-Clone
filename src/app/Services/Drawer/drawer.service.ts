import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  drawerOpen = new BehaviorSubject(null);
  postDrawerOpen = new BehaviorSubject(null);

  constructor() { }

  openDrawer(feed) {

    this.drawerOpen.next({ open: true ,feed});

  }

  postOpenDrawer(feed) {
    this.postDrawerOpen.next({ open: true,feed });

  }
  closeDrawer() {
    this.drawerOpen.next({ open: false });
  }

}
