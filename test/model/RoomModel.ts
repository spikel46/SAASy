import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IRoomModel from '../interfaces/IRoomModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class RoomModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                roomID: Number,
    		isActive : Boolean,
    		isPublic : Boolean,
    		description : String,
    		users : [],
    		moderators : [],
    		admin: String,
    		keywords: [],
            }, {collection: 'Rooms'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRoomModel>("Room", this.schema);
    }

    public retrieveRooms(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveSingleRoom(response:any, filter:Object) {
	var query = this.model.findOne(filter);	
	console.log(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public search(response:any, term:string) {
        if(term === null){ term=""; }
        var s_regex = {$regex: term, $options: "si"}
        var filter = { $or:[ {keywords: s_regex}, {description: s_regex}, {title: s_regex}] } 
    	console.log(filter);
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
	return response;
    }
    public newRoom(response:any, req) {
        var id = req.body.roomId;
        var des = req.body.description;
        var admin = req.body.adminName;
        console.log(id,des,admin);
        var new_room = new this.model(
            { roomID: parseInt(id,10),
              isActive : true,
              isPublic : true,
              description: des,
              users : [],
              moderators : [],
              admin: admin, 
              keywords: ["new", "newer", "newest"]
        });
        new_room.save(function (err){
            if (err){
                console.log("errorrrrrr");
            }
        });
        var response = this.model.find({description: des});
        return response;
}

}
