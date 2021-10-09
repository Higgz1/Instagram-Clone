(self["webpackChunkinstagram_clone"] = self["webpackChunkinstagram_clone"] || []).push([["default-src_app_components_shared-components_module_ts"],{

/***/ 732:
/*!*************************************************************!*\
  !*** ./src/app/Pages/comments-modal/comments-modal.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsModalPage": () => (/* binding */ CommentsModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_comments_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comments-modal.page.html */ 3611);
/* harmony import */ var _comments_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-modal.page.scss */ 9017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);






let CommentsModalPage = class CommentsModalPage {
    constructor(modalController, formBuilder) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.commentForm = this.formBuilder.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(100)]],
        });
    }
    get comment() {
        return this.commentForm.get("comment");
    }
    ngOnInit() {
        console.log(this.comment);
    }
    close() {
        this.modalController.dismiss();
    }
    submit() {
        console.log(this.commentForm.value);
    }
};
CommentsModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
CommentsModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-comments-modal',
        template: _raw_loader_comments_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comments_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommentsModalPage);



/***/ }),

/***/ 8976:
/*!***************************************************!*\
  !*** ./src/app/Services/Drawer/drawer.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerService": () => (/* binding */ DrawerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);



let DrawerService = class DrawerService {
    constructor() {
        this.drawerOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.postDrawerOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
    openDrawer(feed) {
        this.drawerOpen.next({ open: true, feed });
    }
    postOpenDrawer(feed) {
        this.postDrawerOpen.next({ open: true, feed });
    }
    closeDrawer() {
        this.drawerOpen.next({ open: false });
    }
};
DrawerService.ctorParameters = () => [];
DrawerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DrawerService);



/***/ }),

/***/ 5767:
/*!*******************************************************!*\
  !*** ./src/app/components/drawer/drawer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerComponent": () => (/* binding */ DrawerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_drawer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./drawer.component.html */ 7630);
/* harmony import */ var _drawer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.component.scss */ 4880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
let DrawerComponent = class DrawerComponent {
    constructor() {
        this.openState = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    }
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
        // this.socialSharing.shareViaWhatsApp(this.text, this.feed.picture.download_url,this.feed.picture.url).then(() => {
        // }).catch(e => { });
    }
    ShareFacebook() {
        // this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.feed.picture.download_url, null /* url */, 'Copia Pega!').then(() => {
        // }).catch(e => { });
    }
    SendEmail() {
        // this.socialSharing.shareViaEmail('text', 'subject', ['email@address.com']).then(() => {
        // }).catch(e => { });
    }
    SendTwitter() {
        // this.socialSharing.shareViaTwitter(this.text, this.feed.picture.download_url, this.feed.picture.url).then(() => {
        // }).catch(e => { });
    }
    SendInstagram() {
        // this.socialSharing.shareViaInstagram(this.text, this.feed.picture.download_url).then(() => {
        // }).catch(e => { });
    }
    SendTikTok() {
    }
};
DrawerComponent.ctorParameters = () => [];
DrawerComponent.propDecorators = {
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['drawer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },] }],
    openState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output, args: ['openStateChanged',] }]
};
DrawerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-drawer',
        template: _raw_loader_drawer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_drawer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DrawerComponent);



/***/ }),

/***/ 830:
/*!***************************************************!*\
  !*** ./src/app/components/feed/feed.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedComponent": () => (/* binding */ FeedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_feed_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./feed.component.html */ 5885);
/* harmony import */ var _feed_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.component.scss */ 643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_Pages_comments_modal_comments_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Pages/comments-modal/comments-modal.page */ 732);
/* harmony import */ var src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Drawer/drawer.service */ 8976);








