(self["webpackChunkinstagram_clone"] = self["webpackChunkinstagram_clone"] || []).push([["default-src_app_components_shared-components_module_ts"],{

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
    }
    openDrawer() {
        this.drawerOpen.next({ open: true });
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




let DrawerComponent = class DrawerComponent {
    constructor() {
        this.openState = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_feed_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./feed.component.html */ 5885);
/* harmony import */ var _feed_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.component.scss */ 643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Drawer/drawer.service */ 8976);







let FeedComponent = class FeedComponent {
    constructor(router, drawerService, gestureCtrl) {
        this.router = router;
        this.drawerService = drawerService;
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
        // const imageArray = this.Images.toArray();
        // console.log(imageArray)
        // this.doubleTap();
    }
    ngOnInit() {
        this.likes = this.getLikes();
    }
    profile(user) {
        console.log(user);
        this.router.navigate(['/profile', { user: JSON.stringify(user) }]);
    }
    openInfo() {
        this.drawerService.openDrawer();
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
};
FeedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_2__.DrawerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.GestureController }
];
FeedComponent.propDecorators = {
    feed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    Images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['Img', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
FeedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".drawer {\n  position: absolute;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  width: 100%;\n  border-radius: 4px;\n  bottom: -300px;\n  height: 300px;\n  z-index: 11;\n  background: #2b2b2c;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJkcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvdHRvbTogLTMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgYmFja2dyb3VuZDogIzJiMmIyYztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".social-cards ion-col {\n  padding: 0;\n}\n\n.username {\n  color: black;\n  margin-top: 5px;\n  margin-left: 8px;\n  margin-bottom: 5px;\n  font-weight: 550;\n  font-size: 15px;\n  line-height: 1;\n}\n\n.location {\n  margin-top: 5px;\n  margin-left: 8px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 13px;\n}\n\n#avatar-img {\n  border: 3px solid;\n  border-color: #77acf1;\n}\n\nion-card {\n  margin: 10px 0px 10px;\n  border-radius: 0px;\n  box-shadow: rgba(0, 0, 0, 0) 0px 1px 0px -1px, rgba(0, 0, 0, 0) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 1px 0px 0px;\n}\n\n.card-content {\n  padding: 0px 10px 0px 10px;\n}\n\n.portrait {\n  height: 240px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.likes {\n  font-weight: 550;\n  color: black;\n}\n\n#likes-count {\n  font-weight: 550;\n  color: black;\n}\n\n.social-icons {\n  width: 100%;\n  border: 0px;\n}\n\n.item-native {\n  padding: 0px;\n}\n\n.icons {\n  padding-right: 20px;\n}\n\n#comment-username {\n  font-weight: 550;\n  color: black;\n}\n\n.comment {\n  font-size: 400;\n}\n\n.activated {\n  fill: red;\n}\n\n.notActivated {\n  fill: #F9F9F9;\n}\n\n.double-tap {\n  font-size: 80px;\n  position: absolute;\n  top: 130px;\n  left: 140px;\n  fill: #F9F9F9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlIQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQURBO0VBRUUsU0FBQTtBQUdGOztBQUFBO0VBRUUsYUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUYiLCJmaWxlIjoiZmVlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtY2FyZHMgaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4udXNlcm5hbWUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4jYXZhdGFyLWltZyB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzdhY2YxO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAwJSkgMHB4IDFweCAwcHggLTFweCwgcmdiKDAgMCAwIC8gMCUpIDBweCAxcHggMXB4IDBweCxcclxuICAgIHJnYigwIDAgMCAvIDAlKSAwcHggMXB4IDBweCAwcHg7XHJcbn1cclxuLmNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5wb3J0cmFpdCB7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxpa2VzIHtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2xpa2VzLWNvdW50IHtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi5pdGVtLW5hdGl2ZSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5pY29ucyB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuI2NvbW1lbnQtdXNlcm5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jb21tZW50IHtcclxuICBmb250LXNpemU6IDQwMDtcclxufVxyXG5cclxuLmFjdGl2YXRlZCB7XHJcbiAgLy8gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGZpbGw6IHJlZDtcclxufVxyXG5cclxuLm5vdEFjdGl2YXRlZCB7XHJcblxyXG4gIGZpbGw6ICNGOUY5Rjk7XHJcbn1cclxuXHJcbi5kb3VibGUtdGFwe1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMzBweDtcclxuICBsZWZ0OiAxNDBweDtcclxuICBmaWxsOiAjRjlGOUY5O1xyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"drawer ion-padding\" #drawer>\n \n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"10\">\n      <h2>Share to:</h2>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-right\">\n      <ion-button fill=\"clear\" (click)=\"closeDrawer()\" color=\"medium\" size=\"large\">\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-button>\n    </ion-col>\n \n    <ion-col size=\"2\">\n      <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      Episodes And info\n    </ion-col>\n \n    <ion-col size=\"2\">\n      <ion-icon name=\"download-outline\" size=\"large\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      Download Episode\n    </ion-col>\n \n    <ion-col size=\"2\">\n      <ion-icon name=\"thumbs-up-outline\" size=\"large\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      Like\n    </ion-col>\n \n    <ion-col size=\"2\">\n      <ion-icon name=\"thumbs-down-outline\" size=\"large\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      Not For Me\n    </ion-col>\n \n  </ion-row>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card >\r\n  <ion-item  *ngIf=\"feed\" lines=\"none\">\r\n    <ion-avatar item-start (click)=\"profile(feed.user)\">\r\n      <img [src]=\"feed.user.picture.thumbnail\" />\r\n    </ion-avatar>\r\n    <ion-text (click)=\"profile(feed.user)\">\r\n      <h6 class=\"username\">{{feed.user.login.username}}</h6>\r\n      <p class=\"location\">{{feed.user.location.country}}</p>\r\n    </ion-text>\r\n    <ion-icon (click)=\"openInfo()\" slot=\"end\" name=\"ellipsis-vertical-sharp\" ></ion-icon>\r\n  </ion-item>\r\n\r\n  <ion-item  *ngIf=\"post\" lines=\"none\">\r\n    <ion-avatar item-start >\r\n      <img [src]=\"user.picture.thumbnail\" />\r\n    </ion-avatar>\r\n    <ion-text >\r\n      <h6 class=\"username\">{{user.login.username}}</h6>\r\n      <p class=\"location\">{{user.location.country}}</p>\r\n    </ion-text>\r\n    <ion-icon (click)=\"test()\" slot=\"end\" name=\"ellipsis-vertical-sharp\" ></ion-icon>\r\n  </ion-item>\r\n\r\n  <div  #Img *ngIf=\"feed\" (tap)=\"tapEvent()\" class=\"portrait\">\r\n    <img  class=\"image\" [src]=\"feed.picture.download_url\" />\r\n  </div>\r\n\r\n  <div #Img  *ngIf=\"post\"  class=\"portrait\">\r\n    <img  class=\"image\" [src]=\"post.download_url\" />\r\n  </div>\r\n\r\n  <!-- <div *ngIf=\"show\" >\r\n    <ion-icon class=\"double-tap\"  name=\"heart\" ></ion-icon>\r\n  </div> -->\r\n\r\n    <ion-item lines=\"none\" class=\"social-icons\">\r\n      <ion-icon class=\"icons\" [name]=\"toShowIcon\" [ngClass]=\"isLiked ? 'activated ' : 'notActivated '\" (click)=\"toggleLike()\"></ion-icon>\r\n      <ion-icon class=\"icons\" (click)=\"test2()\"  name=\"chatbubble-outline\"></ion-icon>\r\n      <ion-icon class=\"icons\" (click)=\"test3()\"  name=\"paper-plane-outline\"></ion-icon>\r\n      <ion-icon (click)=\"toggleBookmark()\" [name]=\"toShowBookmark\" slot=\"end\" ></ion-icon>\r\n\r\n    </ion-item>\r\n\r\n  <ion-card-content  *ngIf=\"feed\" class=\"card-content\">\r\n    <div  class=\"likes\" ><span>{{likes}}</span> Likes</div>\r\n    <p class=\"comment\">\r\n      <span id=\"comment-username\">{{feed.user.login.username}}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  labore et dolore magna aliqua.\r\n    </p>\r\n\r\n  </ion-card-content>\r\n\r\n  <ion-card-content  *ngIf=\"post\" class=\"card-content\">\r\n    <div  class=\"likes\" ><span>{{likes}}</span> Likes</div>\r\n    <p class=\"comment\">\r\n      <span id=\"comment-username\">{{user.login.username}}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  labore et dolore magna aliqua.\r\n    </p>\r\n\r\n  </ion-card-content>\r\n\r\n</ion-card>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_shared-components_module_ts.js.map