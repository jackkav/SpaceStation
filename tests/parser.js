import {
  Parser
} from "../parser.js";
import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
chai.use(require("sinon-chai"));
describe("Given user input", () => {

});
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
      expect(new Parser().Read("grob is I")).to.equal("accepted: grob is I = 1");
    });
  });
  describe("When its prok is V", () => {
    it("returns accepted reply", function() {
      expect(new Parser().Read("prok is V")).to.equal("accepted: prok is V = 5");
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
  describe("When its an unknown question", () => {
    it("returns sorry don't know that one", function() {
      expect(new Parser().Read("what's the answer to life?")).to.equal("I have no idea what you are talking about");
    });
  });
  // describe("And some values have been assigned", () => {
  //   describe("When its a question", () => {
  //     describe("And the question is how much is glob ?", () => {
  //       it("should return glob is 1", function() {
  //         expect(new Parser().Read("how much is glob ?")).to.equal("glob is 1");
  //       });
  //     });
  //     describe("And the question is how much is pish tegj glob glob ?", () => {
  //       it("should return pish tegj glob glob is 42", function() {
  //         expect(new Parser().Read("how much is pish tegj glob glob ?")).to.equal("pish tegj glob glob is 42");
  //       });
  //     });
  //   });
  // });
});
