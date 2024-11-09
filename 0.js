(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/articlesarchive/archivedashboard/archivedashboard.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/articlesarchive/archivedashboard/archivedashboard.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzYXJjaGl2ZS9hcmNoaXZlZGFzaGJvYXJkL2FyY2hpdmVkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/articlesarchive/archivedashboard/archivedashboard.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/articlesarchive/archivedashboard/archivedashboard.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 tab1\">\n      <div>\n        <h3 class=\"\">Archive</h3>\n        <table class=\"table\">\n          <tbody>\n            <tr class=\"thead-dark\">\n              <th scope=\"row\" class=\"blueColor\">2022</th>\n            </tr>\n            <tr class=\"border\">\n              <a routerLink=\"/archive/volume-1-issue-1\">\n                <th scope=\"row\" class=\"blueColor\">Volume 1, Issue 1</th>\n              </a>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/articlesarchive/archivedashboard/archivedashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/articlesarchive/archivedashboard/archivedashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: ArchivedashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedashboardComponent", function() { return ArchivedashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArchivedashboardComponent = /** @class */ (function () {
    function ArchivedashboardComponent() {
    }
    ArchivedashboardComponent.prototype.ngOnInit = function () {
    };
    ArchivedashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archivedashboard',
            template: __webpack_require__(/*! ./archivedashboard.component.html */ "./src/app/articlesarchive/archivedashboard/archivedashboard.component.html"),
            styles: [__webpack_require__(/*! ./archivedashboard.component.css */ "./src/app/articlesarchive/archivedashboard/archivedashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArchivedashboardComponent);
    return ArchivedashboardComponent;
}());



/***/ }),

/***/ "./src/app/articlesarchive/articlesarchive-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/articlesarchive/articlesarchive-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ArticlesarchiveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesarchiveRoutingModule", function() { return ArticlesarchiveRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _volume1issue1_volume1issue1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volume1issue1/volume1issue1.component */ "./src/app/articlesarchive/volume1issue1/volume1issue1.component.ts");
/* harmony import */ var _articlesarchivelanding_articlesarchivelanding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlesarchivelanding/articlesarchivelanding.component */ "./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.ts");
/* harmony import */ var _archivedashboard_archivedashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archivedashboard/archivedashboard.component */ "./src/app/articlesarchive/archivedashboard/archivedashboard.component.ts");






var routes = [
    {
        path: '',
        component: _articlesarchivelanding_articlesarchivelanding_component__WEBPACK_IMPORTED_MODULE_4__["ArticlesarchivelandingComponent"],
        children: [
            {
                path: '',
                component: _archivedashboard_archivedashboard_component__WEBPACK_IMPORTED_MODULE_5__["ArchivedashboardComponent"]
            },
            {
                path: 'volume-1-issue-1',
                component: _volume1issue1_volume1issue1_component__WEBPACK_IMPORTED_MODULE_3__["Volume1issue1Component"]
            }
        ]
    }
];
var ArticlesarchiveRoutingModule = /** @class */ (function () {
    function ArticlesarchiveRoutingModule() {
    }
    ArticlesarchiveRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ArticlesarchiveRoutingModule);
    return ArticlesarchiveRoutingModule;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/articlesarchive/articlesarchive.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/articlesarchive/articlesarchive.module.ts ***!
  \***********************************************************/
/*! exports provided: ArticlesarchiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesarchiveModule", function() { return ArticlesarchiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _volume1issue1_volume1issue1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volume1issue1/volume1issue1.component */ "./src/app/articlesarchive/volume1issue1/volume1issue1.component.ts");
/* harmony import */ var _articlesarchivelanding_articlesarchivelanding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articlesarchivelanding/articlesarchivelanding.component */ "./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.ts");
/* harmony import */ var _articlesarchive_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articlesarchive-routing.module */ "./src/app/articlesarchive/articlesarchive-routing.module.ts");
/* harmony import */ var _archivedashboard_archivedashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./archivedashboard/archivedashboard.component */ "./src/app/articlesarchive/archivedashboard/archivedashboard.component.ts");







var ArticlesarchiveModule = /** @class */ (function () {
    function ArticlesarchiveModule() {
    }
    ArticlesarchiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_volume1issue1_volume1issue1_component__WEBPACK_IMPORTED_MODULE_3__["Volume1issue1Component"], _articlesarchivelanding_articlesarchivelanding_component__WEBPACK_IMPORTED_MODULE_4__["ArticlesarchivelandingComponent"], _archivedashboard_archivedashboard_component__WEBPACK_IMPORTED_MODULE_6__["ArchivedashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _articlesarchive_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArticlesarchiveRoutingModule"]
            ]
        })
    ], ArticlesarchiveModule);
    return ArticlesarchiveModule;
}());



/***/ }),

