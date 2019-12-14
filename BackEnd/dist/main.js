(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _display_info_display_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-info/display-info.component */ "./src/app/display-info/display-info.component.ts");




var routes = [{
        path: 'patient-info', component: _display_info_display_info_component__WEBPACK_IMPORTED_MODULE_3__["DisplayInfoComponent"],
    },
    {
        path: '', component: _display_info_display_info_component__WEBPACK_IMPORTED_MODULE_3__["DisplayInfoComponent"]
    }
];
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

module.exports = "<div *ngIf=\"healthcareService.user\">\r\n  <app-side-navigation></app-side-navigation>\r\n\r\n</div>\r\n<div *ngIf=\"!healthcareService.user\">\r\n  <router-outlet></router-outlet>\r\n</div>"

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
/* harmony import */ var src_services_healthcare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/healthcare-service */ "./src/services/healthcare-service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(healthcareService) {
        this.healthcareService = healthcareService;
        this.title = 'Tas-Asignment';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_healthcare_service__WEBPACK_IMPORTED_MODULE_2__["HealthCareService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-navigation/side-navigation.component */ "./src/app/side-navigation/side-navigation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tas_login_tas_login_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tas-login/tas-login.module */ "./src/app/tas-login/tas-login.module.ts");
/* harmony import */ var _display_info_display_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./display-info/display-info.component */ "./src/app/display-info/display-info.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_6__["SideNavigationComponent"],
                _display_info_display_info_component__WEBPACK_IMPORTED_MODULE_10__["DisplayInfoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _tas_login_tas_login_module__WEBPACK_IMPORTED_MODULE_9__["TasLoginModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-info/display-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/display-info/display-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <form class=\"\" role=\"form\" *ngIf=\"healthcareService.user\">\r\n          <h2>Patient Info</h2>\r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\" class=\"col-sm-3 control-label\">First Name</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" id=\"firstName\" placeholder=\"First Name\" class=\"form-control\" name=\"fname\" [value]=\"healthcareService.userPersonalInfo.Name\" autofocus>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\" class=\"col-sm-3 control-label\">Email </label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" name=\"email\" [value]=\"healthcareService.userPersonalInfo.Email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"phoneNumber\" class=\"col-sm-12 control-label\">Phone number </label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"phoneNumber\" id=\"phoneNumber\" placeholder=\"Phone number\" class=\"form-control\" [value]=\"healthcareService.userPersonalInfo.Phone\">\r\n              <!-- <span class=\"help-block\">Your phone number won't be disclosed anywhere </span> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"birthDate\" class=\"col-sm-3 control-label\">Age</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" id=\"birthDate\" placeholder=\"Age\" class=\"form-control\" [value]=\"healthcareService.userPersonalInfo.Age\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lastName\" class=\"col-sm-5 control-label\">Heart Disease</label>\r\n            <div class=\"col-sm-7\">\r\n              <mat-radio-group aria-label=\"Select an option\">\r\n                <mat-radio-button value=\"true\" [value]=\"healthcareService.userMedicalCondition.HeartDisease\" [checked]=\"healthcareService.userMedicalCondition.HeartDisease\" >Yes</mat-radio-button>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <mat-radio-button value=\"false\" [value]=\"healthcareService.userMedicalCondition.HeartDisease\" [checked]=\"!healthcareService.userMedicalCondition.HeartDisease\" >No</mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lastName\" class=\"col-sm-5 control-label\">Diabetics</label>\r\n            <div class=\"col-sm-7\">\r\n              <mat-radio-group aria-label=\"Select an option\">\r\n                <mat-radio-button value=\"true\" [value]=\"healthcareService.userMedicalCondition.Diabetics\" [checked]=\"!healthcareService.userMedicalCondition.Diabetics\" >Yes</mat-radio-button>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <mat-radio-button value=\"false\" [value]=\"healthcareService.userMedicalCondition.Diabetics\" [checked]=\"healthcareService.userMedicalCondition.Diabetics\" >No</mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lastName\" class=\"col-sm-5 control-label\">Blood Pressure</label>\r\n            <div class=\"col-sm-7\">\r\n              <mat-radio-group aria-label=\"Select an option\">\r\n                <mat-radio-button value=\"true\" [value]=\"healthcareService.userMedicalCondition.BloodPressure.HighBP\" [checked]=\"healthcareService.userMedicalCondition.BloodPressure.HighBP\" >High</mat-radio-button>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <mat-radio-button value=\"false\" [value]=\"healthcareService.userMedicalCondition.BloodPressure.LowBP\" [checked]=\"healthcareService.userMedicalCondition.BloodPressure.LowBP\" >Low</mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-12 control-label\">Health Status</label>\r\n            <hr>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"Height\" class=\"col-sm-3 control-label\">Height </label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" id=\"height\" placeholder=\"Please write your height in centimetres\"\r\n                class=\"form-control\" [value]=\"healthcareService.userHealthStatus.Height\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"weight\" class=\"col-sm-3 control-label\">Weight</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" id=\"weight\" placeholder=\"Please write your weight in kilograms\" class=\"form-control\" [value]=\"healthcareService.userHealthStatus.Weight\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"birthDate\" class=\"col-sm-3 control-label\">Pulse Rate</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" id=\"pulserate\" placeholder=\"Pulse Rate\" class=\"form-control\"[value]=\"healthcareService.userHealthStatus.PulseRate\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"birthDate\" class=\"col-sm-3 control-label\">BP</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" id=\"bp\" placeholder=\"High/Low\" class=\"form-control\" [value]=\"healthcareService.userHealthStatus.BP\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"birthDate\" class=\"col-sm-3 control-label\">BMI</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" id=\"bmi\" placeholder=\"BMI\" class=\"form-control\" [value]=\"healthcareService.userHealthStatus.BMI\">\r\n            </div>\r\n          </div>\r\n\r\n         \r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!--container end.//-->\r\n\r\n<br><br>\r\n<article class=\"bg-secondary mb-3\">\r\n  <!-- <div class=\"card-body text-center\">\r\n  </div>\r\n  <br><br> -->\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/display-info/display-info.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/display-info/display-info.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*[role=\"form\"] {\n  max-width: 530px;\n  padding: 15px;\n  border-radius: 0.3em; }\n\n*[role=\"form\"] h2 {\n  font-family: 'Open Sans' , sans-serif;\n  font-size: 40px;\n  font-weight: 600;\n  color: #000000;\n  margin-top: 5%;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS1pbmZvL0Q6XFxyZC13b3Jrc3BhY2VcXHRhcy1hcHBcXHRhcy1hc3NpZ25tZW50LXJhaHVsLWRhcGtlXFxmcm9udGVuZC9zcmNcXGFwcFxcZGlzcGxheS1pbmZvXFxkaXNwbGF5LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUViLG9CQUFvQixFQUFBOztBQUl4QjtFQUNJLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktaW5mby9kaXNwbGF5LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqW3JvbGU9XCJmb3JtXCJdIHtcclxuICAgIG1heC13aWR0aDogNTMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIC8vICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuKltyb2xlPVwiZm9ybVwiXSBoMiB7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnICwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/display-info/display-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/display-info/display-info.component.ts ***!
  \********************************************************/
/*! exports provided: DisplayInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayInfoComponent", function() { return DisplayInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_healthcare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/healthcare-service */ "./src/services/healthcare-service.ts");




