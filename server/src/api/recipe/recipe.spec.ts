process.env.NODE_ENV = "testing";

import * as chai from "chai";
import chaiHttp = require("chai-http");

import server from "../../server";
import { IRecipeModel } from "./recipeModel";

chai.use(chaiHttp);
const expect = chai.expect;
let app: any;
let recipe: IRecipeModel;
let print: any;

describe("Recipe", () => {
  before("Create express server and prepare DB for test", done => {
    app = server.app;
    setTimeout(done, 1000);
  });

  afterEach(() => {
    if (print) {
      console.log(print);
      print = undefined;
    }
  });

  it("should Post new recipe", () => {
    const newRecipe = {
      title: "לחם",
      image_path: "path/to/bread/image1",
      rating: 3.9,
      description: "לחם סלק קימל וגבינת עזים",
      prep_time: "2",
      portions: 1,
      calories: 760,
    };

    return chai.request(app)
      .post("/recipes")
      .send(newRecipe)
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("New recipe successfully created.");
        expect(res.body.recipe).to.haveOwnProperty("title").equal(newRecipe.title);
        expect(res.body.recipe).to.haveOwnProperty("image_path").equal(newRecipe.image_path);
        expect(res.body.recipe).to.haveOwnProperty("rating").equal(newRecipe.rating);
        expect(res.body.recipe).to.haveOwnProperty("description").equal(newRecipe.description);
        expect(res.body.recipe).to.haveOwnProperty("prep_time").equal(newRecipe.prep_time);
        expect(res.body.recipe).to.haveOwnProperty("portions").equal(newRecipe.portions);
        expect(res.body.recipe).to.haveOwnProperty("calories").equal(newRecipe.calories);

        recipe = res.body.recipe;
      });
  });

  it("should GET all recipes", () => {
    return chai.request(app)
      .get("/recipes")
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("Recipes fetched successfully.");
        expect(res.body.recipes).to.be.an("array");
        expect(res.body.recipes).to.have.length(11);
      });
  });

  it("should get one recipe by given ID", () => {
    return chai.request(app)
      .get(`/recipes/${recipe._id}`)
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("Recipe fetched successfully.");
        expect(res.body.recipe).to.haveOwnProperty("title").equal(recipe.title);
        expect(res.body.recipe).to.haveOwnProperty("image_path").equal(recipe.image_path);
        expect(res.body.recipe).to.haveOwnProperty("rating").equal(recipe.rating);
        expect(res.body.recipe).to.haveOwnProperty("description").equal(recipe.description);
        expect(res.body.recipe).to.haveOwnProperty("prep_time").equal(recipe.prep_time);
        expect(res.body.recipe).to.haveOwnProperty("portions").equal(recipe.portions);
        expect(res.body.recipe).to.haveOwnProperty("calories").equal(recipe.calories);
      });
  });

  it("should not get a recipe with wrong ID", () => {
    const wrongID = "5a1329fd90fe51dee752ad3d";

    return chai.request(app)
      .get(`/recipes/${wrongID}`)
      .then(res => {
        expect(res.status).to.equal(404);
        expect(res.body).to.haveOwnProperty("_message").equal(`No recipe item with that id: ${wrongID}`);
        expect(res.body).to.haveOwnProperty("recipe").equal(null);
      });
  });

  it("should be able to update a recipe by given ID", () => {
    const updateRecipe = {
      title: "ניוקי ראגו דג",
      image_path: "path/to/pasta/image",
      rating: 3.9,
      description: "ניוקי עם רוטב של ראגו ירקות עמוק ודג צרוב מעל",
      prep_time: "1.5",
      portions: 4,
      calories: 480,
    };

    return chai.request(app)
      .put(`/recipes/${recipe._id}`)
      .send(updateRecipe)
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("Recipe successfully updated.");
        expect(res.body.recipe).to.haveOwnProperty("title").equal(updateRecipe.title);
        expect(res.body.recipe).to.haveOwnProperty("image_path").equal(updateRecipe.image_path);
        expect(res.body.recipe).to.haveOwnProperty("rating").equal(updateRecipe.rating);
        expect(res.body.recipe).to.haveOwnProperty("description").equal(updateRecipe.description);
        expect(res.body.recipe).to.haveOwnProperty("prep_time").equal(updateRecipe.prep_time);
        expect(res.body.recipe).to.haveOwnProperty("portions").equal(updateRecipe.portions);
        expect(res.body.recipe).to.haveOwnProperty("calories").equal(updateRecipe.calories);
      });
  });

  it("should be able to delete a single recipe", () => {
    return chai.request(app)
      .delete(`/recipes/${recipe._id}`)
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("Recipe successfully deleted.");
        expect(res.body.recipe).to.haveOwnProperty("title").equal("ניוקי ראגו דג");
        expect(res.body.recipe).to.haveOwnProperty("image_path").equal("path/to/pasta/image");
        expect(res.body.recipe).to.haveOwnProperty("rating").equal(3.9);
        expect(res.body.recipe).to.haveOwnProperty("description")
          .equal("ניוקי עם רוטב של ראגו ירקות עמוק ודג צרוב מעל");
        expect(res.body.recipe).to.haveOwnProperty("prep_time").equal("1.5");
        expect(res.body.recipe).to.haveOwnProperty("portions").equal(4);
        expect(res.body.recipe).to.haveOwnProperty("calories").equal(480);
      });
  });
});
