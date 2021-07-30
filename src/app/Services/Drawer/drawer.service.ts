import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  drawerOpen = new BehaviorSubject(null);
  drawerClose = new BehaviorSubject(!null);

  postDrawerOpen = new BehaviorSubject(null);
  constructor() { }

  openDrawer() {

    this.drawerOpen.next({ open: true });

  }

  postOpenDrawer() {
    this.postDrawerOpen.next({ open: true });

  }
  closeDrawer() {
    this.drawerOpen.next({ open: false });
  }

}
