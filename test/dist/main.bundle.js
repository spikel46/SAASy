webpackJsonp([1,4],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BlackHole_2_WikimediaCommons.3dffea5b2b66b9f859fa.jpg";

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 119;


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(130);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooms_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_detail_room_detail_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_search_room_search_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'rooms/:roomID', component: __WEBPACK_IMPORTED_MODULE_3__room_detail_room_detail_component__["a" /* RoomDetailComponent */] },
    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_2__rooms_component__["a" /* RoomsComponent */] },
    { path: 'search/:term', component: __WEBPACK_IMPORTED_MODULE_4__room_search_room_search_component__["a" /* RoomSearchComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.searchQuery = function (term) {
        if (!term) {
            return;
        }
        this.router.navigate(['/search', term]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(211),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__room_detail_room_detail_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rooms_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rooms_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chats_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chats_chats_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__room_search_room_search_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__room_detail_room_detail_component__["a" /* RoomDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_6__rooms_component__["a" /* RoomsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__chats_chats_component__["a" /* ChatsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__room_search_room_search_component__["a" /* RoomSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__rooms_service__["a" /* RoomsService */], __WEBPACK_IMPORTED_MODULE_9__chats_service__["a" /* ChatsService */], __WEBPACK_IMPORTED_MODULE_15__users_service__["a" /* UsersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chats_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatsComponent = (function () {
    function ChatsComponent(chatsService) {
        var _this = this;
        this.chatsService = chatsService;
        this.chatsService.getUserInfo()
            .subscribe(function (result) {
            _this.username = result.displayName;
        });
    }
    ChatsComponent.prototype.ngOnInit = function () {
        this.getChats();
        this.getChatStream();
    };
    ChatsComponent.prototype.getChats = function () {
        var _this = this;
        this.connection = this.chatsService.getRoomChats(this.id).then(function (chats) { return _this.chats = chats; });
    };
    ChatsComponent.prototype.getChatStream = function () {
        var _this = this;
        this.connection = this.chatsService.getChatStream(this.id)
            .subscribe(function (message) { _this.chats.push(message); });
    };
    ChatsComponent.prototype.add = function (message) {
        var _this = this;
        if (!message) {
            return;
        }
        this.chatsService.sendChat(message, this.id, this.username)
            .then(function (chat) { return _this.chat = chat; });
    };
    ChatsComponent.prototype.upvote = function (up_chat) {
        var _this = this;
        console.log("Up: " + up_chat["_id"]);
        this.chatsService.sendUpvote(up_chat)
            .then(function (chat) { return _this.chat = chat; });
    };
    ChatsComponent.prototype.downvote = function (down_chat) {
        var _this = this;
        console.log("Down: " + down_chat["_id"]);
        this.chatsService.sendDownvote(down_chat)
            .then(function (chat) { return _this.chat = chat; });
    };
    return ChatsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], ChatsComponent.prototype, "id", void 0);
ChatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chats',
        template: __webpack_require__(212),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chats_service__["a" /* ChatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chats_service__["a" /* ChatsService */]) === "function" && _a || Object])
], ChatsComponent);

var _a;
//# sourceMappingURL=chats.component.js.map

/***/ }),

