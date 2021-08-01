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
  feed: any;
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor(private socialSharing: SocialSharing,) { }
  openDrawer(feed) {
    this.feed = feed;
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
    this.socialSharing.shareViaWhatsApp(this.text, this.feed.picture.download_url,this.feed.picture.url).then(() => {

    }).catch(e => { });
  }

  ShareFacebook() {
    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.feed.picture.download_url, null /* url */, 'Copia Pega!').then(() => {

    }).catch(e => { });
  }

  SendEmail() {
    this.socialSharing.shareViaEmail('text', 'subject', ['email@address.com']).then(() => {

    }).catch(e => { });
  }

  SendTwitter() {
    this.socialSharing.shareViaTwitter(this.text, this.feed.picture.download_url, this.feed.picture.url).then(() => {

    }).catch(e => { });
  }

  SendInstagram() {
    this.socialSharing.shareViaInstagram(this.text, this.feed.picture.download_url).then(() => {

    }).catch(e => { });
  }

  SendTikTok(){
    
  }


}
