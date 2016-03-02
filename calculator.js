export class Calc {
  NumeralsToNumber(numeral) {
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
}
