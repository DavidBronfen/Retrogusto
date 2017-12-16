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

        // Set the created recipe in order to re-use the recipe in the following tests.
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

  it('Should get one recipe by given ID', (done) => {
    chai.request(server)
      .get(`/api/recipes/${this.recipe._id}`)
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(200);
        res.body.should.have.property('title').equal(this.recipe.title);
        res.body.should.have.property('image_path').equal(this.recipe.image_path);
        res.body.should.have.property('rating').equal(this.recipe.rating);
        res.body.should.have.property('description').equal(this.recipe.description);
        res.body.should.have.property('prep_time').equal(this.recipe.prep_time);
        res.body.should.have.property('portions').equal(this.recipe.portions);
        res.body.should.have.property('calories').equal(this.recipe.calories);
        done();
      });
  });

  it('Should not get a recipe with wrong ID', (done) => {
    chai.request(server)
      .get('/api/recipes/5a2d6fed0fc22314043f185f')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('_message').equal('No recipe with that id');
        res.body.should.have.property('recipe');
        done();
      });
  });

  it('Should be able to update a recipe by given ID', (done) => {
    const updateRecipe = {
      title: 'חמוצים-חדשים',
      image_path: 'path/to/Pickles/new/image',
      rating: 4.5,
      description: 'נאום החמוצים של נתניהו ממשיך לעורר הדים - ואם כבר מאשימים אותנו בחמיצות, לפחות נגלה מה היתרונות הבריאותיים של חמוצים, פלוס מתכון מושלם למלפפונים חמוצים ולחמוצים אסיאתים',
      prep_time: '1.5',
      portions: 8,
      calories: 182,
    };

    chai.request(server)
      .put(`/api/recipes/${this.recipe._id}`)
      .send(updateRecipe)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('_message').equal('Recipe successfully updated!');
        res.body.should.have.property('recipe');
        res.body.recipe.should.have.property('title').equal(updateRecipe.title);
        res.body.recipe.should.have.property('image_path').equal(updateRecipe.image_path);
        res.body.recipe.should.have.property('rating').equal(updateRecipe.rating);
        res.body.recipe.should.have.property('description').equal(updateRecipe.description);
        res.body.recipe.should.have.property('prep_time').equal(updateRecipe.prep_time);
        res.body.recipe.should.have.property('portions').equal(updateRecipe.portions);

        // Set the updated recipe to the global var in order to re-use it in the DELETE test.
        this.recipe = res.body.recipe;
        done();
      });
  });

  it('Should be able to delete a single recipe', (done) => {
    chai.request(server)
      .delete(`/api/recipes/${this.recipe._id}`)
      .end((err, res) => {
        if (err) done(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('_message').equal('Recipe successfully deleted!');
        res.body.removedRecipe.should.have.property('title').equal(this.recipe.title);
        res.body.removedRecipe.should.have.property('image_path').equal(this.recipe.image_path);
        res.body.removedRecipe.should.have.property('rating').equal(this.recipe.rating);
        res.body.removedRecipe.should.have.property('description').equal(this.recipe.description);
        res.body.removedRecipe.should.have.property('prep_time').equal(this.recipe.prep_time);
        res.body.removedRecipe.should.have.property('portions').equal(this.recipe.portions);
        res.body.removedRecipe.should.have.property('calories').equal(this.recipe.calories);
        done();
      });
  });
});
