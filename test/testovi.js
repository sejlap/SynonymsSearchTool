const supertest = require("supertest");
const should = require("should");
var request = require("request"),
    assert = require('assert');
// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:5000");
var url="http://localhost:5000/sinonimi";
//Unit test begin
describe('Tests for the POST method /sinonimi', ()=> {
  it('Status 200 OK Successully added', (done) => {
    //API call
    server.post('/sinonimi')
    .send({
       "word": "test",
       "synonym": "analysis approval assessment"
    })
    .expect(200)
    .end(function(err, res) {
    // console.log(res);
      //res.should.equal('Uspjesno dodana nova rijec i sinonimi');
    })
    .finally(done())
  });
  it('Empty inputs are not allowed(for empty body)', (done) => {
    //API call
    server.post('/sinonimi')
    .send({
      
    })
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err, res) {
    })
    .finally(done())
  });
  it('Duplicates are not allowed', (done) => {
    //API call
    server.post('/sinonimi')
    .send({
        "word": "test",
        "synonym": "new"
    })
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err, res) {
    })
    .finally(done())
  });

  it('Empty inputs are not allowed', (done) => {
    //API call
    server.post('/sinonimi')
    .send({
        "word": "test",
        "synonym": ""
    })
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err, res) {
    
    })
    .finally(done())
});
});
  describe("Tests for the GET method /sinonimi", function() {
    it('Status code 200 OK', (done) => {
        this.timeout(10000);
      request.get(url, function(err, res, body) {
              assert.equal(200, res.statusCode);
          }).finally(done());   
     });
});

 

