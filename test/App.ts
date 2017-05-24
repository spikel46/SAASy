import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import RoomModel from './model/RoomModel';
import ChatModel from './model/ChatModel';
import UserModel from './model/UserModel';
import DataAccess from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public Rooms:RoomModel;
  public Chats:ChatModel;
  public Users:UserModel;
  public idGenerator:number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.Rooms = new RoomModel();
    this.Chats = new ChatModel();
    this.Users = new UserModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    
  router.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT");
  next();
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

    router.get('/api/login/:user',(req,res)=>{
        this.Users.tryLogin(res, req);
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
      this.Users.registerUser(res, req).then((list) =>{
        //redirect?
        res.send(list);
      });
    });

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
