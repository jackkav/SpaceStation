import {_} from 'underscore'
export default class Parser {
  constructor(options) {
    this.store = options.store;
    this.calc = options.calc;
  }
  Read(userInput) {
    //TODO: text file
    //TODO: credits

    if (this.IsValidQuestion(userInput)) {
      let alienUnits = this.ParseQuestionUnits(userInput);
      let reply = alienUnits;
      reply += " is ";
      reply += this.ConvertAlienUnitsToArabicUnits(alienUnits);
      return reply;
    }

    if (this.IsValidAssignment(userInput)) {
      //add translation to temp kvp
      if (!this.calc.IsValidRomanNumeral(userInput)) {
        return "Numeral format is incorrect unable to parse";
      }
      this.store.addMappingToHash(userInput);
      return "accepted: " + userInput + " = " + this.calc.NumeralToNumber(userInput[userInput.length - 1]);

    }
    return "I have no idea what you are talking about";
  }
  ConvertAlienUnitsToArabicUnits(alienUnits){
    var numeral = this.store.getRomanNumerals(alienUnits);
    return this.calc.RomanToArabic(numeral);
  }
  ParseQuestionUnits(userInput) {
    let questionMarkPostion = userInput.indexOf("?");
    let query = userInput.substr(12, questionMarkPostion - 12).trim()
    return query;
  }
  IsValidQuestion(userInput) {
    let containsQuestionMark = userInput.indexOf("?") !== -1;
    let startsWithHowMuchIs = userInput.indexOf("how much is ") !== -1;

    // let startsWithHowMuchIs = userInput.indexOf("how much is ") !== -1;
    return containsQuestionMark && startsWithHowMuchIs;
  }
  IsValidAssignment(userInput) {
    let containsIs = userInput.indexOf(" is ") !== -1;
    let hasThreeParts = userInput.trim().split(" ").length == 3;
    //TODO: refactor to avoid magic string        \v/
    let lastPartIsNumeral = "IVXLCDM".indexOf(userInput.trim().split(" ")[2]) != -1;
    return containsIs && hasThreeParts && lastPartIsNumeral;
  }
}
