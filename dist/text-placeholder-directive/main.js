(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/text-placeholder/fesm5/ngx-text-placeholder.js":
/*!*************************************************************!*\
  !*** ./dist/text-placeholder/fesm5/ngx-text-placeholder.js ***!
  \*************************************************************/
/*! exports provided: TextPlaceholderModule, TextPlaceholderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPlaceholderModule", function() { return TextPlaceholderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPlaceholderDirective", function() { return TextPlaceholderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextPlaceholderDirective = /** @class */ (function () {
    function TextPlaceholderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.colors = [
            '#e53935',
            '#d32f2f',
            '#c62828',
            '#b71c1c',
            '#d81b60',
            '#c2185b',
            '#ad1457',
            '#880e4f',
            '#8e24aa',
            '#7b1fa2',
            '#6a1b9a',
            '#4a148c',
            '#5e35b1',
            '#512da8',
            '#4527a0',
            '#311b92',
            '#3949ab',
            '#303f9f',
            '#283593',
            '#1a237e',
            '#1e88e5',
            '#1976d2',
            '#1565c0',
            '#0d47a1',
            '#039be5',
            '#0288d1',
            '#0277bd',
            '#01579b',
            '#00acc1',
            '#0097a7',
            '#00838f',
            '#006064',
            '#00897b',
            '#00796b',
            '#00695c',
            '#004d40',
            '#43a047',
            '#388e3c',
            '#2e7d32',
            '#1b5e20',
            '#fb8c00',
            '#f57c00',
            '#ef6c00',
            '#e65100',
            '#f4511e',
            '#e64a19',
            '#d84315',
            '#bf360c',
            '#6d4c41',
            '#5d4037',
            '#4e342e',
            '#3e2723',
            '#757575',
            '#616161',
            '#424242',
            '#212121',
            '#546e7a',
            '#455a64',
            '#37474f',
            '#263238'
        ];
        this.size = 45;
    }
    /**
     * @return {?}
     */
    TextPlaceholderDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        console.log(this.element, this.imgSrc, this.textPlaceholder);
        if (this.imgSrc) {
            this.element.nativeElement.src = this.imgSrc;
        }
        else {
            this.applyPlaceholder();
        }
    };
    /**
     * @private
     * @return {?}
     */
    TextPlaceholderDirective.prototype.applyPlaceholder = /**
     * @private
     * @return {?}
     */
    function () {
        // NativeElement, document used
        // const newElem = document.createElement('p');
        // newElem.innerHTML = this.generatePlaceholder(this.textPlaceholder);
        // this.element.nativeElement.parentNode.replaceChild(newElem, this.element.nativeElement);
        // NativeElement, document used
        // const newElem = document.createElement('p');
        // newElem.innerHTML = this.generatePlaceholder(this.textPlaceholder);
        // this.element.nativeElement.parentNode.replaceChild(newElem, this.element.nativeElement);
        /** @type {?} */
        var child = this.renderer.createElement('p');
        child.innerHTML = this.generatePlaceholder(this.textPlaceholder);
        child.style.width = this.size + 'px';
        child.style.height = this.size + 'px';
        child.style['border-radius'] = '50%';
        child.style['background-color'] = this.getRandomColor();
        child.style['line-height'] = this.size + 'px';
        child.style.color = 'white';
        child.style['text-align'] = 'center';
        child.style['font-size'] = (this.size / 2.5) + 'px';
        child.style['font-family'] = 'verdana';
        console.log(child);
        /** @type {?} */
        var parent = this.renderer.parentNode(this.element.nativeElement);
        this.renderer.removeChild(parent, this.element.nativeElement);
        this.renderer.appendChild(parent, child);
    };
    /**
     * @private
     * @param {?} placeholder
     * @return {?}
     */
    TextPlaceholderDirective.prototype.generatePlaceholder = /**
     * @private
     * @param {?} placeholder
     * @return {?}
     */
    function (placeholder) {
        /** @type {?} */
        var parts = placeholder.split(' ');
        if (parts.length > 1) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        else {
            return (parts[0][0] + parts[0][1]).toUpperCase();
        }
    };
    /**
     * @private
     * @return {?}
     */
    TextPlaceholderDirective.prototype.getRandomColor = /**
     * @private
     * @return {?}
     */
    function () {
        return this.colors[Math.floor(Math.random() * (this.colors.length))];
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextPlaceholderDirective.prototype.onError = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.applyPlaceholder();
    };
    TextPlaceholderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[textPlaceholder]'
                },] }
    ];
    /** @nocollapse */
    TextPlaceholderDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    TextPlaceholderDirective.propDecorators = {
        imgSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        textPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['error',] }]
    };
    return TextPlaceholderDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextPlaceholderModule = /** @class */ (function () {
    function TextPlaceholderModule() {
    }
    TextPlaceholderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        TextPlaceholderDirective
                    ],
                    imports: [],
                    exports: [
                        TextPlaceholderDirective
                    ]
                },] }
    ];
    return TextPlaceholderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-text-placeholder.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <img [textPlaceholder]=\"'Sanket Berde'\" [size]=\"45\" width=\"300\" alt=\"Angular Logo\" imgSrc=\"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.pngs\">\n  <img [textPlaceholder]=\"'Shubham Chaudhari'\" [size]=\"45\" width=\"300\" alt=\"Angular Logo\" imgSrc=\"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.pngs\">\n  <img [textPlaceholder]=\"'Raj Desai'\" [size]=\"45\" width=\"300\" alt=\"Angular Logo\" imgSrc=\"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.pngs\">\n  <img [textPlaceholder]=\"'Sharda Patel'\" [size]=\"45\" width=\"300\" alt=\"Angular Logo\" imgSrc=\"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.pngs\">\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'text-placeholder-directive';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var text_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! text-placeholder */ "./dist/text-placeholder/fesm5/ngx-text-placeholder.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                text_placeholder__WEBPACK_IMPORTED_MODULE_5__["TextPlaceholderDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Sanket/WebstormProjects/text-placeholder-directive/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map