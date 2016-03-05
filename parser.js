
export default class Parser {
  constructor(options){
    this.store = options.store;
    this.calc = options.calc;
  }
  Read(userInput) {
    //TODO: text file
    //TODO: numeral rules
    //TODO: credits

    if (this.IsValidQuestion(userInput)) {
      let reply = this.ParseQuestionUnits(userInput);
      let numeral = 0;
      let units = reply.split(" ");
      for(let i=0; i<units.length;i++){
          numeral+=this.store.map.get(units[i]);
      }
      reply += " is ";
      reply += this.calc.RomanToArabic(numeral);
      return reply;
    }

    if (this.IsValidAssignment(userInput)) {
      //add translation to temp kvp
      this.store.addMapping(userInput);
      return "accepted: " + userInput + " = " + this.calc.NumeralToNumber(userInput[userInput.length - 1]);
    }
    return "I have no idea what you are talking about";
  }
  ParseQuestionUnits(userInput){
    let questionMarkPostion = userInput.indexOf("?");
    let query = userInput.substr(12,questionMarkPostion-12).trim()
    return query;
  }
  IsValidQuestion(userInput) {
    let containsQuestionMark = userInput.indexOf("?") !== -1;
      let startsWithHowMuchIs = userInput.indexOf("how much is ") !== -1;
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
