webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var ApiService = (function () {
    function ApiService() {
        this.API_URL = "https://remembear-api.herokuapp.com/"; //"http://localhost:8060/";
    }
    ApiService.prototype.login = function (user) {
        return this.getJsonFromApi('login', user)
            .then(function (j) { return j['success']; });
    };
    ApiService.prototype.getUserStatus = function (username) {
        return this.getJsonFromApi('status', { username: username });
    };
    ApiService.prototype.getNewQuestions = function (username, setIndex, dirIndex) {
        return this.getJsonFromApi('new', { username: username, setIndex: setIndex, dirIndex: dirIndex });
    };
    ApiService.prototype.getReviewQuestions = function (username, setIndex, dirIndex) {
        return this.getJsonFromApi('review', { username: username, setIndex: setIndex, dirIndex: dirIndex });
    };
    ApiService.prototype.sendResults = function (study, username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postJsonToApi('results', study, { username: username })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiService.prototype.postJsonToApi = function (path, json, params) {
        path = this.addParams(path, params);
        return fetch(this.API_URL + path, {
            method: 'post',
            body: JSON.stringify(json),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (r) { return r.text(); })
            .then(function (t) { return JSON.parse(t); })
            .catch(function (e) { return console.log(e); });
    };
    ApiService.prototype.getJsonFromApi = function (path, params) {
        path = this.addParams(path, params);
        return fetch(this.API_URL + path)
            .then(function (r) { return r.text(); })
            .then(function (t) { return JSON.parse(t); })
            .catch(function (e) { return console.log(e); });
    };
    ApiService.prototype.addParams = function (path, params) {
        if (params) {
            var paramStrings = Array.from(Object.keys(params))
                .map(function (k) { return k + "=" + encodeURIComponent(params[k]); });
            path += '?' + paramStrings.join('&');
        }
        return path;
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ApiService);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_component__ = __webpack_require__("../../../../../src/app/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__study_component__ = __webpack_require__("../../../../../src/app/study.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_component__ = __webpack_require__("../../../../../src/app/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__autofocus_directive__ = __webpack_require__("../../../../../src/app/autofocus.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__status_service__ = __webpack_require__("../../../../../src/app/status.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'study', component: __WEBPACK_IMPORTED_MODULE_7__study_component__["a" /* StudyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_8__view_component__["a" /* ViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__study_component__["a" /* StudyComponent */],
            __WEBPACK_IMPORTED_MODULE_8__view_component__["a" /* ViewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__autofocus_directive__["a" /* AutofocusDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__status_service__["a" /* StatusService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.checkLogin(state.url);
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(apiService) {
        this.apiService = apiService;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this.apiService.login(user))
            .do(function (success) {
            if (success) {
                _this.isLoggedIn = true;
                _this.username = user.username;
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.username = undefined;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/autofocus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = (function () {
    function AutofocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ;
    AutofocusDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
    };
    return AutofocusDirective;
}());
AutofocusDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[autofocus2]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
], AutofocusDirective);

var _a;
//# sourceMappingURL=autofocus.directive.js.map

/***/ }),

/***/ "../../../../../src/app/consts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AUDIO_LOCATION */
/* unused harmony export KAN_KAN */
/* unused harmony export KAN_ENG */
/* unused harmony export VOC_JAP */
/* unused harmony export VOC_KNA */
/* unused harmony export VOC_ENG */
/* unused harmony export VOC_AUD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SETS; });
var AUDIO_LOCATION = 'http://localhost:8060/';
var KAN_KAN = "Kanji";
var KAN_ENG = "English Meaning";
var VOC_JAP = "Vocab-japan";
var VOC_KNA = "Vocab-kana";
var VOC_ENG = "Vocab-translation";
var VOC_AUD = "Vocab-audio";
var SETS = [{
        name: "Kanji",
        collection: "kanji",
        idField: "2k1KO Index",
        directionNames: [
            "Reading",
            "Writing"
        ],
        directions: [
            [KAN_KAN, KAN_ENG, []],
            [KAN_ENG, KAN_KAN, []]
        ],
        info: []
    }, {
        name: "Vocab",
        collection: "core10k",
        idField: "2k1-Kanken Opt Sort",
        directionNames: [
            "Writing",
            "Reading",
            "Listening"
        ],
        directions: [
            [VOC_ENG, VOC_JAP, [VOC_KNA]],
            [VOC_JAP, VOC_KNA, [VOC_ENG]],
            [VOC_AUD, VOC_ENG, [VOC_JAP]]
        ],
        info: ["Part of speech", "Word-type", "Vocab-RTK"],
        audio: VOC_AUD
    }];
//# sourceMappingURL=consts.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>LOGIN</h1>\n<form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n  Username:\n  <input id=\"name\" name=\"name\" class=\"form-control\"\n    required minlength=\"4\" [(ngModel)]=\"user.username\" #name=\"ngModel\" >\n\n  <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n       class=\"alert alert-danger\">\n\n    <div *ngIf=\"name.errors.required\">\n      Name is required.\n    </div>\n    <div *ngIf=\"name.errors.minlength\">\n      Name must be at least 4 characters long.\n    </div>\n\n  </div>\n\n  <br>\n\n  Password:\n  <input id=\"pass\" name=\"pass\" type=\"password\" class=\"form-control\"\n    required minlength=\"4\" [(ngModel)]=\"user.password\" #pass=\"ngModel\" >\n\n  <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\"\n       class=\"alert alert-danger\">\n\n    <div *ngIf=\"pass.errors.required\">\n      Password is required.\n    </div>\n    <div *ngIf=\"pass.errors.minlength\">\n      Password must be at least 4 characters long.\n    </div>\n\n  </div>\n\n  <br>\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.form.valid\">Login</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = { "username": "", "password": "" };
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.login(this.user).subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main';
                var redirect = '/main';
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("../../../../../src/app/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"status.status\">\n  <h1>{{status.username}} ({{status.status.totalPoints}} points)</h1>\n  <h3>word levels: {{status.status.wordsKnownByLevel}}</h3>\n  <h3>latest points: {{status.status.latestPoints}}</h3>\n  <br>\n  <br>\n  <div *ngFor=\"let set of sets; let s = index\">\n    <div *ngFor=\"let dir of set.directionNames; let d = index\">\n      {{set.name}} {{dir}} ({{status.status.wordsKnownByDirection[s][d]}})\n      <button (click)=\"new(s,d)\">learn new</button>\n      <button (click)=\"review(s,d)\" [disabled]=\"status.status.wordsToReviewByDirection[s][d] < 1\">\n        review ({{status.status.wordsToReviewByDirection[s][d]}})</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_service__ = __webpack_require__("../../../../../src/app/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consts__ = __webpack_require__("../../../../../src/app/consts.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MainComponent = (function () {
    function MainComponent(status, router) {
        this.status = status;
        this.router = router;
        this.sets = __WEBPACK_IMPORTED_MODULE_3__consts__["a" /* SETS */];
    }
    MainComponent.prototype.new = function (setIndex, dirIndex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.status.startNewStudy(setIndex, dirIndex)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/study']);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainComponent.prototype.review = function (setIndex, dirIndex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.status.startReviewStudy(setIndex, dirIndex)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/study']);
                        return [2 /*return*/];
                }
            });
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("../../../../../src/app/main.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var StatusService = (function () {
    function StatusService(authService, apiService) {
        this.authService = authService;
        this.apiService = apiService;
        this.username = this.authService.username;
        this.updateUserStatus();
    }
    StatusService.prototype.updateUserStatus = function () {
        var _this = this;
        this.apiService.getUserStatus(this.username).then(function (s) { return _this.status = s; });
    };
    StatusService.prototype.startNewStudy = function (setIndex, dirIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.apiService.getNewQuestions(this.username, setIndex, dirIndex)];
                    case 1:
                        _a.currentStudy = _b.sent();
                        this.startStudy();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusService.prototype.startReviewStudy = function (setIndex, dirIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.apiService.getReviewQuestions(this.username, setIndex, dirIndex)];
                    case 1:
                        _a.currentStudy = _b.sent();
                        this.startStudy();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusService.prototype.startStudy = function () {
        var _this = this;
        this.qsStillIncorrect = __WEBPACK_IMPORTED_MODULE_0_lodash__["clone"](this.currentStudy.questions);
        this.answers = new Map();
        this.qsStillIncorrect.forEach(function (q) {
            return _this.answers.set(q, { wordId: q.wordId, attempts: [], duration: 0 });
        });
        this.currentStudy.startTime = new Date(Date.now());
    };
    StatusService.prototype.nextQuestion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextIndex;
            return __generator(this, function (_a) {
                this.answered = false;
                nextIndex = __WEBPACK_IMPORTED_MODULE_0_lodash__["random"](this.qsStillIncorrect.length - 1);
                this.currentQuestion = this.qsStillIncorrect[nextIndex];
                this.isAudioQuestion = this.currentQuestion.question.indexOf('.mp3') > 0;
                this.currentAnswer = this.answers.get(this.currentQuestion);
                this.answerStartTime = Date.now();
                if (this.isAudioQuestion) {
                    this.playCurrentWordAudio();
                }
                return [2 /*return*/, this.currentQuestion];
            });
        });
    };
    StatusService.prototype.checkAnswer = function (answer) {
        var _this = this;
        if (!this.answered) {
            answer = this.normalizeAnswer(answer);
            this.answered = true;
            this.playCurrentWordAudio();
            //update answer
            this.currentAnswerString = answer;
            this.currentAnswer.duration += Date.now() - this.answerStartTime;
            this.currentAnswer.attempts.push(answer);
            //check if correct
            var correct = this.currentQuestion.answers.indexOf(answer) >= 0;
            if (correct) {
                __WEBPACK_IMPORTED_MODULE_0_lodash__["remove"](this.qsStillIncorrect, function (q) { return q === _this.currentQuestion; });
            }
            if (this.done()) {
                this.currentStudy.endTime = new Date(Date.now());
                this.currentStudy.answers = Array.from(this.answers.values());
                this.apiService.sendResults(this.currentStudy, this.authService.username)
                    .then(function (s) { return _this.status = s; });
            }
            return correct;
        }
    };
    StatusService.prototype.normalizeAnswer = function (answer) {
        answer = answer.replace(/ *\([^)]*\) */g, ""); //remove parentheses
        return __WEBPACK_IMPORTED_MODULE_0_lodash__["trim"](__WEBPACK_IMPORTED_MODULE_0_lodash__["toLower"](answer));
    };
    StatusService.prototype.done = function () {
        return this.qsStillIncorrect.length === 0;
    };
    StatusService.prototype.playCurrentWordAudio = function () {
        if (this.currentQuestion && this.currentQuestion.audio) {
            var audio = new Audio();
            audio.src = this.currentQuestion.audio;
            audio.load();
            audio.play();
        }
    };
    return StatusService;
}());
StatusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], StatusService);

