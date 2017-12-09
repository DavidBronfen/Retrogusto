process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');

const Recipe = require('./recipeModel');

const should = chai.should();

chai.use(chaiHttp);

describe('Test recipes', () => {

  before(() => {
    const cleanPromises = [Recipe]
      .map((model) => {
        return model.remove().exec();
      });
    return Promise.all(cleanPromises);
  });

  it('Should be able to post new recipe', (done) => {
    const newRecipe = {
      title: 'חמוצים',
      image_path: 'path/to/Pickles/image',
      rating: 3.9,
      description: 'נאום החמוצים של נתניהו ממשיך לעורר הדים - ואם כבר מאשימים אותנו בחמיצות, לפחות נגלה מה היתרונות הבריאותיים של חמוצים, פלוס מתכון מושלם למלפפונים חמוצים ולחמוצים אסיאתים',
      prep_time: '1',
      portions: 2,
      calories: 180,
    };

    chai.request(server)
      .post('/api/recipes')
      .send(newRecipe)
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('title').equal(newRecipe.title);
        res.body.should.have.property('image_path').equal(newRecipe.image_path);
        res.body.should.have.property('rating').equal(newRecipe.rating);
        res.body.should.have.property('description').equal(newRecipe.description);
        res.body.should.have.property('prep_time').equal(newRecipe.prep_time);
        res.body.should.have.property('portions').equal(newRecipe.portions);
        res.body.should.have.property('calories').equal(newRecipe.calories);

        // Set the created category in order to re-use the category in the following tests.
        this.recipe = res.body;
        done();
      });
  });

  it('Should GET all the recipes', (done) => {
    chai.request(server)
      .get('/api/recipes')
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(200);
        res.body.should.be.a('array');

        res.body[0].should.have.property('title');
        res.body[0].should.have.property('image_path');
        res.body[0].should.have.property('rating');
        res.body[0].should.have.property('description');
        res.body[0].should.have.property('prep_time');
        res.body[0].should.have.property('portions');
        res.body[0].should.have.property('calories');
        done();
      });
  });
});