// import { DrawerService } from 'src/app/Services/Drawer/drawer.service';
let FeedComponent = class FeedComponent {
    constructor(router, drawerService, modalController, gestureCtrl) {
        this.router = router;
        this.drawerService = drawerService;
        this.modalController = modalController;
        this.gestureCtrl = gestureCtrl;
        this.lastOnStart = 0;
        this.DOUBLE_CLICK_THRESHOLD = 500;
        this.isLiked = false;
        this.count = 0;
        this.show = false;
        this.toShowIcon = 'heart-outline';
        this.bookmarked = false;
        this.toShowBookmark = 'bookmark-outline';
    }
    ;
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.likes = this.getLikes();
    }
    profile(user) {
        // console.log(user)
        this.router.navigate(['/profile', { user: JSON.stringify(user) }]);
    }
    comments(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_Pages_comments_modal_comments_modal_page__WEBPACK_IMPORTED_MODULE_2__.CommentsModalPage,
                componentProps: {
                    'user': user
                }
            });
            return yield modal.present();
        });
    }
    openInfo(feed) {
        console.log(feed.picture);
        this.drawerService.openDrawer(feed);
    }
    postOpenInfo(post) {
        this.drawerService.postOpenDrawer(post);
    }
    getLikes() {
        return Math.floor((Math.random() * 100) + 1);
    }
    doubleTap() {
        const gesture = this.gestureCtrl.create({
            el: this.Images.nativeElement,
            gestureName: 'double click',
            threshold: 0,
            onStart: () => {
                const now = Date.now();
                if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
                    // console.log('lift off');
                    this.isLiked = true;
                    this.showImage();
                    this.lastOnStart = 0;
                }
                else {
                    this.lastOnStart = now;
                }
            }
        });
        gesture.enable();
    }
    showImage() {
        setTimeout(() => {
            this.show = true;
        }, 3000);
    }
    toggleLike() {
        this.isLiked = !this.isLiked;
        if (this.isLiked == true) {
            this.toShowIcon = 'heart';
        }
        else {
            this.toShowIcon = 'heart-outline';
        }
    }
    toggleBookmark() {
        this.bookmarked = !this.bookmarked;
        if (this.bookmarked == true) {
            this.toShowBookmark = 'bookmark';
        }
        else {
            this.toShowBookmark = 'bookmark-outline';
        }
    }
    message() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/messages']);
        });
    }
};
FeedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_3__.DrawerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.GestureController }
];
FeedComponent.propDecorators = {
    feed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    Images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['Img', { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef },] }]
};
FeedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-feed',
        template: _raw_loader_feed_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_feed_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FeedComponent);



/***/ }),

/***/ 6175:
/*!********************************************************!*\
  !*** ./src/app/components/shared-components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponentsModule": () => (/* binding */ SharedComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed/feed.component */ 830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer/drawer.component */ 5767);






let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_0__.FeedComponent, _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__.DrawerComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule
        ],
        exports: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_0__.FeedComponent, _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_1__.DrawerComponent]
    })
], SharedComponentsModule);



/***/ }),

/***/ 9017:
/*!***************************************************************!*\
  !*** ./src/app/Pages/comments-modal/comments-modal.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("icon-photo {\n  border-radius: 50% !important;\n  margin-top: 10px;\n  height: 3em !important;\n  width: 3em !important;\n}\n\n#avatar {\n  width: 40px;\n  height: 40px;\n  margin-bottom: 20px;\n}\n\n.avatar-col {\n  padding: 0;\n}\n\n#avatar-footer {\n  width: 30px;\n  height: 30px;\n}\n\n#example-text {\n  font-size: 14px;\n}\n\n.user-comments {\n  padding-bottom: 10px;\n}\n\n.comment-area {\n  border: 1px solid rgba(160, 160, 160, 0.453);\n  margin: 0px;\n  padding: 0px;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.comment-button {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  height: 100%;\n}\n\n.comment-section {\n  padding: 0;\n}\n\n.comment-input {\n  padding: 0;\n}\n\nitem-inner {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNBO0VBQ0Usb0JBQUE7QUFFRjs7QUFDQTtFQUNFLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7QUFFRiIsImZpbGUiOiJjb21tZW50cy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpY29uLXBob3RvIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogM2VtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzZW0gIWltcG9ydGFudDtcbn1cbiNhdmF0YXJ7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hdmF0YXItY29se1xuICBwYWRkaW5nOiAwO1xufVxuI2F2YXRhci1mb290ZXJ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICBcbn1cblxuI2V4YW1wbGUtdGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51c2VyLWNvbW1lbnRzIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5jb21tZW50LWFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNDUzKTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbW1lbnQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbW1lbnQtc2VjdGlvbntcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbW1lbnQtaW5wdXR7XG4gIHBhZGRpbmc6IDA7XG59XG5cbml0ZW0taW5uZXJ7XG4gIHBhZGRpbmc6IDA7XG59Il19 */");

