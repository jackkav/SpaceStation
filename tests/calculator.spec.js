import Calc from "../calculator.js";
import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
chai.use(require("sinon-chai"));

let calc;
describe("Given a Roman Numeral", () => {
  beforeEach(function() {
      calc = new Calc();
  });
  describe("When its I", () => {
    it("returns something", function() {
      expect(calc.NumeralToNumber("I")).to.not.equal("");
    });
    it("returns 1", function() {
      expect(calc.NumeralToNumber("I")).to.equal(1);
    });
  });
  describe("When its V", () => {
    it("returns 5", function() {
      expect(calc.NumeralToNumber("V")).to.equal(5);
    });
  });
  describe("When its X", () => {
    it("returns 10", function() {
      expect(calc.NumeralToNumber("X")).to.equal(10);
    });
  });
  describe("When its L", () => {
    it("returns 50", function() {
      expect(calc.NumeralToNumber("L")).to.equal(50);
    });
  });
  describe("When its C", () => {
    it("returns 100", function() {
      expect(calc.NumeralToNumber("C")).to.equal(100);
    });
  });
  describe("When its D", () => {
    it("returns 500", function() {
      expect(calc.NumeralToNumber("D")).to.equal(500);
    });
  });
  describe("When its M", () => {
    it("returns 1000", function() {
      expect(calc.NumeralToNumber("M")).to.equal(1000);
    });
  });
  describe("When its something else", () => {
    it("returns 0", function() {
      expect(calc.NumeralToNumber("something else")).to.equal(0);
    });
  });
});

describe("Given two Roman Numerals", () => {
  describe("When its II", () => {
    it("returns something", function() {
      expect(calc.RomanToArabic("II")).to.not.equal("");
    });
  });
  describe("When its II", () => {
    it("returns 2", function() {
      expect(calc.RomanToArabic("II")).to.equal(2);
    });
  });
  describe("When its III", () => {
    it("returns 3", function() {
      expect(calc.RomanToArabic("III")).to.equal(3);
    });
  });
  describe("When its IV", () => {
    it("should subtract them and return 4", function() {
      expect(calc.RomanToArabic("IV")).to.equal(4);
    });
  });
  describe("When its VI", () => {
    it("should add them together and return 6", function() {
      expect(calc.RomanToArabic("VI")).to.equal(6);
    });
  });
  describe("When its XI", () => {
    it("should add them together and return 11", function() {
      expect(calc.RomanToArabic("XI")).to.equal(11);
    });
  });
});

describe("Given three Roman Numerals", () => {
  describe("When its III", () => {
    it("returns 3", function() {
      expect(calc.RomanToArabic("III")).to.equal(3);
    });
  });
  describe("When its VII", () => {
    it("returns 7", function() {
      expect(calc.RomanToArabic("VII")).to.equal(7);
    });
  });
});
describe("Given three Roman Numerals", () => {
  describe("When its XLII", () => {
    it("returns 42", function() {
      expect(calc.RomanToArabic("XLII")).to.equal(42);
    });
  });
});
