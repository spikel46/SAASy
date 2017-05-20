var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = "http://localhost:8080";
//var Blob = require("../server/models/blob");

var should = chai.should();
chai.use(chaiHttp);


describe('Rooms', function() {
  it('should list ALL blobs on /blobs GET', function(done) {
      chai.request(server)
	  .get('/api/rooms')
	  .end(function(err, res){
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('array');
              res.body[0].should.have.property('_id');
              res.body[0].should.have.property('title');
              res.body[0].should.have.property('description');
              done();
	  });
  });
});
