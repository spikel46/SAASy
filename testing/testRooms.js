var chai = require("chai");
var chaiHttp = require("chai-http");
var async = require("async");

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var server = "http://quorumquery.azurewebsites.net";
var roomsApi = "/api/rooms";
var searchApi = "/api/search";
chai.use(chaiHttp);


describe("Test Rooms", function() {

  var requestResult;
  var response;
		 
  before(function (done) {
    chai.request(server)
	.get(roomsApi)
	.end(function (err, res) {
	     requestResult = res.body;
	     response = res;
             expect(err).to.be.null;
             expect(res).to.have.status(200);
	     done();
	});
  });

  it("Should return array of at least length 5", function() {
    expect(response).to.have.status(200);
    expect(response.body).to.be.an.object;
    expect(response.body).to.have.length.above(4);
    expect(response).to.have.headers;
  });

  it("Array elements have the expected properties", function(){
    expect(response.body).to.satisfy(
    function (body) {
      for (var i = 0; i < body.length; i++) {
        expect(body[i]).to.have.property("roomID");
        expect(body[i]).to.have.property("isActive").that.is.a("boolean");
        expect(body[i]).to.have.property("isPublic").that.is.a("boolean");
	expect(body[i]).to.have.property("description").that.is.a("string");
        expect(body[i]).to.have.property("users").to.have.length.above(0);
        expect(body[i]).to.have.property("moderators").to.have.length.above(0);
        expect(body[i]).to.have.property("admin").that.is.a("string");
	expect(body[i]).to.have.property("keywords");
      }
      return true;
    });
  });
});
describe("Test Room Search", function() {

  var requestResult;
  var response;
		 
  before(function (done) {
    chai.request(server)
	.get(searchApi+'/Science')
	.end(function (err, res) {
	     requestResult = res.body;
	     response = res;
             expect(err).to.be.null;
             expect(res).to.have.status(200);
	     done();
	});
  });

  it("Should return array of at least length 1", function(){
    expect(response).to.have.status(200);
    expect(response.body).to.be.an.object;
    expect(response.body).to.have.length.above(0);
    expect(response).to.have.headers;
  });

  it("Array elements have the expected properties", function(){
    expect(response.body).to.satisfy(
    function (body) {
      for (var i = 0; i < body.length; i++) {
        expect(body[i]).to.satisfy(function(finder) {

          var my_term = "Science";
          var in_keywords = false;

          for(var j = 0; j < body[i].keywords.length; j++) {
            if((body[i].keywords[j]).indexOf(my_term) >= 0){
              in_keywords = true;
            }
          } 

          if((body[i].title).indexOf(my_term)>=0 || (body[i].description).indexOf(my_term)>=0){
            return true;
          }else if(in_keywords === true){
            return true;
          }else{
            return false;
          }

        });
      }
      return true;
    });
  });

});
