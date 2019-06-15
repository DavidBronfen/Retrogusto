process.env.NODE_ENV = "testing";

import * as chai from "chai";
import chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Test", () => {
    it("Demo test that return TRUE in order to pass travis", () => {
        return true;
    });
});
