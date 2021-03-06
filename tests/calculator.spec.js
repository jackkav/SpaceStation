import Calc from "../calculator.js";
import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
chai.use(require("sinon-chai"));

let calc;
describe("Given a Roman Numeral", () => {
  beforeEach(function () {
    calc = new Calc();
  });
  describe("When its I", () => {
    it("returns something", function () {
      expect(calc.NumeralToNumber("I")).to.not.equal("");
    });
    it("returns 1", function () {
      expect(calc.NumeralToNumber("I")).to.equal(1);
    });
  });
  describe("When its V", () => {
    it("returns 5", function () {
      expect(calc.NumeralToNumber("V")).to.equal(5);
    });
  });
  describe("When its X", () => {
    it("returns 10", function () {
      expect(calc.NumeralToNumber("X")).to.equal(10);
    });
  });
  describe("When its L", () => {
    it("returns 50", function () {
      expect(calc.NumeralToNumber("L")).to.equal(50);
    });
  });
  describe("When its C", () => {
    it("returns 100", function () {
      expect(calc.NumeralToNumber("C")).to.equal(100);
    });
  });
  describe("When its D", () => {
    it("returns 500", function () {
      expect(calc.NumeralToNumber("D")).to.equal(500);
    });
  });
  describe("When its M", () => {
    it("returns 1000", function () {
      expect(calc.NumeralToNumber("M")).to.equal(1000);
    });
  });
  describe("When its something else", () => {
    it("returns 0", function () {
      expect(calc.NumeralToNumber("something else")).to.equal(0);
    });
  });
});

describe("Given two Roman Numerals", () => {
  describe("When its II", () => {
    it("returns something", function () {
      expect(calc.RomanToArabic("II")).to.not.equal("");
    });
  });
  describe("When its II", () => {
    it("returns 2", function () {
      expect(calc.RomanToArabic("II")).to.equal(2);
    });
  });
  describe("When its III", () => {
    it("returns 3", function () {
      expect(calc.RomanToArabic("III")).to.equal(3);
    });
  });
  describe("When its VI", () => {
    it("should add them together and return 6", function () {
      expect(calc.RomanToArabic("VI")).to.equal(6);
    });
  });
  describe("When its XI", () => {
    it("should add them together and return 11", function () {
      expect(calc.RomanToArabic("XI")).to.equal(11);
    });
  });
});

describe("Given three Roman Numerals", () => {
  describe("When its VII", () => {
    it("returns 7", function () {
      expect(calc.RomanToArabic("VII")).to.equal(7);
    });
  });
});
describe('Given "I" can be subtracted from "V" and "X" only.', () => {
  describe("When its IX", () => {
    it("returns 9", function () {
      expect(calc.RomanToArabic("IX")).to.equal(9);
    });
  });
  describe("When its IV", () => {
    it("should subtract them and return 4", function () {
      expect(calc.RomanToArabic("IV")).to.equal(4);
    });
  });
});
describe('Given "X" can be subtracted from "L" and "C" only.', () => {
  describe("When its XL", () => {
    it("returns 40", function () {
      expect(calc.RomanToArabic("XL")).to.equal(40);
    });
  });
  describe("When its XC", () => {
    it("returns 90", function () {
      expect(calc.RomanToArabic("XC")).to.equal(90);
    });
  });
});
describe('Given only one small-value symbol may be subtracted from any large-value symbol.', () => {
  describe("When its IIV", () => {
    it("does not returns 3", function () {
      expect(calc.RomanToArabic("IIV")).to.not.equal(3);
    });
  });
  describe("When its IIX", () => {
    it("does not return 8", function () {
      expect(calc.RomanToArabic("IIX")).to.not.equal(8);
    });
  });
});
describe('Given "C" can be subtracted from "D" and "M" only.', () => {
  describe("When its CD", () => {
    it("returns 400", function () {
      expect(calc.RomanToArabic("CD")).to.equal(400);
    });
  });
  describe("When its CM", () => {
    it("returns 900", function () {
      expect(calc.RomanToArabic("CM")).to.equal(900);
    });
  });
});

describe('Given "L", and "D" can never be subtracted', () => {
  describe("When its LC", () => {
    it("returns 0", function () {
      expect(calc.RomanToArabic("LC")).to.equal(0);
    });
  });
  describe("When its DM", () => {
    it("returns 0", function () {
      expect(calc.RomanToArabic("DM")).to.equal(0);
    });
  });
});
describe('Given The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more.', () => {
  describe("When its III", () => {
    it("returns 3", function () {
      expect(calc.RomanToArabic("III")).to.equal(3);
    });
  });
  describe("When its XXX", () => {
    it("returns 30", function () {
      expect(calc.RomanToArabic("XXX")).to.equal(30);
    });
  });
  describe("When its IIII", () => {
    it("does not returns 4", function () {
      expect(calc.RomanToArabic("IIII")).to.not.equal(4);
    });
  });
  describe("When its XXXX", () => {
    it("does not return 30", function () {
      expect(calc.RomanToArabic("XXXX")).to.not.equal(30);
    });
  });
  describe("When its CCCC", () => {
    it("does not returns 400", function () {
      expect(calc.RomanToArabic("CCCC")).to.not.equal(400);
    });
  });
  describe("When its MMMM", () => {
    it("does not return 4000", function () {
      expect(calc.RomanToArabic("MMMM")).to.not.equal(4000);
    });
  });
  describe("When its XXXIX", () => {
    it("returns 41", function () {
      expect(calc.RomanToArabic("XXXIX")).to.not.equal(41);
    });
  });
});
