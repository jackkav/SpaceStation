import {
  Parser
} from "../parser.js";
import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
chai.use(require("sinon-chai"));

describe("Given user input", () => {
  describe("When its empty", () => {
    it("returns instructions unclear", function() {
      expect(new Parser().Read("")).to.equal("instructions unclear");
    });
  });
  describe("When its hello", () => {
    it("returns instructions unclear", function() {
      expect(new Parser().Read("hello")).to.equal("instructions unclear");
    });
  });
  describe("When its grob is I", () => {
    it("returns accepted reply", function() {
      expect(new Parser().Read("grob is I")).to.equal("accepted: grob is I");
    });
  });
  describe("When its prok is V", () => {
    it("returns accepted reply", function() {
      expect(new Parser().Read("prok is V")).to.equal("accepted: prok is V");
    });
  });
  describe("When its an assignment with too many words", () => {
    it("returns instructions unclear", function() {
      expect(new Parser().Read("the answer to life is 42")).to.equal("instructions unclear");
    });
  });
  describe("When its an assignment to something which is not a roman numeral", () => {
    it("returns instructions unclear", function() {
      expect(new Parser().Read("life is 42")).to.equal("instructions unclear");
    });
  });
});
