import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  drawerOpen = new BehaviorSubject(null);

  constructor() { }

  openDrawer() {
    this.drawerOpen.next({ open: true });
  }
}
