(self["webpackChunkinstagram_clone"] = self["webpackChunkinstagram_clone"] || []).push([["src_app_pages_main-feed_main-feed_module_ts"],{

/***/ 1509:
/*!*************************************************!*\
  !*** ./src/app/Services/Users/users.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    getUsers(page) {
        return this.http.get('https://randomuser.me/api/?page=' + page + '&results=10');
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ 5302:
/*!*************************************************************!*\
  !*** ./src/app/pages/main-feed/main-feed-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainFeedPageRoutingModule": () => (/* binding */ MainFeedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _main_feed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-feed.page */ 6358);




const routes = [
    {
        path: '',
        component: _main_feed_page__WEBPACK_IMPORTED_MODULE_0__.MainFeedPage
    }
];
let MainFeedPageRoutingModule = class MainFeedPageRoutingModule {
};
MainFeedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainFeedPageRoutingModule);



/***/ }),

/***/ 3272:
/*!*****************************************************!*\
  !*** ./src/app/pages/main-feed/main-feed.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainFeedPageModule": () => (/* binding */ MainFeedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _main_feed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-feed-routing.module */ 5302);
/* harmony import */ var _main_feed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-feed.page */ 6358);
/* harmony import */ var src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared-components.module */ 6175);








let MainFeedPageModule = class MainFeedPageModule {
};
MainFeedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _main_feed_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainFeedPageRoutingModule,
            src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [_main_feed_page__WEBPACK_IMPORTED_MODULE_1__.MainFeedPage]
    })
], MainFeedPageModule);



/***/ }),

/***/ 6358:
/*!***************************************************!*\
  !*** ./src/app/pages/main-feed/main-feed.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainFeedPage": () => (/* binding */ MainFeedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_main_feed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main-feed.page.html */ 7236);
/* harmony import */ var _main_feed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-feed.page.scss */ 8674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/drawer/drawer.component */ 5767);
/* harmony import */ var src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Drawer/drawer.service */ 8976);
/* harmony import */ var src_app_Services_Images_images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Images/images.service */ 9341);
/* harmony import */ var src_app_Services_Users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Users/users.service */ 1509);
/* harmony import */ var _stories_modal_stories_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stories-modal/stories-modal.page */ 9671);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 4276);












let MainFeedPage = class MainFeedPage {
    constructor(router, usersService, drawerService, imagesService, loadingController, socialSharing, modalController, changeDetectorRef) {
        this.router = router;
        this.usersService = usersService;
        this.drawerService = drawerService;
        this.imagesService = imagesService;
        this.loadingController = loadingController;
        this.socialSharing = socialSharing;
        this.modalController = modalController;
        this.changeDetectorRef = changeDetectorRef;
        this.set = {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesOffsetBefore: 0,
        };
        this.isShown = false;
        this.backdropVisible = false;
        this.drawerService.drawerOpen.subscribe(drawerData => {
            if (drawerData && drawerData.open) {
                this.drawer.openDrawer();
            }
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.loadData();
    }
    share() {
        this.socialSharing.shareViaTwitter('hi');
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.page = Math.floor((Math.random() * 100) + 1);
            if (this.page >= 90) {
                this.page = this.page - 40;
            }
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            this.usersService.getUsers(this.page).subscribe((resp) => {
                // console.log('Users', resp.results);
                this.users = resp.results;
                this.imagesService.getImages(this.page).subscribe((resp) => {
                    // console.log('Images', resp);
                    this.images = resp;
                    this.combined = this.users.map((user, index) => {
                        return { user: user, picture: this.images[index] };
                    });
                    // console.log(this.combined);
                });
                loading.dismiss();
            });
        });
    }
    moreData(event) {
        this.page++;
        // console.log('page increments', this.page);
        this.usersService.getUsers(this.page).subscribe((resp) => {
            this.newUsers = resp.results;
            this.imagesService.getImages(this.page).subscribe((resp) => {
                this.newImages = resp;
                this.newCombined = this.newUsers.map((newUser, index) => {
                    return { user: newUser, picture: this.newImages[index] };
                });
                // console.log('new combined', this.newCombined);
                this.combined.push(...this.newCombined);
            });
            event.target.complete();
        });
    }
    refresh(event) {
        this.loadData().then(() => {
            event.target.complete();
        });
    }
    ScrollToTop() {
        this.content.scrollToTop(1500);
    }
    fabDisplay(event) {
        const screenSize = event.target.clientHeight;
        let bottomPosition = screenSize + event.detail.scrollTop;
        if (bottomPosition >= 4200) {
            this.isShown = true;
        }
        else if (bottomPosition < 2000) {
            this.isShown = false;
        }
    }
    profile(user) {
        // console.log(user);
        this.router.navigate(['/profile', { user: JSON.stringify(user) }]);
    }
    storiesImage(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _stories_modal_stories_modal_page__WEBPACK_IMPORTED_MODULE_6__.StoriesModalPage,
                componentProps: {
                    'item': item
                }
            });
            return yield modal.present();
        });
    }
    toggleBackdrop(isVisible) {
        this.backdropVisible = isVisible;
        this.changeDetectorRef.detectChanges();
    }
    closeDrawer() {
        this.drawer.closeDrawer();
    }
};
MainFeedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_Services_Users_users_service__WEBPACK_IMPORTED_MODULE_5__.UsersService },
    { type: src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_3__.DrawerService },
    { type: src_app_Services_Images_images_service__WEBPACK_IMPORTED_MODULE_4__.ImagesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__.SocialSharing },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef }
];
MainFeedPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, { static: false },] }],
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__.DrawerComponent,] }]
};
MainFeedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-main-feed',
        template: _raw_loader_main_feed_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_feed_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainFeedPage);



