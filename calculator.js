export default class Calc {
  RomanToArabic(numeral) {
    if (!this.IsValidRomanNumeral(numeral)) return 0;
    let arabic = 0,
      i = numeral.length;
    while (i--) {
      if (this.NumeralToNumber(numeral[i]) < this.NumeralToNumber(numeral[i + 1]))
        arabic -= this.NumeralToNumber(numeral[i]);
      else
        arabic += this.NumeralToNumber(numeral[i]);
    }
    return arabic;
  }

  NumeralToNumber(numeral) {
    const NUMERALS = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    return NUMERALS[numeral] || 0;
  }

  IsValidRomanNumeral(numeral) {
    //TODO: consider regex
    if (!numeral) return false;
    if (numeral.indexOf("IIII") > -1)return false;
    if (numeral.indexOf("CCCC") > -1)return false;
    if (numeral.indexOf("MMMM") > -1)return false;
    if (numeral.indexOf("LC") > -1)return false;
    if (numeral.indexOf("DM") > -1)return false;
    return true;
  }
}
