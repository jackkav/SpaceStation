import CurrencyStore from "../store.js";
import * as chai from "chai";
import * as sinon from "sinon";
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
      expect(store.getRomanNumeral("grob")).to.equal("I");
    });
  });
  describe("When input is: prok is V", () => {
    it("should assign", function() {
      let input = "prok is V";
      store.addMapping(input);
      expect(store.getRomanNumeral("prok")).to.equal("V");
    });
    it("should assign", function() {
      let input = "prok is V";
      store.addMapping(input);
      expect(store.getAlienWord("V")).to.equal("prok");
    });
  });

});
