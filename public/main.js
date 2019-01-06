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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/auth.service.ts":
/*!*************************************!*\
  !*** ./src/app/api/auth.service.ts ***!
  \*************************************/
/*! exports provided: AuthService, User, LoginSubmission, SignupSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSubmission", function() { return LoginSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSubmission", function() { return SignupSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl;
var AuthService = /** @class */ (function () {
    function AuthService(myHttpServ, myRouterServ) {
        this.myHttpServ = myHttpServ;
        this.myRouterServ = myRouterServ;
    }
    //POST /api/login
    AuthService.prototype.postLogin = function (loginInfo) {
        var _this = this;
        return this.myHttpServ
            .post(backendUrl + "/api/login", loginInfo, { withCredentials: true })
            .toPromise()
            .then(function (response) {
            //update currentuser if loggedIn successfully
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    //POST /api/signup
    AuthService.prototype.postSignup = function (signupInfo) {
        var _this = this;
        return this.myHttpServ
            .post(backendUrl + "/api/signup", signupInfo, { withCredentials: true })
            .toPromise()
            .then(function (response) {
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    //DELETE /api/logout
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.myHttpServ
            .delete(backendUrl + "/api/logout", { withCredentials: true })
            .toPromise()
            .then(function (response) {
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    //GET /api/checklogin
    AuthService.prototype.check = function () {
        var _this = this;
        return this.myHttpServ
            .get(backendUrl + "/api/checklogin", { withCredentials: true })
            .toPromise()
            .then(function (response) {
            _this.currentUser = response.userDoc;
            return response;
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.currentUser) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var LoginSubmission = /** @class */ (function () {
    function LoginSubmission() {
    }
    return LoginSubmission;
}());

var SignupSubmission = /** @class */ (function () {
    function SignupSubmission() {
    }
    return SignupSubmission;
}());



/***/ }),

/***/ "./src/app/api/match.service.ts":
/*!**************************************!*\
  !*** ./src/app/api/match.service.ts ***!
  \**************************************/
/*! exports provided: MatchService, Match, TripInMatch, newMatchSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchService", function() { return MatchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripInMatch", function() { return TripInMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newMatchSubmission", function() { return newMatchSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl;
var MatchService = /** @class */ (function () {
    function MatchService(myHttpServ, myRouterServ) {
        this.myHttpServ = myHttpServ;
        this.myRouterServ = myRouterServ;
    }
    MatchService.prototype.getMatchRequests = function () {
        return this.myHttpServ
            .get(backendUrl + "/api/matches", { withCredentials: true })
            .toPromise();
    };
    MatchService.prototype.createMatchRequest = function (tripId, matchId) {
        return this.myHttpServ
            .post(backendUrl + "/api/trip/" + tripId + "/matches", { matchId: matchId }, { withCredentials: true })
            .toPromise();
    };
    MatchService.prototype.changeMatchStatus = function (matchId, isDriver) {
        return this.myHttpServ
            .put(backendUrl + "/api/match/" + matchId, { isDriver: isDriver }, { withCredentials: true })
            .toPromise();
    };
    MatchService.prototype.deleteMatch = function (matchId) {
        return this.myHttpServ
            .delete(backendUrl + "/api/match/" + matchId, { withCredentials: true })
            .toPromise();
    };
    MatchService.prototype.checkMatch = function (tripId) {
        return this.myHttpServ
            .get(backendUrl + "/api/match/" + tripId + "/status", { withCredentials: true })
            .toPromise();
    };
    MatchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MatchService);
    return MatchService;
}());

var Match = /** @class */ (function () {
    function Match() {
    }
    return Match;
}());

var TripInMatch = /** @class */ (function () {
    function TripInMatch() {
    }
    return TripInMatch;
}());

var newMatchSubmission = /** @class */ (function () {
    function newMatchSubmission() {
    }
    return newMatchSubmission;
}());



/***/ }),

/***/ "./src/app/api/settings.service.ts":
/*!*****************************************!*\
  !*** ./src/app/api/settings.service.ts ***!
  \*****************************************/
/*! exports provided: SettingsService, SettingsSubmission, Address, CarSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsSubmission", function() { return SettingsSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSubmission", function() { return CarSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl;
var SettingsService = /** @class */ (function () {
    function SettingsService(myHttpServ) {
        this.myHttpServ = myHttpServ;
    }
    // POST /api/login
    SettingsService.prototype.postSettings = function (settingsInfo) {
        return this.myHttpServ
            .put(backendUrl + "/api/settings", settingsInfo, {
            withCredentials: true
        })
            .toPromise();
        // .then((response: any) => {
        //   this.currentUser = response.userDoc;
        //   return response;
        // });
    };
    SettingsService.prototype.postCar = function (carInfo) {
        return this.myHttpServ
            .put(backendUrl + "/api/addCar", carInfo, { withCredentials: true })
            .toPromise();
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SettingsService);
    return SettingsService;
}());

var SettingsSubmission = /** @class */ (function () {
    function SettingsSubmission() {
        this.firstName = "";
        this.lastName = "";
        this.phoneNumber = "";
        this.oldPassword = "";
        this.newPassword = "";
        this.pictureURL = "";
        this.gender = "";
        this.licenseNumber = "";
        this.specificNeedsA = [];
    }
    return SettingsSubmission;
}());

var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());

var CarSubmission = /** @class */ (function () {
    function CarSubmission() {
    }
    return CarSubmission;
}());



/***/ }),

/***/ "./src/app/api/trips.service.ts":
/*!**************************************!*\
  !*** ./src/app/api/trips.service.ts ***!
  \**************************************/
/*! exports provided: TripsService, TripInput, Trip, matchedTrip, Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsService", function() { return TripsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripInput", function() { return TripInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchedTrip", function() { return matchedTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl;
var TripsService = /** @class */ (function () {
    function TripsService(myHttpServ, myRouterServ) {
        this.myHttpServ = myHttpServ;
        this.myRouterServ = myRouterServ;
    }
    TripsService.prototype.getTrips = function () {
        return this.myHttpServ
            .get(backendUrl + "/api/trips", { withCredentials: true })
            .toPromise();
    };
    TripsService.prototype.postTrip = function (tripInfo) {
        return this.myHttpServ
            .post(backendUrl + "/api/trips", tripInfo, { withCredentials: true })
            .toPromise();
    };
    TripsService.prototype.getTripDetails = function (tripId) {
        return this.myHttpServ
            .get(backendUrl + "/api/trip/" + tripId, { withCredentials: true })
            .toPromise();
    };
    TripsService.prototype.updateTrip = function (tripId) {
        return this.myHttpServ
            .put(backendUrl + "/api/trip/" + tripId, { withCredentials: true })
            .toPromise();
    };
    TripsService.prototype.deleteTrip = function (tripId) {
        return this.myHttpServ
            .delete(backendUrl + "/api/trip/" + tripId, { withCredentials: true })
            .toPromise();
    };
    TripsService.prototype.getTripMatches = function (tripId) {
        return this.myHttpServ
            .get(backendUrl + "/api/trip/" + tripId + "/matches", { withCredentials: true })
            .toPromise();
    };
    TripsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TripsService);
    return TripsService;
}());

var TripInput = /** @class */ (function () {
    function TripInput() {
    }
    return TripInput;
}());

var Trip = /** @class */ (function () {
    function Trip() {
    }
    return Trip;
}());

var matchedTrip = /** @class */ (function () {
    function matchedTrip() {
    }
    return matchedTrip;
}());

var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./src/app/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _create_trip_create_trip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-trip/create-trip.component */ "./src/app/create-trip/create-trip.component.ts");
/* harmony import */ var _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results-page/results-page.component */ "./src/app/results-page/results-page.component.ts");
/* harmony import */ var _requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requests-page/requests-page.component */ "./src/app/requests-page/requests-page.component.ts");
/* harmony import */ var _user_profile_page_user_profile_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile-page/user-profile-page.component */ "./src/app/user-profile-page/user-profile-page.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _trip_details_page_trip_details_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trip-details-page/trip-details-page.component */ "./src/app/trip-details-page/trip-details-page.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: "", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["LandingPageComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: "settings", component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    {
        path: "dashboard",
        component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_4__["DashboardPageComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "trip/add",
        component: _create_trip_create_trip_component__WEBPACK_IMPORTED_MODULE_5__["CreateTripComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "trip/:tripId",
        component: _trip_details_page_trip_details_page_component__WEBPACK_IMPORTED_MODULE_10__["TripDetailsPageComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "trip/:tripId/results",
        component: _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_6__["ResultsPageComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "requests",
        component: _requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_7__["RequestsPageComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: "profile/:userId",
        component: _user_profile_page_user_profile_page_component__WEBPACK_IMPORTED_MODULE_8__["UserProfilePageComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    { path: "**", component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  display: flex;\n  justify-content: space-between;\n  height: 55px;\n  border-bottom-color: rgba(0, 0, 0, 0.3);\n  border-bottom-width: 2px;\n  border-bottom-style: groove;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: white;\n  z-index: 1;\n}\n\n.navbar img {\n  margin-left: 50px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.navbar .links {\n  margin-right: 50px;\n  margin-top: 20px;\n}\n\n.navbar a {\n  text-decoration: none;\n  color: black;\n  margin-left: 30px;\n  margin-left: 30px;\n}\n\n.active,\n.navbar a:hover {\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"!myAuthServ.currentUser\" class=\"navbar\">\n  <div>\n    <a routerLink=\"/\">\n      <img src=\"../assets/images/logo.png\" alt=\"logo\" width=\"60px\">\n    </a>\n  </div>\n\n  <div class=\"links\">\n    <a routerLink=\"/login\">CONNEXION</a>\n    <a routerLink=\"/signup\">INSCRIPTION</a>\n  </div>\n</nav>\n\n<nav *ngIf=\"myAuthServ.currentUser\" class=\"navbar\">\n  <a routerLink=\"/dashboard\">\n    <img src=\"../assets/images/logo.png\" alt=\"logo\" width=\"60px\">\n  </a>\n\n  <div class=\"links\">\n    <a routerLink=\"/dashboard\">\n      TABLEAU DE BORD\n    </a>\n    <a routerLink=\"/trip/add\">CREER UN TRAJET\n      <fa-icon [icon]=\"faPlusCircle\"></fa-icon>\n    </a>\n    <a routerLink=\"/requests\">REQUETES</a>\n    <a routerLink=\"/\" (click)=\"logoutClick()\">\n      DECONNEXION\n      <fa-icon [icon]=\"faSignOutAlt\"></fa-icon>\n    </a>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(myAuthServ, myRouterServ) {
        this.myAuthServ = myAuthServ;
        this.myRouterServ = myRouterServ;
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusCircle"];
        this.title = "loop";
    }
    AppComponent.prototype.ngOnInit = function () {
        // ask the backend about the login status as soon as the app loads
        this.myAuthServ.check().catch(function (err) {
            alert("We are having trouble connecting. Is your Internet working?");
            console.log(err);
        });
    };
    AppComponent.prototype.logoutClick = function () {
        var _this = this;
        this.myAuthServ
            .logout()
            .then(function (response) {
            _this.myRouterServ.navigateByUrl("/");
        })
            .catch(function (err) {
            alert("Sorry! There was a problem with your log out.");
            console.log(err);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./src/app/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _trip_details_page_trip_details_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trip-details-page/trip-details-page.component */ "./src/app/trip-details-page/trip-details-page.component.ts");
/* harmony import */ var _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./results-page/results-page.component */ "./src/app/results-page/results-page.component.ts");
/* harmony import */ var _requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./requests-page/requests-page.component */ "./src/app/requests-page/requests-page.component.ts");
/* harmony import */ var _user_profile_page_user_profile_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-profile-page/user-profile-page.component */ "./src/app/user-profile-page/user-profile-page.component.ts");
/* harmony import */ var _create_trip_create_trip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-trip/create-trip.component */ "./src/app/create-trip/create-trip.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _dashboard_page_trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard-page/trip-list/trip-list.component */ "./src/app/dashboard-page/trip-list/trip-list.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].GOOGLE_MAP_API_KEY,
                    libraries: ["places"]
                }),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["LandingPageComponent"],
                _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_11__["DashboardPageComponent"],
                _trip_details_page_trip_details_page_component__WEBPACK_IMPORTED_MODULE_12__["TripDetailsPageComponent"],
                _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_13__["ResultsPageComponent"],
                _requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_14__["RequestsPageComponent"],
                _user_profile_page_user_profile_page_component__WEBPACK_IMPORTED_MODULE_15__["UserProfilePageComponent"],
                _create_trip_create_trip_component__WEBPACK_IMPORTED_MODULE_16__["CreateTripComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundPageComponent"],
                _dashboard_page_trip_list_trip_list_component__WEBPACK_IMPORTED_MODULE_19__["TripListComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-trip/create-trip.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-trip/create-trip.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n\nform {\n  display: flex;\n  flex-direction: column;\n  margin-top: 100px;\n}\n\nform .departTime label {\n  padding: 5px;\n}\n\nform .departTime p {\n  display: inline;\n  padding: 5px;\n}\n\nlabel,\ninput,\nbutton {\n  width: 380px;\n  /* height: 60px; */\n  font-size: 1.3em;\n}\n\n.switch-field input {\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  width: 1px;\n  border: 0;\n  overflow: hidden;\n}\n\n.switch-field label {\n  float: left;\n}\n\n.switch-field label {\n  display: inline-block;\n  width: 105px;\n  background-color: #e4e4e4;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1em;\n  font-weight: normal;\n  text-align: center;\n  text-shadow: none;\n  padding: 6px 14px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);\n  transition: all 0.1s ease-in-out;\n}\n\n.switch-field label:hover {\n  cursor: pointer;\n}\n\n.switch-field input:checked + label {\n  background-color: #a5dc86;\n  box-shadow: none;\n}\n\n.switch-field label:first-of-type {\n  border-radius: 4px 0 0 4px;\n}\n\n.switch-field label:last-of-type {\n  border-radius: 0 4px 4px 0;\n}\n\n.login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n\n.form {\n  position: relative;\n  z-index: 1;\n  background: #ffffff;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n  width: 400px;\n}\n\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #5cc9a0;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  margin-top: 15px;\n  color: #ffffff;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.form .button:hover,\n.form .button:active,\n.form .button:focus {\n  background: #5cc9a0;\n}\n\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n\n.form .message a {\n  color: #fe5d6a;\n  text-decoration: none;\n}\n\n.form .register-form {\n  display: none;\n}\n\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n\n.container:before,\n.container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n\n.container .info span .fa {\n  color: #ef3b3a;\n}\n\n.departTime {\n  margin-bottom: 12px;\n}\n"

/***/ }),

/***/ "./src/app/create-trip/create-trip.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-trip/create-trip.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <form (ngSubmit)=\"tripSubmit()\" class=\"form\">\n\n    <div class=\"form-group\">\n      <label for=\"departAddress\">Mon point de départ :</label>\n      <input type=\"text\" name=\"departAddress\" id=\"departAddress\" placeholder=\"Adresse de départ\" autocorrect=\"off\" autocapitalize=\"off\"\n        spellcheck=\"off\" class=\"form-control\" #searchDep [formControl]=\"searchControl\">\n    </div>\n\n\n    <label for=\"arrivalAddress\">Mon point d'arrivée :</label>\n    <input type=\"text\" name=\"arrivalAddress.string\" id=\"arrivalAddress\" placeholder=\"Adresse d'arrivée\" autocorrect=\"off\" autocapitalize=\"off\"\n      spellcheck=\"off\" class=\"form-control\" #searchArr [formControl]=\"searchControl\">\n\n    <div class=\"date\">\n      <label for=\"departDate\">Date :</label>\n      <input [(ngModel)]=\"tripForm.departDate\" name=\"departDate\" id=\"departDate\" type=\"date\" min=\"2018-01-01\">\n    </div>\n\n    <div class=\"departTime\">\n      <label for=\"departHour\">Heure :</label>\n      <select [(ngModel)]=\"tripForm.departHour\" name=\"departHour\">\n        <option value=\"00\">00</option>\n        <option value=\"01\">01</option>\n        <option value=\"02\">02</option>\n        <option value=\"03\">03</option>\n        <option value=\"04\">04</option>\n        <option value=\"05\">05</option>\n        <option value=\"06\">06</option>\n        <option value=\"07\">07</option>\n        <option value=\"08\">08</option>\n        <option value=\"09\">09</option>\n        <option value=\"10\">10</option>\n        <option value=\"11\">11</option>\n        <option value=\"12\">12</option>\n        <option value=\"13\">13</option>\n        <option value=\"14\">14</option>\n        <option value=\"15\">15</option>\n        <option value=\"16\">16</option>\n        <option value=\"17\">17</option>\n        <option value=\"18\">18</option>\n        <option value=\"19\">19</option>\n        <option value=\"20\">20</option>\n        <option value=\"21\">21</option>\n        <option value=\"22\">22</option>\n        <option value=\"23\">23</option>\n\n      </select>\n\n      <p>h</p>\n\n      <select [(ngModel)]=\"tripForm.departMin\" name=\"departMin\">\n        <option value=\"00\" selected>00</option>\n        <option value=\"05\">05</option>\n        <option value=\"10\">10</option>\n        <option value=\"15\">15</option>\n        <option value=\"20\">20</option>\n        <option value=\"25\">25</option>\n        <option value=\"30\">30</option>\n        <option value=\"35\">35</option>\n        <option value=\"40\">40</option>\n        <option value=\"45\">45</option>\n        <option value=\"50\">50</option>\n        <option value=\"55\">55</option>\n      </select>\n    </div>\n\n    <!-- if Conducteur -->\n    <!-- <select *ngIf=\"userData?.isDriver\" [(ngModel)]=\"tripForm.car\" name=\"car\">\n    <option *ngFor=\"let oneCar of userData?.cars\" value=\"{{oneCar.model}}\">{{oneCar.model}}</option>\n  </select> -->\n\n    <!-- if Passenger -->\n    <!-- <select *ngIf=\"!userData?.isDriver\" [(ngModel)]=\"tripForm.specificNeeds\" name=\"specificNeeds\">\n    <option *ngFor=\"let oneNeed of userData?.specificNeedsA\" value=\"{{oneNeed}}\">{{oneNeed}}</option>\n    <option value=\"{{userData?.specificNeedsB}}\">{{userData?.specificNeedsB}}</option>\n  </select> -->\n\n    <label for=\"comment\">Des commentaires ?</label>\n    <textarea [(ngModel)]=\"tripForm.comment\" name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\"></textarea>\n\n    <button>Poster ce trajet</button>\n\n    <p class=\"message\">\n      <a routerLink=\"/dashboard\">Annuler</a>\n    </p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/create-trip/create-trip.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-trip/create-trip.component.ts ***!
  \******************************************************/
/*! exports provided: CreateTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTripComponent", function() { return CreateTripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_trips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/trips.service */ "./src/app/api/trips.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateTripComponent = /** @class */ (function () {
    function CreateTripComponent(myTripsServ, myRouterServ, mapsAPILoader, ngZone, myAuthServ) {
        this.myTripsServ = myTripsServ;
        this.myRouterServ = myRouterServ;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.myAuthServ = myAuthServ;
        this.tripForm = new _api_trips_service__WEBPACK_IMPORTED_MODULE_2__["TripInput"]();
    }
    CreateTripComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get user data
        this.getUserInfo();
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocompleteDep = new google.maps.places.Autocomplete(_this.searchDepElementRef.nativeElement, {
                types: ["address"]
            });
            autocompleteDep.setComponentRestrictions({ country: "fr" });
            autocompleteDep.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the arrival place result
                    var placeDep = autocompleteDep.getPlace();
                    //verify result
                    if (placeDep.geometry === undefined || placeDep.geometry === null) {
                        return;
                    }
                    //set departure address string, latitude, longitude
                    _this.tripForm.startLatitude = placeDep.geometry.location.lat();
                    _this.tripForm.startLongitude = placeDep.geometry.location.lng();
                    _this.tripForm.startAddress = placeDep.formatted_address;
                });
            });
            var autocompleteArr = new google.maps.places.Autocomplete(_this.searchArrElementRef.nativeElement, {
                types: ["address"]
            });
            autocompleteArr.setComponentRestrictions({ country: "fr" });
            autocompleteArr.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the arrival place result
                    var placeArr = autocompleteArr.getPlace();
                    //verify result
                    if (placeArr.geometry === undefined || placeArr.geometry === null) {
                        return;
                    }
                    //set arrival address string, latitude, longitude
                    _this.tripForm.endLatitude = placeArr.geometry.location.lat();
                    _this.tripForm.endLongitude = placeArr.geometry.location.lng();
                    _this.tripForm.endAddress = placeArr.formatted_address;
                });
            });
        });
    };
    CreateTripComponent.prototype.tripSubmit = function () {
        var _this = this;
        this.myTripsServ
            .postTrip(this.tripForm)
            .then(function (tripDoc) {
            _this.myRouterServ.navigateByUrl("/trip/" + tripDoc._id + "/results");
            _this.tripForm = new _api_trips_service__WEBPACK_IMPORTED_MODULE_2__["TripInput"]();
        })
            .catch(function (err) {
            alert("Un problème est survenu, nous n'avons pas réussi à créer le trajet.");
            console.log(err);
        });
    };
    CreateTripComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.myAuthServ
            .check()
            .then(function (response) {
            _this.userData = response.userDoc;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("searchDep"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateTripComponent.prototype, "searchDepElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("searchArr"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreateTripComponent.prototype, "searchArrElementRef", void 0);
    CreateTripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-trip",
            template: __webpack_require__(/*! ./create-trip.component.html */ "./src/app/create-trip/create-trip.component.html"),
            styles: [__webpack_require__(/*! ./create-trip.component.css */ "./src/app/create-trip/create-trip.component.css")]
        }),
        __metadata("design:paramtypes", [_api_trips_service__WEBPACK_IMPORTED_MODULE_2__["TripsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CreateTripComponent);
    return CreateTripComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2,\nh3,\nh4 {\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  text-align: center;\n}\n\n/* .border {\n  border-color: rgb(0, 0, 0, 0.2);\n  border-width: 1px;\n  border-style: groove;\n} */\n\n.dash {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin-top: 100px;\n}\n\n.dash img {\n  -ms-grid-row-align: center;\n      align-self: center;\n  width: 300px;\n}\n\n.user-info {\n  /* display: flex;\n  flex-direction: column;\n  justify-content: flex-end; */\n  width: 45%;\n}\n\n.user-info .bg-box {\n  background-color: #ddd;\n  border-radius: 5px;\n  padding: 2%;\n  margin: 2%;\n}\n\n.left {\n  margin-left: 65px;\n}\n\n.user-info span {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.user-info span a {\n  color: #fe5d6a;\n}\n\n.user-info ul {\n  height: 160px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.user-info li {\n  padding: 30px 10px;\n  list-style-type: none;\n}\n\n.user-cars {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dash\">\n    <div>\n        <h1>Bonjour, {{userData?.firstName}} {{userData?.lastName}} !</h1>\n        <img [src]=\"userData?.pictureURL\">\n    </div>\n\n    <div class=\"user-info left\">\n        <div class=\"bg-box\">\n            <span>\n                <h3>Données personnelles</h3>\n                <b>\n                    <a routerLink=\"/settings\">\n                        <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                    </a>\n                </b>\n            </span>\n\n            <div class=\"border\">\n                <ul>\n                    <li *ngIf=\"userData?.gender\">{{userData?.gender}}</li>\n                    <li>\n                        <fa-icon [icon]=\"faMobileAlt\"></fa-icon>: {{userData?.phoneNumber}}</li>\n                    <li>\n                        <fa-icon [icon]=\"faEnvelope\"></fa-icon>: {{userData?.email}}</li>\n                    <li *ngIf=\"userData?.isDriver\">Numéro de permis: {{userData?.licenseNumber}}</li>\n                    <li>\n                        <fa-icon [icon]=\"faKey\"></fa-icon>: •••••••</li>\n                </ul>\n            </div>\n         </div>\n\n         <div class=\"bg-box\">\n\n            <div *ngIf=\"userData?.cars.length > 0\" class=\"user-cars\">\n                <span>\n                    <h3>\n                        Mes voitures\n                    </h3>\n                    <b>\n                        <a routerLink=\"/settings\">\n                            <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                        </a>\n                    </b>\n                </span>\n\n                <div class=\"border\">\n                    <ul *ngFor=\"let oneCar of userData?.cars\">\n                        <li>Marque: {{oneCar.brand}}</li>\n                        <li>Modèle: {{oneCar.model}}</li>\n                        <li>Couleur: {{oneCar.color}}</li>\n                        <li>Plaque: {{oneCar.licensePlate}}</li>\n                        <li>Nombre de sièges: {{oneCar.numberOfSeats}}</li>\n                    </ul>\n                </div>\n            </div>\n        \n\n            <div *ngIf=\"!userData?.isDriver\">\n                <span>\n                    <h3>\n                        <i>Comment pouvons nous vous aider ?</i>\n                    </h3>\n                    <b>\n                        <a routerLink=\"/settings\">\n                            <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                        </a>\n                    </b>\n                </span>\n                <ul>\n                    <li *ngFor=\"let oneNeed of userData?.specificNeedsA\">{{oneNeed}}</li>\n                    <li *ngIf=\"userData?.specificNeedsB\">{{userData?.specificNeedsB}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<app-trip-list></app-trip-list>"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _api_trips_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/trips.service */ "./src/app/api/trips.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _api_match_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/match.service */ "./src/app/api/match.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent(myAuthServ, myTripServ, myMatchServ) {
        this.myAuthServ = myAuthServ;
        this.myTripServ = myTripServ;
        this.myMatchServ = myMatchServ;
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPencilAlt"];
        this.faMobileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMobileAlt"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"];
        this.faKey = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faKey"];
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
    };
    DashboardPageComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.myAuthServ
            .check()
            .then(function (response) {
            _this.userData = response.userDoc;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    DashboardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dashboard-page",
            template: __webpack_require__(/*! ./dashboard-page.component.html */ "./src/app/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-page.component.css */ "./src/app/dashboard-page/dashboard-page.component.css")]
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _api_trips_service__WEBPACK_IMPORTED_MODULE_2__["TripsService"],
            _api_match_service__WEBPACK_IMPORTED_MODULE_4__["MatchService"]])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-page/trip-list/trip-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-page/trip-list/trip-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 0;\n  padding: 0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 50px;\n  margin: 40px 0px 20px;\n  align-items: center;\n  color: #55c9a0;\n}\n\n.header a {\n  margin: 0 50px;\n  text-decoration: none;\n}\n\n/* .header .requests {\n  width: 50px;\n  animation: shake 0.75s;\n  animation-iteration-count: infinite;\n} */\n\n/* @keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n} */\n\n.links {\n  align-content: flex-end;\n  padding-bottom: 20px;\n}\n\n#customers {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td {\n  /* border: 1px solid #ddd; */\n  padding: 8px;\n}\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers tr:hover {\n  background-color: #ddd;\n}\n\nbutton {\n  background-color: #fe5d6a;\n  border: none;\n  color: white;\n  font-size: 15px;\n  border-radius: 28px;\n  height: 50px;\n  margin: 0 2px auto;\n}\n\nbutton a {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/dashboard-page/trip-list/trip-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-page/trip-list/trip-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"header\">\n  <h1>Trajets à venir:</h1>\n\n  <span class=\"links\">\n    <button>\n      <a routerLink=\"/trip/add\">CREER UN TRAJET</a>\n    </button>\n    <button class=\"requests\">\n      <a routerLink=\"/requests\">\n        REQUÊTES EN ATTENTE\n      </a>\n    </button>\n  </span>\n</span>\n\n<table id=\"customers\">\n  <tr *ngFor=\"let trip of tripData\">\n    <td>{{trip?.startLocation.string}} - {{trip?.endLocation.string}}</td>\n    <td>{{trip?.departDateAndTime | date: \"dd/MM/yy\"}}</td>\n    <td>{{trip?.departDateAndTime | date: \"HH:mm\"}}</td>\n    <td>\n      <a routerLink=\"/trip/{{trip._id}}\">\n        <img src=\"../../../assets/images/details-icon.png\" width=\"30px\">\n      </a>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/dashboard-page/trip-list/trip-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-page/trip-list/trip-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: TripListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripListComponent", function() { return TripListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_trips_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/trips.service */ "./src/app/api/trips.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripListComponent = /** @class */ (function () {
    function TripListComponent(myTripServ) {
        this.myTripServ = myTripServ;
        this.tripData = [];
    }
    TripListComponent.prototype.ngOnInit = function () {
        this.getUserTrips();
    };
    TripListComponent.prototype.getUserTrips = function () {
        var _this = this;
        this.myTripServ.getTrips()
            .then(function (results) {
            _this.tripData = results;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TripListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-list',
            template: __webpack_require__(/*! ./trip-list.component.html */ "./src/app/dashboard-page/trip-list/trip-list.component.html"),
            styles: [__webpack_require__(/*! ./trip-list.component.css */ "./src/app/dashboard-page/trip-list/trip-list.component.css")]
        }),
        __metadata("design:paramtypes", [_api_trips_service__WEBPACK_IMPORTED_MODULE_1__["TripsService"]])
    ], TripListComponent);
    return TripListComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(myAuthServ, myRoute) {
        this.myAuthServ = myAuthServ;
        this.myRoute = myRoute;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.myAuthServ.check()
            .then(function (result) {
            if (!_this.myAuthServ.isLoggedIn()) {
                _this.myRoute.navigateByUrl("/login");
                return false;
            }
            return true;
        })
            .catch(function (err) {
            _this.myRoute.navigateByUrl("/login");
            return false;
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n@import \"https://fonts.googleapis.com/css?family=Roboto\";\n/* couleurs :\nvert : #5cc9a0, rgb(92, 201, 160)\nrose : fe5d6a, rgb(240, 240, 240)\nbg gris : #F0F0F0, rgb(240, 240, 240)\n\n\nFont : Roboto, Arial, sans-serif; */\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('fontawesome-webfont.eot?v=4.7.0');\n  src: url('fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('fontawesome-webfont.woff?v=4.7.0') format('woff'), url('fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.fa-handshake-o:before {\n  content: \"\\f2b5\";\n}\n.fa-envelope-open:before {\n  content: \"\\f2b6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\f2b7\";\n}\n.fa-linode:before {\n  content: \"\\f2b8\";\n}\n.fa-address-book:before {\n  content: \"\\f2b9\";\n}\n.fa-address-book-o:before {\n  content: \"\\f2ba\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\f2bb\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\f2bc\";\n}\n.fa-user-circle:before {\n  content: \"\\f2bd\";\n}\n.fa-user-circle-o:before {\n  content: \"\\f2be\";\n}\n.fa-user-o:before {\n  content: \"\\f2c0\";\n}\n.fa-id-badge:before {\n  content: \"\\f2c1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\f2c2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\f2c3\";\n}\n.fa-quora:before {\n  content: \"\\f2c4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n.fa-telegram:before {\n  content: \"\\f2c6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n.fa-shower:before {\n  content: \"\\f2cc\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\f2cd\";\n}\n.fa-podcast:before {\n  content: \"\\f2ce\";\n}\n.fa-window-maximize:before {\n  content: \"\\f2d0\";\n}\n.fa-window-minimize:before {\n  content: \"\\f2d1\";\n}\n.fa-window-restore:before {\n  content: \"\\f2d2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\f2d3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\f2d4\";\n}\n.fa-bandcamp:before {\n  content: \"\\f2d5\";\n}\n.fa-grav:before {\n  content: \"\\f2d6\";\n}\n.fa-etsy:before {\n  content: \"\\f2d7\";\n}\n.fa-imdb:before {\n  content: \"\\f2d8\";\n}\n.fa-ravelry:before {\n  content: \"\\f2d9\";\n}\n.fa-eercast:before {\n  content: \"\\f2da\";\n}\n.fa-microchip:before {\n  content: \"\\f2db\";\n}\n.fa-snowflake-o:before {\n  content: \"\\f2dc\";\n}\n.fa-superpowers:before {\n  content: \"\\f2dd\";\n}\n.fa-wpexplorer:before {\n  content: \"\\f2de\";\n}\n.fa-meetup:before {\n  content: \"\\f2e0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\nh1 {\n  margin-top: 0px;\n}\n.col-3 {\n  display: flex;\n  justify-content: space-between;\n}\n.col {\n  text-align: center;\n  width: 30%;\n}\n#top-section {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url('newlandingpageBG.jpg');\n  background-position: center;\n  background-size: cover;\n  height: 900px;\n}\n#top-section .text {\n  width: 600px;\n  height: 300px;\n  margin: auto;\n  padding-top: 300px;\n  font-size: 2em;\n  color: white;\n  text-align: center;\n}\n#top-section .text h1,\n#top-section .text p {\n  text-shadow: 2px 2px #000;\n}\n#about {\n  height: 650px;\n}\n.text-area {\n  max-width: 1920px;\n  min-width: 920px;\n  width: 80%;\n  padding-top: 30px;\n  text-align: center;\n  font-size: 1.3em;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n#team {\n  background-color: #f0f0f0;\n}\n#questions {\n  height: 650px;\n}\n#questions h2 {\n  margin: 0 auto;\n  margin-bottom: 15px;\n}\n#haut-gauche,\n#milieu-droit,\n#bas-gauche {\n  width: 45%;\n}\n#questions .text-area {\n  justify-content: space-evenly;\n}\n#milieu-droit {\n  align-self: flex-end;\n}\n#timebar {\n  position: absolute;\n  left: 50%;\n}\n#timebar img {\n  position: absolute;\n  top: 80px;\n  height: 500px;\n}\n#contact {\n  background-color: #5cc9a0;\n  height: 400px;\n}\n#contact form {\n  width: 50%;\n  min-width: 600px;\n  display: flex;\n  flex-direction: column;\n  height: 280px;\n  justify-content: space-around;\n  margin: 0 auto;\n}\nbutton {\n  background-color: #fe5d6a;\n  border: none;\n  color: white;\n  font-size: 25px;\n  border-radius: 28px;\n  height: 50px;\n  margin: 0 auto;\n  padding: 10px;\n}\nbutton a {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\nbutton.signup {\n  width: 300px;\n}\nbutton.envoyer {\n  width: 150px;\n}\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"top-section\">\n  <div class=\"text\">\n    <h1>Ensemble, rendons\n      <strong>accessible</strong> le covoiturage !</h1>\n    <p>Avec\n      <strong>loop</strong>, optez pour une solution de covoiturage\n      <em>\n        pour chacun</em>\n    </p>\n    <p>Conducteur ou passager ?</p>\n    <button class=\"signup\">\n      <a routerLink=\"/signup\">Rejoignez la communauté</a>\n    </button>\n\n  </div>\n</section>\n\n\n<section id=\"about\">\n  <div class=\"text-area\">\n    <h2>\n      <fa-icon [icon]=\"faSearch\"></fa-icon> A propos</h2>\n    <p>loop est une application de\n      <em>covoiturage</em> accessible pour les trajets quotidiens.</p>\n    <p>Grâce à loop, le conducteur prend en charge le passager à son domicile, et le dépose à sa destination. L'utilisation\n      est simple : l'application propose automatiquement la meilleure solution de covoiturage pour chacun. loop c'est aussi\n      une équipe d'éducateurs qui apportent une assistance au covoiturage. Rejoindre loop, c'est participer ensemble à l'inclusion\n      de tous dans la société.</p>\n    <div class=\"col-3\">\n      <div class=\"col about-simple\">\n        <img src=\"../../assets/images/simplicite.jpg\" alt=\"Simple\">\n        <h3>Simple</h3>\n        <p>Mise en relation automatique des conducteurs et des passagers</p>\n      </div>\n      <div class=\"col about-inclusive\">\n        <img src=\"../../assets/images/inclusion.jpg\" alt=\"Inclusif\">\n        <h3>Inclusif</h3>\n        <p>Une solution de mobilité locale accessible à tous</p>\n      </div>\n      <div class=\"col about-connected\">\n        <img src=\"../../assets/images/connecte.jpg\" alt=\"Connecté\">\n        <h3>Connecté</h3>\n        <p>Une solution technologique au service de tous</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"team\">\n  <div class=\"text-area\">\n    <h2>\n      <fa-icon [icon]=\"faUsers\"></fa-icon> L'équipe</h2>\n    <q>Nous avons appris des personnes vulnérables qu'elles ont une utilité sociale. Elles ont besoin d'être soutenues pour\n      prendre une place de citoyen à part entière dans notre société. En leur permettant de se déplacer comme leurs voisins,\n      on renforce le lien social !\n    </q>\n    <p>L'équipe est née de la rencontre entre un foyer pour personnes en situation de handicap dans un village du Sud-Ouest\n      et un groupe de développeurs.</p>\n\n    <h3>Les fondateurs</h3>\n    <div class=\"col-3 founding-members\">\n      <div class=\"col\">\n        <img src=\"\" alt=\"\">\n        <h4>Solène</h4>\n        <p>Educatrice Spécialisée</p>\n        <p>Marketing/Commercial</p>\n      </div>\n      <div class=\"col\">\n        <img src=\"\" alt=\"\">\n        <h4>Mickaël</h4>\n        <p>Educateur sportif</p>\n        <p>Marketing/Support</p>\n      </div>\n      <div class=\"col\">\n        <img src=\"\" alt=\"\">\n        <h4>Enguerran</h4>\n\n        <p>Dévelopeur</p>\n        <p>CTO</p>\n      </div>\n    </div>\n\n    <h3>L'équipe technique</h3>\n    <div class=\"col-3 tech-team\">\n      <div class=\"col\">\n        <img src=\"\" alt=\"\">\n        <h4>Meri-Pier</h4>\n        <p>Développeuse Full-Stack</p>\n      </div>\n      <div class=\"col\">\n        <img src=\"\" alt=\"\">\n        <h4>Manelle</h4>\n        <p>Développeuse Full-Stack</p>\n      </div>\n      <div class=\"col\">\n        <img src=\"\" alt=\"\">\n        <h4>Marie</h4>\n        <p>Développeuse Full-Stack</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"questions\">\n  <div id=\"timebar\">\n    <img src=\"../../assets/images/timebar.png\" alt=\"timebar\">\n  </div>\n  <div class=\"text-area\">\n    <h2>\n      <fa-icon [icon]=\"faQuestionCircle\"></fa-icon> Des questions ?\n    </h2>\n    <div id=\"haut-gauche\">\n      <h4>Qui peut utiliser loop ?</h4>\n      <p>Tout le monde ! Que vous soyez conducteur ou passager, tout le monde peut s'inscrire et participer. Nous allons bientôt\n        commencer une phase de test dans le Morbihan.\n      </p>\n    </div>\n    <div id=\"milieu-droit\">\n      <h4>Comment s'inscrire?</h4>\n      <p>Il suffit de remplir le formulaire d'inscription situé\n        <a routerLink=\"/signup\"> ici</a>!\n      </p>\n      <p>Nous mettons en place des comptes de parrainage pour gérer le compte de personnes qui ne peuvent pas utiliser d'ordinateur.</p>\n    </div>\n    <div id=\"bas-gauche\">\n      <h4>Combien ça coûte ?</h4>\n      <p>Le passager indemnise le conducteur pour la durée du trajet. Avec loop, tout le monde est gagnant !</p>\n    </div>\n  </div>\n</section>\n\n<section id=\"contact\">\n  <div class=\"text-area\">\n    <h2>\n      <fa-icon [icon]=\"faPaperPlane\"></fa-icon> Contactez-nous</h2>\n    <form action=\"\">\n      <input type=\"email\" placeholder=\"Votre adresse mail\">\n      <input type=\"text\" placeholder=\"Sujet\">\n      <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"10\" placeholder=\"Message\">\n        </textarea>\n      <button class=\"envoyer\">Envoyer</button>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUsers"];
        this.faQuestionCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faQuestionCircle"];
        this.faPaperPlane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPaperPlane"];
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n\n.login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n\n.form {\n  position: relative;\n  z-index: 1;\n  background: #ffffff;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #5cc9a0;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #ffffff;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.form button:hover,\n.form button:active,\n.form button:focus {\n  background: #51b18c;\n}\n\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n\n.form .message a {\n  color: #fe5d6a;\n  text-decoration: none;\n}\n\n.form .register-form {\n  display: none;\n}\n\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n\n.container:before,\n.container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n\n.container .info span .fa {\n  color: #ef3b3a;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Se connecter</h2>\n\n<div class=\"login-page\">\n  <div class=\"form\">\n    <form (ngSubmit)=\"loginSubmit()\" class=\"login-form\">\n\n      <input [(ngModel)]=\"loginForm.email\" name=\"email\" type=\"email\" id=\"email\" placeholder=\"Mon adresse mail\">\n\n      <input [(ngModel)]=\"loginForm.loginPassword\" name=\"loginPassword\" type=\"password\" id=\"password\" placeholder=\"Mon mot de passe\">\n\n      <button>Entrer</button>\n\n      <p class=\"message\">Pas encore de compte?\n        <a routerLink=\"/signup\">S'inscrire</a>\n      </p>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(myAuthServ, myRouterServ) {
        this.myAuthServ = myAuthServ;
        this.myRouterServ = myRouterServ;
        this.loginForm = new _api_auth_service__WEBPACK_IMPORTED_MODULE_1__["LoginSubmission"]();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.myAuthServ
            .postLogin(this.loginForm)
            .then(function (response) {
            _this.myRouterServ.navigateByUrl("/dashboard");
        })
            .catch(function (err) {
            alert("Oups...La connexion a échoué.");
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Sorry... this page doesn't exist on our app...\n</p>\n"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/requests-page/requests-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/requests-page/requests-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\nh3 {\n  padding-bottom: 30px;\n  font-size: 1.5em;\n}\n\n.flexy {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.flexy p {\n  margin: 2em;\n}\n\n.match-box {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 1.3em;\n  margin: 0 auto;\n  border: solid #5cc9a0 1px;\n  margin-bottom: 2em;\n}\n\n.match-box section {\n  width: 40em;\n}\n\n.match-box img {\n  height: 125px;\n  margin-right: 15px;\n}\n\n.match-box ul {\n  display: flex;\n  flex-flow: wrap;\n  width: 600px;\n  flex-grow: inherit;\n  justify-content: flex-start;\n  list-style: none;\n}\n\n.actions {\n  display: flex;\n  flex-direction: column;\n}\n\n.match-box li {\n  width: 16em;\n  height: 4em;\n}\n\nbutton {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #fe5d6a;\n  border: 0;\n  padding: 15px;\n  margin-top: 15px;\n  color: #ffffff;\n  font-size: 13px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n  width: 190px;\n}\n\nbutton:hover,\nbutton:active,\nbutton:focus {\n  background: #fe5d6a;\n}\n\n.actions {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/app/requests-page/requests-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/requests-page/requests-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flexy\">\n  <h1 *ngIf=\"matchData.length > 0\">Vous avez des requêtes en attente</h1>\n  <h1 *ngIf=\"matchData.length <= 0\">Aucune demande en attente</h1>\n\n  <p>Accepter ou supprimer les demandes en attente.</p>\n\n  <div *ngFor=\"let match of matchData\">\n    <div *ngIf=\"!(match.acceptedByDriver && match.acceptedByPassenger)\">\n      <div class=\"match-box\" *ngIf=\"match.driverTripId.user._id !== userData._id\">\n        <img [src]=\"match.driverTripId.user.pictureURL\" alt=\"photo de {{match.driverTripId.user.firstName}}\">\n        <section>\n          <h3>\n            <a href=\"/profile/{{match.driverTripId.user._id}}\" target=\"_blank\">\n              {{match.driverTripId.user.firstName}}</a> souhaite voyager avec vous pour votre trajet au\n            <a href=\"/trip/{{match.passengerTripId._id}}\">{{match.passengerTripId.endLocation.string}} le {{match.passengerTripId.departDateAndTime | date: \"dd/MM/yy\"}}</a>\n          </h3>\n\n          <a href=\"/trip/{{match.driverTripId._id}}\" target=\"_blank\">\n            <ul>\n              <li>Date: {{match.driverTripId.departDateAndTime | date: \"dd/MM/yy\"}}</li>\n              <li>Départ: {{match.driverTripId.startLocation.string}}</li>\n              <li>Heure: {{match.driverTripId.departDateAndTime | date: \"H:mm\"}}</li>\n              <li>Arrivée: {{match.driverTripId.endLocation.string}}</li>\n            </ul>\n          </a>\n        </section>\n        <div class=\"actions\">\n          <button (click)=\"acceptMatch(match._id)\" *ngIf=\"match.acceptedByDriver\">accepter la demande</button>\n          <article *ngIf=\"!match.acceptedByDriver\">Requête en attente\n            <fa-icon [icon]=\"faHourglassHalf\"></fa-icon>\n          </article>\n          <button (click)=\"removeMatch(match._id)\">supprimer la demande</button>\n        </div>\n      </div>\n\n      <div class=\"match-box\" *ngIf=\"match.passengerTripId.user._id !== userData._id\">\n        <img [src]=\"match?.passengerTripId.user.pictureURL\" alt=\"photo de {{match.passengerTripId.user.firstName}}\">\n        <section>\n          <h3>\n            <a href=\"/profile/{{match.passengerTripId.user._id}}\" target=\"_blank\">{{match.passengerTripId.user.firstName}}</a> souhaite voyager avec vous!</h3>\n          <a href=\"/trip/{{match.passengerTripId._id}}\" target=\"_blank\">\n            <ul>\n              <li>Date: {{match.passengerTripId.departDateAndTime | date: \"dd/MM/yy\"}}</li>\n              <li>Départ: {{match.passengerTripId.startLocation.string}}</li>\n              <li>Heure: {{match.passengerTripId.departDateAndTime | date: \"H:mm\"}}</li>\n              <li>Arrivée: {{match?.passengerTripId.endLocation.string}}</li>\n            </ul>\n          </a>\n        </section>\n        <div class=\"actions\">\n          <button (click)=\"acceptMatch(match._id)\" *ngIf=\"match?.acceptedByPassenger\">accepter la demande</button>\n          <article *ngIf=\"!match?.acceptedByPassenger\">Requête en attente\n            <fa-icon [icon]=\"faHourglassHalf\"></fa-icon>\n          </article>\n          <button (click)=\"removeMatch(match._id)\">supprimer la demande</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/requests-page/requests-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/requests-page/requests-page.component.ts ***!
  \**********************************************************/
/*! exports provided: RequestsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPageComponent", function() { return RequestsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_match_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/match.service */ "./src/app/api/match.service.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestsPageComponent = /** @class */ (function () {
    function RequestsPageComponent(myAuthServ, myMatchServ, myRouterServ) {
        this.myAuthServ = myAuthServ;
        this.myMatchServ = myMatchServ;
        this.myRouterServ = myRouterServ;
        this.matchData = [];
        this.faHourglassHalf = _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHourglassHalf"];
    }
    RequestsPageComponent.prototype.ngOnInit = function () {
        this.getUserMatchRequests();
        this.getUserInfo();
    };
    RequestsPageComponent.prototype.getUserMatchRequests = function () {
        var _this = this;
        this.myMatchServ
            .getMatchRequests()
            .then(function (results) {
            _this.matchData = results;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    RequestsPageComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.myAuthServ
            .check()
            .then(function (response) {
            _this.userData = response;
            console.log(response.isDriver);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    RequestsPageComponent.prototype.removeMatch = function (matchId) {
        var _this = this;
        var isOkay = confirm("Voulez-vous enlever la demande?");
        if (isOkay) {
            this.myMatchServ
                .deleteMatch(matchId)
                .then(function (response) {
                _this.myRouterServ.navigateByUrl("/dashboard");
                alert("Le match a été supprimé");
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    RequestsPageComponent.prototype.acceptMatch = function (matchId) {
        var _this = this;
        var isOkay = confirm("Voulez-vous accepter la demande?");
        var isDriver = this.userData.isDriver;
        if (isOkay) {
            this.myMatchServ
                .changeMatchStatus(matchId, isDriver)
                .then(function (response) {
                _this.myRouterServ.navigateByUrl("/dashboard");
                alert("Le match a été confirmé");
            })
                .catch(function (err) {
                alert("Oups! Votre demande ne peut pas être confirmé.");
                console.log(err);
            });
        }
    };
    RequestsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-requests-page",
            template: __webpack_require__(/*! ./requests-page.component.html */ "./src/app/requests-page/requests-page.component.html"),
            styles: [__webpack_require__(/*! ./requests-page.component.css */ "./src/app/requests-page/requests-page.component.css")]
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _api_match_service__WEBPACK_IMPORTED_MODULE_1__["MatchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RequestsPageComponent);
    return RequestsPageComponent;
}());



/***/ }),

/***/ "./src/app/results-page/results-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/results-page/results-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\nbutton {\n  padding: 10px;\n}\n\n.center {\n  text-align: center;\n}\n\nh3 {\n  padding: 1em 0;\n  font-size: 1.5em;\n  /* margin-left: 10px; */\n}\n\n.flexy {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 160px;\n}\n\n.flexy p {\n  margin: 2em;\n}\n\n.match-box {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 70vw;\n  margin: 0 auto;\n  border: solid cadetblue 0.2em;\n  margin-bottom: 2em;\n}\n\n.match-box section {\n  width: 40em;\n}\n\n.match-box ul {\n  display: flex;\n  flex-flow: wrap;\n  width: 800px;\n  flex-grow: inherit;\n  justify-content: flex-start;\n  list-style: none;\n}\n\n.match-box li {\n  width: 18em;\n  height: 5em;\n}\n\n.map {\n  margin-top: 120px;\n  width:100%;\n  height:800px\n}\n\nli a {\n  color: darkblue;\n  text-decoration: underline;\n  font-weight: bold;\n}\n\nbutton {\n  background-color: #fe5d6a;\n  border: none;\n  color: white;\n  font-size: 25px;\n  border-radius: 28px;\n  height: 50px;\n }\n\n.container {\n  position: relative;\n  width: 250px;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.middle {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.text {\n  background-color: #4caf50;\n  color: white;\n  font-size: 13px;\n  padding: 16px 32px;\n  width: 60px;\n}\n\nsection {\n  margin-left: 15px;\n}\n\n.request {\n  font-family: \"Roboto\", sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  outline: 0;\n  background: #ffffff;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  margin-top: 15px;\n  color: #5cc9a0;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.request:hover {\n background: #5cc9a0;\n color: #ffffff;\n}"

/***/ }),

/***/ "./src/app/results-page/results-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/results-page/results-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!match\" class=\"flexy\">\n  <h1>Vous n'avez pas de match pour le moment,</h1>\n  <h3><i>mais n'hésitez pas à vérifier régulièrement !</i></h3>\n  <a class=\"request\" routerLink=\"/dashboard\">Retourner à votre tableau de bord</a>\n</div>\n\n<div *ngIf=\"match\" class=\"flexy\">\n  <h1>Vous avez des matchs</h1>\n\n  <p>Une personne voyage dans la même direction que vous, dans la même tranche horaire !</p>\n\n      <div class=\"match-box\">\n              <div class=\"container\">\n                <img [src]=\"match.trip.user.pictureURL\" alt=\"photo de {{match.trip.user.firstName}}\" class=\"image\">\n                <div class=\"middle\">\n                  <div class=\"text\">\n                    <a href=\"#\">Voir Profil</a>\n                  </div>\n                </div>\n              </div>\n\n        <section>\n          <h3>Voyagez avec <a href=\"/profile/{{match.trip.user._id}}\" target=\"_blank\">{{match.trip.user.firstName}}</a> !</h3>\n\n          <h4>Trajet de co-voiturage proposé : </h4>\n          <br>\n          <ul>\n            <li><b>Date :</b> {{match.trip.departDateAndTime | date: \"dd/MM/yy\"}}</li>\n\n            <li><b>Heure de départ souhaitée par le covoitureur :</b> {{match.trip.departDateAndTime | date: \"H:mm\"}}</li>\n\n            <li><b>Départ :</b>\n              <span *ngIf=\"!userTrip.user.isDriver\"> {{match.trip.startLocation.string}}</span>\n              <span *ngIf=\"userTrip.user.isDriver\"> {{userTrip.startLocation.string}}</span>\n            </li>\n\n            <li><b>Premier arrêt :</b>\n                <span *ngIf=\"!userTrip.user.isDriver\"> {{userTrip.startLocation.string}}</span>\n                <span *ngIf=\"userTrip.user.isDriver\"> {{match.trip.startLocation.string}}</span>\n            </li>\n\n            <li><b>Deuxième arrêt :</b>\n                <span *ngIf=\"!userTrip.user.isDriver\"> {{userTrip.endLocation.string}}</span>\n                <span *ngIf=\"userTrip.user.isDriver\"> {{match.trip.endLocation.string}}</span>\n            </li>\n\n            <li><b>Arrivée :</b>\n              <span *ngIf=\"!userTrip.user.isDriver\"> {{match.trip.endLocation.string}}</span>\n              <span *ngIf=\"userTrip.user.isDriver\"> {{userTrip.endLocation.string}}</span>\n            </li>\n\n            <li><a href=\"/trip/{{userTrip._id}}\" target=\"_blank\">Voir les détails de mon trajet</a></li>\n            <li><a href=\"/trip/{{match.trip._id}}\" target=\"_blank\">Voir les détails du trajet de {{match.trip.user.firstName}}</a></li>\n          </ul>\n\n        </section>\n\n        <button (click)=\"initMatchReq(match.trip._id)\">Faire une demande</button>\n\n  </div>\n\n</div>\n\n<div class=\"map\" #gmap></div>\n"

/***/ }),

/***/ "./src/app/results-page/results-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/results-page/results-page.component.ts ***!
  \********************************************************/
/*! exports provided: ResultsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageComponent", function() { return ResultsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_trips_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/trips.service */ "./src/app/api/trips.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_match_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/match.service */ "./src/app/api/match.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference types="googlemaps" />




var ResultsPageComponent = /** @class */ (function () {
    function ResultsPageComponent(myActivatedRouteServ, myTripServ, myMatchServ, myRouterServ) {
        this.myActivatedRouteServ = myActivatedRouteServ;
        this.myTripServ = myTripServ;
        this.myMatchServ = myMatchServ;
        this.myRouterServ = myRouterServ;
        //Directions setup
        this.directionsService = new google.maps.DirectionsService();
    }
    ResultsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.initMap();
        this.myActivatedRouteServ.paramMap
            .subscribe(function (myParams) {
            _this.id = myParams.get("tripId");
            _this.getMatchResults();
        });
    };
    ResultsPageComponent.prototype.getMatchResults = function () {
        var _this = this;
        this.myTripServ.getTripMatches(this.id)
            .then(function (response) {
            if (!response.hasOwnProperty("dur")) {
                _this.match = undefined;
                console.log("match =", _this.match);
                return;
            }
            console.log("match =", response);
            _this.match = response;
            _this.duration = Math.floor(_this.match.dur / 60);
            _this.getUserTrip(_this.match);
        })
            .catch(function (err) {
            alert("Oups! nous n'avons pas réussi à récupérer vos matchs.");
            console.log(err);
        });
    };
    ResultsPageComponent.prototype.getUserTrip = function (match) {
        var _this = this;
        this.myTripServ.getTripDetails(this.id)
            .then(function (response) {
            console.log("Posted trip =", response);
            _this.userTrip = response;
            _this.initMap(_this.match, _this.userTrip);
        })
            .catch(function (err) {
            alert("Un problème est survenu. Essayez d'actualiser.");
            console.log(err);
        });
    };
    ResultsPageComponent.prototype.initMatchReq = function (matchId) {
        var _this = this;
        var confirmReq = confirm("Voulez-vous confirmer la demande?");
        if (confirmReq) {
            this.myMatchServ.createMatchRequest(this.id, matchId)
                .then(function (response) {
                alert("Votre demande a été envoyée.");
                console.log(response);
                _this.myRouterServ.navigateByUrl("/dashboard");
            })
                .catch(function (err) {
                alert("Oups! Nous n'avons pas réussi à envoyer votre demande.");
                console.log(err);
            });
        }
    };
    //Map initialisation (default coordinates : Paris)
    ResultsPageComponent.prototype.initMap = function (match, userTrip) {
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(48.8566667, 2.3509871),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
        directionsDisplay.setMap(map);
        this.calcRoute(match, userTrip, directionsDisplay);
    };
    ResultsPageComponent.prototype.calcRoute = function (match, userTrip, directionsDisplay) {
        var matchStart = match.trip.startLocation.string;
        var matchEnd = match.trip.endLocation.string;
        var userStart = userTrip.startLocation.string;
        var userEnd = userTrip.endLocation.string;
        // const matchStart = [match.trip.startLocation.coordinates[1],match.trip.startLocation.coordinates[0]];
        // const matchEnd = [match.trip.endLocation.coordinates[1],match.trip.endLocation.coordinates[0]];
        // const userStart = [userTrip.startLocation.coordinates[1],userTrip.startLocation.coordinates[0]];
        // const userEnd = [userTrip.endLocation.coordinates[1],userTrip.endLocation.coordinates[0]];
        var request = match.trip.user.isDriver
            ? {
                origin: matchStart,
                destination: matchEnd,
                waypoints: [{
                        location: userStart,
                        stopover: true
                    }, {
                        location: userEnd,
                        stopover: true
                    }
                ],
                travelMode: google.maps.TravelMode.DRIVING
            } : {
            origin: userStart,
            destination: userEnd,
            waypoints: [{
                    location: matchStart,
                    stopover: true
                }, {
                    location: matchEnd,
                    stopover: true
                }
            ],
            travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsService.route(request, function (result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log("route result=", result);
                this.routeResult = result;
                directionsDisplay.setDirections(result);
                directionsDisplay.setOptions({
                    polylineOptions: {
                        strokeColor: "blue"
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], ResultsPageComponent.prototype, "gmapElement", void 0);
    ResultsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results-page',
            template: __webpack_require__(/*! ./results-page.component.html */ "./src/app/results-page/results-page.component.html"),
            styles: [__webpack_require__(/*! ./results-page.component.css */ "./src/app/results-page/results-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_trips_service__WEBPACK_IMPORTED_MODULE_1__["TripsService"],
            _api_match_service__WEBPACK_IMPORTED_MODULE_3__["MatchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResultsPageComponent);
    return ResultsPageComponent;
}());

var ABCDTripResult = /** @class */ (function () {
    function ABCDTripResult() {
    }
    return ABCDTripResult;
}());


/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n\ninput,\nbutton {\n  width: 380px;\n  /* height: 60px; */\n  font-size: 1.3em;\n}\n\nlabel {\n  width: 380px;\n  /* height: 60px; */\n  font-size: 1em;\n}\n\n.switch-field input {\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  width: 1px;\n  border: 0;\n  overflow: hidden;\n}\n\n.switch-field label {\n  float: left;\n}\n\n.switch-field label {\n  display: inline-block;\n  width: 175px;\n  background-color: #e4e4e4;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1em;\n  font-weight: normal;\n  text-align: center;\n  text-shadow: none;\n  padding: 6px 14px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);\n  transition: all 0.1s ease-in-out;\n}\n\n.switch-field label:hover {\n  cursor: pointer;\n}\n\n.switch-field input:checked + label {\n  background-color: #a5dc86;\n  box-shadow: none;\n}\n\n.switch-field label:first-of-type {\n  border-radius: 4px 0 0 4px;\n}\n\n.switch-field label:last-of-type {\n  border-radius: 0 4px 4px 0;\n}\n\n.login-page {\n  width: 500px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n\n.form {\n  position: relative;\n  background: #ffffff;\n  /* max-width: 360px; */\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n  /* width: 400px; */\n}\n\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.form .submit,\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #5cc9a0;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  margin-top: 15px;\n  color: #ffffff;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.form .submit:hover,\n.form .submit:active,\n.form .submit:focus,\n.form button:hover,\n.form button:active,\n.form button:focus {\n  background: #5cc9a0;\n}\n\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n\n.form .message a {\n  color: #fe5d6a;\n  text-decoration: none;\n}\n\n.form .register-form {\n  display: none;\n}\n\n.container {\n  position: relative;\n  max-width: 300px;\n  margin: 0 auto;\n}\n\n.container:before,\n.container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n\n.container .info span .fa {\n  color: #ef3b3a;\n}\n"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Mes données personnelles</h2>\n\n<div class=\"login-page\">\n  <div class=\"form\">\n    <form (ngSubmit)=\"settingsSubmit()\" class=\"login-form\">\n      <input [(ngModel)]=\"settingsForm.firstName\" name=\"firstName\" id=\"firstName\" type=\"text\" placeholder=\"Mon prénom\" value=\"{{currentUser?.firstName}}\">\n      <br>\n\n      <input [(ngModel)]=\"settingsForm.lastName\" name=\"lastName\" id=\"lastName\" type=\"text\" placeholder=\"Mon nom\" value=\"{{currentUser?.lastName}}\">\n      <br>\n\n      <label for=\"exampleFormControlFile1\">Modifier votre photo de profil</label>\n      <input name=\"pictureURL\" id=\"pictureURL\" type=\"file\" value=\"{{currentUser?.pictureURL}}\">\n      <br>\n\n      <input [(ngModel)]=\"settingsForm.phoneNumber\" name=\"phoneNumber\" id=\"phoneNumber\" type=\"text\" placeholder=\"Mon numéro de téléphone\"\n        value=\"{{currentUser?.phoneNumber}}\">\n      <br>\n\n      <label>Genre?</label>\n      <div class=\"switch-field\">\n        <input [(ngModel)]=\"settingsForm.gender\" name=\"gender\" id=\"homme\" type=\"radio\" value=\"Homme\" />\n        <label for=\"homme\">Homme</label>\n\n        <input [(ngModel)]=\"settingsForm.gender\" name=\"gender\" id=\"femme\" type=\"radio\" value=\"Femme\" />\n        <label for=\"femme\">Femme</label>\n        <br>\n      </div>\n\n      <input [(ngModel)]=\"settingsForm.oldPassword\" name=\"oldPassword\" id=\"oldPassword\" type=\"password\" placeholder=\"Mot de passe actuel\">\n      <br>\n\n      <input [(ngModel)]=\"settingsForm.newPassword\" name=\"newPassword\" id=\"newPassword\" type=\"password\" placeholder=\"Nouveau mot de passe\">\n      <br>\n\n      <input *ngIf=\"myAuthServ.currentUser.isDriver\" [(ngModel)]=\"settingsForm.licenseNumber\" name=\"licenseNumber\" id=\"licenseNumber\"\n        type=\"text\" placeholder=\"Mon numéro de permis\" value=\"{{currentUser?.licenseNumber}}\">\n      <br>\n\n      <!-- if Passenger -->\n      <div *ngIf=\"!myAuthServ.currentUser.isDriver\">\n        <label>\n          <b>Mes informations de passager :</b>\n        </label>\n        <fieldset>\n\n          <legend>Comment pouvons nous vous aider ?</legend>\n\n          <div *ngFor=\"let oneNeed of needs\">\n            <input (change)=\"checkArray(oneNeed.text)\" [checked]=\"settingsForm.specificNeedsA.includes(oneNeed.text)\" [name]=\"oneNeed.id\"\n              [id]=\"oneNeed.id\" type=\"checkbox\" [value]=\"oneNeed.text\">\n            <label [for]=\"oneNeed.id\">{{oneNeed.text}}</label>\n          </div>\n        </fieldset>\n        <label for=\"comment\">Avez-vous un besoin spécifique qui ne fait pas partie de la liste?</label>\n        <br>\n        <textarea [(ngModel)]=\"settingsForm.specificNeedsB\" name=\"specificNeedsB\" id=\"specificNeedsB\" cols=\"30\" rows=\"10\"></textarea>\n      </div>\n\n      <input class=\"submit\" type=\"submit\" value=\"Enregistrer\">\n    </form>\n  </div>\n</div>\n\n<div class=\"login-page\" *ngIf=\"myAuthServ.currentUser.isDriver\">\n  <div class=\"form\">\n    <form (ngSubmit)=\"carSubmit()\" class=\"login-form\">\n      <!-- if Driver -->\n      <div>\n        <label>Ajouter une voiture :</label>\n        <input [(ngModel)]=\"carForm.brand\" name=\"cars.brand\" id=\"cars.brand\" type=\"text\" placeholder=\"Marque\">\n        <br>\n\n        <input [(ngModel)]=\"carForm.model\" name=\"cars.model\" id=\"cars.model\" type=\"text\" placeholder=\"Modèle\">\n        <br>\n\n        <input [(ngModel)]=\"carForm.color\" name=\"cars.color\" id=\"cars.color\" type=\"text\" placeholder=\"Couleur\">\n        <br>\n\n        <input [(ngModel)]=\"carForm.licensePlate\" name=\"cars.licensePlate\" id=\"cars.licensePlate\" type=\"text\" placeholder=\"Plaque d'immatriculation\">\n        <br>\n\n        <input [(ngModel)]=\"carForm.numberOfSeats\" name=\"cars.numberOfSeats\" id=\"cars.numberOfSeats\" type=\"number\" placeholder=\"Nombre de sièges\">\n        <br>\n\n        <button>Valider</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/settings.service */ "./src/app/api/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(mySettingsServer, myRouterServ, myAuthServ) {
        this.mySettingsServer = mySettingsServer;
        this.myRouterServ = myRouterServ;
        this.myAuthServ = myAuthServ;
        this.settingsForm = new _api_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsSubmission"]();
        this.carForm = new _api_settings_service__WEBPACK_IMPORTED_MODULE_1__["CarSubmission"]();
        this.needs = [
            { id: "debout", text: "J'ai besoin d'aide pour me mettre debout" },
            { id: "asseoir", text: "J'ai besoin d'aide pour m'asseoir" },
            { id: "mail", text: "J'ai besoin d'aide pour utiliser un téléphone ou une boîte mail" },
            { id: "voir", text: "J'ai des difficultés à voir" },
            { id: "marcher", text: "J'ai des difficultés à marcher" },
            { id: "entendre", text: "J'ai des difficultés à entendre" },
            { id: "parler", text: "J'ai des difficultés à parler" },
            { id: "animal", text: "Je me déplace avec un animal d'assistance" },
            { id: "fauteuil", text: "Je me déplace avec un fauteuil" },
        ];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
    };
    SettingsComponent.prototype.settingsSubmit = function () {
        var _this = this;
        this.mySettingsServer
            .postSettings(this.settingsForm)
            .then(function (response) {
            _this.myRouterServ.navigateByUrl("/dashboard");
        })
            .catch(function (err) {
            alert("Sorry! We couldn't change your settings!");
            console.log(err);
        });
    };
    SettingsComponent.prototype.carSubmit = function () {
        var _this = this;
        this.mySettingsServer
            .postCar(this.carForm)
            .then(function (response) {
            alert("Votre voiture a bien été ajoutée!");
            _this.myRouterServ.navigateByUrl("/settings");
        })
            .catch(function (err) {
            alert("Sorry! We couldn't add your car!");
            console.log(err);
        });
    };
    SettingsComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.myAuthServ
            .check()
            .then(function (response) {
            _this.currentUser = response.userDoc;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SettingsComponent.prototype.checkArray = function (text) {
        var specificNeedsA = this.settingsForm.specificNeedsA;
        if (specificNeedsA.includes(text)) {
            specificNeedsA.splice(specificNeedsA.indexOf("text"), 1);
        }
        else {
            specificNeedsA.push(text);
        }
        console.log(this.settingsForm);
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-settings",
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_api_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n/* form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  background-color: bisque;\n  border-radius: 20px;\n  height: 600px;\n  width: 460px;\n  padding: 40px;\n  margin: 30px 0;\n}\n\nlabel,\ninput,\nbutton {\n  width: 380px;\n  height: 60px;\n  font-size: 2em;\n}\n\n.switch-field input {\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  width: 1px;\n  border: 0;\n  overflow: hidden;\n}\n\n.switch-field label {\n  float: left;\n}\n\n.switch-field label {\n  display: inline-block;\n  width: 160px;\n  background-color: #e4e4e4;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 2em;\n  font-weight: normal;\n  text-align: center;\n  text-shadow: none;\n  padding: 6px 14px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3),\n    0 1px rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);\n  -webkit-transition: all 0.1s ease-in-out;\n  -moz-transition: all 0.1s ease-in-out;\n  -ms-transition: all 0.1s ease-in-out;\n  -o-transition: all 0.1s ease-in-out;\n  transition: all 0.1s ease-in-out;\n}\n\n.switch-field label:hover {\n  cursor: pointer;\n}*/\nlabel,\ninput,\nbutton {\n  width: 380px;\n  /* height: 60px; */\n  font-size: 2em;\n}\n.switch-field input {\n  position: absolute !important;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  width: 1px;\n  border: 0;\n  overflow: hidden;\n}\n.switch-field label {\n  float: left;\n}\n.switch-field label {\n  display: inline-block;\n  width: 105px;\n  background-color: #e4e4e4;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1em;\n  font-weight: normal;\n  text-align: center;\n  text-shadow: none;\n  padding: 6px 14px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);\n  transition: all 0.1s ease-in-out;\n}\n.switch-field label:hover {\n  cursor: pointer;\n}\n.switch-field input:checked + label {\n  background-color: #a5dc86;\n  box-shadow: none;\n}\n.switch-field label:first-of-type {\n  border-radius: 4px 0 0 4px;\n}\n.switch-field label:last-of-type {\n  border-radius: 0 4px 4px 0;\n}\n.login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n.form {\n  position: relative;\n  z-index: 1;\n  background: #ffffff;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form .submit {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #5cc9a0;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  margin-top: 15px;\n  color: #ffffff;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form .submit:hover,\n.form .submit:active,\n.form .submit:focus {\n  background: #5cc9a0;\n}\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form .message a {\n  color: #fe5d6a;\n  text-decoration: none;\n}\n.form .register-form {\n  display: none;\n}\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.container:before,\n.container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.container .info span .fa {\n  color: #ef3b3a;\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>M'inscrire</h2>\n\n<div class=\"login-page\">\n  <div class=\"form\">\n\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"signupSubmit()\" class=\"login-form\">\n      <!-- (rForm.value) -->\n      <input [(ngModel)]=\"signupForm.firstName\" formControlName=\"firstName\" name=\"firstName\" id=\"firstName\" type=\"text\" placeholder=\"Mon prénom\">\n      <div *ngIf=\"rForm.controls['firstName'].touched && !rForm.controls[ 'firstName'].valid\">Quel est votre prénom ?</div>\n\n      <input [(ngModel)]=\"signupForm.lastName\" formControlName=\"lastName\" name=\"lastName\" id=\"lastName\" type=\"text\" placeholder=\"Mon nom\">\n      <div *ngIf=\"rForm.controls['lastName'].touched && !rForm.controls[ 'lastName'].valid\">Quel est votre nom de famille ?</div>\n\n      <input [(ngModel)]=\"signupForm.phoneNumber\" formControlName=\"phoneNumber\" name=\"phoneNumber\" id=\"phoneNumber\" type=\"text\"\n        placeholder=\"Mon numéro de téléphone\">\n      <div *ngIf=\"rForm.controls['phoneNumber'].touched && rForm.controls[ 'phoneNumber'].hasError('required')\">Merci de renseigner votre numéro de téléphone.</div>\n      <div *ngIf=\"rForm.controls['phoneNumber'].touched && rForm.controls[ 'phoneNumber'].hasError('pattern')\">Votre numéro doit commencer par 0 et contenir 10 chiffres.</div>\n\n\n      <input [(ngModel)]=\"signupForm.email\" formControlName=\"email\" name=\"email\" id=\"email\" type=\"email\" placeholder=\"Mon adresse mail\">\n      <div *ngIf=\"rForm.controls['email'].touched && !rForm.controls['email'].valid\">Votre adresse mail vous permettra de vous connecter.</div>\n      <div *ngIf=\"rForm.controls['email'].dirty && rForm.controls['email'].hasError('email')\">Votre adresse mail n'est pas valide.</div>\n\n\n      <input [(ngModel)]=\"signupForm.originalPassword\" formControlName=\"originalPassword\" name=\"originalPassword\" id=\"password\"\n        type=\"password\" placeholder=\"Mon mot de passe\">\n      <div *ngIf=\"rForm.controls['originalPassword'].touched && rForm.controls[ 'originalPassword'].hasError('required')\">Merci de choisir un mot de passe.</div>\n      <div *ngIf=\"rForm.controls['originalPassword'].touched && rForm.controls[ 'originalPassword'].hasError('pattern')\">Votre mot de passe doit faire au moins 7 caractères et contenir un chiffre et une majuscule.</div>\n\n\n      <div class=\"switch-field\">\n        <input [(ngModel)]=\"signupForm.isDriver\" formControlName=\"isDriver\" type=\"radio\" id=\"switch_left\" name=\"isDriver\" value=\"false\"\n          checked/>\n\n        <label for=\"switch_left\">\n          Passager\n        </label>\n\n        <input [(ngModel)]=\"signupForm.isDriver\" formControlName=\"isDriver\" type=\"radio\" id=\"switch_right\" name=\"isDriver\" value=\"true\"\n        />\n\n        <label for=\"switch_right\">\n          Conducteur\n        </label>\n        <!-- <div *ngIf=\"!rForm.controls['isDriver'].valid\">Etes-vous passager ou conducteur?</div> -->\n\n      </div>\n\n      <input class=\"submit\" type=\"submit\" value=\"Continuer\" [disabled]=\"!rForm.valid\">\n\n      <p class=\"message\">Déjà inscrit?\n        <a routerLink=\"/login\">Se connecter</a>\n      </p>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(myAuthServ, myRouterServ, fb) {
        this.myAuthServ = myAuthServ;
        this.myRouterServ = myRouterServ;
        this.fb = fb;
        this.signupForm = new _api_auth_service__WEBPACK_IMPORTED_MODULE_1__["SignupSubmission"]();
        this.rForm = fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phoneNumber: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("0[0-9]{9}")
                ])
            ],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            originalPassword: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,}$")
                ])
            ],
            isDriver: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.signupSubmit = function () {
        var _this = this;
        this.myAuthServ
            .postSignup(this.signupForm)
            .then(function (response) {
            _this.myRouterServ.navigateByUrl("/dashboard");
        })
            .catch(function (err) {
            alert("Oups, l'inscription a échoué.");
            console.log(err);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/trip-details-page/trip-details-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/trip-details-page/trip-details-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\n/*\n\na {\n  text-decoration: none;\n  color: black;\n}\n\nbutton {\n  padding: 10px;\n}\n\n.flexy {\n  display: flex;\n  justify-content: center;\n  align-self: center;\n  align-items: center;\n  margin-top: 160px;\n}\n\n.side {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 400px;\n} */\n\nimg {\n  width: 120px;\n}\n\n.about {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 25px;\n}\n\n.delete {\n  background-color: #fe5d6a;\n  border: none;\n  width: 205px;\n  color: white;\n  border-radius: 28px;\n  height: 50px;\n  margin: 0 auto;\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n  text-align: center;\n}\n\n.request {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #ffffff;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  margin-top: 15px;\n  color: #5cc9a0;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.request:hover,\nbutton:active,\nbutton:focus {\n background: #5cc9a0;\n color: #ffffff;\n}\n\nhr {\n  color: white;\n}\n\n.page {\n  padding-top: 100px;\n}\n\n.page:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.wrapper {\n  max-width: 1160px;\n  margin: 0 auto;\n  /* position: relative; */\n  padding: 0 20px;\n  min-height: 600px;\n}\n\n.content-wrapper {\n  float: left;\n  width: 100%;\n  /* border: solid 1px #55C9A0; */\n}\n\n.content {\n  margin-right: 320px;\n  clear: both;\n  overflow: auto;\n  /* background: rgba(85, 201, 160); */\n  min-height: 600px;\n}\n\n.content h1 {\n  text-align: center;\n  color: #55C9A0;\n}\n\n.content section {\n  padding-top: 50px;\n  padding-left: 50px;\n}\n\nul {\n  padding: 50px;\n  list-style: none;\n}\n\nli {\n  padding: 10px;\n}\n\n.sidebar {\n  /* position: relative; */\n  width: 320px;\n  margin-left: -320px;\n  float: right;\n  overflow: hidden;\n  /* background: #2c3e50; */\n  background: rgba(85, 201, 160);\n  color: #ffffff;\n  min-height: 600px;\n}\n\n.sidebar {\n  text-align: center;\n}\n\na {\n  display: block;\n  text-align:center;\n  margin: 10px auto;\n  width: 100%;\n  color: #2c3e50;\n}\n\n@media only screen and (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n  .content {\n    margin-right: 0;\n  }\n}"

/***/ }),

/***/ "./src/app/trip-details-page/trip-details-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/trip-details-page/trip-details-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page\">\n  <div class=\"wrapper\">\n    <div class=\"content-wrapper\">\n      <div class=\"content\">\n        <h1>Détails du Trajet</h1>\n        <ul>\n          <li><h2>Départ</h2>\n          <p>{{currentTrip?.startLocation.string}}</p>\n          </li>\n\n          <li><h2>Date</h2>\n          <p>{{currentTrip?.departDateAndTime | date: \"dd/MM/yy\"}} </p>\n          </li>\n\n        <li>\n          <h2>Heure</h2>\n          <p> {{currentTrip?.departDateAndTime | date: \"HH:mm\"}}</p>\n        </li>\n\n        <li>\n          <h2>Arrivée</h2>\n          <p>{{currentTrip?.endLocation.string}}</p>\n        </li>\n\n        <li *ngIf=\"currentTrip?.comment\">\n          <h2>Informations Supplémentaires</h2>\n          <p>{{currentTrip?.comment}}</p>\n        </li>\n\n        <li *ngIf=\"matchDetails\">\n          <h2 *ngIf=\"currentTrip?._id === matchDetails?.driverTripId\"><a class=\"request\" routerLink=\"/trip/{{matchDetails?.passengerTripId}}\">Voir les détails de votre match</a></h2>\n          <h2 *ngIf=\"currentTrip?._id === matchDetails?.passengerTripId\"><a class=\"request\" routerLink=\"/trip/{{matchDetails?.driverTripId}}\">Voir les détails de votre match</a></h2>\n        </li>\n\n        <li *ngIf=\"!matchDetails\">\n          <h2 *ngIf=\"currentTrip?.user._id === connectedUser?._id\">\n            <a routerLink=\"/trip/{{currentTrip?._id}}/results\">Pas de matchs? Voir des voyages similaires ici.</a>\n          </h2>\n        </li>\n      </ul>\n\n\n      </div>\n    </div>\n    <div class=\"sidebar\">\n      <h2>Détails d'utilisateur</h2>\n      <section class=\"about\">\n        <img [src]=\"currentTrip?.user.pictureURL\" alt=\"Photo de {{currentTrip?.user.firstName}}\">\n        <h2>{{currentTrip?.user.firstName}} {{currentTrip?.user.lastName}}</h2>\n      </section>\n\n      <ul>\n        <li><h4>Numéro de Téléphone:</h4>\n           <h3>{{currentTrip?.user.phoneNumber}}</h3>\n        </li>\n\n        <li><h4>Adresse Mail:</h4>\n          <h3>{{currentTrip?.user.email}}</h3>\n        </li>\n      </ul>\n\n      <section *ngIf=\"currentTrip?.user.cars.length > 0\">\n        <h2>Voiture</h2>\n        <p></p>\n      </section>\n\n      <section *ngIf=\"matchDetails\">\n        <h3 *ngIf=\"!matchDetails.acceptedByDriver || !matchDetails.acceptedByPassenger\"><i>Ce voyage est en attente de confirmation</i></h3>\n        <article *ngIf=\"matchDetails.acceptedByDriver && matchDetails.acceptedByPassenger\">\n          <h3>Ce trajet a été confirmé.</h3>\n            <p>Veuillez contacter votre covoitureur par téléphone ou mail pour organiser ce voyage.</p>\n        </article>\n        <a routerLink=\"/requests\">Voir vos rêquetes</a>\n      </section>\n      <br><br>\n\n\n      <span *ngIf=\"currentTrip?.user._id !== connectedUser?._id && !matchDetails\">\n        <button class=\"request\">Faire une demande</button>\n        <br><br>\n        <a routerLink=\"/user/{{currentTrip?.user._id}}\">Voir son profil</a>\n      </span>\n\n      <span *ngIf=\"currentTrip?.user._id === connectedUser?._id\">\n        <button (click)=\"deleteTrip()\" class=\"delete\">Supprimer ce trajet</button>\n        <br><br>\n        <a routerLink=\"/dashboard\">Retourner à votre tableau de bord</a>\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/trip-details-page/trip-details-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/trip-details-page/trip-details-page.component.ts ***!
  \******************************************************************/
/*! exports provided: TripDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsPageComponent", function() { return TripDetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_trips_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/trips.service */ "./src/app/api/trips.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _api_match_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/match.service */ "./src/app/api/match.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="googlemaps" />





var TripDetailsPageComponent = /** @class */ (function () {
    function TripDetailsPageComponent(myActivatedRouteServ, myRouterServ, myAuthServ, myTripServ, myMatchServ) {
        this.myActivatedRouteServ = myActivatedRouteServ;
        this.myRouterServ = myRouterServ;
        this.myAuthServ = myAuthServ;
        this.myTripServ = myTripServ;
        this.myMatchServ = myMatchServ;
    }
    TripDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myActivatedRouteServ.paramMap
            .subscribe(function (myParams) {
            _this.tripId = myParams.get("tripId");
            _this.getTripDetails();
        });
        this.getConnectedUserDetails();
        this.checkIfMatched();
    };
    ;
    TripDetailsPageComponent.prototype.getTripDetails = function () {
        var _this = this;
        this.myTripServ.getTripDetails(this.tripId)
            .then(function (response) {
            _this.currentTrip = response;
            console.log(response);
        })
            .catch(function (err) {
            alert("Oups! Les détails de ce trajet ne sont pas actuellement disponible.");
            console.log(err);
        });
    };
    TripDetailsPageComponent.prototype.getConnectedUserDetails = function () {
        var _this = this;
        this.myAuthServ.check()
            .then(function (response) {
            _this.connectedUser = response.userDoc;
            console.log(_this.connectedUser);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TripDetailsPageComponent.prototype.checkIfMatched = function () {
        var _this = this;
        this.myMatchServ.checkMatch(this.tripId)
            .then(function (response) {
            _this.matchDetails = response;
            console.log(_this.matchDetails);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TripDetailsPageComponent.prototype.deleteTrip = function () {
        var _this = this;
        var confirmRequest = confirm("Voulez-vous supprimer ce trajet?");
        if (confirmRequest) {
            this.myTripServ.deleteTrip(this.tripId)
                .then(function (response) {
                _this.myRouterServ.navigateByUrl("/dashboard");
                alert("Ce voyage a été supprimé");
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    TripDetailsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-details-page',
            template: __webpack_require__(/*! ./trip-details-page.component.html */ "./src/app/trip-details-page/trip-details-page.component.html"),
            styles: [__webpack_require__(/*! ./trip-details-page.component.css */ "./src/app/trip-details-page/trip-details-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _api_trips_service__WEBPACK_IMPORTED_MODULE_1__["TripsService"],
            _api_match_service__WEBPACK_IMPORTED_MODULE_4__["MatchService"]])
    ], TripDetailsPageComponent);
    return TripDetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/user-profile-page/user-profile-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user-profile-page/user-profile-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile-page/user-profile-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user-profile-page/user-profile-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img src={{userData?.pictureURL}}> -->\n\n<!-- <h2>Bonjour, je suis {{userData?.firstName}} {{userData?.lastName}}</h2> -->\n\n<!-- <h3>{{userData?.gender}}</h3> -->"

/***/ }),

/***/ "./src/app/user-profile-page/user-profile-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-profile-page/user-profile-page.component.ts ***!
  \******************************************************************/
/*! exports provided: UserProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageComponent", function() { return UserProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfilePageComponent = /** @class */ (function () {
    // id: string;
    // userItem: User;
    function UserProfilePageComponent(myRouterServ) {
        this.myRouterServ = myRouterServ;
    }
    UserProfilePageComponent.prototype.ngOnInit = function () {
        // this.getUserInfo();
    };
    UserProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-profile-page",
            template: __webpack_require__(/*! ./user-profile-page.component.html */ "./src/app/user-profile-page/user-profile-page.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-page.component.css */ "./src/app/user-profile-page/user-profile-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserProfilePageComponent);
    return UserProfilePageComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // development backend URL is our local Express server
    backendUrl: "http://localhost:3000",
    GOOGLE_MAP_API_KEY: "AIzaSyBxp25VtQir86dy8rbjpQCAo4XtTMw8TzM"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marie/code/project/projet3/loop-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map