var DisplayInfoComponent = /** @class */ (function () {
    function DisplayInfoComponent(router, healthcareService) {
        this.router = router;
        this.healthcareService = healthcareService;
    }
    DisplayInfoComponent.prototype.ngOnInit = function () {
        //debugger
        if (!localStorage.getItem('user_data')) {
            this.router.navigate(['/login']);
        }
    };
    DisplayInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-info',
            template: __webpack_require__(/*! ./display-info.component.html */ "./src/app/display-info/display-info.component.html"),
            styles: [__webpack_require__(/*! ./display-info.component.scss */ "./src/app/display-info/display-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_services_healthcare_service__WEBPACK_IMPORTED_MODULE_3__["HealthCareService"]])
    ], DisplayInfoComponent);
    return DisplayInfoComponent;
}());



/***/ }),

/***/ "./src/app/side-navigation/side-navigation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/side-navigation/side-navigation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n      [opened]=\"(isHandset$ | async) === false\">\r\n    <mat-toolbar>Profile</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item href=\"#\" *ngIf=\"healthcareService.user\">{{healthcareService.user}}</a>\r\n      <a mat-list-item href=\"#\" *ngIf=\"healthcareService.user\" (click)=\"patientLogout()\">Log Out</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>Tas-Asignment</span>\r\n    </mat-toolbar>\r\n    <router-outlet></router-outlet>\r\n    <!-- Add Content Here -->\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/side-navigation/side-navigation.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/side-navigation/side-navigation.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1uYXZpZ2F0aW9uL0Q6XFxyZC13b3Jrc3BhY2VcXHRhcy1hcHBcXHRhcy1hc3NpZ25tZW50LXJhaHVsLWRhcGtlXFxmcm9udGVuZC9zcmNcXGFwcFxcc2lkZS1uYXZpZ2F0aW9uXFxzaWRlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWRlLW5hdmlnYXRpb24vc2lkZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/side-navigation/side-navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/side-navigation/side-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: SideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationComponent", function() { return SideNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_healthcare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/healthcare-service */ "./src/services/healthcare-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SideNavigationComponent = /** @class */ (function () {
    function SideNavigationComponent(router, breakpointObserver, healthcareService) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.healthcareService = healthcareService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    SideNavigationComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('user_data')) {
            this.router.navigate(['/login']);
        }
    };
    SideNavigationComponent.prototype.patientLogout = function () {
        if (localStorage.getItem('user_data')) {
            localStorage.removeItem('user_data');
            this.router.navigate(['/login']);
        }
    };
    SideNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-navigation',
            template: __webpack_require__(/*! ./side-navigation.component.html */ "./src/app/side-navigation/side-navigation.component.html"),
            styles: [__webpack_require__(/*! ./side-navigation.component.scss */ "./src/app/side-navigation/side-navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _services_healthcare_service__WEBPACK_IMPORTED_MODULE_4__["HealthCareService"]])
    ], SideNavigationComponent);
    return SideNavigationComponent;
}());



