import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {

  @ViewChild('drawer', { read: ElementRef }) drawer: ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();

  constructor(private socialSharing: SocialSharing,) { }
  openDrawer() {
    // this.title = title;
    const drawer = this.drawer.nativeElement;
    drawer.style.transition = '.2s ease-in';
    drawer.style.transform = `translateY(-300px) `;
    this.openState.emit(true);
  }
 
  closeDrawer() {
    const drawer = this.drawer.nativeElement;
    drawer.style.transition = '.2s ease-out';
    drawer.style.transform = '';
    this.openState.emit(false);
  }

    ShareWhatsapp() {
    // this.socialSharing.shareViaWhatsApp(this.text, this.imgurl, this.link).then(() => {

    // }).catch(e => { });
  }

  // ShareFacebook() {
  //   this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.imgurl, null /* url */, 'Copia Pega!').then(() => {

  //   }).catch(e => { });
  // }

  // SendEmail() {
  //   this.socialSharing.shareViaEmail('text', 'subject', ['email@address.com']).then(() => {

  //   }).catch(e => { });
  // }

  // SendTwitter() {
  //   this.socialSharing.shareViaTwitter(this.text, this.imgurl, this.link).then(() => {

  //   }).catch(e => { });
  // }

  // SendInstagram() {
  //   this.socialSharing.shareViaInstagram(this.text, this.imgurl).then(() => {

  //   }).catch(e => { });
  // }


}
