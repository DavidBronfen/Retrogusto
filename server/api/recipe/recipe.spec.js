process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Test recipes', () => {
  it('Should GET all the recipes', (done) => {
    chai.request(server)
      .get('/api/recipes')
      .end((err, res) => {
        done();
      });
  });
});