/***/ }),

/***/ "./src/app/tas-login/tas-login-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/tas-login/tas-login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TasLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasLoginRoutingModule", function() { return TasLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tas_login_tas_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tas-login/tas-login.component */ "./src/app/tas-login/tas-login/tas-login.component.ts");




var routes = [{
        path: 'login', component: _tas_login_tas_login_component__WEBPACK_IMPORTED_MODULE_3__["TasLoginComponent"]
    }];
var TasLoginRoutingModule = /** @class */ (function () {
    function TasLoginRoutingModule() {
    }
    TasLoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TasLoginRoutingModule);
    return TasLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/tas-login/tas-login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tas-login/tas-login.module.ts ***!
  \***********************************************/
/*! exports provided: TasLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasLoginModule", function() { return TasLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tas_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tas-login-routing.module */ "./src/app/tas-login/tas-login-routing.module.ts");
/* harmony import */ var _tas_login_tas_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tas-login/tas-login.component */ "./src/app/tas-login/tas-login/tas-login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var TasLoginModule = /** @class */ (function () {
    function TasLoginModule() {
    }
    TasLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tas_login_tas_login_component__WEBPACK_IMPORTED_MODULE_4__["TasLoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _tas_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["TasLoginRoutingModule"]
            ]
        })
    ], TasLoginModule);
    return TasLoginModule;
}());



