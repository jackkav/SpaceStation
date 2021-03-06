export default class Parser {
  constructor(options) {
    this.store = options.store;
    this.calc = options.calc;
  }

  Read(userInput) {
    if (this.IsValidAssignment(userInput)) {
      if (!this.calc.IsValidRomanNumeral(userInput)) {
        return "Numeral format is incorrect unable to parse";
      }
      this.store.SetCurrencyLookup(userInput);
      return "accepted: " + userInput + " = " + this.calc.NumeralToNumber(userInput[userInput.length - 1]);
    }

    if (this.IsValidCreditAssignment(userInput)) {
      let materialType = this.ParseCurrencyType(userInput);
      let everythingBeforeType = userInput.split(materialType)[0];
      let totalCreditValue = userInput.split(" is ")[1].split(" ")[0];
      let arabicCurrency = this.ConvertAlienUnitsToArabicUnits(everythingBeforeType);
      if (arabicCurrency && totalCreditValue) {
        let creditValueOfOneInstance = totalCreditValue / arabicCurrency;
        this.store.SetMaterialTypeExchangeRate(materialType, creditValueOfOneInstance);
        return "accepted: " + userInput + ", " + arabicCurrency + " " + materialType + " is worth " + creditValueOfOneInstance + " Credits";
      }
    }

    if (this.IsValidQuestion(userInput)) {
      let alienUnits = this.ParseQuestionUnits(userInput);
      if (!this.AreUnitsKnown(alienUnits)) return "I have never heard of " + alienUnits;
      let reply = alienUnits;
      reply += " is ";
      reply += this.ConvertAlienUnitsToArabicUnits(alienUnits);
      return reply;
    }
    
    if (this.IsValidCreditQuestion(userInput)) {
      let currencyAndType = userInput.split(" is ")[1].split("?")[0].trim();
      let words = currencyAndType.split(" ");
      let materialType = words[words.length - 1];
      let everythingBeforeType = currencyAndType.split(materialType)[0];
      let arabic = this.ConvertAlienUnitsToArabicUnits(everythingBeforeType);
      let exchangeRate = this.store.GetMaterialTypeExchangeRate(materialType);
      let reply = currencyAndType + " is " + arabic * exchangeRate;
      return reply + " Credits";
    }
    return "I have no idea what you are talking about";
  }

  AreUnitsKnown(units) {
    let unitList = units.split(" ");
    for (let unit of unitList) {
      if (!this.store.GetRomanUnit(unit))
        return false;
    }
    return true;
  }

  ParseCurrencyType(userInput) {
    let currencyAndType = userInput.split(" is ")[0];
    let words = currencyAndType.split(" ");
    return words[words.length - 1];
  }

  ConvertAlienUnitsToArabicUnits(alienUnits) {
    let numeral = "";
    for (let unit of alienUnits.split(" ")) {
      numeral += this.store.GetRomanUnit(unit);
    }
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
    return containsQuestionMark && startsWithHowMuchIs;
  }

  IsValidCreditQuestion(userInput) {
    let containsQuestionMark = userInput.indexOf("?") !== -1;
    let startsWithHowManyCreditsIs = userInput.indexOf("how many Credits is ") !== -1;
    return containsQuestionMark && startsWithHowManyCreditsIs;
  }

  IsValidAssignment(userInput) {
    let containsIs = userInput.indexOf(" is ") !== -1;
    let hasThreeParts = userInput.trim().split(" ").length == 3;
    //TODO: refactor to avoid magic string
    let lastPartIsNumeral = "IVXLCDM".indexOf(userInput.trim().split(" ")[2]) != -1;
    return containsIs && hasThreeParts && lastPartIsNumeral;
  }

  IsValidCreditAssignment(userInput) {
    if (!userInput) return false;
    let containsIs = userInput.indexOf(" is ") !== -1;
    if (!containsIs) return false;
    let containsQuestionMark = userInput.indexOf("?") !== -1;
    if (containsQuestionMark) return false;
    const CREDITS = "Credits";
    let isAssigningCredits = userInput.substr(userInput.length - CREDITS.length) === CREDITS;
    if (!isAssigningCredits) {
      return false;
    }
    return true;
  }

}
