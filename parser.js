import {
  Calc
} from "./calculator.js";
export class Parser {
  Read(userInput) {
    let containsIs = userInput.indexOf(" is ") !== -1;
    let hasThreeParts = userInput.trim().split(" ").length == 3;
    //TODO: magic string        \v/
    let lastPartIsNumeral = "IVXLCDM".indexOf(userInput.trim().split(" ")[2])!=-1
    if (containsIs && hasThreeParts && lastPartIsNumeral) {
      //add translation to temp kvp
      return "accepted: " + userInput + " = "+ new Calc().NumeralToNumber(userInput[userInput.length-1]);
    }
    return "instructions unclear";
  }
}