/***/ }),

/***/ 4880:
/*!*********************************************************!*\
  !*** ./src/app/components/drawer/drawer.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".drawer {\n  position: absolute;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  width: 100%;\n  border-radius: 4px;\n  bottom: -300px;\n  height: 200px;\n  z-index: 11;\n  background: #2b2b2c;\n  color: #fff;\n}\n\n.button {\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvdHRvbTogLTMwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB6LWluZGV4OiAxMTtcbiAgYmFja2dyb3VuZDogIzJiMmIyYztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idXR0b257XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 643:
/*!*****************************************************!*\
  !*** ./src/app/components/feed/feed.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".social-cards ion-col {\n  padding: 0;\n}\n\n.username {\n  color: black;\n  margin-top: 5px;\n  margin-left: 8px;\n  margin-bottom: 5px;\n  font-weight: 550;\n  font-size: 15px;\n  line-height: 1;\n}\n\n.location {\n  margin-top: 5px;\n  margin-left: 8px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 13px;\n}\n\n#avatar-img {\n  border: 3px solid;\n  border-color: #77acf1;\n}\n\nion-card {\n  margin: 10px 0px 10px;\n  border-radius: 0px;\n  box-shadow: rgba(0, 0, 0, 0) 0px 1px 0px -1px, rgba(0, 0, 0, 0) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 1px 0px 0px;\n}\n\n.card-content {\n  padding: 0px 10px 0px 10px;\n}\n\n.portrait {\n  height: 240px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.likes {\n  font-weight: 550;\n  color: black;\n}\n\n#likes-count {\n  font-weight: 550;\n  color: black;\n}\n\n.social-icons {\n  width: 100%;\n  border: 0px;\n}\n\n.item-native {\n  padding: 0px;\n}\n\n.icons {\n  padding-right: 20px;\n}\n\n#comment-username {\n  font-weight: 550;\n  color: black;\n}\n\n.comment {\n  font-size: 400;\n}\n\n.activated {\n  fill: red;\n}\n\n.notActivated {\n  fill: #F9F9F9;\n}\n\n.double-tap {\n  font-size: 80px;\n  position: absolute;\n  top: 130px;\n  left: 140px;\n  fill: #F9F9F9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlIQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQURBO0VBRUUsU0FBQTtBQUdGOztBQUFBO0VBRUUsYUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUYiLCJmaWxlIjoiZmVlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtY2FyZHMgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4udXNlcm5hbWUge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubG9jYXRpb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jYXZhdGFyLWltZyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM3N2FjZjE7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDAlKSAwcHggMXB4IDBweCAtMXB4LCByZ2IoMCAwIDAgLyAwJSkgMHB4IDFweCAxcHggMHB4LFxuICAgIHJnYigwIDAgMCAvIDAlKSAwcHggMXB4IDBweCAwcHg7XG59XG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5wb3J0cmFpdCB7XG4gIGhlaWdodDogMjQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGlrZXMge1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNsaWtlcy1jb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDBweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmljb25zIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuI2NvbW1lbnQtdXNlcm5hbWUge1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogYmxhY2s7XG59XG4uY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogNDAwO1xufVxuXG4uYWN0aXZhdGVkIHtcbiAgLy8gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBmaWxsOiByZWQ7XG59XG5cbi5ub3RBY3RpdmF0ZWQge1xuXG4gIGZpbGw6ICNGOUY5Rjk7XG59XG5cbi5kb3VibGUtdGFwe1xuICBmb250LXNpemU6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMzBweDtcbiAgbGVmdDogMTQwcHg7XG4gIGZpbGw6ICNGOUY5Rjk7XG59XG4iXX0= */");