/***/ }),

/***/ "./src/app/tas-login/tas-login/tas-login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tas-login/tas-login/tas-login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    <div class=\"loginmodal-container\">\r\n      <h1>Login</h1><br>\r\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && patientLogin()\" #f=\"ngForm\" novalidate>\r\n      <input type=\"text\" name=\"user\" placeholder=\"Enter your Email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" [(ngModel)]=\"user.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required>\r\n      <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-text\" class=\"aler alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">Email is required</div>\r\n      </div>\r\n      <div *ngIf=\"email.errors &&(email.touched || email.dirty)\" class=\"aler alert-danger\">\r\n        <div [hidden]=\"!email.errors?.pattern\">\r\n          Invalid pattern\r\n        </div>\r\n       \r\n      </div>\r\n      <input type=\"password\" name=\"pass\" placeholder=\"Enter your password\" [(ngModel)]=\"user.password\" #pass=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && pass.invalid }\" required>\r\n      <div *ngIf=\"f.submitted && pass.invalid\" class=\"invalid-text\" class=\"aler alert-danger\">\r\n        <div *ngIf=\"pass.errors.required\">Password is required</div>\r\n      </div>\r\n      <!-- <input type=\"submit\" name=\"login\" class=\"login loginmodal-submit\" value=\"Login\"> -->\r\n      <button type=\"submit\">Login</button>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tas-login/tas-login/tas-login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/tas-login/tas-login/tas-login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginmodal-container {\n  padding: 30px;\n  max-width: 350px;\n  width: 100% !important;\n  background-color: #F7F7F7;\n  margin: 0 auto;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  font-family: roboto; }\n\n.loginmodal-container h1 {\n  text-align: center;\n  font-size: 1.8em;\n  font-family: roboto; }\n\n.loginmodal-container input[type=submit] {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  position: relative; }\n\n.loginmodal-container input[type=text], input[type=password] {\n  height: 44px;\n  font-size: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-top: 1px solid #c0c0c0;\n  /* border-radius: 2px; */\n  padding: 0 8px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box; }\n\n.loginmodal-container input[type=text]:hover, input[type=password]:hover {\n  border: 1px solid #b9b9b9;\n  border-top: 1px solid #a0a0a0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.loginmodal {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  padding: 0 8px; }\n\n.loginmodal-submit {\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  background-color: #4d90fe;\n  padding: 17px 0px;\n  font-family: roboto;\n  font-size: 14px; }\n\n.loginmodal-submit:hover {\n  border: 0px;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  background-color: #357ae8; }\n\n.loginmodal-container a {\n  text-decoration: none;\n  color: #666;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  -webkit-transition: opacity ease 0.5s;\n  transition: opacity ease 0.5s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzLWxvZ2luL3Rhcy1sb2dpbi9EOlxccmQtd29ya3NwYWNlXFx0YXMtYXBwXFx0YXMtYXNzaWdubWVudC1yYWh1bC1kYXBrZVxcZnJvbnRlbmQvc3JjXFxhcHBcXHRhcy1sb2dpblxcdGFzLWxvZ2luXFx0YXMtbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix3QkFBQTtFQUNBLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUc3Qiw4Q0FBMkMsRUFBQTs7QUFHN0M7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHFDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVztFQUNYLHFDQUFrQztFQUNsQyx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixxQ0FBNkI7RUFBN0IsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YXMtbG9naW4vdGFzLWxvZ2luL3Rhcy1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2lubW9kYWwtY29udGFpbmVyIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIH1cclxuICBcclxuICAubG9naW5tb2RhbC1jb250YWluZXIgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAubG9naW5tb2RhbC1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2MwYzBjMDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDJweDsgKi9cclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2lubW9kYWwtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06aG92ZXIsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOWI5Yjk7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2EwYTBhMDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbm1vZGFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAubG9naW5tb2RhbC1zdWJtaXQge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDAsMCwwLDAuMSk7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRkOTBmZTtcclxuICAgIHBhZGRpbmc6IDE3cHggMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2lubW9kYWwtc3VibWl0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTdhZTg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbm1vZGFsLWNvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjVzO1xyXG4gIH0gXHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/tas-login/tas-login/tas-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tas-login/tas-login/tas-login.component.ts ***!
  \************************************************************/
