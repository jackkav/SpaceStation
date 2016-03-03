import {
  Calc
} from "../calculator.js";
import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
chai.use(require("sinon-chai"));

describe("Given a Roman Numeral", () => {
  describe("When its I", () => {
    it("returns something", function() {
      expect(new Calc().NumeralToNumber("I")).to.not.equal("");
    });
    it("returns 1", function() {
      expect(new Calc().NumeralToNumber("I")).to.equal(1);
    });
  });
  describe("When its V", () => {
    it("returns 5", function() {
      expect(new Calc().NumeralToNumber("V")).to.equal(5);
    });
  });
  describe("When its X", () => {
    it("returns 10", function() {
      expect(new Calc().NumeralToNumber("X")).to.equal(10);
    });
  });
  describe("When its L", () => {
    it("returns 50", function() {
      expect(new Calc().NumeralToNumber("L")).to.equal(50);
    });
  });
  describe("When its C", () => {
    it("returns 100", function() {
      expect(new Calc().NumeralToNumber("C")).to.equal(100);
    });
  });
  describe("When its D", () => {
    it("returns 500", function() {
      expect(new Calc().NumeralToNumber("D")).to.equal(500);
    });
  });
  describe("When its M", () => {
    it("returns 1000", function() {
      expect(new Calc().NumeralToNumber("M")).to.equal(1000);
    });
  });
  describe("When its something else", () => {
    it("returns 0", function() {
      expect(new Calc().NumeralToNumber("something else")).to.equal(0);
    });
  });
});

describe("Given two Roman Numerals", () => {
  describe("When its II", () => {
    it("returns something", function() {
      expect(new Calc().RomanToArabic("II")).to.not.equal("");
    });
  });
  describe("When its II", () => {
    it("returns 2", function() {
      expect(new Calc().RomanToArabic("II")).to.equal(2);
    });
  });
  describe("When its III", () => {
    it("returns 3", function() {
      expect(new Calc().RomanToArabic("III")).to.equal(3);
    });
  });
  describe("When its IV", () => {
    it("should subtract them and return 4", function() {
      expect(new Calc().RomanToArabic("IV")).to.equal(4);
    });
  });
  describe("When its VI", () => {
    it("should add them together and return 6", function() {
      expect(new Calc().RomanToArabic("VI")).to.equal(6);
    });
  });
  describe("When its XI", () => {
    it("should add them together and return 11", function() {
      expect(new Calc().RomanToArabic("XI")).to.equal(11);
    });
  });
});

describe("Given three Roman Numerals", () => {
  describe("When its III", () => {
    it("returns 3", function() {
      expect(new Calc().RomanToArabic("III")).to.equal(3);
    });
  });
  describe("When its VII", () => {
    it("returns 7", function() {
      expect(new Calc().RomanToArabic("VII")).to.equal(7);
    });
  });
});
