var chai = require("chai");
var chaiHttp = require("chai-http");
var async = require("async");
//var mongoose = require("mongoose");

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var server = "http://localhost:8080";
var chatsApi = "/api/chats";
chai.use(chaiHttp);


describe("Test Getting Chats from Room 1", function() {
  var requestResult;
  var response;
		 
  before(function (done) {
    chai.request(server)
	.get(chatsApi+"/1")
	.end(function (err, res) {
	     requestResult = res.body;
	     response = res;
             expect(err).to.be.null;
             expect(res).to.have.status(200);
	     done();
	});
  });

  it("Should return array of at least length 3", function() {
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
		 

  it("Should return array of length 3", function(done) {
    expect(response).to.have.status(200);
    expect(response.body).to.be.an.object;
    expect(response.body).to.have.length.equal(3);
    expect(response).to.have.headers;
  });

  it("Should send a chat to room 1", function(done) {

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
