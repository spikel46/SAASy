var chai = require("chai");
var chaiHttp = require("chai-http");
var async = require("async");
//var mongoose = require("mongoose");

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var server = "http://quorumquery.azurewebsites.net";
var chatsApi = "/api/chats";
var postChatApi = "/api/newchat";
chai.use(chaiHttp);


describe("Test Getting Chats from Room 4", function() {
  var requestResult;
  var response;
		 
  before(function (done) {
    chai.request(server)
	.get(chatsApi+"/4")
	.end(function (err, res) {
	     requestResult = res.body;
	     response = res;
             expect(err).to.be.null;
             expect(res).to.have.status(200);
	     done();
	});
  });

  it("Should return array of length above 2", function() {
    expect(response).to.have.status(200);
    expect(response.body).to.be.an.object;
    expect(response.body).to.have.length.above(2);
    expect(response).to.have.headers;
  });

  it("Array elements have the expected properties", function(){
    expect(response.body).to.satisfy(
    function (body) {
      for (var i = 0; i < body.length; i++) {
        expect(body[i]).to.have.property("sender").that.is.a("string");
        expect(body[i]).to.have.property("toRoom").that.is.a("number");
        expect(body[i]).to.have.property("content").that.is.a("string");
	expect(body[i]).to.have.property("timestamp").that.is.a("string");
        expect(body[i]).to.have.property("score").that.is.a("number");
      }
      return true;
    });
  });
});

describe("Test Sending Chat", function() {
  var requestResult;
  var response;
  var chat = { sender: "Test-send",
               toRoom: 4,
               content: "Testy tester testing things",
               timestamp: "2017-05-16T21:13:32.270Z",
               score:100
             };

  it("Should return array of length above 2", function(done) {
    chai.request(server)
        .get(chatsApi+"/4")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an.object;
          expect(res.body).to.have.length.above(2);
          expect(res).to.have.headers;
	  done();
        });
  });

  it("Should send a chat to room 4", function(done) {
    chai.request(server)
        .post(postChatApi)
        .send(chat)
        .end(function(err, res) {
          if(err) { return done(err); }
          done();
        });
  });

/*
  it("Should return array of length 5", function(done) {
    chai.request(server)
        .get(chatsApi+"/1")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an.object;
          expect(res.body).to.have.length(5);
          expect(res).to.have.headers;
	  done();
        });
  });
*/
});



