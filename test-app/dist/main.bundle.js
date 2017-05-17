webpackJsonp([1,4],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 111;


/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(123);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooms_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_detail_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { DashboardComponent }   from './dashboard.component';


var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'rooms/:roomID', component: __WEBPACK_IMPORTED_MODULE_3__room_detail_component__["a" /* RoomDetailComponent */] },
    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_2__rooms_component__["a" /* RoomsComponent */] }
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

/*
{ path: '', redirectTo: '/rooms', pathMatch: 'full' },
{ path: 'dashboard',  component: DashboardComponent },
*/ 
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(199),
        styles: [__webpack_require__(190)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__room_detail_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rooms_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rooms_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chats_chats_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chats_chats_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(122);
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
            __WEBPACK_IMPORTED_MODULE_5__room_detail_component__["a" /* RoomDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_6__rooms_component__["a" /* RoomsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__chats_chats_component__["a" /* ChatsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__rooms_service__["a" /* RoomsService */], __WEBPACK_IMPORTED_MODULE_9__chats_chats_service__["a" /* ChatsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chats_service__ = __webpack_require__(39);
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
        this.chatsService = chatsService;
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
        this.chatsService.sendChat(message, this.id)
            .then(function (chat) { return _this.chat = chat; });
    };
    return ChatsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], ChatsComponent.prototype, "id", void 0);
ChatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-chats',
        template: __webpack_require__(200),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chats_service__["a" /* ChatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chats_service__["a" /* ChatsService */]) === "function" && _a || Object])
], ChatsComponent);

