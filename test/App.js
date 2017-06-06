"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var RoomModel_1 = require("./model/RoomModel");
var ChatModel_1 = require("./model/ChatModel");
var UserModel_1 = require("./model/UserModel");
var googlePassport_1 = require("./SSO_OAuth/googlePassport");
var facebookPassport_1 = require("./SSO_OAuth/facebookPassport");
// Creates and configures an ExpressJS web server.
var App = (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.Rooms = new RoomModel_1["default"]();
        this.Chats = new ChatModel_1["default"]();
        this.Users = new UserModel_1["default"]();
        this.googlePassportObj = new googlePassport_1["default"]();
        this.facebookPassportObj = new facebookPassport_1["default"]();
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(session({ secret: 'ezsecret' }));
        this.express.use(passport.initialize());
        this.express.use(passport.session());
    };
    App.prototype.validateAuth = function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
            next();
        });
        var User = this.Users;
        passport.use(new LocalStrategy(function (username, password, done) {
            console.log(username, password);
            User.findOne({ username: username }, function (err, user) {
                console.log(user);
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false);
                }
                if (password !== user.password) {
                    return done(null, false);
                }
                return done(null, user);
            });
        }));
        passport.serializeUser(function (user, cb) {
            cb(null, user.id);
        });
        passport.deserializeUser(function (id, cb) {
            this.Users.findById(id, function (err, user) {
                if (err) {
                    return cb(err);
                }
                cb(null, user);
            });
        });
        router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));
        router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login', successRedirect: '/rooms' }));
        router.get('/auth/userdata', this.validateAuth, function (req, res) {
            console.log('user object:' + JSON.stringify(req.user));
            res.json(req.user);
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
            console.log("Register begin");
            _this.Users.registerUser(res, req); /*.then((user) =>{
              res.send(user);
            });*/
            console.log("Register complete");
        });
        router.post('/api/login', passport.authenticate('local', {
            successRedirect: '/home',
            failureRedirect: '/login'
        }));
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
        router.get('*', function (req, res) {
            res.sendFile(__dirname + '/dist/index.html');
        });
        //express routes
        this.express.use('/', express.static(__dirname + '/dist'));
        this.express.use('/', router);
    };
    return App;
}());
exports["default"] = new App().express;