var _a, _b;
//# sourceMappingURL=status.service.js.map

/***/ }),

/***/ "../../../../../src/app/study.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"status.currentQuestion\" (ngSubmit)=\"check()\" #answerForm=\"ngForm\">\n  <h1>{{status.isAudioQuestion ? \"🔊\" : status.currentQuestion.question}}</h1>\n  <p>{{status.currentQuestion.info}}</p>\n  <br>\n  <br>\n  <input autofocus2 id=\"answ\" name=\"answ\" class=\"form-control answer-input\"\n    required minlength=\"1\" [(ngModel)]=\"answer\" #answ=\"ngModel\"\n    [ngStyle]=\"{'background-color': bgColor}\" autocomplete=\"off\">\n  <div *ngIf=\"answ.invalid && (answ.dirty || answ.touched)\"\n    class=\"alert alert-danger\"></div>\n  <br>\n  <br>\n  <h4>{{status.answered ? status.currentQuestion.fullAnswers : \"\"}}</h4>\n</form>"

/***/ }),

/***/ "../../../../../src/app/study.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_service__ = __webpack_require__("../../../../../src/app/status.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudyComponent = (function () {
    function StudyComponent(status, router) {
        this.status = status;
        this.router = router;
        this.DELAY = 2000;
        this.next();
    }
    StudyComponent.prototype.next = function () {
        this.answer = null;
        this.checked = false;
        this.bgColor = 'White';
        if (!this.status.done()) {
            this.status.nextQuestion();
        }
        else {
            this.router.navigate(['/main']);
        }
    };
    StudyComponent.prototype.check = function () {
        var _this = this;
        //only check once!
        if (!this.checked && this.answer && this.answer.length > 0) {
            this.checked = true;
            this.correct = this.status.checkAnswer(this.answer);
            if (this.correct) {
                this.bgColor = 'PaleGreen';
                this.timeout = setTimeout(this.next.bind(this), this.DELAY);
            }
            else {
                this.bgColor = 'LightCoral';
                this.timeout = setTimeout(function () { return _this.router.navigate(['/view']); }, this.DELAY);
            }
        }
        else if (this.checked) {
            //shortcut
            clearTimeout(this.timeout);
            if (this.correct) {
                this.next();
            }
            else {
                this.router.navigate(['/view']);
            }
        }
    };
    return StudyComponent;
}());
StudyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("../../../../../src/app/study.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], StudyComponent);

var _a, _b;
//# sourceMappingURL=study.component.js.map

/***/ }),

/***/ "../../../../../src/app/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div (window:keydown.enter)=\"next()\">\n  <h1>{{status.isAudioQuestion ? \"🔊\" : status.currentQuestion.question}}</h1>\n  <br>\n  <h2>{{status.currentQuestion.fullAnswers}}</h2>\n  <br>\n  <h3>{{status.currentQuestion.otherFields}}</h3>\n  <br>\n  <p>{{status.currentQuestion.info}}</p>\n  <br>\n  <h4>You answered: {{status.currentAnswerString}}</h4>\n</div>"

/***/ }),

/***/ "../../../../../src/app/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_service__ = __webpack_require__("../../../../../src/app/status.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = (function () {
    function ViewComponent(status, router) {
        this.status = status;
        this.router = router;
    }
    ViewComponent.prototype.next = function () {
        this.router.navigate(['/study']);
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("../../../../../src/app/view.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ViewComponent);

var _a, _b;
//# sourceMappingURL=view.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map