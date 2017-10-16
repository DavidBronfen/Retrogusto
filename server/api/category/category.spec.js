process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Test categories', () => {
  it('Should GET all the categoties', (done) => {
    chai.request(server)
      .get('/api/categories')
      .end((err, res) => {
        if (err) done(err);
        // console.log('the result: ', res.body);
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
  
});
