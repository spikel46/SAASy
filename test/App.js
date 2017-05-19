"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var url = require("url");
var bodyParser = require("body-parser");
var RoomModel_1 = require("./model/RoomModel");
var ChatModel_1 = require("./model/ChatModel");
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
            _this.Rooms.retrieveRooms(res);
        });
        router.get('/api/rooms/:roomID', function (req, res) {
            var id = parseInt(req.params.roomID);
            console.log('Query room with id: ' + id);
            _this.Rooms.retrieveSingleRoom(res, { roomID: id });
        });
        router.get('/api/chats/:toRoom', function (req, res) {
            var id = parseInt(req.params.toRoom);
            console.log('Query single list with id: ' + id);
            _this.Chats.retrieveRoomChats(res, { toRoom: id });
        });
        router.get('/api/search', function (req, res) {
            var urlParts = url.parse(req.url, true);
            var query = urlParts.query;
            var msg = "search for " + query.q;
            console.log(msg);
            _this.Rooms.search(res, { keywords: { $regex: query.q } }).then(function (list) {
                res.send(list);
            });
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
        //Put Routes
        router.put('/api/chats/:id/upvote', function (req, res) {
            console.log("hi");
            _this.Chats.upvote(res, req).then(function (list) {
                res.send(list);
            });
            console.log("bye");
        });
        router.put('/api/chats/:id/downvote', function (req, res) {
            console.log("hi");
            _this.Chats.downvote(res, req).then(function (list) {
                res.send(list);
            });
            console.log("bye");
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