/***/ "./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modeldiv{\r\n    height: 500px;\r\n    text-align: center;\r\n}\r\n.padd{\r\n    padding-top: 50px;\r\n    font-size: 25px;\r\n    color: brown;\r\n}\r\n.btnsty{\r\n    padding-top: 20px;\r\n}\r\n.btnsty a{\r\n    color: whitesmoke;\r\n}\r\n.cent{\r\n    text-align: center;\r\n}\r\ntable:td{\r\n    text-align: center;\r\n}\r\n.all-padd{\r\n    padding-left: 35px;\r\n    padding-right: 15px;\r\n    padding-top: 70px;\r\n}\r\n.all-padd1{\r\n    padding-top: 40px;\r\n}\r\n.all-padd1 p{\r\n    text-align: justify;\r\n}\r\n.bgclr{\r\n    background-color: rgb(200, 150, 150);\r\n}\r\n.bgclr2{\r\n    background-color: #c2d1c6;\r\n}\r\n.bgclr3{\r\n    background-color: #b8adde;\r\n}\r\n@media (min-width: 991.5px){\r\n\r\n.safFFF {\r\n    /* position: fixed; */\r\n    top: 150px;\r\n    padding-left: 35px;\r\n    padding-top: 60px;\r\n\r\n    width: 290px;\r\n}\r\n}\r\n.tab1{\r\n    padding-top: 60px;\r\n}\r\n.quickSt{\r\n    font-size: larger;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXNhcmNoaXZlL2FydGljbGVzYXJjaGl2ZWxhbmRpbmcvYXJ0aWNsZXNhcmNoaXZlbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCOztJQUVqQixZQUFZO0FBQ2hCO0FBQ0E7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzYXJjaGl2ZS9hcnRpY2xlc2FyY2hpdmVsYW5kaW5nL2FydGljbGVzYXJjaGl2ZWxhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RlbGRpdntcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnBhZGR7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBicm93bjtcclxufVxyXG4uYnRuc3R5e1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmJ0bnN0eSBhe1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5jZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRhYmxlOnRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hbGwtcGFkZHtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxufVxyXG4uYWxsLXBhZGQxe1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuLmFsbC1wYWRkMSBwe1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uYmdjbHJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAxNTAsIDE1MCk7XHJcbn1cclxuLmJnY2xyMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmQxYzY7XHJcbn1cclxuLmJnY2xyM3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGFkZGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTEuNXB4KXtcclxuXHJcbi5zYWZGRkYge1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG5cclxuICAgIHdpZHRoOiAyOTBweDtcclxufVxyXG59XHJcblxyXG4udGFiMXtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcbi5xdWlja1N0e1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 tab1\">\n      <router-outlet></router-outlet>\n    </div>\n<div class=\"col-lg-4 tab1\">\n  <div>\n    <!-- Right side section starts -->\n    <div class=\"quickSt\">Quick Links</div>\n      <table class=\"table\">\n        <tr>\n          <td colspan=\"2\"><i class=\"fa fa-leanpub\" style=\"font-size:25px;color:red\"></i>\n            Journal metrics</td>\n        </tr>\n        <tr class=\"alert alert-info\">   \n          <td><i class=\"fa fa-money-bill\"></i>&nbsp;Articles in Press</td>\n          <td><a routerLink=\"/articlesinpress\"><i class=\"fa fa-arrow-right\"></i></a></td>\n        </tr>\n        \n        <tr class=\"alert \">   \n          <td><i class=\"fa fa-money-bill\"></i>&nbsp;APC</td>\n          <td>$ 599<sup>*</sup></td>\n        </tr>\n        <tr>\n          <td><i class=\"fa fa-folder-open\" style=\"font-size:25px; color: brown;\"></i>&nbsp;Submit</td>\n          <td><a routerLink=\"/submit\"><i class=\"fa fa-arrow-right\"></i></a></td>\n        </tr>\n        \n        <tr class=\"bgclr\">\n          <td><i class=\"fa fa-wpforms\" style=\"font-size:25px; color: brown;\"></i>&nbsp;Reviewer Guidelines</td>\n          <td><a routerLink=\"/reviewers\"><i class=\"fa fa-arrow-right\"></i></a></td>\n        </tr>\n        <tr class=\"bgclr\">\n          <td><i class=\"fa fa-wpforms\" style=\"font-size:25px; color: brown;\"></i>&nbsp;Author Guidelines</td>\n          <td><a routerLink=\"/authors\"><i class=\"fa fa-arrow-right\"></i></a></td>\n        </tr>\n        <tr class=\"bgclr\">\n          <td><i class=\"fa fa-wpforms\" style=\"font-size:25px; color: brown;\"></i>&nbsp;Editor Guidelines</td>\n          <td><a routerLink=\"/editors\"><i class=\"fa fa-arrow-right\"></i></a></td>\n        </tr>\n        <tr class=\"bgclr2\">\n          <td><i class=\"fa fa-users\"  style=\"font-size:25px; color: brown;\"></i>&nbsp;Editorial Board</td>\n          <td><a routerLink=\"/editorialboard\"><i class=\"fa fa-arrow-right\"></i></a></td>\n        </tr>\n        <!-- <tr class=\"bgclr3\">\n          <td><small><sup>*</sup>We want grow, we are not concerned about fee</small></td>\n          <td></td>\n        </tr> -->\n        <!-- <i class=\"fa fa-car\"></i>\n        <i class=\"fa fa-car\" style=\"font-size:48px;\"></i>\n        <i class=\"fa fa-car\" style=\"font-size:60px;color:red;\"></i> -->\n      </table>\n  </div>\n\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ArticlesarchivelandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesarchivelandingComponent", function() { return ArticlesarchivelandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticlesarchivelandingComponent = /** @class */ (function () {
    function ArticlesarchivelandingComponent() {
    }
    ArticlesarchivelandingComponent.prototype.ngOnInit = function () {
    };
    ArticlesarchivelandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articlesarchivelanding',
            template: __webpack_require__(/*! ./articlesarchivelanding.component.html */ "./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.html"),
            styles: [__webpack_require__(/*! ./articlesarchivelanding.component.css */ "./src/app/articlesarchive/articlesarchivelanding/articlesarchivelanding.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticlesarchivelandingComponent);
    return ArticlesarchivelandingComponent;
}());



/***/ }),

/***/ "./src/app/articlesarchive/volume1issue1/volume1issue1.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/articlesarchive/volume1issue1/volume1issue1.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".articlesinpress{\r\n    color: #EA441E;\r\n    font-size: 20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 7px;\r\n}\r\n.volume{\r\n    font-size: 16px !important;\r\n}\r\n.titleBox{\r\n    padding: 10px 0;\r\n    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    margin-bottom: 10px;\r\n}\r\n.articleBox{\r\n    padding: 1%;\r\n}\r\n.articleTitle{\r\n    padding-bottom: 1%;\r\n    color: #0856B3;\r\n    font-size: 16px;\r\n}\r\n.articleType{\r\n    padding-bottom: 0.5%;\r\n    color: #ba135d;\r\n    font-size: 15px;\r\n}\r\n.articleAuthor{\r\n    color: #0a043c;\r\n    font-size: 14px;\r\n}\r\n.articlePDF a{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    padding: 0 !important;\r\n    \r\n}\r\n.articlePDF{\r\n    padding-top: 5px;\r\n}\r\n/* Button 2 */\r\n.btn{\r\n    font-size: 13px;\r\n\r\n    padding: 0.25% !important;\r\n}\r\n.btn-2 {\r\n\tbackground: #413c69;\r\n\tcolor: #fff;\r\n\tbox-shadow: 0 6px #655da2;\r\n\ttransition: none;\r\n}\r\n/* Button 2a */\r\n.btn-2a {\r\n\tborder-radius: 0 0 5px 5px;\r\n}\r\n.btn-2a:hover {\r\n\tbox-shadow: 0 4px #655da2;\r\n\ttop: 2px;\r\n}\r\n.btn-2a:active {\r\n\tbox-shadow: 0 0 #655da2;\r\n\ttop: 6px;\r\n}\r\n.cent{\r\n    text-align: center;\r\n}\r\ntable:td{\r\n    text-align: center;\r\n}\r\n.all-padd1{\r\n    padding-top: 40px;\r\n}\r\n.all-padd1 p{\r\n    text-align: justify;\r\n}\r\n.quickSt{\r\n    font-size: larger;\r\n    font-weight: bold;\r\n}\r\n.tab1{\r\n    padding-top: 60px;\r\n}\r\nsup{\r\n    color: red;\r\n}\r\n.close-ribbon {\r\n    position: absolute;\r\n    top: 0;\r\n    /* top: 3px; */\r\n    right: 1em;\r\n    z-index: 1;\r\n    color: #eee;\r\n    font-size: 2em;\r\n    cursor: pointer;\r\n    width: 1.5em;\r\n    line-height: 1.5em;\r\n    transition: line-height 0.5s;\r\n    opacity: 1;\r\n}\r\n.close-ribbon:after {\r\n    content: \"\";\r\n    font-size: 0.5em;\r\n    position: absolute;\r\n    /* height: 1.2em; */\r\n    height: 4.5em;\r\n    /* border: 1.5em solid #F44336; */\r\n    border: 1.5em solid #fc0000;\r\n    z-index: -1;\r\n    top: 0em;\r\n    /* border-top-width: 1.5em; */\r\n    border-top-width: 3em;\r\n    border-bottom-color: transparent;\r\n    right: 0;\r\n    transition: height 0.5s;\r\n}\r\n.close-ribbon:before {\r\n    content: \"\";\r\n    font-size: 0.5em;\r\n    position: absolute;\r\n    border-style: solid;\r\n    /* border-color: transparent transparent #B71C1C transparent; */\r\n    border-color: transparent transparent #fc0000 transparent;\r\n    /* top: 0.2em; */\r\n    top: 0;\r\n    right: 3em;\r\n    border-width: 0 0 1em 0.7em;\r\n    z-index: -1;\r\n}\r\n.close-ribbon:hover:after {\r\n    /* border: 1.5em solid #EF5350;\r\n    border-bottom-color: transparent;\r\n    height: 1.6em;\r\n    -webkit-transition: height 0.5s;\r\n    transition: height 0.5s; */\r\n}\r\n.close-ribbon:focus {\r\n    outline: none;\r\n}\r\n.close-ribbon:hover {\r\n    opacity: 1!important;\r\n    color: #fff;\r\n    /* line-height: 0.9em;\r\n    color: #333;\r\n    -webkit-transition: line-height 0.5s;\r\n    transition: line-height 0.5s; */\r\n}\r\n.modal-header .close-ribbon {\r\n    padding: 0rem 0rem;\r\n}\r\n.bgclr{\r\n    background-color: rgb(200, 150, 150);\r\n}\r\n.bgclr2{\r\n    background-color: #c2d1c6;\r\n}\r\n.bgclr3{\r\n    background-color: #b8adde;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXNhcmNoaXZlL3ZvbHVtZTFpc3N1ZTEvdm9sdW1lMWlzc3VlMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGVBQWU7SUFDZix1R0FBdUc7SUFDdkcsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQSxhQUFhO0FBQ2I7SUFDSSxlQUFlOztJQUVmLHlCQUF5QjtBQUM3QjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCx5QkFBeUI7Q0FHekIsZ0JBQWdCO0FBQ2pCO0FBRUEsY0FBYztBQUNkO0NBQ0MsMEJBQTBCO0FBQzNCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsUUFBUTtBQUNUO0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsUUFBUTtBQUNUO0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFFbEIsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDtBQUdBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsUUFBUTtJQUVSLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLCtEQUErRDtJQUMvRCx5REFBeUQ7SUFDekQsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjtBQUVBO0lBQ0k7Ozs7OEJBSTBCO0FBQzlCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYOzs7bUNBRytCO0FBQ25DO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlc2FyY2hpdmUvdm9sdW1lMWlzc3VlMS92b2x1bWUxaXNzdWUxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZXNpbnByZXNze1xyXG4gICAgY29sb3I6ICNFQTQ0MUU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuLnZvbHVtZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGVCb3h7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYXJ0aWNsZUJveHtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcbi5hcnRpY2xlVGl0bGV7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICBjb2xvcjogIzA4NTZCMztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmFydGljbGVUeXBle1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNSU7XHJcbiAgICBjb2xvcjogI2JhMTM1ZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYXJ0aWNsZUF1dGhvcntcclxuICAgIGNvbG9yOiAjMGEwNDNjO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5hcnRpY2xlUERGIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbi5hcnRpY2xlUERGe1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLyogQnV0dG9uIDIgKi9cclxuLmJ0bntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgICBwYWRkaW5nOiAwLjI1JSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tMiB7XHJcblx0YmFja2dyb3VuZDogIzQxM2M2OTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDZweCAjNjU1ZGEyO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuXHQtbW96LXRyYW5zaXRpb246IG5vbmU7XHJcblx0dHJhbnNpdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogQnV0dG9uIDJhICovXHJcbi5idG4tMmEge1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG59XHJcblxyXG4uYnRuLTJhOmhvdmVyIHtcclxuXHRib3gtc2hhZG93OiAwIDRweCAjNjU1ZGEyO1xyXG5cdHRvcDogMnB4O1xyXG59XHJcblxyXG4uYnRuLTJhOmFjdGl2ZSB7XHJcblx0Ym94LXNoYWRvdzogMCAwICM2NTVkYTI7XHJcblx0dG9wOiA2cHg7XHJcbn1cclxuXHJcblxyXG4uY2VudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50YWJsZTp0ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWxsLXBhZGQxe1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuLmFsbC1wYWRkMSBwe1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4ucXVpY2tTdHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRhYjF7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuc3Vwe1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5jbG9zZS1yaWJib24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLyogdG9wOiAzcHg7ICovXHJcbiAgICByaWdodDogMWVtO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMS41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGxpbmUtaGVpZ2h0IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBsaW5lLWhlaWdodCAwLjVzO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5jbG9zZS1yaWJib246YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBoZWlnaHQ6IDEuMmVtOyAqL1xyXG4gICAgaGVpZ2h0OiA0LjVlbTtcclxuICAgIC8qIGJvcmRlcjogMS41ZW0gc29saWQgI0Y0NDMzNjsgKi9cclxuICAgIGJvcmRlcjogMS41ZW0gc29saWQgI2ZjMDAwMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAwZW07XHJcbiAgICAvKiBib3JkZXItdG9wLXdpZHRoOiAxLjVlbTsgKi9cclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDNlbTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XHJcbn1cclxuXHJcbi5jbG9zZS1yaWJib246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC8qIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI0I3MUMxQyB0cmFuc3BhcmVudDsgKi9cclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZjMDAwMCB0cmFuc3BhcmVudDtcclxuICAgIC8qIHRvcDogMC4yZW07ICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogM2VtO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMWVtIDAuN2VtO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5jbG9zZS1yaWJib246aG92ZXI6YWZ0ZXIge1xyXG4gICAgLyogYm9yZGVyOiAxLjVlbSBzb2xpZCAjRUY1MzUwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDEuNmVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzOyAqL1xyXG59XHJcblxyXG4uY2xvc2UtcmliYm9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9zZS1yaWJib246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAwLjllbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBsaW5lLWhlaWdodCAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogbGluZS1oZWlnaHQgMC41czsgKi9cclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciAuY2xvc2UtcmliYm9uIHtcclxuICAgIHBhZGRpbmc6IDByZW0gMHJlbTtcclxufVxyXG5cclxuLmJnY2xye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMTUwLCAxNTApO1xyXG59XHJcbi5iZ2NscjJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJkMWM2O1xyXG59XHJcbi5iZ2NscjN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhhZGRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/articlesarchive/volume1issue1/volume1issue1.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/articlesarchive/volume1issue1/volume1issue1.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#/\">Home</a></li>\n      <li class=\"breadcrumb-item\"><a href=\"#/archive\">Archive</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Volume 1, Issue 1</li>\n    </ol>\n  </nav>  \n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-8\">\n      <div class=\"articlesinpress\">\n        Volume 1, Issue 1\n      </div>\n      <div class=\"titleBox\">\n        <div class=\"articleBox\">\n          <div class=\"articleTitle\">\n            <a href=\"assets/articles/JCI-1-001.pdf\" target=\"_blank\">\n              Alternative Support Strategy for High-Risk, Elective\n              Percutaneous Coronary Intervention: Venoarterial\n              Extracorporeal Membrane Oxygenation in Advanced\n              Pulmonary Hypertension and Right Ventricular Dysfunction\n            </a>\n          </div>\n          <div class=\"articleType\">\n            Case Report: <span>JCI-1-001</span>\n          </div>\n          <div class=\"articleAuthor\">\n            Mayank P Patel<sup>*</sup>, Cory G Madigan, Michael S Cahill\n          </div>\n          <div class=\"articlePDF\">\n            \n            <button (click)=\"getArticleContent(1)\" class=\"btn btn-2 btn-2a\" data-toggle=\"modal\" data-target=\"#abstractModal\">\n              Article Abstract\n            </button>\n            | \n            <a class=\"\" href=\"assets/articles/JCI-1-001.pdf\" target=\"_blank\">\n              <button class=\"btn btn-2 btn-2a\">\n                Article PDF\n              </button>\n            </a>    \n          </div>\n        </div>\n      </div>\n\n      <div class=\"titleBox\">\n        <div class=\"articleBox\">\n          <div class=\"articleTitle\">\n            <a href=\"assets/articles/JCI-1-008.pdf\" target=\"_blank\">\n              Failure of Computed Tomography Angiography to Detect a \nLarge Fistula Connecting the Left Anterior Descending Artery \nto the Left Ventricle Circumflex Artery\n            </a>\n          </div>\n          <div class=\"articleType\">\n            Case Report: <span>JCI-1-008</span>\n          </div>\n          <div class=\"articleAuthor\">\n            Nathan Zaher, Tarec Micho Ulbeh<sup>*</sup>, Abed Jabr, Thomas Vacek, M Chadi Alraies\n          </div>\n          <div class=\"articlePDF\">\n            \n              <button (click)=\"getArticleContent(2)\" class=\"btn btn-2 btn-2a\" data-toggle=\"modal\" data-target=\"#abstractModal\">\n                Article Abstract\n              </button>\n              | \n            <a class=\"\" href=\"assets/articles/JCI-1-008.pdf\" target=\"_blank\">\n              <button class=\"btn btn-2 btn-2a\">\n                Article PDF\n              </button>\n            </a>\n            \n          </div>\n        </div>\n      </div>\n\n      <div class=\"titleBox\">\n        <div class=\"articleBox\">\n          <div class=\"articleTitle\">\n            <a href=\"assets/articles/JCI-1-012.pdf\" target=\"_blank\">\n              A Particular Case of MINOCA\n            </a>\n          </div>\n          <div class=\"articleType\">\n            Case Report: <span>JCI-1-012</span>\n          </div>\n          <div class=\"articleAuthor\">\n\n            Luigi Nunziata<sup>*</sup>, Saverio Ambrosino, Luciano Carbone, Rosario Galasso, Vincenzo Ruggiero, Antonella Laezza, Vincenzo \nNardiello, Tullio Niglio, Francesco Granata, Mario Volpicelli, Carmine Muto, Attilio Varricchio, Luigi Caliendo\n          </div>\n          <div class=\"articlePDF\">\n            \n              <button (click)=\"getArticleContent(3)\" class=\"btn btn-2 btn-2a\" data-toggle=\"modal\" data-target=\"#abstractModal\">\n                Article Abstract\n              </button>\n              | \n            <a class=\"\" href=\"assets/articles/JCI-1-012.pdf\" target=\"_blank\">\n              <button class=\"btn btn-2 btn-2a\">\n                Article PDF\n              </button>\n            </a>\n            \n          </div>\n        </div>\n      </div>\n      \n      <div class=\"titleBox\">\n        <div class=\"articleBox\">\n          <div class=\"articleTitle\">\n            <a href=\"assets/articles/JCI-1-024.pdf\" target=\"_blank\">\n              A Case Report of Recurrent Acute Myocardial Infarction with a \n              Peculiar Background\n            </a>\n          </div>\n          <div class=\"articleType\">\n            Case Report: <span>JCI-1-024</span>\n          </div>\n          <div class=\"articleAuthor\">\n            Alexandru Achim<sup>*</sup>, Albrecht Schmidt, Heinrich Mächler, Wolfgang Marte, Robert Zweiker, Andreas Zirlik, Gabor G Toth\n          </div>\n          <div class=\"articlePDF\">\n            \n              <button (click)=\"getArticleContent(4)\" class=\"btn btn-2 btn-2a\" data-toggle=\"modal\" data-target=\"#abstractModal\">\n                Article Abstract\n              </button>\n              | \n            <a class=\"\" href=\"assets/articles/JCI-1-024.pdf\" target=\"_blank\">\n              <button class=\"btn btn-2 btn-2a\">\n                Article PDF\n              </button>\n            </a>\n            | \n            <a class=\"\" href=\"assets/articles/A_Case_Report_of_Recurrent_Acute_Myocardial_Infarction_with_a_Peculiar_Background/video1.mp4\" target=\"_blank\">\n              <button class=\"btn btn-2 btn-2a\">\n                Supplementary File (Video 1)\n              </button>\n            </a>\n            \n          </div>\n        </div>\n      </div>\n\n      <div class=\"titleBox\">\n        <div class=\"articleBox\">\n          <div class=\"articleTitle\">\n            <a href=\"assets/articles/JCI-1-029.pdf\" target=\"_blank\">\n              Balloon Angioplasty with Stent Implantation in Superior Vena \nCava Stenosis in Pediatric Patients\n            </a>\n          </div>\n          <div class=\"articleType\">\n            Research Article: <span>JCI-1-029</span>\n          </div>\n          <div class=\"articleAuthor\">\n            Antonio Sanchez Andres<sup>*</sup>, Beatriz Insa Albert, Jose I Carrasco Moreno\n          </div>\n          <div class=\"articlePDF\">\n            \n              <button (click)=\"getArticleContent(5)\" class=\"btn btn-2 btn-2a\" data-toggle=\"modal\" data-target=\"#abstractModal\">\n                Article Abstract\n              </button>\n              | \n            <a class=\"\" href=\"assets/articles/JCI-1-029.pdf\" target=\"_blank\">\n              <button class=\"btn btn-2 btn-2a\">\n                Article PDF\n              </button>\n            </a>\n            \n            \n          </div>\n        </div>\n      </div>\n\n      <div class=\"titleBox\">\n        <div class=\"articleBox\">\n          <div class=\"articleTitle\">\n            <a href=\"assets/articles/JCI-1-035.pdf\" target=\"_blank\">\n              Computational Fluid Dynamics Assessment of Omega \nPhenomenon; a Systolic Kinking of the Coronary Arteries in a \nPatient Presenting with Ischemia in the Absence of Coronary \nArtery Obstruction\n            </a>\n          </div>\n          <div class=\"articleType\">\n            Research Article: <span>JCI-1-035</span>\n          </div>\n          <div class=\"articleAuthor\">\n            Bright Eric Ohene<sup>1</sup>, Yu-Jie Zhou<sup>1*</sup>, Gary S Mintz<sup>2</sup>, Shiwei Yang<sup>1</sup>,\n   Shenjie Lu<sup>3,4</sup>, Zhi-Jian Wang<sup>1</sup>, Jaryl Ng<sup>3</sup>, Heerajnarain Bulluck<sup>5</sup>, \nHuiying Ang<sup>3</sup>, Fei Gao<sup>1</sup>, Hua Shen<sup>1</sup>, Changyan Lin<sup>1</sup>, Wei Liu<sup>1</sup>\n          </div>\n          <div class=\"articlePDF\">\n            \n              <button (click)=\"getArticleContent(6)\" class=\"btn btn-2 btn-2a\" data-toggle=\"modal\" data-target=\"#abstractModal\">\n                Article Abstract\n              </button>\n              | \n            <a class=\"\" href=\"assets/articles/JCI-1-035.pdf\" target=\"_blank\">\n              <button class=\"btn btn-2 btn-2a\">\n                Article PDF\n              </button>\n            </a>\n            \n            \n          </div>\n        </div>\n      </div>\n\n\n<!-- 7 ARTICLE STARTS -->\n\n<div class=\"titleBox\">\n  <div class=\"articleBox\">\n    <div class=\"articleTitle\">\n      <a href=\"assets/articles/JCI-1-040.pdf\" target=\"_blank\">\n        Novel Treatment of Iatrogenic Annular Rupture and Cardiac\nTamponade during TAVR\n      </a>\n    </div>\n    <div class=\"articleType\">\n      Case Report: <span>JCI-1-040</span>\n    </div>\n    <div class=\"articleAuthor\">\n      Michael Cryer<sup>1*</sup>, Ariana Ehsan<sup>2</sup>, Thomas Waggoner<sup>1,2</sup>\n    </div>\n    <div class=\"articlePDF\">\n      \n        <button (click)=\"getArticleContent(7)\" class=\"btn btn-2 btn-2a\" data-toggle=\"modal\" data-target=\"#abstractModal\">\n          Article Abstract\n        </button>\n        | \n      <a class=\"\" href=\"assets/articles/JCI-1-040.pdf\" target=\"_blank\">\n        <button class=\"btn btn-2 btn-2a\">\n          Article PDF\n        </button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- 7 ARTICLE ENDS -->\n\n<!-- 8 ARTICLE STARTS -->\n\n<div class=\"titleBox\">\n  <div class=\"articleBox\">\n    <div class=\"articleTitle\">\n      <a href=\"assets/articles/JCI-1-043.pdf\" target=\"_blank\">\n        Massive Functional Tricuspid Regurgitation with Right Heart\nFailure Percutaneously Treated with Triclip System and ECMO\nAssistance. Two Case Reports\n      </a>\n    </div>\n    <div class=\"articleType\">\n      Case Report: <span>JCI-1-043</span>\n    </div>\n    <div class=\"articleAuthor\">\n      Elvis Brscic<sup>*</sup>, Gabriella Rovero, Katiuscia Testa, Pierpaolo Sori, Salvatore De Salvo, Sebastiano Marra\n    </div>\n    <div class=\"articlePDF\">\n      \n        <button (click)=\"getArticleContent(8)\" class=\"btn btn-2 btn-2a\" data-toggle=\"modal\" data-target=\"#abstractModal\">\n          Article Abstract\n        </button>\n        | \n      <a class=\"\" href=\"assets/articles/JCI-1-043.pdf\" target=\"_blank\">\n        <button class=\"btn btn-2 btn-2a\">\n          Article PDF\n        </button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- 8 ARTICLE ENDS -->\n\n<!-- 9 ARTICLE STARTS -->\n\n<div class=\"titleBox\">\n  <div class=\"articleBox\">\n    <div class=\"articleTitle\">\n      <a href=\"assets/articles/JCI-1-055.pdf\" target=\"_blank\">\n        Percutaneous Closure of Septal Mitral Paravalvular Leakage\nin A Young Patient\n      </a>\n    </div>\n    <div class=\"articleType\">\n      Review Article: <span>JCI-1-055</span>\n    </div>\n    <div class=\"articleAuthor\">\n\n      Gabriel Fernández Yáñez<sup>1</sup>, Reyes Álvarez José Miguel<sup>1*</sup>, Marco Alejandro Solórzano Vázquez<sup>1</sup>,\n       Germán Ramón Bautista López<sup>1</sup>,\nAntonio Olvera López<sup>2</sup>, Jorge Francisco Acuña Valerio<sup>1</sup>, Faviola Muñiz Castillo<sup>1</sup>,\n José Humberto Guerrero González<sup>3</sup>\n    </div>\n    <div class=\"articlePDF\">\n      \n        <button (click)=\"getArticleContent(9)\" class=\"btn btn-2 btn-2a\" data-toggle=\"modal\" data-target=\"#abstractModal\">\n          Article Abstract\n        </button>\n        | \n      <a class=\"\" href=\"assets/articles/JCI-1-055.pdf\" target=\"_blank\">\n        <button class=\"btn btn-2 btn-2a\">\n          Article PDF\n        </button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- 9 ARTICLE ENDS -->\n\n\n    </div>\n    \n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade bd-example-modal-lg text-justify\" data-backdrop=\"static\" id=\"abstractModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"abstractModalTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\" style=\"color: #413c69; margin-top: 3%;\">{{articleContent.articleTitle}}</h5>\n        <!-- <button type=\"button\" class=\"close close-ribbon\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button> -->\n\n        <button type=\"button\" data-dismiss=\"modal\" class=\"close close-ribbon\" aria-label=\"Close\">\n         <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </button>\n      </div>\n      <div class=\"modal-body\">\n        <h5 style=\"color: #0458ab;\"> Abstract</h5>\n        <div [innerHTML]=\"articleContent.articleAbstract\">\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n       \n        <!-- <button class=\"btn btn-2 btn-2a\">\n          <a style=\"text-decoration: none;\n          font-size: 17px; \n          color: white !important;\" href=\"assets/articles/JCI-1-001.pdf\" target=\"_blank\" data-dismiss=\"modal\"> Article PDF</a>\n        </button> -->\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/articlesarchive/volume1issue1/volume1issue1.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/articlesarchive/volume1issue1/volume1issue1.component.ts ***!
  \**************************************************************************/
/*! exports provided: Volume1issue1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume1issue1Component", function() { return Volume1issue1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Volume1issue1Component = /** @class */ (function () {
    function Volume1issue1Component() {
        this.articlesarray = [
            {
                'articleId': 1,
                'articleTitle': 'Alternative Support Strategy for High-Risk, Elective Percutaneous Coronary Intervention: Venoarterial Extracorporeal Membrane Oxygenation in Advanced Pulmonary Hypertension and Right Ventricular Dysfunction',
                'articleAbstract': "<p><strong>Objectives:</strong> We report our initial experience utilizing venoarterial extracorporeal membrane oxygenation\n    (VA-ECMO) in a patient undergoing high-risk percutaneous coronary intervention (HR-PCI) and review the\n    literature for outcomes data with prophylactic use of VA-ECMO in this setting.\n    </p>\n    <p><strong>Background:</strong> VA-ECMO is most commonly used in patients in cardiogenic shock and status-post cardiac\n    arrest. Data on use of VA-ECMO for elective, HR-PCI is limited.</p>\n    <p><strong>Case description:</strong> A 77-year-old frail Caucasian male with a complex medical history to include COPD with\n    baseline supplementary oxygen use, pulmonary hypertension, type 2 diabetes mellitus, and hypertension\n    underwent treadmill stress testing due to worsening dyspnea on exertion. After 2 minutes, he developed\n    profound hypotension along with diffuse ST depressions on ECG.</p>\n    <p><strong>Results:</strong> Following admission for urgent invasive coronary angiography, the patient was found to have severe\n    multivessel obstructive coronary artery disease. After a multidisciplinary discussion, he was not deemed\n    to be a surgical candidate. Due to recurrent admissions for acute decompensated heart failure and non-STelevation myocardial infarction (NSTEMI) complicated by syncope and pulmonary hypertension, the patient\n    ultimately underwent successful VA-ECMO supported HR-PCI of the proximal LAD and proximal-to-mid RCA\n    using rotational atherectomy.</p>\n    <p><strong>Conclusions:</strong> This case highlights the effectiveness of VA-ECMO supported HR-PCI for patients with both\n    RV dysfunction and high-risk coronary anatomy requiring multi-vessel PCI with rotational atherectomy. VAECMO can be successfully used prophylactically for hemodynamic support during elective, HR-PCI. Further\n    investigation should focus on identifying the optimal support strategy for these high-risk cases with regards\n    to outcome, revascularization, and patient comfort.</p>\n    <p><strong>Keywords:</strong> Venoarterial, Extracorporeal membrane oxygenation, High-risk PCI</p>"
            },
            {
                'articleId': 2,
                'articleTitle': 'Failure of Computed Tomography Angiography to Detect a Large Fistula Connecting the Left Anterior Descending Artery to the Left Ventricle Circumflex Artery',
                'articleAbstract': "<p>Coronary artery fistula (CAF) is a rare anomaly with an estimated prevalence of 0.002%. More specifically,\n    fistulas arising from the left anterior descending artery (LAD) constitute only 30%, and those draining into\n    the left circulation account for a mere 10%. It is important to detect and treat CAFs because they can cause\n    many serious complications. Coronary angiography has long been thought of as the reference standard for\n    imaging; however, it has become less widely used because it is relatively invasive, involves a risk of procedurerelated complications, and yields 2D images that often provide limited delineation of the complex anatomy of\n    abnormal communications. Computed tomography angiography (CTA) is a relatively new imaging tool that\n    yields higher spatiotemporal resolution and more precisely demonstrates the sites, origins, and termination\n    of abnormal blood vessels in 3D. Moreover, it is less invasive and involves a shorter acquisition time. Here,\n    we demonstrate a case of a 41-year-old male with no significant past medical, surgical, or family history\n    that presented as an outpatient with atypical chest pain and had a positive nuclear stress test. The patient\n    subsequently underwent left heart catheterization, which revealed a fistula between the LAD and LV circumflex\n    artery; however, CTA failed to show any evidence of a fistula.</p>\n    <p><strong>Keywords:</strong> Coronary artery fistula, Computed tomography angiography</p>"
            },
            {
                'articleId': 3,
                'articleTitle': 'A Particular Case of MINOCA',
                'articleAbstract': "<p>Myocardial infarction with non-obstructive coronary arteries (MINOCA) is a clinical entity characterized\n    by signs of myocardial infarction with normal or near-normal coronary arteries on angiography. The\n    management of this condition is strongly dependent on the underlying pathophysiological mechanism.\n    We report the case of a 63-year-old man who presented with posterior ST-segment elevation myocardial\n    infarction (STEMI) with non-obstructed coronaries as an atypical presentation of a giant pheochromocytoma.\n    The latter is a rare endocrine neoplasia, resulting in several cardiovascular manifestations, including type-2\n    myocardial infarction and transient cardiomyopathy. Although the Scientific Statement from the American\n    Heart Association and the European Society of Cardiology guidelines do not report pheochromocytoma as\n    a potential cause of MINOCA, our case reiterates the importance of considering this diagnosis, especially in\n    patients with concomitant transient cardiomyopathy and hypertensive crisis. A correct and prompt diagnosis\n    in this context may avoid life-threatening complications.</p>\n    <p><strong>Keywords:</strong> MINOCA, Pheochromocytoma, STEMI</p>"
            },
            {
                'articleId': 4,
                'articleTitle': 'A Case Report of Recurrent Acute Myocardial Infarction with a Peculiar Background',
                'articleAbstract': "<p>Occlusion of the right coronary artery is a relative rare complication of type-A aortic dissection and an example \n    of type-2 myocardial infarction as well, but when it occurs, it can be fatal. Misdiagnosis leads to inappropriate \n    therapy and delays. Our case made no exception. Etiology remains unclear although the patient\u2019s background \n    might be related to his later, life-threatening complication.</p>\n    <p><strong>Keywords:</strong>  Aortic dissection . Acute myocardial infarction . Pseudo aneurysm . Vasculitis . Hairy cell leukemia . \n    Cardiogenic shock</p>"
            },
            {
                'articleId': 5,
                'articleTitle': 'Balloon Angioplasty with Stent Implantation in Superior Vena Cava Stenosis in Pediatric Patients',
                'articleAbstract': "<p><strong>Introduction and Objective:</strong> Superior vena cava (SVC) obstruction can be a complication after congenital \n    heart disease surgery. In the current review we examined our experience and practice in stent implantation \n    after balloon angioplasty in superior vena cava (SVC) obstruction. The objective was to evaluate safety and \n    effectiveness results in patients with SVC stenosis treated by balloon angioplasty with stent implantation.</p>\n    \n    <p><strong>Methods:</strong> Our patient cohort included 11 pediatric patients followed at our institution after surgery \n    for congenital heart disease (CHD) correction, who developed SVC stenosis as a complication of CHD \n    surgery, and 1 patient with severe renal failure and dialysis catheter-related SVC obstruction, all of them \n    requiring endovascular SVC stent placement after balloon angioplasty. Our data acquisition was performed \n    retrospectively and it comprised age, gender, heart diagnosis, cardiovascular surgeries received, age at \n    surgery, weight at surgery, echocardiographic data during follow-up, date of SVC stent placement, weight at \n    intervention, symptoms presented at the time of the endovascular intervention, and clinical follow up data. \n    Final result was evaluated by assessing the re-establishment of normal flow in SVC, the disappearance of \n    collateral venous circulation, and the presence of normal pressure in systemic superior venous system. </p>\n    \n    <p><strong>Results:</strong> In a period comprised between January 2011 and June 2019, 11 patients required SVC endovascular \n    stent placement in our center. Gender distribution was 5 males and 6 females, and median age was 6,5 years \n    (6-11). Average weight at stent placement was 24 kg. Amongst our patients we had 6 sinus venous type atrial \n    septal defect with partial anomalous pulmonary venous return, 2 total anomalous pulmonary venous return, \n    2 Transposition of great arteries with Mustard correction, and 1 patient with SVC obstruction secondary to \n    chronic dialysis catheter placement. All stents were placed in biventricular circulation hearts. At the time of \n    stent placement, only 2 out of 8 patients had clear SVC syndrome related symptoms. Median time from surgery \n    to SVC stenting was 26 months (10-72 months) with longer times related to Mustard surgeries. Average mean \n    pressure gradient in SVC territory was 8 mmHg (12-3 mmHg) before stenting, and no gradient was found after \n    stenting. Only 1 patient required re-dilation due to neointimal proliferation, more than 7 years after stent \n    implantation, which was a small cell one. At the time of data acquisition, no other patients had required re\u0002dilatation or re-stenting of SVC. Minimum and maximum follow-up time after endovascular intervention was \n    4 months and 6 years (mean follow up of 18.5 months), respectively. The overall outcome of the intervention \n    was good in all the cases, with re-establishment of normal circulation and pressure balance throughout the \n    superior venous territory. There were no major complications. </p>\n    \n    <p><strong>Conclusion:</strong> SVC obstruction is a non-frequent but important complication of CHD surgery and catheter \n    placement. Balloon angioplasty with stent implantation performed by an experienced team is a safe, effective \n    method to improve patients\u2019 situation and reestablish normal venous return.</p>\n    <p><strong>Keywords:</strong> Balloon Angioplasty . Stent Implantation . SVC Stenosis\n    </p>"
            },
            {
                'articleId': 6,
                'articleTitle': 'Computational Fluid Dynamics Assessment of Omega Phenomenon; a Systolic Kinking of the Coronary Arteries in a Patient Presenting with Ischemia in the Absence of Coronary Artery Obstruction',
                'articleAbstract': "<p>Omega phenomenon is an angiographic observation, conceptualized and defined as systolic, exaggerate \n    excursion of epicardial artery segment resulting in aberrant looping/kinking (producing inlet and outlet \n    eccentric angulation) with transient partial luminal obliteration. This entity may be part of the causes of \n    myocardial ischemia in non-obstructive coronary arteries, and it is so called due to its resemblance of the last \n    Greek alphabet.</p>"
            },
            {
                'articleId': 7,
                'articleTitle': 'Novel Treatment of Iatrogenic Annular Rupture and Cardiac Tamponade during TAVR',
                'articleAbstract': "<p>In this case presentation, we discuss a novel therapy to treat cardiac tamponade caused by annular rupture\n    during a transcatheter aortic valve replacement (TAVR) procedure. The patient underwent successful\n    percutaneous implantation of an Edwards 29-mm Sapien 3 Ultra valve after which a substantial drop in blood\n    pressure was noted. Intraprocedural post-implant aortic angiogram showed an iatrogenic annular rupture\n    (IAR) outside the non-coronary cusp with transthoracic echocardiography confirmation of an expanding\n    pericardial effusion. Immediate pericardiocentesis was performed, however, extraction of sanguineous\n    product and hemodynamic instability continued. At this time, injectable gelatin thrombin hemostatic matrix\n    was delivered to the annular rupture site at the non-coronary cusp side of the left ventricular outflow tract.\n    Shortly after, there was stabilization of the pericardial effusion with improvement in hemodynamics. The\n    patient was discharged home safely on hospital day four and continued to do well in follow up appointments.</p>"
            },
            {
                'articleId': 8,
                'articleTitle': 'Massive Functional Tricuspid Regurgitation with Right Heart Failure Percutaneously Treated with Triclip System and ECMO Assistance. Two Case Reports',
                'articleAbstract': "<p>In this report, we present the cases of two elderly patients with massive tricuspid regurgitation (TR) and\n    severe right ventricular (RV) dysfunction causing right heart failure treated with percutaneous TriClip system\n    assisted with veno-arterial extracorporeal membrane oxygenation (VA-ECMO).</p>"
            },
            {
                'articleId': 9,
                'articleTitle': 'Percutaneous Closure of Septal Mitral Paravalvular Leakage in A Young Patient',
                'articleAbstract': "<p>Paravalvular leaks are a well-recognized major complication after prosthetic valves implantation, it affects\n    from 6% to 15% of patients after valve replacement. Percutaneous closure is an alternative to solve this\n    problem, it has shown some advantages such a lower incidence of complications with a success rate of 87%,\n    this case demonstrates the feasibility of an uncomonn approach using a single right femoral venous access\n    and a deflectable sheath to perform a transseptal puncture in order to place a purpose specific occluder for\n    clossing a paravalvular leak in a mitral mechanic prothesic valve implanted via open thoracotomy.</p>"
            },
        ];
    }
    Volume1issue1Component.prototype.ngOnInit = function () {
    };
    Volume1issue1Component.prototype.getArticleContent = function (e) {
        var i = 0;
        this.articleContent = {};
        for (i = 0; i < this.articlesarray.length; i++) {
            if (this.articlesarray[i].articleId == e) {
                this.articleContent = this.articlesarray[i];
            }
        }
        console.log(this.articleContent);
    };
    Volume1issue1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-volume1issue1',
            template: __webpack_require__(/*! ./volume1issue1.component.html */ "./src/app/articlesarchive/volume1issue1/volume1issue1.component.html"),
            styles: [__webpack_require__(/*! ./volume1issue1.component.css */ "./src/app/articlesarchive/volume1issue1/volume1issue1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Volume1issue1Component);
    return Volume1issue1Component;
}());



/***/ })

}]);
//# sourceMappingURL=0.js.map