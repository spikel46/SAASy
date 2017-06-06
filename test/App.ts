import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as passport from 'passport';
var LocalStrategy = require('passport-local').Strategy;

import RoomModel from './model/RoomModel';
import ChatModel from './model/ChatModel';
import UserModel from './model/UserModel';
import GooglePassportObj from './SSO_OAuth/googlePassport';
import FacebookPassportObj from './SSO_OAuth/facebookPassport';
import DataAccess from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public Rooms:RoomModel;
  public Chats:ChatModel;
  public Users:UserModel;
  public googlePassportObj:GooglePassportObj;
  public facebookPassportObj:FacebookPassportObj;
  

  //Run configuration methods on the Express instance.
  constructor() {
    this.Rooms = new RoomModel();
    this.Chats = new ChatModel();
    this.Users = new UserModel();
    this.googlePassportObj = new GooglePassportObj();
    this.facebookPassportObj = new FacebookPassportObj();
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(session({ secret: 'ezsecret' }));
    this.express.use(passport.initialize());
    this.express.use(passport.session());    
  }

  private validateAuth(req, res, next){
      if (req.isAuthenticated()) { return next(); }
        res.redirect('/');
    }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();


    router.use( (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
      next();
    });
    





    let User = this.Users;

    passport.use( new LocalStrategy(
      function(username, password, done) {
        console.log(username, password);
        User.findOne({username: username}, function (err, user) {
          console.log(user);
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          if (password !== user.password) { return done(null, false); }
          return done(null, user);
        });
    }));
    
    passport.serializeUser(function(user, cb) {
     cb(null, user.id);
    });

    passport.deserializeUser(function(id, cb) {
      this.Users.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
      });
    });

    router.get('/auth/facebook', 
        passport.authenticate('facebook', 
            {scope: ['public_profile', 'email'] }
        )
    );

    router.get('/auth/facebook/callback', 
        passport.authenticate('facebook', 
            { failureRedirect: '/login', successRedirect: '/rooms' }
        )
    );

    router.get('/auth/userdata', this.validateAuth, (req, res) => {
        console.log('user object:' + JSON.stringify(req.user));
        res.json(req.user);
    });

    //Get Routes

    router.get('/api/rooms', (req, res) => {
        console.log('Getting all rooms');
        this.Rooms.retrieveRooms(res);
    });

    router.get('/api/rooms/:roomID', (req, res) => {
        var id = parseInt(req.params.roomID);
	console.log('Look for single Room: ' + id);
        this.Rooms.retrieveSingleRoom(res, {roomID: id});
    });

    router.get('/api/chats/:toRoom', (req, res) => {
        var id = parseInt(req.params.toRoom);
	console.log('Send Chat to Room: ' + id);
        this.Chats.retrieveRoomChats(res, {toRoom: id});
    });

    router.get('/api/search/:term',(req,res)=>{
	var term = req.params.term;
	console.log('Getting search results for: ' + term);
	this.Rooms.search(res, term);
    });

    //Post Routes

    router.post('/api/newroom',(req,res)=>{
      this.Rooms.newRoom(res, req).then((list) =>{
        res.send(list);
      });
    });

    router.post('/api/newchat',(req,res)=>{
      this.Chats.newChat(res, req).then((list) =>{
        res.send(list);
      });
    });

    router.post('/api/register',(req,res)=>{
      console.log("Register begin");
      this.Users.registerUser(res, req);/*.then((user) =>{
        res.send(user);
      });*/
      console.log("Register complete");
    });

    router.post('/api/login', passport.authenticate('local',
    {
      successRedirect: '/home',
      failureRedirect: '/login'
    }));

    //Put Routes
    router.put('/api/chats/:id/upvote',(req,res)=>{
      this.Chats.upvote(res,req).then((list)=>{
        res.send(list);
      });
      console.log("Upvoted chat");
    });

    router.put('/api/chats/:id/downvote',(req,res)=>{
      this.Chats.downvote(res,req).then((list)=>{
        res.send(list);
      });
      console.log("Downvoted chat");
    });

    router.put('/api/rooms/:id',(req,res)=>{
     console.log("updating room");
      this.Rooms.update(res,req);
      console.log("updated room");
    });


    router.get('*', (req, res) => {
       res.sendFile(__dirname + '/dist/index.html');
    });
    
    //express routes
    this.express.use('/', express.static(__dirname+'/dist'));
    this.express.use('/', router);

    
  }

}

export default new App().express;
