import Calc from "./calculator.js";
import Teacher from "./teacher.js";
// import * as _ from "underscore"
export default class Parser {
  constructor(options){
    this.teacher = options.teacher;
    this.calc = options.calc;
  }
  Read(userInput) {

    let containsQuestionMark = userInput.indexOf("?") !== -1;
    //   let startsWithHowMuchIs = userInput.indexOf("how much is ") !== -1;
    // if (containsQuestionMark && startsWithHowMuchIs) {
    //   return "pish tegj glob glob is 42";
    // }
    if (containsQuestionMark) {
      return "I have no idea what you are talking about";
    }

    if (this.IsValidAssignment(userInput)) {
      //add translation to temp kvp
      this.teacher.addMapping(userInput);
      return "accepted: " + userInput + " = " + this.calc.NumeralToNumber(userInput[userInput.length - 1]);
    }
    return "I have no idea what you are talking about";
  }
  IsValidAssignment(userInput) {
    let containsIs = userInput.indexOf(" is ") !== -1;
    let hasThreeParts = userInput.trim().split(" ").length == 3;
    //TODO: refactor to avoid magic string        \v/
    let lastPartIsNumeral = "IVXLCDM".indexOf(userInput.trim().split(" ")[2]) != -1;
    return containsIs && hasThreeParts && lastPartIsNumeral;
  }
}