/*! exports provided: TasLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasLoginComponent", function() { return TasLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_healthcare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/healthcare-service */ "./src/services/healthcare-service.ts");
/* harmony import */ var _models_patient_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../models/patient-data */ "./src/models/patient-data.ts");





var TasLoginComponent = /** @class */ (function () {
    function TasLoginComponent(router, healthcareService) {
        this.router = router;
        this.healthcareService = healthcareService;
        this.user = new _models_patient_data__WEBPACK_IMPORTED_MODULE_4__["PatientData"]();
    }
    TasLoginComponent.prototype.ngOnInit = function () {
        console.log(this.user);
    };
    TasLoginComponent.prototype.Click = function () {
        this.router.navigate(['/patient-info']);
    };
    TasLoginComponent.prototype.patientLogin = function () {
        var _this = this;
        if (this.user.email && this.user.password) {
            this.healthcareService.patientLogin(this.user).subscribe(function (user) {
                if (user) {
                    localStorage.setItem('user_data', JSON.stringify(user));
                    alert('Signed in Successfully');
                    _this.router.navigate(['/patient-info']);
                }
            }, function (err) {
                //alert(err);
            });
        }
    };
    TasLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tas-login',
            template: __webpack_require__(/*! ./tas-login.component.html */ "./src/app/tas-login/tas-login/tas-login.component.html"),
            styles: [__webpack_require__(/*! ./tas-login.component.scss */ "./src/app/tas-login/tas-login/tas-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_healthcare_service__WEBPACK_IMPORTED_MODULE_3__["HealthCareService"]])
    ], TasLoginComponent);
    return TasLoginComponent;
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
    production: false,
    url: 'http://localhost:3000/api/'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/patient-data.ts":
/*!************************************!*\
  !*** ./src/models/patient-data.ts ***!
  \************************************/
/*! exports provided: PatientData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientData", function() { return PatientData; });
var PatientData = /** @class */ (function () {
    function PatientData() {
    }
    return PatientData;
}());



/***/ }),

/***/ "./src/services/healthcare-service.ts":
/*!********************************************!*\
  !*** ./src/services/healthcare-service.ts ***!
  \********************************************/
/*! exports provided: HealthCareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCareService", function() { return HealthCareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HealthCareService = /** @class */ (function () {
    function HealthCareService(router, http) {
        this.router = router;
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
    }
    HealthCareService.prototype.patientLogin = function (patient) {
        return this.http
            .post(this.url + "patientLogin", patient)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrorObservable));
    };
    HealthCareService.prototype.getPatientHealthInfo = function () {
        return this.http
            .get(this.url + "getPatientHealthInfo")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleErrorObservable));
    };
    Object.defineProperty(HealthCareService.prototype, "user", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user_data'));
            if (user) {
                return user["Personal info"].Name;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthCareService.prototype, "userPersonalInfo", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user_data'));
            if (user) {
                return user["Personal info"];
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthCareService.prototype, "userMedicalCondition", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user_data'));
            if (user) {
                return user["Medical Condition"];
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthCareService.prototype, "userHealthStatus", {
        get: function () {
            var user = JSON.parse(localStorage.getItem('user_data'));
            if (user) {
                return user["Health Status"];
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    HealthCareService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    HealthCareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HealthCareService);
    return HealthCareService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\rd-workspace\tas-app\tas-assignment-rahul-dapke\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map