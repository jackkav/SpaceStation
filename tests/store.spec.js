import CurrencyStore from "../store.js";
import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
chai.use(require("sinon-chai"));
var HashMap = require("hashmap")
var fs = require('fs');

let store;
describe("Given a store with data", () => {
  it("should return I", function() {
    let s = new CurrencyStore()
    s.addMappingToFile("grob is I");
    s.addMappingToFile("prok is V");
    s.addMappingToFile("prok is V");
    s.addMappingToFile("pish is X");
    var result = fs.readFileSync("/tmp/test");
    expect(result.toString()).to.equal("grob:I,prok:V,pish:X,");
  });
});
describe("Given a store with data", () => {
  it("should return I", function() {
    let s = new CurrencyStore()
    expect(s.getRomanNumeralFromFile("prok")).to.equal("V");
  });
});
// describe("Given a store with data", () => {
//   describe("When input is: grob is I", () => {
//     it("should return I", function() {
//       let input = "grob is I";
//       let data = new HashMap();
//       data.set("grob","I");
//       let s = new CurrencyStore(data)
//
//       expect(s.getRomanNumeralFromFile("grob")).to.equal("I");
//     });
//   });
// });
// describe("Given an assignment", () => {
//   beforeEach(function() {
//       let map = new HashMap();
//
//       store = new CurrencyStore(map);
//   });
//   describe("When input is: grob is I", () => {
//     it("should return I", function() {
//       let input = "grob is I";
//       store.addMappingToHash(input);
//
//       expect(store.getRomanNumeralFromFile("grob")).to.equal("I");
//     });
//   });
//   describe("When input is: prok is V", () => {
//     it("should return V", function() {
//       let input = "prok is V";
//       store.addMappingToHash(input);
//       expect(store.getRomanNumeralFromFile("prok")).to.equal("V");
//     });
//   });
//
// });
