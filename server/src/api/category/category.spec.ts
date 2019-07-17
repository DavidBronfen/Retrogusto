process.env.NODE_ENV = "testing";

import * as chai from "chai";
import chaiHttp = require("chai-http");

import server from "../../server";
import { ICategoryModel } from "./categoryModel";

chai.use(chaiHttp);
const expect = chai.expect;
let app: any;
let print: any;
let category: ICategoryModel;

describe("Categories", () => {
  before("Create the express server and prepare DB for tests", done => {
    app = server.app;
    setTimeout(done, 1000);
  });

  afterEach(() => {
    if (print) {
      console.log(print);
      print = undefined;
    }
  });

  it("should POST new category", () => {
    const newCategory = {
      name_he: "חמוצים",
      name_en: "Pickles",
      image_path: "path/to/image",
    };

    return chai.request(app)
      .post("/categories")
      .send(newCategory)
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("New category successfully created.");
        expect(res.body.category).to.haveOwnProperty("name_he").equal(newCategory.name_he);
        expect(res.body.category).to.haveOwnProperty("name_en").equal(newCategory.name_en);
        expect(res.body.category).to.haveOwnProperty("image_path").equal(newCategory.image_path);

        category = res.body.category;
      });
  });

  it("should GET all categories", () => {
    return chai.request(app)
      .get("/categories")
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("Categories fetched successfully.");
        expect(res.body.categories).to.be.an("array");
        expect(res.body.categories).to.have.length(17);
      });
  });

  it("should get one category by given ID", () => {
    return chai.request(app)
      .get(`/categories/${category._id}`)
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("Category fetched successfully.");
        expect(res.body.category).to.haveOwnProperty("name_he").equal(category.name_he);
        expect(res.body.category).to.haveOwnProperty("name_en").equal(category.name_en);
        expect(res.body.category).to.haveOwnProperty("image_path").equal(category.image_path);
      });
  });

  it("should not get a category with wrong ID", () => {
    const wrongID = "5a1329fd90fe51dee752ad3d";

    return chai.request(app)
      .get(`/categories/${wrongID}`)
      .then(res => {
        expect(res.status).to.equal(404);
        expect(res.body).to.haveOwnProperty("_message").equal(`No category item with that id: ${wrongID}`);
        expect(res.body).to.haveOwnProperty("category").equal(null);
      });
  });

  it("should be able to update a category by given ID", () => {
    const updateCategory = {
      name_he: "חמוצים יפנים",
      name_en: "Japanese Pickles",
      image_path: "path/to/Japanese-pickels/image",
    };

    return chai.request(app)
      .put(`/categories/${category._id}`)
      .send(updateCategory)
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("Category successfully updated.");
        expect(res.body.category).to.haveOwnProperty("name_he").equal(updateCategory.name_he);
        expect(res.body.category).to.haveOwnProperty("name_en").equal(updateCategory.name_en);
        expect(res.body.category).to.haveOwnProperty("image_path").equal(updateCategory.image_path);
      });
  });

  it("Should be able to delete a single category", () => {
    return chai.request(app)
      .delete(`/categories/${category._id}`)
      .then(res => {
        expect(res.status).to.equal(200);
        // tslint:disable-next-line:no-unused-expression
        expect(res).to.be.json;
        expect(res.body._message).to.be.an("string").to.equal("Category successfully deleted.");
        expect(res.body.category).to.haveOwnProperty("name_he").equal("חמוצים יפנים");
        expect(res.body.category).to.haveOwnProperty("name_en").equal("Japanese Pickles");
        expect(res.body.category).to.haveOwnProperty("image_path").equal("path/to/Japanese-pickels/image");
      });
  });
});