var _a;
//# sourceMappingURL=chats.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(201),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 123:
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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "/*h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}*/\n.app-pages{\n  position:relative;\n  height:91%;\n  width:100%;\n  /*\n  background-color:red;\n  */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".chatbox{\n  background: rgba(255, 255, 255, 0.05);\n  width: 47.5vw;\n  height: 80vh;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  position: relative;\n  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);\n}\n\n.chatbox-header{\n    padding: 0 0 2px 0;\n    background: rgba(255,255,255,.1);\n}\n\n.chatbox-body{\n    overflow: auto;\n    padding: 10px;\n    height: 68vh;\n}\n\n.messages{\n    list-style-type: none; /*removes bullet points */\n    padding:0;\n}\n\n.chatbox-footer{\n    position: absolute;\n    width:100%;\n    bottom:0;\n    border-radius:20px;\n}\n\n.chatbox-messages-recieved{\n    /*these three lines below allow for right chat boxes*/\n    direction:\"ltr\";\n    float: left;\n    text-align: left;\n\n    \n    border-radius: 20px 20px 20px 20px;\n    /*\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n    border-bottom-left-radius: 20px;\n    */\n    padding-right:10px;\n    padding-left:10px;\n    \n    background: rgba(255,255,255,.1);\n    margin-bottom:5px;\n    clear: both; /*makes floats go to next line*/\n}\n.chatbox-messages-sent{\n    /*these three lines below allow for right chat boxes*/\n    direction:\"rtl\";\n    float: right;\n    text-align: right;\n    clear: both; /*makes floats go to next line*/\n    \n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n    border-bottom-left-radius: 20px;\n    \n    padding-right:10px;\n    padding-left:10px;\n    margin-bottom:5px;\n    \n    background: rgba(0,0,0,.1);\n    font-size: 18px;\n}\n\n.sender{\n    font-size:18px;\n}\n.content{\n    font-size:18px;\n}\n.date{\n    font-size:10px;\n}\n\n\n#msg-input{\n    border-top-left-radius: 20px;\n    /*border-top-right-radius: 20px;*/\n    /*border-bottom-right-radius: 20px;*/\n    border-bottom-left-radius: 20px;\n}\n\n#msg-btn{\n    /*border-top-left-radius: 20px;*/\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n    /*border-bottom-left-radius: 20px;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".why{\n    background-color: yellow;\n    width:100vw;\n    height:92vh;\n    /*overflow:hidden;*/\n    /*height:91vh;*/\n}\n\n.why2{\n    background-color: green;\n    width:100%;\n    height:85.25vh;\n    margin:0;\n}\n\n.why3{\n    background: linear-gradient(120deg, rgba(23, 190, 187, 1), rgba(240, 166, 202, 1));\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; /*everything magically went into place*/\n    height: 100%; /*1 vh/w is 1% of \"viewport's\" height and width*/\n    margin:0;\n}\n\n.toolbar{\n    height:100%;\n    background-color: blue;\n}\n\n.users{\n    height:100%;\n    background-color: blue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "/*color selected object*/\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n\n.rooms {  \n    list-style-type: none; /*removes bullet points */\n    padding: 0; /*pushes padding, moving the bullets to the left */\n    width: 15em; /*limit the highlight when selected*/\n}\n\n.rooms li {\n\n    cursor: pointer;\n    position: relative;\n    background-color: #EEE; /*turns the bullets white*/\n    margin: .5em; /* adds spacing between bullets */\n    padding: .3em 0; /*makes each bullet thicker*/\n    border-radius: 10px; /*rounds the edges*/\n}\n\n.rooms li:hover {\n    color: #607D8B; /*changes color of text on hover*/\n    background-color: #DDD; /*changes color of bullets*/\n}\n\n.rooms .badge {\n\n    display: inline-block;\n    font-size: small;\n    color: white; /*changes text color*/\n    /*padding: 0.8em 0.7em 0.7em 0.7em;*/\n    background-color: #607D8B; /*changes background color*/\n    line-height: 1em; /* changes number position inside the badge */\n    position: relative;\n    top: -4px; /*moves to align the top left corner*/\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 10px 0 0 0;\n}\nbutton {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n}\nbutton:hover {\n    background-color: #cfd8dc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-pages\">\n<nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n\t<div class=\"navbar-header\">\n\t  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>                        \n\t  </button>\n\t</div>\n\t<div class=\"collapse navbar-collapse outer-center\" id=\"myNavbar\">\n\t  <ul class=\"nav navbar-nav navbar-left\">\n\t    <a class=\"navbar-brand\" href=\"#\">Quorum Query</a>\n            <li class=\"active\"><a href=\"#\">Home</a></li>\n            <li class=\"dropdown\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Page 1 <span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n\t\t<li><a href=\"#\">Page 1-1</a></li>\n\t\t<li><a href=\"#\">Page 1-2</a></li>\n\t\t<li><a href=\"#\">Page 1-3</a></li>\n              </ul>\n            </li>\n            <li><a href=\"#\">Page 2</a></li>\n            <li><a routerLink=\"/rooms\" routerLinkActive = \"active\"> Rooms </a></li>\n\t  </ul>\n\t  <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n\t  </ul>\n\t  <ul class=\"nav navbar-nav\">\n\t    <!--nav searchbar -->\n\t    <form class=\"navbar-form inner-center\" method=\"get\" action=\"/search\">\n\t      <div class=\"input-group\">\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n\t\t<div class=\"input-group-btn\">\n\t\t  <button class=\"btn btn-default\" type=\"submit\">\n\t\t    <i class=\"glyphicon glyphicon-search\"></i>\n\t\t  </button>\t    \n\t\t</div>\n\t      </div>\n\t    </form>\n\t  </ul>\n\t</div>\n      </div>\n    </nav>\n<router-outlet style=\"font-size:0\"></router-outlet>\n</div>\n"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div class=\"chatbox why4\">\n  <div class=\"chatbox-header\">\n    <h3 class=\"chat-topic\">Group Chat</h3>\n  </div><!-- end of chat header -->\n  \n  <div class=\"chatbox-body\">\n    <ul class=\"messages\">\n      <li *ngFor=\"let chat of chats\">\n\t<div *ngIf=\"chat.sender === 'Joey'\">\n\t  <div class=\"chatbox-messages-sent\" id=\"chat-msg\">\n\t    <p class=\"sender\"> {{chat.sender}}: </p>\n\t    <p class=\"content\"> {{chat.content}} </p>\n\t    <p class=\"date\"> {{chat.timestamp | date:\"short\"}}</p>\n\t  </div>\n\t</div>\n\t<div *ngIf=\"chat.sender !== 'Joey'\">\n\t  <div class=\"chatbox-messages-recieved\" id=\"chat-msg\">\n\t    <p class=\"sender\"> {{chat.sender}}: </p>\n\t    <p class=\"content\"> {{chat.content}} </p>\n\t    <p class=\"date\"> {{chat.timestamp | date:\"short\"}}</p>\n\t  </div>\n\t</div>\n      </li>\n    </ul>\n  </div> <!-- end of chat body -->\n  \n  <div class=\"chatbox-footer\">\n    <div class=\"input-group\">\n      <input type=\"text\" id=\"msg-input\" placeholder=\"Type Something...\" class=\"form-control\" #messageContent />\n      <span class=\"input-group-btn\">\n      <button (click)=\"add(messageContent.value); messageContent.value=''\" id=\"msg-btn\" class=\"btn btn-primary btn-flat\">\n        Send\n      </button>\n      </span>\n    </div>\n  </div><!-- end of chat footer -->\n  \n</div><!-- end of chatbox-->\n"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"room\" class=\"why\">\n  <h2 style=\"margin-top:0; text-align:center;\">Room {{room.roomID}}: {{room.title}}</h2>\n\n  <div class=\"row why2\">\n    <!--left side toolbar/info-->\n    <div class=\"col-md-3 toolbar\">\n\t<div>\n\t  <label>ID:</label> {{room.roomID}}<br />\n\t  <label>Description:</label> {{room.description}}<br />\n\t  <label>Active:</label> {{room.isActive}}<br />\n\t  <label>Public:</label> {{room.isPublic}}<br />\n\t  <label>Moderators:</label> {{room.moderators}}<br />\n\t  <label>Keywords:</label> {{room.keywords}}<br />\n\t  <label>Admin:</label>\n\t  <input [(ngModel)]=\"room.admin\" placeholder=\"admin\" />\n\t</div>\n\t<button (click)=\"goBack()\">Back</button>\n    </div><!-- end left side toolbar/info-->\n\n    <!-- center chatbox -->\n    <div class=\"col-md-6 why3\">\n      <app-chats [id]=\"room.roomID\"></app-chats>\n    </div> <!-- end of middle column -->\n\n    <!--right side users -->\n    <div class=\"col-md-3 users\">\n      <label>Users:</label> {{room.users}}\n    </div>\n\n   </div><!--closes row -->\n</div>\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<h2>My Rooms</h2>\n<ul class=\"rooms\">\n  <li *ngFor=\"let room of rooms\"\n    [class.selected]= \"room === selectedRoom\"\n    (click)=\"onSelect(room)\">\n    <span class=\"badge\">{{room.roomID}}</span> {{room.admin}}\n  </li>\n</ul>\n<div *ngIf=\"selectedRoom\">\n  <h4>Description:</h4>{{selectedRoom.description}}<br />\n  <button (click)=\"gotoDetail()\">View Chatroom</button>\n</div>\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(3);
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
        this.chatsUrl = '/api/chats';
        this.postChatUrl = '/api/newchat';
        this.temp_user = "Joey";
        this.curr_time = new Date();
        this.rating = 30;
    }
    ChatsService.prototype.sendChat = function (content_str, roomID) {
        console.log(content_str, roomID);
        this.socket.emit('add-Chat', content_str);
        return this.http.post(this.postChatUrl, JSON.stringify({ sender: this.temp_user,
            toRoom: roomID,
            content: content_str,
            timestamp: this.curr_time,
            score: this.rating
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ChatsService.prototype.getRoomChats = function (roomID) {
        return this.http.get(this.chatsUrl + '/' + roomID)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ChatsService.prototype.getChatStream = function (roomID) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__('http://localhost:8080');
            _this.socket.on('Chat', function (data) {
                console.log(data);
                observer.next({ sender: _this.temp_user,
                    toRoom: roomID,
                    content: data,
                    timestamp: _this.curr_time,
                    score: _this.rating
                });
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(3);
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
        this.roomsUrl = '/api/rooms';
    }
    RoomsService.prototype.getRooms = function () {
        return this.http.get(this.roomsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RoomsService.prototype.getRoom = function (roomID) {
        return this.http.get(this.roomsUrl + '/' + roomID)
            .toPromise()
            .then(function (response) { return response.json(); })
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rooms_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chats_chats_service__ = __webpack_require__(39);
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
    RoomDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return RoomDetailComponent;
}());
RoomDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({
        selector: 'room-detail',
        template: __webpack_require__(202),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__rooms_service__["a" /* RoomsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__chats_chats_service__["a" /* ChatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__chats_chats_service__["a" /* ChatsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object])
], RoomDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=room-detail.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooms_service__ = __webpack_require__(40);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'my-rooms',
        template: __webpack_require__(203),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rooms_service__["a" /* RoomsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rooms_service__["a" /* RoomsService */]) === "function" && _b || Object])
], RoomsComponent);

var _a, _b;
//# sourceMappingURL=rooms.component.js.map

/***/ })

},[244]);
//# sourceMappingURL=main.bundle.js.map