import Mongoose = require('mongoose');
import bcrypt = require('bcryptjs');
import DataAccess from '../DataAccess';
import IUserModel from '../interfaces/IUserModel';

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
                username: { type: String, required: true, index: {unique: true} },
    		email: { type: String, required: true},
    		password: { type: String, required: true },
    		memberships: [],
    		owner: [],
            }, {collection: 'Users'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("User", this.schema);
    }
    
    public retrieveUserRooms(response:any, user:string): any {
        var query = this.model.find({username: user});
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public tryLogin(response:any, req:any): any {
        var user = req.body.username;
    	var query = this.model.findOne({username: user});
        query.exec( (err, result) => {
            bcrypt.compare(req.body.password, result.password, (err2, isMatch) => {
                if (err2) return err(err2);
                err(null, isMatch); 
            });
	});
    }

    public registerUser(response:any, req:any): any {
      var user = req.body.username;
      var pass = req.body.password;
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(pass, salt, function(err, hash) {
          var new_user = new this.model(
	      { username: user,
	        email: req.body.email,
	        password: hash,
		memberships: [],
		owner: []
	  });
	  new_user.save(function(err){
	    if (err) throw err;
          });
        });
      });
    }

}
