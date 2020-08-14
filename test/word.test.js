const supertest = require('supertest');
const expect = require('chai').expect;

const app = require('./../server');

describe('POST /api/v1/word', function(){
    it("it shoud return status code 200 if word exists", function(done) {
        supertest(app)
        .post('/api/v1/word')
        .send({ word: 'HolaMundo' })
        .end(function(err, res) {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('it shoud return status code 400 if we does not send anything', function(done){
        supertest(app)
        .post('/api/v1/word')
        .send({})
        .end(function(err, res){
            expect(res.status).to.equal(400);
            done();
        });
    });

  });