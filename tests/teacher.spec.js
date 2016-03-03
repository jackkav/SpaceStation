import CurrencyStore from "../teacher.js";
import * as chai from "chai";
import * as sinon from "sinon";
// // import * as _ from "underscore";
const expect = chai.expect;
chai.use(require("sinon-chai"));


let store;
describe("Given an assignment", () => {
  beforeEach(function() {
      store = new CurrencyStore();
  });
  describe("When input is: grob is I", () => {
    it("should assign", function() {
      let input = "grob is I";
      store.addMapping(input);
      expect(store.getRomanNumberal("grob")).to.equal("I");
    });
  });
  describe("When input is: prok is V", () => {
    it("should assign", function() {
      let input = "prok is V";
      store.addMapping(input);
      expect(store.getRomanNumberal("prok")).to.equal("V");
    });
    it("should assign", function() {
      let input = "prok is V";
      store.addMapping(input);
      expect(store.getAlienWord("V")).to.equal("prok");
    });
  });

});
