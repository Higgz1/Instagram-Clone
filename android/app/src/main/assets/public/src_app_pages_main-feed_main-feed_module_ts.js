(self["webpackChunkinstagram_clone"] = self["webpackChunkinstagram_clone"] || []).push([["src_app_pages_main-feed_main-feed_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_main_feed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main-feed.page.html */ 7236);
/* harmony import */ var _main_feed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-feed.page.scss */ 8674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/drawer/drawer.component */ 5767);
/* harmony import */ var src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Drawer/drawer.service */ 8976);
/* harmony import */ var src_app_Services_Images_images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Images/images.service */ 9341);
/* harmony import */ var src_app_Services_Users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/Users/users.service */ 1509);
/* harmony import */ var _stories_modal_stories_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stories-modal/stories-modal.page */ 9671);











let MainFeedPage = class MainFeedPage {
    constructor(router, usersService, drawerService, imagesService, loadingController, modalController, changeDetectorRef) {
        this.router = router;
        this.usersService = usersService;
        this.drawerService = drawerService;
        this.imagesService = imagesService;
        this.loadingController = loadingController;
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
            console.log(drawerData);
            if (drawerData && drawerData.open) {
                this.drawer.openDrawer(drawerData.feed);
            }
        });
    }
    onResize() {
        setTimeout(() => this.slides.update(), 50);
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.loadData();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
                this.users = resp.results;
                this.imagesService.getImages(this.page).subscribe((resp) => {
                    this.images = resp;
                    this.combined = this.users.map((user, index) => {
                        return { user: user, picture: this.images[index] };
                    });
                });
                loading.dismiss();
            });
        });
    }
    moreData(event) {
        this.page++;
        this.usersService.getUsers(this.page).subscribe((resp) => {
            this.newUsers = resp.results;
            this.imagesService.getImages(this.page).subscribe((resp) => {
                this.newImages = resp;
                this.newCombined = this.newUsers.map((newUser, index) => {
                    return { user: newUser, picture: this.newImages[index] };
                });
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
        if (bottomPosition >= 1200) {
            this.isShown = true;
        }
        else if (bottomPosition < 1500) {
            this.isShown = false;
        }
    }
    profile(user) {
        this.router.navigate(['/profile', { user: JSON.stringify(user) }]);
    }
    storiesImage(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_Services_Users_users_service__WEBPACK_IMPORTED_MODULE_5__.UsersService },
    { type: src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_3__.DrawerService },
    { type: src_app_Services_Images_images_service__WEBPACK_IMPORTED_MODULE_4__.ImagesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef }
];
MainFeedPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, { static: false },] }],
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__.DrawerComponent,] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['slides', { static: true },] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostListener, args: ['window:resize',] }]
};
MainFeedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#stories-image {\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 1px;\n  padding-top: 8px;\n}\n\n#avatar-img {\n  border: 3px solid;\n  border-color: #77acf1;\n}\n\nion-segment {\n  z-index: 10;\n  background: white;\n}\n\n.backdrop {\n  width: 100%;\n  height: 100%;\n  background: #000000d2;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: 0.4s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade-in {\n  transition: 0.4s linear all;\n  opacity: 1;\n}\n\n.parent-grid {\n  padding: 0px;\n}\n\n.main-column {\n  padding: 0px;\n}\n\n.cards-row {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n}\n\n.stories-row {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFFRSx1QkFBQTtBQUNGIiwiZmlsZSI6Im1haW4tZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3Rvcmllcy1pbWFnZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4jYXZhdGFyLWltZyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM3N2FjZjE7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYmFja2Ryb3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwZDI7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5mYWRlIHtcbiAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXIgYWxsO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmZhZGUtaW4ge1xuICB0cmFuc2l0aW9uOiAwLjRzIGxpbmVhciBhbGw7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wYXJlbnQtZ3JpZHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubWFpbi1jb2x1bW57XG4gIHBhZGRpbmc6IDBweDtcbiAgLy8gbWF4LXdpZHRoOiAxMDAlO1xuXG59XG4uY2FyZHMtcm93e1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLnN0b3JpZXMtcm93e1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.portrait {\n  height: 100%;\n  text-align: center;\n}\n\n.image {\n  max-width: 100%;\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JpZXMtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzdG9yaWVzLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnBvcnRyYWl0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title (click)=\"ScrollToTop()\">Instagram</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"fabDisplay($event)\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\" pullMin=\"100\" pullMax=\"200\">\n    <ion-refresher-content \n      pullingIcon=\"arrow-down-outline\" \n      pullingText=\"Pull to refresh\" \n      refreshingSpinner=\"crescent\"\n      refreshingText=\"\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid class=\"parent-grid\">\n\n    <ion-row class=\"stories-row\">\n      <ion-col class=\"main-column\" size-sm=\"4\" size-md=\"4\"  size-lg=\"4\" size-xl=\"4\">\n        <ion-slides [options]=\"set\" #slides>\n          <ion-slide *ngFor=\"let item of combined\">\n            <ion-avatar id=\"stories-image\" (click)=\"storiesImage(item)\" >\n              <img id=\"avatar-img\" [src]=\"item.user.picture.thumbnail\" />\n            </ion-avatar>\n          </ion-slide> \n        </ion-slides>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class=\"cards-row\">\n      <ion-col class=\"main-column\" size-sm=\"4\" size-md=\"6\"  size-lg=\"6\" size-xl=\"12\">\n        <app-feed *ngFor=\"let feed of combined\" [feed]=\"feed\"></app-feed>\n      </ion-col>\n    </ion-row>\n\n    \n  </ion-grid>\n\n  <ion-fab *ngIf=\"isShown\" slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" >\n    <ion-fab-button (click)=\"ScrollToTop()\" size=\"small\">\n      <ion-icon name=\"chevron-up-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"moreData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> \n\n\n</ion-content>\n\n<div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"closeDrawer()\"></div>\n<app-drawer (openStateChanged)=\"toggleBackdrop($event)\"></app-drawer>\n\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar class=\"new-background-color\">\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"close()\">\n      <ion-icon slot=\"icon-only\" name=\"close\" class=\"close-icon\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content >\n  <div class=\"portrait\">\n    <img class=\"image\" [src]=\"item.picture.download_url\" />\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_main-feed_main-feed_module_ts.js.map