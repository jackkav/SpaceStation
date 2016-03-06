import CurrencyStore from "../store.js";
import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
chai.use(require("sinon-chai"));
var HashMap = require("hashmap")

let store;
describe("Given an assignment", () => {
  beforeEach(function() {
      let map = new HashMap();

      store = new CurrencyStore(map);
  });
  describe("When input is: grob is I", () => {
    it("should return I", function() {
      let input = "grob is I";
      store.addMappingToHash(input);

      expect(store.getRomanNumerals("grob")).to.equal("I");
    });
  });
  describe("When input is: prok is V", () => {
    it("should return V", function() {
      let input = "prok is V";
      store.addMappingToHash(input);
      expect(store.getRomanNumerals("prok")).to.equal("V");
    });
    it("should return prok", function() {
      let input = "prok is V";
      store.addMappingToHash(input);
      expect(store.getAlienWord("V")).to.equal("prok");
    });
  });

});
