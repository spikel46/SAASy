"use strict";
exports.__esModule = true;
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
            roomID: Number,
            isActive: Boolean,
            isPublic: Boolean,
            description: String,
            users: [],
            moderators: [],
            admin: String,
            keywords: []
        }, { collection: 'Rooms' });
    };
    RoomModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Room", this.schema);
    };
    RoomModel.prototype.retrieveRooms = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RoomModel.prototype.retrieveSingleRoom = function (response, filter) {
        var query = this.model.findOne(filter);
        console.log(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RoomModel.prototype.search = function (response, query) {
        console.log(query);
        var response = this.model.find(query);
        /*query.exec( (err, itemArray) => {
            response.json(itemArray);
        });*/
        return response;
    };
    RoomModel.prototype.newRoom = function (response, req) {
        var id = req.body.roomId;
        var des = req.body.description;
        var admin = req.body.adminName;
        console.log(id, des, admin);
        var new_room = new this.model({ roomID: parseInt(id, 10),
            isActive: true,
            isPublic: true,
            description: des,
            users: [],
            moderators: [],
            admin: admin,
            keywords: ["new", "newer", "newest"]
        });
        new_room.save(function (err) {
            if (err) {
                console.log("errorrrrrr");
            }
        });
        var response = this.model.find({ description: des });
        return response;
    };
    return RoomModel;
}());
exports["default"] = RoomModel;