/***/ 130:
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "/*h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}*/\n.app-pages{\n  height:100%;\n  width:100%;\n  margin:0;\n  /*background: url('../assets/img/bg1.jpg');\n  background-size: cover;\n  background-position: center;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".chatbox{\n  margin: 5px 0 0 0;\n  background: rgba(255, 255, 255, 0.05);\n  width: 47.5vw;\n  height: 80vh;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  position: relative;\n  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);\n}\n\n.chatbox-header{\n    padding: 0 0 2px 0;\n    background: rgba(255,255,255,.1);\n}\n\n.chatbox-body{\n    overflow: auto;\n    padding: 10px;\n    height: 68vh;\n}\n\n/*use this genius to get chat info */\n.messages li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n\n\n.messages{\n    list-style-type: none; /*removes bullet points */\n    padding:0;\n}\n\n.chatbox-footer{\n    position: absolute;\n    width:100%;\n    bottom:0;\n    border-radius:20px;\n}\n\n.chatbox-messages-recieved{\n    position:relative;\n    /*these three lines below allow for right chat boxes*/\n    direction:\"ltr\";\n    float: left;\n    text-align: left;\n    clear: both; /*makes floats go to next line*/\n    \n    border-radius: 20px 20px 20px 20px;\n    padding-right:10px;\n    padding-left:10px;\n    margin-bottom:5px;\n    \n    background: rgba(255,255,255,.1);\n}\n.chatbox-messages-sent{\n    position:relative;\n    /*these three lines below allow for right chat boxes*/\n    direction:\"rtl\";\n    float: right;\n    text-align: right;\n    clear: both; /*makes floats go to next line*/\n   \n    border-radius: 20px 20px 20px 20px;\n    padding-right:10px;\n    padding-left:10px;\n    margin-bottom:5px;\n    \n    background: rgba(0,0,0,.1);\n}\n\n.chatbox-messages-sent .message-rating{\n    position:absolute;\n    display:inline-block;\n    left:7px;\n    top:5px;\n}\n\n.chatbox-messages-recieved .message-rating{\n    margin:0px 0px 0px 0px;\n    display:inline-block;\n}\n\n#up-btn{\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n}\n\n#down-btn{\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n}\n\n.sender{\n    display:inline;\n    font-size:18px;\n}\n.content{\n    font-size:18px;\n    margin-bottom:0px;\n}\n.score{\n    margin-bottom:0px;\n}\n.date{\n    font-size:10px;\n}\n\n#msg-input{\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n}\n\n#msg-btn{\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    text-align:center;\n    height: calc(100% - 52px);\n    margin: 0 0 0 0;\n}\n\n.bg-1{\n    position: relative;\n    background-image: url(" + __webpack_require__(256) + ");\n    background-size: cover;\n    background-position:center;\n}\n\n.overlay{\n    position: absolute; /*within its parent element*/\n    \n    border-radius: 15px;\n    /*the following 3 lines are what puts stuff in the center*/\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n \n    /*makes the text box and text*/\n    color: white;\n    background: rgba(0, 0, 0, 0.75);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n}\n\n.container-fluid{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    text-align:center;\n    height: calc(100% - 52px);\n    margin: 0 0 0 0;\n}\n\n/*overlay in home component if wanted later*/\n\n.login-page{\n    position: relative;\n    background-image: url(" + __webpack_require__(258) + ");\n    background-size: cover;\n    background-position:center;\n}\n\n.login-form{\n    position: absolute; /*within its parent element*/\n    background: rgba(255, 255, 255, 0.5);\n    /*the following 3 lines are what puts stuff in the center*/\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n\n    color:black;\n    border-radius: 10px 10px 10px 10px;\n    overflow: auto;\n}\n\n.fb-button{\n    padding-bottom: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    text-align:center;\n    height: calc(100% - 52px);\n    margin: 0 0 0 0;\n}\n\n/*overlay in home component if wanted later*/\n\n.room-page{\n    position: relative;\n    background-image: url(" + __webpack_require__(116) + ");\n    background-size: cover;\n    background-position:center;\n}\n\n.room-page-container{\n    position: absolute; /*within its parent element*/\n    background: rgba(0, 0, 0, 0.75);\n    /*the following 3 lines are what puts stuff in the center*/\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border-radius: 10px 10px 10px 10px;\n    overflow: auto;\n}\n\n/*color selected object*/\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n\n.rooms {\n    list-style-type: none; /*removes bullet points */\n    padding: 0; /*pushes padding, moving the bullets to the left */\n    width: 15em; /*limit the highlight when selected*/\n}\n\n.rooms li {\n    cursor: pointer;\n    position: relative;\n    background-color: #EEE; /*turns the bullets white*/\n    margin: .5em; /* adds spacing between bullets */\n    padding: .3em 0; /*makes each bullet thicker*/\n    text-align: left;\n    border-radius: 10px; /*rounds the edges*/\n    color:black;\n}\n\n.rooms li:hover {\n    color: #607D8B; /*changes color of text on hover*/\n    background-color: #DDD; /*changes color of bullets*/\n}\n\n.rooms .badge {\n    display: inline-block;\n    font-size: small;\n    color: white; /*changes text color*/\n    /*padding: 0.8em 0.7em 0.7em 0.7em;*/\n    background-color: #607D8B; /*changes background color*/\n    line-height: 1em; /* changes number position inside the badge */\n    position: relative;\n    top: -5px; /*moves to align the top left corner*/\n    height: 1.8em;\n    /*margin-right: .8em;*/\n    border-radius: 10px 0 0 0;\n}\nbutton {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n    color: black;\n}\nbutton:hover {\n    background-color: #cfd8dc;\n}\n\n.pop-out{\n    color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n}\n\n.container-fluid{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    text-align:center;\n    height: calc(100% - 52px);\n    margin: 0 0 0 0;\n}\n\n/*overlay in home component if wanted later*/\n\n.register-page{\n    position: relative;\n    background-image: url(" + __webpack_require__(257) + ");\n    background-size: cover;\n    background-position:center;\n}\n\n.register-form{\n    position: absolute; /*within its parent element*/\n    background: rgba(255, 255, 255, 0.5);\n\n    /*the following 3 lines are what puts stuff in the center*/\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n\n    color:black;\n    border-radius: 10px 10px 10px 10px;\n    overflow: auto;\n}\n\n.cancelbtn\n{\n    background-color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".room-content{\n    background: linear-gradient(180deg, rgba(0, 0, 0, 1), rgb(51, 142, 141));/*rgba(23, 190, 187, 1));*/\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    text-align:center;\n    height: calc(100% - 52px);\n    margin: 0 0 0 0;\n    color: #ddff00;\n}\n.room-container{\n    position:relative;\n    /*background-color: green;*/\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    margin: 0;\n}\n\n.room-core{\n    /*background: linear-gradient(120deg, rgba(23, 190, 187, 1), rgba(240, 166, 202, 1)); cool blue-pink gradient*/ \n    display: -webkit-box; \n    display: -ms-flexbox; \n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; /* align items in Main Axis */\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; /* align items in Cross Axis */\n    -ms-flex-line-pack: stretch;\n        align-content: stretch; /* Extra space in Cross Axis */\n}\n\n.toolbar{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    justify-self: stretch;   \n}\n\n.users{\n    /*background-color: blue;8*/\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    justify-self: stretch;\n}\n\n#settings-btn{\n    border-radius: 6px;\n    display: inline;\n    margin-bottom: 3px;\n    margin-left: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    text-align:center;\n    height: calc(100% - 52px);\n    margin: 0 0 0 0;\n}\n\n/*overlay in home component if wanted later*/\n\n.result-page{\n    position: relative;\n    background-image: url(" + __webpack_require__(255) + ");\n    background-size: cover;\n    background-position:center;\n}\n\n.result-page-container{\n    position: absolute; /*within its parent element*/\n    background: rgba(255, 255, 255, 0.5);\n    /*the following 3 lines are what puts stuff in the center*/\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n\n    color:black;\n    border-radius: 10px 10px 10px 10px;\n    overflow: auto;\n}\n\n/*color selected object*/\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n\n.rooms {\n    list-style-type: none; /*removes bullet points */\n    padding: 0; /*pushes padding, moving the bullets to the left */\n    width: 15em; /*limit the highlight when selected*/\n}\n\n.rooms li {\n    cursor: pointer;\n    position: relative;\n    background-color: #EEE; /*turns the bullets white*/\n    margin: .5em; /* adds spacing between bullets */\n    padding: .3em 0; /*makes each bullet thicker*/\n    text-align: left;\n    border-radius: 10px; /*rounds the edges*/\n    color:black;\n}\n\n.rooms li:hover {\n    color: #607D8B; /*changes color of text on hover*/\n    background-color: #DDD; /*changes color of bullets*/\n}\n\n.rooms .badge {\n    display: inline-block;\n    font-size: small;\n    color: white; /*changes text color*/\n    /*padding: 0.8em 0.7em 0.7em 0.7em;*/\n    background-color: #607D8B; /*changes background color*/\n    line-height: 1em; /* changes number position inside the badge */\n    position: relative;\n    top: -5px; /*moves to align the top left corner*/\n    height: 1.8em;\n    /*margin-right: .8em;*/\n    border-radius: 10px 0 0 0;\n}\nbutton {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n    color: black;\n}\nbutton:hover {\n    background-color: #cfd8dc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".container-fluid{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    text-align:center;\n    height: calc(100% - 52px);\n    margin: 0 0 0 0;\n}\n\n/*overlay in home component if wanted later*/\n\n.room-page{\n    position: relative;\n    background-image: url(" + __webpack_require__(116) + ");\n    background-size: cover;\n    background-position:center;\n}\n\n.room-page-container{\n    position: absolute; /*within its parent element*/\n    background: rgba(0, 0, 0, 0.75);\n    /*the following 3 lines are what puts stuff in the center*/\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border-radius: 10px 10px 10px 10px;\n    overflow: auto;\n}\n\n/*color selected object*/\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n\n.rooms {\n    list-style-type: none; /*removes bullet points */\n    padding: 0; /*pushes padding, moving the bullets to the left */\n    width: 15em; /*limit the highlight when selected*/\n}\n\n.rooms li {\n    cursor: pointer;\n    position: relative;\n    background-color: #EEE; /*turns the bullets white*/\n    margin: .5em; /* adds spacing between bullets */\n    padding: .3em 0; /*makes each bullet thicker*/\n    text-align: left;\n    border-radius: 10px; /*rounds the edges*/\n    color:black;\n}\n\n.rooms li:hover {\n    color: #607D8B; /*changes color of text on hover*/\n    background-color: #DDD; /*changes color of bullets*/\n}\n\n.rooms .badge {\n    display: inline-block;\n    font-size: small;\n    color: white; /*changes text color*/\n    /*padding: 0.8em 0.7em 0.7em 0.7em;*/\n    background-color: #607D8B; /*changes background color*/\n    line-height: 1em; /* changes number position inside the badge */\n    position: relative;\n    top: -5px; /*moves to align the top left corner*/\n    height: 1.8em;\n    /*margin-right: .8em;*/\n    border-radius: 10px 0 0 0;\n}\nbutton {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n    color: black;\n}\nbutton:hover {\n    background-color: #cfd8dc;\n}\n\n.pop-out{\n    color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-pages\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n\t</button>\n      </div>\n      <div class=\"collapse navbar-collapse outer-center\" id=\"myNavbar\">\n\t<ul class=\"nav navbar-nav navbar-left\">\n\t  <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">Quorum Query</a>\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Page 1 <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n\t      <li><a href=\"#\">Page 1-1</a></li>\n\t      <li><a href=\"#\">Page 1-2</a></li>\n\t      <li><a href=\"#\">Page 1-3</a></li>\n            </ul>\n          </li>\n          <li><a href=\"#\">Page 2</a></li>\n          <li><a routerLink=\"/rooms\" routerLinkActive=\"active\"> Rooms </a></li>\n\t</ul>\n\t<ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/profile\" routerLinkActive=\"active\">\n\t      <span class=\"glyphicon glyphicon-user\"></span> Profile\n\t  </a></li>\n          <li><a routerLink=\"/login\" routerLinkActive=\"active\">\n\t      <span class=\"glyphicon glyphicon-log-in\"></span> Login\n\t  </a></li>\n\t</ul>\n\t<ul class=\"nav navbar-nav\">\n\t  <!--nav searchbar -->\n\t  <form class=\"navbar-form inner-center\">\n\t    <div class=\"input-group\">\n\t      <input class=\"form-control\" placeholder=\"Search\" (keyup.enter)=\"searchQuery(searchContent.value); searchContent.value='';\" #searchContent/>\n\t      <div class=\"input-group-btn\">\n\t\t<button class=\"btn btn-default\" (click)=\"searchQuery(searchContent.value); searchContent.value='';\">\n\t\t  <i class=\"glyphicon glyphicon-search\"></i>\n\t\t</button>\t    \n\t      </div>\n\t    </div>\n\t  </form>\n\t</ul>\n      </div>\n    </div>\n  </nav>\n  <router-outlet style=\"font-size:0\"></router-outlet>\n</div>\n"

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<div class=\"chatbox\">\n  <div class=\"chatbox-header\">\n    <h3 style=\"margin:0;\" class=\"chat-topic\">\n      Group Chat\n    </h3>\n  </div><!-- end of chat header -->\n  \n  <div class=\"chatbox-body\">\n    <ul class=\"messages\">\n      <li *ngFor=\"let chat of chats\">\n\t<div *ngIf=\"chat.sender === 'Joey'\">\n\t  <div class=\"chatbox-messages-sent\" id=\"chat-msg\">\n            <div class=\"message-rating input-group-btn\">\n              <button class=\"btn btn-default btn-xs\" id=\"up-btn\" (click)=\"upvote(chat)\">\n\t\t<i class=\"glyphicon glyphicon-thumbs-up\"></i>\n\t      </button>\n              <button class=\"btn btn-default btn-xs\" id=\"down-btn\" (click)=\"downvote(chat)\">\n\t\t<i class=\"glyphicon glyphicon-thumbs-down\"></i>\n\t      </button>\n            </div>\n\t    <p class=\"sender\"> {{chat.sender}}: </p>\n\t    <p class=\"content\"> {{chat.content}} </p>\n            <p class=\"score\"> {{ chat.score }} </p>\n\t    <p class=\"date\"> {{chat.timestamp | date:\"short\"}}</p>\n\t  </div>\n\t</div>\n\t<div *ngIf=\"chat.sender !== 'Joey'\">\n\t  <div class=\"chatbox-messages-recieved\" id=\"chat-msg\">\n\t    <p class=\"sender\"> {{chat.sender}}: </p>\n\t    <div class=\"message-rating input-group-btn\">\n\t      <button class=\"btn btn-default btn-xs\" id=\"up-btn\" (click)=\"upvote(chat)\">\n\t\t<i class=\"glyphicon glyphicon-thumbs-up\"></i>\n\t      </button>\n\t      <button class=\"btn btn-default btn-xs\" id=\"down-btn\" (click)=\"downvote(chat)\">\n\t\t<i class=\"glyphicon glyphicon-thumbs-down\"></i>\n\t      </button>\n\t    </div>\n\t    <p class=\"content\"> {{chat.content}} </p>\n\t    <p class=\"score\"> {{ chat.score }} </p>\n\t    <p class=\"date\"> {{chat.timestamp | date:\"short\"}}</p>\n\t  </div>\n\t</div>\n      </li>\n    </ul>\n  </div> <!-- end of chat body -->\n  \n  <div class=\"chatbox-footer\">\n    <div class=\"input-group\">\n      <input #messageContent id=\"msg-input\" placeholder=\"Type Something...\" class=\"form-control\"  (keyup.enter)=\"add(messageContent.value); messageContent.value='';\"/>\n      <span class=\"input-group-btn\">\n\t<button (click)=\"add(messageContent.value); messageContent.value='';\" id=\"msg-btn\" class=\"btn btn-primary btn-flat\">\n          Send\n\t</button>\n      </span>\n    </div>\n  </div><!-- end of chat footer -->\n</div><!-- end of chatbox-->\n\n\n\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-1 text-center\">\n  <div class=\"overlay jumbotron\">\n    <h1>Quorum Query</h1>\n    <h3>In a universe full of questions, we help find the answers</h3>\n    <!-- custom background-->\n    <div class=\"input-group\">\n      <input class=\"form-control\" placeholder=\"Search\" (keyup.enter)=\"searchQuery(searchContent.value); searchContent.value='';\" #searchContent/>\n      <div class=\"input-group-btn\">\n\t<button class=\"btn btn-default\" (click)=\"searchQuery(searchContent.value); searchContent.value='';\">\n\t  <i class=\"glyphicon glyphicon-search\"></i>\n\t</button>\t    \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<!-- https://www.w3schools.com/howto/howto_css_login_form.asp -->\n\n<div class=\"container-fluid login-page\">\n<div class=\"login-form col-md-6\">\n  <h2>Login Form</h2>\n  <a routerLink=\"/register\" routerLinkActive=\"active\"><u>Not a user? Register!</u></a>\n<div class=\"clearfix\">\n    <label><b>Username</b></label>\n    <input [(ngModel)]=\"user.username\" /><br />\n    <label><b>Password</b></label>\n    <input type=\"password\" [(ngModel)]=\"user.password\" /><br />\n</div>\n  <div class=\"clearfix\">\n    <!--<input type=\"checkbox\" checked=\"checked\"> Remember me-->\n    <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n    <button (click)=\"login()\">Login</button>\n    <!--<span class=\"psw\">Forgot <a href=\"#\">password?</a></span>-->\n  </div>\n  <div class=\"clearfix fb-button\">\n    <a class=\"btn btn-primary\" href=\"/auth/facebook\">Login with Facebook</a>\n  </div>\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2> Profile </h2>\n  <p>{{ password }}</p>\n  <p>{{ username }}</p>\n  \n<div class=\"room-page container-fluid\">\n\n<div class=\"room-page-container\">\n  <h2 style=\"color:#FFF;\">My Rooms</h2>\n  <ul class=\"rooms\">\n    <li *ngFor=\"let room of rooms\"\n\t[class.selected]= \"room === selectedRoom\"\n\t(click)=\"onSelect(room)\">\n      <span class=\"badge\">{{room.roomID}}</span> {{room.title}}\n    </li>\n  </ul>\n  <div *ngIf=\"selectedRoom\" class=\"pop-out\">\n    <h4>Description:</h4>{{selectedRoom.description}}<br />\n    <button (click)=\"gotoDetail()\">View Chatroom</button>\n  </div>\n</div>\n\n</div>\n</div>\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<!-- https://www.w3schools.com/howto/howto_css_signup_form.asp -->\n\n<div class=\"container-fluid register-page\">\n\n<div class=\"register-form col-md-6\">\n<h2>Signup Form</h2>\n\n  <div *ngIf=\"message\"> {{ message }} </div>\n\n  <div class=\"clearfix\">\n    <a routerLink=\"/login\" routerLinkActive=\"active\"><u>Already a user? Login!</u></a>\n  </div>\n\n  <label><b>Username</b></label>\n  <input [(ngModel)]=\"user.username\" /><br />\n  <label><b>Email</b></label>\n  <input [(ngModel)]=\"user.email\" /><br />\n  <label><b>Password</b></label>\n  <input type=\"password\" [(ngModel)]=\"user.password\" /><br />\n  <label><b>Repeat Password</b></label>\n  <input type=\"password\" [(ngModel)]=\"confirmPass\">\n  <!--<input type=\"text\" placeholder=\"Desired Username\" name=\"username\" required>\n            \n      \n      <input type=\"checkbox\" checked=\"checked\"> Remember me\n      -->\n<div class=\"clearfix\">\n    <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n    <button (click)=\"register()\" class=\"signupbtn\">Sign Up</button>\n</div>\n</div>\n</div>\n\n<!--\n  <div class=\"result-page-container col-md-6\">\n    <h2>Results:</h2>\n    <ul class=\"rooms\">\n      <li *ngFor=\"let room of rooms\"\n\t  [class.selected]= \"room === selectedRoom\"\n\t  (click)=\"onSelect(room)\">\n\t<span class=\"badge\">{{room.roomID}}</span> {{room.title}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedRoom\">\n      <h4>Description:</h4>{{selectedRoom.description}}<br />\n      <button (click)=\"gotoDetail()\">Join Chatroom</button>\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"room\" class=\"room-content\">\n\n  <div class=\"room-header\">\n    <h2 style=\"margin-top:10px;\">\n      <button class=\"btn btn-default btn-xs\" id=\"settings-btn\" data-toggle=\"modal\" data-target=\"#settings-modal\">\n\t<i class=\"glyphicon glyphicon-cog\"></i>\n      </button>Room {{room.roomID}}: {{room.title}}</h2>\n  </div>\n\n  <div class=\"room-container\">\n    <!--left side toolbar/info-->\n    <div class=\"col-md-3 toolbar\">\n      <label>Room Title:</label> {{ room.title }}<br />\n      <label>ID:</label> {{room.roomID}}<br />\n      <label>Description:</label> {{room.description}}<br />\n      <label>Active:</label> {{room.isActive}}<br />\n      <label>Public:</label> {{room.isPublic}}<br />\n      <label>Moderators:</label> {{room.moderators}}<br />\n      <label>Keywords:</label> {{room.keywords}}<br />\n      <label>Moderators:</label> {{ room.moderators }}<br />\n      <label>Admin:</label> {{ room.admin }} <br />\n      <button (click)=\"goBack()\">Back</button>\n    </div><!-- end left side toolbar/info-->\n    \n    <!-- center chatbox -->\n    <div class=\"col-md-6 room-core\">\n      <app-chats [id]=\"room.roomID\"></app-chats>\n    </div> <!-- end of middle column -->\n    \n    <!--right side users -->\n    <div class=\"col-md-3 users\">\n      <label>Users:</label> {{room.users}}\n    </div>\n    \n  </div><!-- end of room container -->\n\n<!-- Settings Modal -->\n<div id=\"settings-modal\" class=\"modal\" role=\"dialog\">\n  <!-- directive should go here to show allowed settings based on user -->\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Settings</h4>\n      </div>\n      <div class=\"modal-body\" #valueOfInterest>\n\t<label>Room ID:</label> {{room.roomID}}<br />\n\t<label>Description:</label>\n\t<input [(ngModel)]=\"room.description\" /><br />\n\t<label>Active:</label>\n\t<div class=\"form-group\">\n\t  <input type=\"radio\" name=\"active-buttons\"[(ngModel)]=\"room.isActive\" value=\"true\">True\n\t  <input type=\"radio\" name=\"active-buttons\" [(ngModel)]=\"room.isActive\" value=\"false\">False<br />\n\t</div>\n\t<label>Public:</label>\n\t<div class=\"form-group\">\n\t  <input type=\"radio\" name=\"public-buttons\" [(ngModel)]=\"room.isPublic\" value=\"true\">True\n\t  <input type=\"radio\" name=\"public-buttons\" [(ngModel)]=\"room.isPublic\" value=\"false\">False<br />\n\t</div>\n\t<label>Keywords:</label>\n\t<input [(ngModel)]=\"room.keywords\" /><br />\n      </div>\n     <div class=\"modal-footer\">\n       <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n       <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"saveRoom();\">Submit</button>\n     </div>\n    </div>\n  </div>\n  \n</div><!--end of modal  -->\n\n\n</div><!-- end of room content-->\n\n\n\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<div class = \"container-fluid result-page\">\n  <div class=\"result-page-container col-md-6\">\n    <h2>Results:</h2>\n    <ul class=\"rooms\">\n      <li *ngFor=\"let room of rooms\"\n\t  [class.selected]= \"room === selectedRoom\"\n\t  (click)=\"onSelect(room)\">\n\t<span class=\"badge\">{{room.roomID}}</span> {{room.title}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedRoom\">\n      <h4>Description:</h4>{{selectedRoom.description}}<br />\n      <button (click)=\"gotoDetail()\">Join Chatroom</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<div class=\"room-page container-fluid\">\n\n<div class=\"room-page-container\">\n  <h2 style=\"color:#FFF;\">My Rooms</h2>\n  <ul class=\"rooms\">\n    <li *ngFor=\"let room of rooms\"\n\t[class.selected]= \"room === selectedRoom\"\n\t(click)=\"onSelect(room)\">\n      <span class=\"badge\">{{room.roomID}}</span> {{room.title}}\n    </li>\n  </ul>\n  <div *ngIf=\"selectedRoom\" class=\"pop-out\">\n    <h4>Description:</h4>{{selectedRoom.description}}<br />\n    <button (click)=\"gotoDetail()\">View Chatroom</button>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomsService = (function () {
    function RoomsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.hostUrl = '';
    }
    RoomsService.prototype.getRooms = function () {
        return this.http.get(this.hostUrl + '/api/rooms')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RoomsService.prototype.getRoom = function (roomID) {
        return this.http.get(this.hostUrl + '/api/rooms/' + roomID)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RoomsService.prototype.update = function (room) {
        return this.http.put(this.hostUrl + '/api/rooms/' + room.roomID, JSON.stringify(room), { headers: this.headers })
            .toPromise()
            .then(function () { return room; })
            .catch(this.handleError);
    };
    RoomsService.prototype.searchRooms = function (query) {
        return this.http.get(this.hostUrl + '/api/search/' + query)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RoomsService.prototype.getUserRooms = function () {
        return this.http.get(this.hostUrl + '/api/profile')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RoomsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return RoomsService;
}());
RoomsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RoomsService);

var _a;
//# sourceMappingURL=rooms.service.js.map

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BlackHole_1_WikimediaCommons.88aa7ff4fee078cbd23f.jpg";

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "HelixNebulaWikimediaCommons.816e0545f275be4be74b.jpg";

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "InputPortal.4ca5cfa238f29a98edcf.jpg";

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "OutputPortal.311f77d06084002122d7.jpg";

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(120);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.usersUrl = '';
    }
    UsersService.prototype.getUserInfo = function () {
        return this.http.get(this.usersUrl + '/auth/userdata')
            .map(function (response) { return response.json(); });
    };
    UsersService.prototype.register = function (user) {
        console.log(JSON.stringify(user));
        return this.http.post(this.usersUrl + '/api/register', JSON.stringify({ username: user.username,
            email: user.email,
            password: user.password,
            memberships: [],
            owner: []
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    UsersService.prototype.login = function (user) {
        console.log(user.username + " " + user.password);
        return this.http.post(this.usersUrl + '/api/login', JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatsService = (function () {
    function ChatsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.hostUrl = '';
        this.curr_time = new Date();
    }
    ChatsService.prototype.getUserInfo = function () {
        return this.http.get(this.hostUrl + '/auth/userdata')
            .map(function (response) { return response.json(); });
    };
    ChatsService.prototype.sendChat = function (content_str, roomID, u_name) {
        console.log(content_str, roomID, u_name);
        var my_chat = {
            sender: u_name,
            toRoom: roomID,
            content: content_str,
            timestamp: this.curr_time,
            score: 0
        };
        this.socket.emit('add-Chat', my_chat);
        return this.http.post(this.hostUrl + '/api/newchat', JSON.stringify(my_chat), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ChatsService.prototype.getRoomChats = function (roomID) {
        return this.http.get(this.hostUrl + '/api/chats/' + roomID)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ChatsService.prototype.getChatStream = function (roomID) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.hostUrl);
            _this.socket.on('Chat', function (data) {
                console.log(data);
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatsService.prototype.sendUpvote = function (up_chat) {
        return this.http.put(this.hostUrl + '/api/chats/' + up_chat["_id"] + '/upvote', JSON.stringify(up_chat), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ChatsService.prototype.sendDownvote = function (down_chat) {
        return this.http.put(this.hostUrl + '/api/chats/' + down_chat["_id"] + '/downvote', JSON.stringify(down_chat), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ChatsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ChatsService;
}());
ChatsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ChatsService);

var _a;
//# sourceMappingURL=chats.service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.searchQuery = function (term) {
        if (!term) {
            return;
        }
        this.router.navigate(['/search', term]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(213),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__(33);
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
    //eventually remember me?
    function LoginComponent(userService) {
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.userService.login(this.user);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(214),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rooms_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(_usersService, router, roomsService) {
        var _this = this;
        this.router = router;
        this.roomsService = roomsService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */];
        this.usersService$ = _usersService;
        this.usersService$.getUserInfo()
            .subscribe(function (result) {
            _this.username = result.displayName;
            _this.password = result.emails[0].value;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    ProfileComponent.prototype.onSelect = function (room) {
        this.selectedRoom = room;
    };
    ProfileComponent.prototype.getRooms = function () {
        var _this = this;
        this.roomsService.getUserRooms().then(function (rooms) { return _this.rooms = rooms; });
    };
    ProfileComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/rooms', this.selectedRoom.roomID]);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(215),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__rooms_service__["a" /* RoomsService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */];
    }
    RegisterComponent.prototype.confirm = function (pwd1, pwd2) {
        if (pwd1 != pwd2) {
            this.message = "Passwords do not match";
            return false;
        }
        if (pwd1 == pwd2) {
            this.message = "Passwords match! Please log in!";
            return true;
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var new_page;
        if (this.confirm(this.user.password, this.confirmPass)) {
            this.userService.register(this.user)
                .then(function (result) {
                console.log("RESULT" + result["_body"]);
                new_page = result["_body"];
                _this.router.navigate([new_page]);
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__(216),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rooms_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chats_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomDetailComponent = (function () {
    function RoomDetailComponent(roomsService, chatsService, route, location) {
        this.roomsService = roomsService;
        this.chatsService = chatsService;
        this.route = route;
        this.location = location;
    }
    RoomDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.roomsService.getRoom(+params['roomID']); })
            .subscribe(function (room) { return _this.room = room; });
    };
    RoomDetailComponent.prototype.saveRoom = function () {
        this.roomsService.update(this.room)
            .then(function () { return console.log("update finished"); });
    };
    RoomDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return RoomDetailComponent;
}());
RoomDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'room-detail',
        template: __webpack_require__(217),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__rooms_service__["a" /* RoomsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__chats_service__["a" /* ChatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__chats_service__["a" /* ChatsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object])
], RoomDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=room-detail.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rooms_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomSearchComponent = (function () {
    function RoomSearchComponent(route, router, roomsService) {
        this.route = route;
        this.router = router;
        this.roomsService = roomsService;
    }
    RoomSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.roomsService.searchRooms(_this.route.params["_value"]["term"]); })
            .subscribe(function (rooms) { return _this.rooms = rooms; });
    };
    RoomSearchComponent.prototype.onSelect = function (room) {
        this.selectedRoom = room;
    };
    RoomSearchComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/rooms', this.selectedRoom.roomID]);
    };
    return RoomSearchComponent;
}());
RoomSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-room-search',
        template: __webpack_require__(218),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__rooms_service__["a" /* RoomsService */]) === "function" && _c || Object])
], RoomSearchComponent);

var _a, _b, _c;
//# sourceMappingURL=room-search.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooms_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomsComponent = (function () {
    function RoomsComponent(router, roomsService) {
        this.router = router;
        this.roomsService = roomsService;
    }
    RoomsComponent.prototype.ngOnInit = function () {
        this.getRooms();
    };
    RoomsComponent.prototype.onSelect = function (room) {
        this.selectedRoom = room;
    };
    RoomsComponent.prototype.getRooms = function () {
        var _this = this;
        this.roomsService.getRooms().then(function (rooms) { return _this.rooms = rooms; });
    };
    RoomsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/rooms', this.selectedRoom.roomID]);
    };
    return RoomsComponent;
}());
RoomsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-rooms',
        template: __webpack_require__(219),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rooms_service__["a" /* RoomsService */]) === "function" && _b || Object])
], RoomsComponent);

var _a, _b;
//# sourceMappingURL=rooms.component.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.bundle.js.map