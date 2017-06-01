"use strict";
exports.__esModule = true;
var bcrypt = require("bcryptjs");
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var RoomModel = (function () {
    function RoomModel() {
        this.createSchema();
        this.createModel();
    }
    RoomModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            username: { type: String, required: true, index: { unique: true } },
            email: { type: String, required: true },
            password: { type: String, required: true },
            memberships: [],
            owner: []
        }, { collection: 'Users' });
    };
    RoomModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("User", this.schema);
    };
    RoomModel.prototype.retrieveUserRooms = function (response, user) {
        var query = this.model.find({ username: user });
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RoomModel.prototype.tryLogin = function (response, req) {
        var user = req.body.username;
        var query = this.model.findOne({ username: user });
        query.exec(function (err, result) {
            bcrypt.compare(req.body.password, result.password, function (err2, isMatch) {
                if (err2)
                    return err(err2);
                err(null, isMatch);
            });
        });
    };
    RoomModel.prototype.registerUser = function (response, req) {
        console.log("in registerUser: " + req.body.username + req.body.password);
        var user = req.body.username;
        var pass = req.body.password;
        var new_user = new this.model({ username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            memberships: req.body.memberships,
            owner: req.body.owner
        });
        new_user.save(function (err) {
            if (err) {
                response.redirect('/register');
                return;
            }
            response.redirect('/');
        });
    };
    return RoomModel;
}());
exports["default"] = RoomModel;
