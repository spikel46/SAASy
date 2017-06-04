import * as Mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import DataAccess from '../DataAccess';
import IUserModel from '../interfaces/IUserModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class UserModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
	            ssoID: { type: String, index: {unique: true} },
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

    public registerUser(res:any, req:any){
      console.log("in registerUser: " + req.body.username + req.body.password);
      var user = req.body.username;
      var pass = req.body.password;
      var new_user = new this.model(
	      { username: req.body.username,
	        email: req.body.email,
	        password: req.body.password,
		memberships: req.body.memberships,
		owner: req.body.owner
	  });
      //HOW DO I DO THIS IN SERVER????
      new_user.save(function(err){
        if (err){
          //set up error object to return
	  console.log("error trying to register user");
	  res.send("/register");
	}
	else{
	  console.log("did register user");
	  res.send("/home");
	}
      });
    }
      /*bcrypt.genSalt(10, function(err, salt) {
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
    }*/

    public findOne(userQuery, cb): any {
        var query = this.model.findOne(userQuery);
        query.exec( (err, ret) => {
            if (err) { return cb(err,null); }
            return cb(null,ret);
        });
        
    }
}
