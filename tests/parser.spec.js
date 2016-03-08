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
    this.sinon = sinon.sandbox.create();
    parser = new Parser({
      store: new Store(),
      calc: new Calc()
    });
  });
  afterEach(function() {
    this.sinon.restore();
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
  describe("When its glob is I", () => {
    it("returns accepted reply", () => {
      expect(parser.Read("glob is I")).to.equal("accepted: glob is I = 1");
    });
  });
  describe("When its glob is I", () => {
    it("returns accepted reply", () => {
      expect(parser.Read("glob is I")).to.equal("accepted: glob is I = 1");
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
    it("returns I have no idea what you are talking about", () => {
      expect(parser.Read("what's the answer to life?")).to.equal("I have no idea what you are talking about");
    });
  });
  describe("And some values have been assigned", () => {
    beforeEach(function() {

    });
    describe("When its a question", () => {
      describe("And the question is how much is glob ?", () => {
        it("should return glob is 1", function() {
          let store = new Store();
          let calc = new Calc();
          parser = new Parser({
            store: store,
            calc: calc
          });
          sinon.stub(parser, "ConvertAlienUnitsToArabicUnits").returns("1");
          expect(parser.Read("how much is glob ?")).to.equal("glob is 1");
        });
      });
    });
  });
});
describe("Given glob equals I", () => {
  beforeEach(function() {
    this.sinon = sinon.sandbox.create();
  });

  afterEach(function() {
    this.sinon.restore();
  });
  describe("When converting one alien unit to one roman unit", () => {
    it("should return 1", () => {
      let store = new Store();
      let calc = new Calc();
      parser = new Parser({
        store: store,
        calc: calc
      });
      sinon.stub(store, "getRomanNumeralFromFile").returns("I");
      expect(parser.ConvertAlienUnitsToArabicUnits("glob")).to.equal(1);
    });

  });
  describe("When converting two alien units to two roman units", () => {
    it("should return 2", () => {
      let store = new Store();
      let calc = new Calc();
      parser = new Parser({
        store: store,
        calc: calc
      });
      sinon.stub(store, "getRomanNumeralFromFile").returns("I");
      expect(parser.ConvertAlienUnitsToArabicUnits("glob glob")).to.equal(2);
    });
    it("should return 6", () => {
      let store = new Store();
      let calc = new Calc();
      parser = new Parser({
        store: store,
        calc: calc
      });
      sinon.stub(store, "getRomanNumeralFromFile").onFirstCall().returns("V").onSecondCall().returns("I");
      expect(parser.ConvertAlienUnitsToArabicUnits("prok glob")).to.equal(6);
    });
    it("should return 4", () => {
      let store = new Store();
      let calc = new Calc();
      parser = new Parser({
        store: store,
        calc: calc
      });
      sinon.stub(store, "getRomanNumeralFromFile").onFirstCall().returns("I").onSecondCall().returns("V");
      expect(parser.ConvertAlienUnitsToArabicUnits("glob prok")).to.equal(4);
    });
  });
});
describe("Given unknown units in question", () => {
  beforeEach(function() {
    this.sinon = sinon.sandbox.create();
  });

  afterEach(function() {
    this.sinon.restore();
  });
  describe("When question is how much is hello", () => {
    it("returns I have never heard of hello", () => {
      let store = new Store();
      let calc = new Calc();
      parser = new Parser({
        store: store,
        calc: calc
      });
      sinon.stub(store, "getRomanNumeralFromFile").returns("");
      expect(parser.Read("how much is hello?")).to.equal("I have never heard of hello");
    });
  });
});
describe("Given known units", () => {
  describe("When question is how much is pish tegj glob glob", () => {
    it("returns true", () => {
      let store = new Store();
      let calc = new Calc();
      parser = new Parser({
        store: store,
        calc: calc
      });
      sinon.stub(store, "getRomanNumeralFromFile").returns("X");
      expect(parser.AreUnitsKnown("pish tegj glob glob?")).to.equal(true);
    });
  });
});
