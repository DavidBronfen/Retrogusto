process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');

const should = chai.should();
let category;

chai.use(chaiHttp);

describe('Test categories', () => {

  it('Should GET all the categoties', (done) => {
    chai.request(server)
      .get('/api/categories')
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('name_he');
        res.body[0].should.have.property('name_en');
        res.body[0].should.have.property('image_path');
        done();
      });
  });

  it('Should be able to post new category', (done) => {
    const newCategory = {
      name_he: 'חמוצים',
      name_en: 'Pickles',
      image_path: 'path/to/image',
    };

    chai.request(server)
      .post('/api/categories')
      .send(newCategory)
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name_he').equal(newCategory.name_he);
        res.body.should.have.property('name_en').equal(newCategory.name_en);
        res.body.should.have.property('image_path').equal(newCategory.image_path);
        // Set the created category in order to re-use the category in the
        // following tests.
        this.category = res.body;

        done();
      });
  });

  it('Should get one category by given ID', (done) => {
    chai.request(server)
      .get(`/api/categories/${this.category._id}`)
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(200);
        res.body.should.have.property('name_he').equal(this.category.name_he);
        res.body.should.have.property('name_en').equal(this.category.name_en);
        res.body.should.have.property('image_path').equal(this.category.image_path);
        done();
      });
  });

  it('Should be able to update a category by given ID', (done) => {
    let category = {
      name_he: 'חמוצים יפנים',
      name_en: 'Japanese Pickles',
      image_path: 'path/to/Japanese-pickels/image',
    }

    chai.request(server)
      .put(`/api/categories/${this.category._id}`)
      .send(category)
      .end((err, res) => {
        res.should.have.status(200);
        /* eslint-disable no-unused-expressions */
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('_message').equal('Category successfully updated!');
        res.body.should.have.property('category');
        res.body.category.should.have.property('name_he').equal(category.name_he);
        res.body.category.should.have.property('name_en').equal(category.name_en);
        res.body.category.should.have.property('image_path').equal(category.image_path);
        done();
      });
  });
});