/***/ }),

/***/ 3611:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/comments-modal/comments-modal.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"new-background-color\">\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"close()\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-title>Comments</ion-title>\n</ion-toolbar>\n\n<ion-content>\n  <ion-grid>\n    <!-- first comment grid -->\n\n    <ion-row class=\"post-content\">\n      <ion-item lines=\"none\">\n        <ion-col size=\"2\">\n          <ion-avatar item-start id=\"avatar\">\n            <img [src]=\"user.picture.thumbnail\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-text>\n            <p id=\"example-text\">\n              <strong>{{user.login.username}}</strong> Zoned Out 💥,Lorem ipsum\n              dolor sit amet, consectetur adipiscing elit, labore et dolore\n              magna aliqua.\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-item>\n    </ion-row>\n\n    <!-- this rows will represent sample comments -->\n\n    <!-- <ion-row class=\"user-comments\">\n      <ion-col col-2>\n        <ion-avatar item-start>\n          <img\n            class=\"icon-photo\"\n            src=\"https://api.adorable.io/avatars/100/broda_shagi@adorable.png\"\n          />\n        </ion-avatar>\n      </ion-col>\n      <ion-col col-10>\n        <div>\n         \n          <p>\n            <strong>broda_shagi</strong> Better make sure you write tests 😏\n          </p>\n        </div>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <!-- add the input field fixed to the bottom of the screen -->\n  <ion-grid class=\"comment-section\">\n    <ion-row class=\"post-content\">\n      <ion-item lines=\"none\">\n        <ion-col size=\"2\" class=\"avatar-col\">\n          <ion-avatar item-start id=\"avatar-footer\">\n            <img [src]=\"user.picture.thumbnail\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"8\" class=\"comment-input\">\n          <form [formGroup]=\"commentForm\" (ngSubmit)=\"submit()\" novalidate>\n            <ion-item>\n              <ion-input formControlName=\"comment\" placeholder=\"comment as {{user.login.username}}\"  ></ion-input>\n            </ion-item>\n          </form>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button\n            fill=\"clear\"\n            type=\"submit\"\n          >\n            <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\"></ion-icon>\n          </ion-button>\n          \n        </ion-col>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ 7630:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/drawer/drawer.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"drawer ion-padding\" #drawer>\n \n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\">\n      <h2>Share to:</h2>\n    </ion-col>\n\n \n\n    <ion-col size=\"2\">\n        <ion-button color=\"warning\" (click)=\"SendEmail()\"><ion-icon name=\"mail-outline\"></ion-icon></ion-button>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button color=\"primary\" (click)=\"ShareFacebook()\" ><ion-icon name=\"logo-facebook\"></ion-icon></ion-button>\n    </ion-col>\n    <ion-col size=\"2\">\n        <ion-button color=\"success\" (click)=\"ShareWhatsapp()\"><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-button>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button  color=\"secondary\" (click)=\"SendTwitter()\"><ion-icon name=\"logo-twitter\"></ion-icon></ion-button>\n    </ion-col>   \n    <ion-col size=\"2\">\n      <ion-button color=\"tertiary\" (click)=\"SendInstagram()\"><ion-icon name=\"logo-instagram\"></ion-icon></ion-button>\n    </ion-col>   \n    <ion-col size=\"2\">\n      <ion-button color=\"tertiary\" (click)=\"SendTikTok()\"><ion-icon name=\"logo-tiktok\"></ion-icon></ion-button>\n    </ion-col> \n \n  </ion-row>\n</div>");

/***/ }),

