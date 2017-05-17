"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var ChatModel = (function () {
    function ChatModel() {
        this.createSchema();
        this.createModel();
    }
    ChatModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            sender: String,
            toRoom: Number,
            content: String,
            timestamp: Date,
            score: Number
        }, { collection: 'Chats' });
    };
    ChatModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Chat", this.schema);
    };
    ChatModel.prototype.retrieveRoomChats = function (response, filter) {
        var query = this.model.find(filter);
        console.log(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ChatModel.prototype.newChat = function (response, req) {
        var sendID = req.body.sender;
        var RoomID = req.body.toRoom;
        var content_str = req.body.content;
        var time = req.body.timestamp;
        var rating = req.body.score;
        var new_chat = new this.model({ sender: sendID,
            toRoom: RoomID,
            content: content_str,
            timestamp: time,
            score: rating
        });
        new_chat.save(function (err) {
            if (err) {
                console.log("error trying to save chat to db");
            }
        });
        var response = this.model.find({ toRoom: RoomID });
        return response;
    };
    return ChatModel;
}());
exports["default"] = ChatModel;