/***/ }),

/***/ 9671:
/*!***********************************************************!*\
  !*** ./src/app/pages/stories-modal/stories-modal.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoriesModalPage": () => (/* binding */ StoriesModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_stories_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stories-modal.page.html */ 7371);
/* harmony import */ var _stories_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stories-modal.page.scss */ 2427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let StoriesModalPage = class StoriesModalPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    close() {
        this.modalController.dismiss();
    }
};
StoriesModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
StoriesModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-stories-modal',
        template: _raw_loader_stories_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stories_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoriesModalPage);



/***/ }),

/***/ 8674:
/*!*****************************************************!*\
  !*** ./src/app/pages/main-feed/main-feed.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#stories-image {\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 1px;\n  padding-top: 8px;\n}\n\n#avatar-img {\n  border: 3px solid;\n  border-color: #77acf1;\n}\n\nion-segment {\n  z-index: 10;\n  background: white;\n}\n\n.backdrop {\n  width: 100%;\n  height: 100%;\n  background: #000000d2;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: 0.4s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade-in {\n  transition: 0.4s linear all;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUFFRiIsImZpbGUiOiJtYWluLWZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0b3JpZXMtaW1hZ2Uge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuI2F2YXRhci1pbWcge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzc3YWNmMTtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwZDI7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZmFkZSB7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXIgYWxsO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5mYWRlLWluIHtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGxpbmVhciBhbGw7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 2427:
/*!*************************************************************!*\
  !*** ./src/app/pages/stories-modal/stories-modal.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.portrait {\n  height: 100%;\n  text-align: center;\n}\n\n.image {\n  max-width: 100%;\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JpZXMtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzdG9yaWVzLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3J0cmFpdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 7236:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-feed/main-feed.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title (click)=\"ScrollToTop()\">Instagram</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"fabDisplay($event)\">\r\n\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\" pullMin=\"100\" pullMax=\"200\">\r\n    <ion-refresher-content \r\n      pullingIcon=\"arrow-down-outline\" \r\n      pullingText=\"Pull to refresh\" \r\n      refreshingSpinner=\"crescent\"\r\n      refreshingText=\"\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-button (click)=\"share()\">\r\n    test\r\n  </ion-button>\r\n\r\n  <ion-slides [options]=\"set\">\r\n    <ion-slide *ngFor=\"let item of combined\">\r\n      <ion-avatar id=\"stories-image\" (click)=\"storiesImage(item)\" >\r\n        <img id=\"avatar-img\" [src]=\"item.user.picture.thumbnail\" />\r\n      </ion-avatar>\r\n    </ion-slide> \r\n  </ion-slides>\r\n\r\n  <app-feed *ngFor=\"let feed of combined\" [feed]=\"feed\"></app-feed>\r\n\r\n\r\n  <ion-fab (click)=\"ScrollToTop()\" *ngIf=\"isShown\" slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" >\r\n    <ion-fab-button size=\"small\">\r\n      <ion-icon name=\"chevron-up-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"moreData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n<div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"closeDrawer()\"></div>\r\n<app-drawer (openStateChanged)=\"toggleBackdrop($event)\"></app-drawer>\r\n");

/***/ }),

/***/ 7371:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stories-modal/stories-modal.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"new-background-color\">\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button (click)=\"close()\">\r\n      <ion-icon slot=\"icon-only\" name=\"close\" class=\"close-icon\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content >\r\n  <div class=\"portrait\">\r\n    <img class=\"image\" [src]=\"item.picture.download_url\" />\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_main-feed_main-feed_module_ts.js.map