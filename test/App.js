"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var RoomModel_1 = require("./model/RoomModel");
var ChatModel_1 = require("./model/ChatModel");
var UserModel_1 = require("./model/UserModel");
// Creates and configures an ExpressJS web server.
var App = (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Rooms = new RoomModel_1["default"]();
        this.Chats = new ChatModel_1["default"]();
        this.Users = new UserModel_1["default"]();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "PUT");
            next();
        });
        //Get Routes
        router.get('/api/rooms', function (req, res) {
            console.log('Getting all rooms');
            _this.Rooms.retrieveRooms(res);
        });
        router.get('/api/rooms/:roomID', function (req, res) {
            var id = parseInt(req.params.roomID);
            console.log('Look for single Room: ' + id);
            _this.Rooms.retrieveSingleRoom(res, { roomID: id });
        });
        router.get('/api/chats/:toRoom', function (req, res) {
            var id = parseInt(req.params.toRoom);
            console.log('Send Chat to Room: ' + id);
            _this.Chats.retrieveRoomChats(res, { toRoom: id });
        });
        router.get('/api/search/:term', function (req, res) {
            var term = req.params.term;
            console.log('Getting search results for: ' + term);
            _this.Rooms.search(res, term);
        });
        router.get('/api/login/:user', function (req, res) {
            _this.Users.tryLogin(res, req);
        });
        //Post Routes
        router.post('/api/newroom', function (req, res) {
            _this.Rooms.newRoom(res, req).then(function (list) {
                res.send(list);
            });
        });
        router.post('/api/newchat', function (req, res) {
            _this.Chats.newChat(res, req).then(function (list) {
                res.send(list);
            });
        });
        router.post('/api/register', function (req, res) {
            _this.Users.registerUser(res, req).then(function (list) {
                //redirect?
                res.send(list);
            });
        });
        //Put Routes
        router.put('/api/chats/:id/upvote', function (req, res) {
            _this.Chats.upvote(res, req).then(function (list) {
                res.send(list);
            });
            console.log("Upvoted chat");
        });
        router.put('/api/chats/:id/downvote', function (req, res) {
            _this.Chats.downvote(res, req).then(function (list) {
                res.send(list);
            });
            console.log("Downvoted chat");
        });
        router.put('/api/rooms/:id', function (req, res) {
            console.log("updating room");
            _this.Rooms.update(res, req);
            console.log("updated room");
        });
        //express routes
        this.express.use('/', router);
        //this.express.use('/', express.static(__dirname+'/pages'));
        //this line below is probably wrong
        this.express.use('/', express.static(__dirname + '/dist'));
    };
    return App;
}());
exports["default"] = new App().express;
