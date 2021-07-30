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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./posts.page.html */ 4357);
/* harmony import */ var _posts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page.scss */ 1820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);






let PostsPage = class PostsPage {
    constructor(route) {
        this.route = route;
        this.user = JSON.parse(this.route.snapshot.paramMap.get('user')) || 0;
        this.nimages = JSON.parse(this.route.snapshot.paramMap.get('images')) || 0;
        this.id = JSON.parse(this.route.snapshot.paramMap.get('selectedId')) || 0;
        this.topImage();
    }
    ngOnInit() {
        console.log(this.id);
    }
    ionViewDidEnter() {
        // this.scrollToLabel();
    }
    topImage() {
        var first = this.id;
        this.images = this.nimages.sort(function (x, y) { return x.id == first ? -1 : y.id == first ? 1 : 0; });
        // console.log('new position',this.nimages);
    }
};
PostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
PostsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, { static: false },] }]
};
PostsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy5wYWdlLnNjc3MifQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>posts</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" >\r\n\r\n  <app-feed *ngFor=\"let post of images\" [user]=\"user\" [post]=\"post\"></app-feed>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_posts_posts_module_ts.js.map