/***/ 5885:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/feed/feed.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card >\n  <ion-item  *ngIf=\"feed\" lines=\"none\">\n    <ion-avatar item-start (click)=\"profile(feed.user)\">\n      <img [src]=\"feed.user.picture.thumbnail\" />\n    </ion-avatar>\n    <ion-text (click)=\"profile(feed.user)\">\n      <h6 class=\"username\">{{feed.user.login.username}}</h6>\n      <p class=\"location\">{{feed.user.location.country}}</p>\n    </ion-text>\n    <ion-icon (click)=\"openInfo(feed)\" slot=\"end\" name=\"ellipsis-vertical-sharp\" ></ion-icon>\n  </ion-item>\n\n  <ion-item  *ngIf=\"post\" lines=\"none\">\n    <ion-avatar item-start >\n      <img [src]=\"user.picture.thumbnail\" />\n    </ion-avatar>\n    <ion-text >\n      <h6 class=\"username\">{{user.login.username}}</h6>\n      <p class=\"location\">{{user.location.country}}</p>\n    </ion-text>\n    <ion-icon (click)=\"postOpenInfo(post)\" slot=\"end\" name=\"ellipsis-vertical-sharp\" ></ion-icon>\n  </ion-item>\n\n  <div  #Img *ngIf=\"feed\" (tap)=\"tapEvent()\" class=\"portrait\">\n    <img  class=\"image\" [src]=\"feed.picture.download_url\" />\n  </div>\n\n  <div #Img  *ngIf=\"post\"  class=\"portrait\">\n    <img  class=\"image\" [src]=\"post.download_url\" />\n  </div>\n\n  <!-- <div *ngIf=\"show\" >\n    <ion-icon class=\"double-tap\"  name=\"heart\" ></ion-icon>\n  </div> -->\n\n    <ion-item  *ngIf=\"post\" lines=\"none\" class=\"social-icons\">\n      <ion-icon class=\"icons\" [name]=\"toShowIcon\" [ngClass]=\"isLiked ? 'activated ' : 'notActivated '\" (click)=\"toggleLike()\"></ion-icon>\n      <ion-icon class=\"icons\" (click)=\"comments(user)\"  name=\"chatbubble-outline\"></ion-icon>\n      <ion-icon class=\"icons\" (click)=\"message()\"  name=\"paper-plane-outline\"></ion-icon>\n      <ion-icon (click)=\"toggleBookmark()\" [name]=\"toShowBookmark\" slot=\"end\" ></ion-icon>\n\n    </ion-item>\n\n    <ion-item  *ngIf=\"feed\" lines=\"none\" class=\"social-icons\">\n      <ion-icon class=\"icons\" [name]=\"toShowIcon\" [ngClass]=\"isLiked ? 'activated ' : 'notActivated '\" (click)=\"toggleLike()\"></ion-icon>\n      <ion-icon class=\"icons\" (click)=\"comments(feed.user)\"  name=\"chatbubble-outline\"></ion-icon>\n      <ion-icon class=\"icons\" (click)=\"message()\"  name=\"paper-plane-outline\"></ion-icon>\n      <ion-icon (click)=\"toggleBookmark()\" [name]=\"toShowBookmark\" slot=\"end\" ></ion-icon>\n\n    </ion-item>\n\n  <ion-card-content  *ngIf=\"feed\" class=\"card-content\">\n    <div  class=\"likes\" ><span>{{likes}}</span> Likes</div>\n    <p class=\"comment\">\n      <span id=\"comment-username\">{{feed.user.login.username}}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  labore et dolore magna aliqua.\n    </p>\n\n  </ion-card-content>\n\n  <ion-card-content  *ngIf=\"post\" class=\"card-content\">\n    <div  class=\"likes\" ><span>{{likes}}</span> Likes</div>\n    <p class=\"comment\">\n      <span id=\"comment-username\">{{user.login.username}}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  labore et dolore magna aliqua.\n    </p>\n\n  </ion-card-content>\n\n</ion-card>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_shared-components_module_ts.js.map