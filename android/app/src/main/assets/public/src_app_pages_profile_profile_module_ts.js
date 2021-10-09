(self["webpackChunkinstagram_clone"] = self["webpackChunkinstagram_clone"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 9291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_Services_Images_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/Images/images.service */ 9341);







let ProfilePage = class ProfilePage {
    constructor(route, imagesService, router, loadingController) {
        this.route = route;
        this.imagesService = imagesService;
        this.router = router;
        this.loadingController = loadingController;
        this.segmentModel = "home";
        this.user = JSON.parse(this.route.snapshot.paramMap.get('user')) || 0;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getImages();
    }
    getImages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
            this.page = Math.floor((Math.random() * 100) + 1);
            if (this.page >= 90) {
                this.page = this.page - 40;
            }
            this.imagesService.getImages(this.page).subscribe((resp) => {
                this.Images = resp;
                this.posts = resp.length;
                this.followers = this.getFollowers();
                this.following = this.getFollowing();
                console.log(this.Images);
                loading.dismiss();
            });
        });
    }
    getFollowers() {
        return Math.floor((Math.random() * 100000) + 1);
    }
    getFollowing() {
        return Math.floor((Math.random() * 10000) + 1);
    }
    viewPost(id) {
        this.router.navigate(['/posts', ({ user: JSON.stringify(this.user), images: JSON.stringify(this.Images), selectedId: JSON.stringify(id) })]);
    }
    segmentChanged(ev) {
        // console.log('Segment changed', ev);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_Services_Images_images_service__WEBPACK_IMPORTED_MODULE_2__.ImagesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#avatar {\n  height: 65px;\n  width: 65px;\n}\n\n#username {\n  color: black;\n  margin-top: 5px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  font-weight: 550;\n  font-size: 14px;\n  line-height: 1;\n  padding-left: 5px;\n}\n\n#location {\n  margin-top: 5px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 13px;\n  padding-left: 5px;\n}\n\n#post-count {\n  color: black;\n  margin-top: 5px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 1;\n}\n\n#posts-p {\n  margin-left: auto;\n  padding-right: 25px;\n  text-align: center;\n}\n\n#Followers-p {\n  padding-right: 25px;\n  text-align: center;\n}\n\n#Following-p {\n  text-align: center;\n}\n\n#posts {\n  margin-top: 5px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.grid {\n  padding: 1px;\n}\n\n.column {\n  padding: 1px;\n  height: 81px;\n  width: 100%;\n  text-align: center;\n}\n\n.image {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.container {\n  width: 100%;\n  margin: auto;\n  padding: 20px;\n}\n\n.container-text {\n  position: absolute;\n  top: 400px;\n  left: 100px;\n  text-align: center;\n  color: #707c80;\n}\n\n.parent-grid {\n  padding: 1px;\n}\n\n.profile-row {\n  justify-content: center;\n}\n\n.main-column {\n  padding: 0px;\n}\n\n.img-wrapper {\n  min-height: 80px;\n  padding: 1px;\n  width: 100%;\n  display: block;\n  margin: auto;\n  text-align: center;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUtBO0VBQ0UsWUFBQTtBQUZGOztBQUlBO0VBQ0UsdUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0YsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFIRiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdmF0YXIge1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiA2NXB4O1xufVxuI3VzZXJuYW1lIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbiNsb2NhdGlvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4jcG9zdC1jb3VudCB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuI3Bvc3RzLXAge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jRm9sbG93ZXJzLXAge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNGb2xsb3dpbmctcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3Bvc3RzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLy8gcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uZ3JpZCB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmNvbHVtbiB7XG4gIHBhZGRpbmc6IDFweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5pbWFnZXtcbiAgbWF4LXdpZHRoOiAxMDAlOyBcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICAvLyBiYWNrZ3JvdW5kOiAjZjBlNjhjO1xufVxuXG4uY29udGFpbmVyLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwMHB4O1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzcwN2M4MDs7XG4gICAgLy8gbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnBhcmVudC1ncmlke1xuICBwYWRkaW5nOiAxcHg7XG59XG4ucHJvZmlsZS1yb3d7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1jb2x1bW57XG4gIHBhZGRpbmc6IDBweDtcbiAgLy8gbWF4LXdpZHRoOiAxMDAlO1xuXG59XG5cbi5pbWctd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iXX0= */");

/***/ }),

/***/ 9291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid\">\n    <ion-row class=\"profile-row\">\n      <ion-col size-sm=\"4\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n        <ion-item lines=\"none\">\n          <ion-avatar item-start id=\"avatar\">\n            <img [src]=\"user.picture.medium\" />\n          </ion-avatar>\n\n          <ion-text id=\"posts-p\">\n            <h6 id=\"post-count\">{{posts}}</h6>\n            <p id=\"posts\">posts</p>\n          </ion-text>\n          <ion-text id=\"Followers-p\">\n            <h6 id=\"post-count\">{{followers}}</h6>\n            <p id=\"posts\">Followers</p>\n          </ion-text>\n          <ion-text id=\"Following-p\">\n            <h6 id=\"post-count\">{{following}}</h6>\n            <p id=\"posts\">Following</p>\n          </ion-text>\n        </ion-item>\n\n        <ion-text>\n          <h6 id=\"username\">{{user.login.username}}</h6>\n          <p id=\"location\">{{user.location.country}}</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"profile-row\">\n      <ion-col  size-sm=\"4\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n        <ion-segment\n          scrollable\n          [(ngModel)]=\"segmentModel\"\n          (ionChange)=\"segmentChanged($event)\"\n        >\n          <ion-segment-button value=\"home\">\n            <ion-icon name=\"grid-outline\"></ion-icon>\n          </ion-segment-button>\n\n          <ion-segment-button value=\"tagged\">\n            <ion-icon name=\"file-tray-outline\"></ion-icon>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"segmentModel === 'home'\">\n      <ion-row>\n        <ion-col (click)=\"viewPost(image.id)\" class=\"img-wrapper\"  sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"4\" *ngFor=\"let image of Images\">\n          <img class=\"image\" [src]=\"image.download_url\" />\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n    <div *ngIf=\"segmentModel === 'tagged'\">\n      <ion-row>\n        <ion-col class=\"img-wrapper\"  sizeLg=\"4\" sizeMd=\"6\" sizeXs=\"12\" >\n            <img class=\"noItems-Image\" src=\"assets/flame-1266.png\" />\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map