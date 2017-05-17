import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IChatModel from '../interfaces/IChatModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class ChatModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                sender: String,
	        toRoom: Number,
	        content: String,
		timestamp: Date,
		score: Number,
            }, {collection: 'Chats'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IChatModel>("Chat", this.schema);
    }

    public retrieveRoomChats(response:any, filter:Object) {
	var query = this.model.find(filter);	
	console.log(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
    
    public newChat(response:any, req) {
        var sendID = req.body.sender;
        var RoomID = req.body.toRoom;
        var content_str = req.body.content;
        var time = req.body.timestamp;
        var rating = req.body.score;
        var new_chat = new this.model(
            { sender: sendID, 
              toRoom: RoomID,
              content: content_str,
              timestamp: time,
              score: rating
        });
        new_chat.save(function (err){
            if (err){
                console.log("error trying to save chat to db");
            }
        });
        var response = this.model.find({toRoom: RoomID});
        return response;
    }

}
