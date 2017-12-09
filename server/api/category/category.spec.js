process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');

const Category = require('./categoryModel');

const should = chai.should();

chai.use(chaiHttp);

describe('Test categories', () => {

  before(() => {
    const cleanPromises = [Category]
      .map((model) => {
        return model.remove().exec();
      });
    return Promise.all(cleanPromises);
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

        // Set the created category in order to re-use the category in the following tests.
        this.category = res.body;
        done();
      });
  });

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

  it('Should not get a category with wrong ID', (done) => {
    chai.request(server)
      .get('/api/categories/5a1329fd90fe51dee752ad3d')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('_message').equal('No category with that id');
        res.body.should.have.property('category');
        done();
      });
  });

  it('Should be able to update a category by given ID', (done) => {
    const updateCategory = {
      name_he: 'חמוצים יפנים',
      name_en: 'Japanese Pickles',
      image_path: 'path/to/Japanese-pickels/image',
    };

    chai.request(server)
      .put(`/api/categories/${this.category._id}`)
      .send(updateCategory)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('_message').equal('Category successfully updated!');
        res.body.should.have.property('category');
        res.body.category.should.have.property('name_he').equal(updateCategory.name_he);
        res.body.category.should.have.property('name_en').equal(updateCategory.name_en);
        res.body.category.should.have.property('image_path').equal(updateCategory.image_path);

        // Set the updated category to the global var in order to re-use it in the DELETE test.
        this.category = res.body.category;
        done();
      });
  });

  it('Should be able to delete a single category', (done) => {
    chai.request(server)
      .delete(`/api/categories/${this.category._id}`)
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('_message').equal('Category successfully deleted!');
        res.body.removedCategory.should.have.property('name_he').equal(this.category.name_he);
        res.body.removedCategory.should.have.property('name_en').equal(this.category.name_en);
        res.body.removedCategory.should.have.property('image_path').equal(this.category.image_path);
        done();
      });
  });
});
