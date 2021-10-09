(self["webpackChunkinstagram_clone"] = self["webpackChunkinstagram_clone"] || []).push([["src_app_Pages_posts_posts_module_ts"],{

/***/ 634:
/*!*****************************************************!*\
  !*** ./src/app/Pages/posts/posts-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPageRoutingModule": () => (/* binding */ PostsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.page */ 3853);




const routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_0__.PostsPage
    }
];
let PostsPageRoutingModule = class PostsPageRoutingModule {
};
PostsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostsPageRoutingModule);



/***/ }),

/***/ 6852:
/*!*********************************************!*\
  !*** ./src/app/Pages/posts/posts.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPageModule": () => (/* binding */ PostsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts-routing.module */ 634);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page */ 3853);
/* harmony import */ var src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared-components.module */ 6175);








let PostsPageModule = class PostsPageModule {
};
PostsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostsPageRoutingModule,
            src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_1__.PostsPage]
    })
], PostsPageModule);



/***/ }),

/***/ 3853:
/*!*******************************************!*\
  !*** ./src/app/Pages/posts/posts.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPage": () => (/* binding */ PostsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./posts.page.html */ 4357);
/* harmony import */ var _posts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page.scss */ 1820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/drawer/drawer.component */ 5767);
/* harmony import */ var src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/Drawer/drawer.service */ 8976);








let PostsPage = class PostsPage {
    constructor(route, changeDetectorRef, drawerService) {
        this.route = route;
        this.changeDetectorRef = changeDetectorRef;
        this.drawerService = drawerService;
        this.backdropVisible = false;
        this.drawerService.postDrawerOpen.subscribe(drawerData => {
            console.log('drawerData post page', drawerData);
            if (drawerData && drawerData.open) {
                // this.drawerService.closeDrawer();
                this.drawer.openDrawer(drawerData.feed);
            }
        });
        this.user = JSON.parse(this.route.snapshot.paramMap.get('user')) || 0;
        this.nimages = JSON.parse(this.route.snapshot.paramMap.get('images')) || 0;
        this.id = JSON.parse(this.route.snapshot.paramMap.get('selectedId')) || 0;
        this.topImage();
    }
    ngOnInit() {
        console.log(this.id);
        this.drawerService.closeDrawer();
    }
    ionViewDidEnter() {
        // this.scrollToLabel();
    }
    ngOnDestroy() {
        this.drawerService.closeDrawer();
    }
    topImage() {
        var first = this.id;
        this.images = this.nimages.sort(function (x, y) { return x.id == first ? -1 : y.id == first ? 1 : 0; });
        // console.log('new position',this.nimages);
    }
    toggleBackdrop(isVisible) {
        this.backdropVisible = isVisible;
        this.changeDetectorRef.detectChanges();
    }
    closeDrawer() {
        this.drawer.closeDrawer();
        // this.drawerService.closeDrawer();
    }
};
PostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: src_app_Services_Drawer_drawer_service__WEBPACK_IMPORTED_MODULE_3__.DrawerService }
];
PostsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, { static: false },] }],
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [src_app_components_drawer_drawer_component__WEBPACK_IMPORTED_MODULE_2__.DrawerComponent,] }]
};
PostsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-posts',
        template: _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_posts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostsPage);



/***/ }),

/***/ 1820:
/*!*********************************************!*\
  !*** ./src/app/Pages/posts/posts.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backdrop {\n  width: 100%;\n  height: 100%;\n  background: #000000d2;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: 0.4s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade-in {\n  transition: 0.4s linear all;\n  opacity: 1;\n}\n\n.parent-grid {\n  padding: 0px;\n}\n\n.cards-row {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n}\n\n.main-column {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFDRTtFQUNFLFlBQUE7QUFFSiIsImZpbGUiOiJwb3N0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwZDI7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICAuZmFkZSB7XG4gICAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXIgYWxsO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgXG4gIC5mYWRlLWluIHtcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGxpbmVhciBhbGw7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC5wYXJlbnQtZ3JpZHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmNhcmRzLXJvd3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLm1haW4tY29sdW1ue1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyBtYXgtd2lkdGg6IDEwMCU7XG4gIFxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ 4357:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/posts/posts.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>posts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" >\n\n<ion-grid class=\"parent-grid\">\n  <ion-row class=\"cards-row\">\n    <ion-col class=\"main-column\" size-sm=\"4\" size-md=\"6\"  size-lg=\"6\" size-xl=\"12\">\n      \n  <app-feed *ngFor=\"let post of images\" [user]=\"user\" [post]=\"post\"></app-feed>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n<div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"closeDrawer()\"></div>\n<app-drawer (openStateChanged)=\"toggleBackdrop($event)\"></app-drawer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_posts_posts_module_ts.js.map