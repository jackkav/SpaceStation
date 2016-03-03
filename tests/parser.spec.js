import Parser from "../parser.js";
import Calc from "../calculator.js";
import Store from "../store.js";
var HashMap = require("hashmap")
import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
let parser;
chai.use(require("sinon-chai"));
describe("Given user input", () => {
  beforeEach(function() {
    parser = new Parser({
      store: new Store(),
      calc: new Calc()
    });
  });
  describe("When its empty", () => {
    it("returns I have no idea what you are talking about", function() {
      expect(parser.Read("")).to.equal("I have no idea what you are talking about");
    });
  });
  describe("When its hello", () => {
    it("returns I have no idea what you are talking about", () => {
      expect(parser.Read("hello")).to.equal("I have no idea what you are talking about");
    });
  });
  describe("When its grob is I", () => {
    it("returns accepted reply", () => {
      expect(parser.Read("grob is I")).to.equal("accepted: grob is I = 1");
    });
  });
  describe("When its grob is I", () => {
    it("returns accepted reply", () => {
      expect(parser.Read("grob is I")).to.equal("accepted: grob is I = 1");
    });
  });
  describe("When its prok is V", () => {
    it("returns accepted reply", () => {
      expect(parser.Read("prok is V")).to.equal("accepted: prok is V = 5");
    });
  });
  describe("When its an assignment with too many words", () => {
    it("returns I have no idea what you are talking about", () => {
      expect(parser.Read("the answer to life is 42")).to.equal("I have no idea what you are talking about");
    });
  });
  describe("When its an assignment to something which is not a roman numeral", () => {
    it("returns I have no idea what you are talking about", () => {
      expect(parser.Read("life is 42")).to.equal("I have no idea what you are talking about");
    });
  });
  describe("When its an unknown question", () => {
    it("returns sorry don't know that one", () => {
      expect(parser.Read("what's the answer to life?")).to.equal("I have no idea what you are talking about");
    });
  });
  describe("And some values have been assigned", () => {
    beforeEach(function() {
      let store = new Store();
      store.map = new HashMap();
      store.map.set("grob", "I");
      store.map.set("pish", "X");
      store.map.set("tegl", "L");
      parser = new Parser({
        store: store,
        calc: new Calc()
      });
    });
    describe("When its a question", () => {
      describe("And the question is how much is glob ?", () => {
        it("should return glob is 1", function() {
          expect(parser.Read("how much is glob ?")).to.equal("glob is 1");
        });
      });
      describe("And the question is how much is glob glob ?", () => {
        it("should return glob glob is 2", function() {
          expect(parser.Read("how much is glob glob ?")).to.equal("glob glob is 2");
        });
      });
      describe("And the question is how much is pish tegj glob glob ?", () => {
        it("should return pish tegj glob glob is 42", function() {
          expect(parser.Read("how much is pish tegj glob glob ?")).to.equal("pish tegj glob glob is 42");
        });
      });
    });
  });
});
