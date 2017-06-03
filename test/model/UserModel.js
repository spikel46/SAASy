"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var UserModel = (function () {
    function UserModel() {
        this.createSchema();
        this.createModel();
    }
    UserModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            username: { type: String, required: true, index: { unique: true } },
            email: { type: String, required: true },
            password: { type: String, required: true },
            memberships: [],
            owner: []
        }, { collection: 'Users' });
    };
    UserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("User", this.schema);
    };
    UserModel.prototype.retrieveUserRooms = function (response, user) {
        var query = this.model.find({ username: user });
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    UserModel.prototype.registerUser = function (response, req) {
        console.log("in registerUser: " + req.body.username + req.body.password);
        var user = req.body.username;
        var pass = req.body.password;
        var new_user = new this.model({ username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            memberships: req.body.memberships,
            owner: req.body.owner
        });
        //HOW DO I DO THIS IN SERVER????
        new_user.save(function (err) {
            if (err) {
                //set up error object to return
                console.log("error trying to register user");
            }
        });
        var response = this.model.find({ username: req.body.username });
        console.log("accepted response");
        console.log(response);
        return response;
    };
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
    UserModel.prototype.findOne = function (userQuery, cb) {
        var query = this.model.findOne(userQuery);
        query.exec(function (err, ret) {
            if (err) {
                return cb(err, null);
            }
            return cb(null, ret);
        });
    };
    return UserModel;
}());
exports["default"] = UserModel;
