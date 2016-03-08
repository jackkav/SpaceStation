const FILEPATH = "/tmp/test"
const FILEPATH2 = "/tmp/test2"
let fs = require('fs-extra');
export default class CurrencyStore {
  addMappingToFile(userInput) {
    let alienWord = userInput.trim().split(" ")[0],
      romanNumeral = userInput.trim().split(" ")[2];
    this.WriteKeyValuePairToFile(romanNumeral, alienWord, FILEPATH);
  }
  getRomanNumeralFromFile(alienWords) {
    if (!fs.existsSync(FILEPATH)) return;
    let oldFileContent = fs.readFileSync(FILEPATH);
    if (!oldFileContent) return;
    let pairs = oldFileContent.toString().trim().split(",");
    for (let pair of pairs) {
      if (pair.trim().split(":")[1] === alienWords)
        return pair.trim().split(":")[0];
    }
  }
  GetExchangeRate(type) {
    if (!fs.existsSync(FILEPATH2)) return;
    let oldFileContent = fs.readFileSync(FILEPATH2);
    if (!oldFileContent) return;
    let pairs = oldFileContent.toString().trim().split(",");
    for (let pair of pairs) {
      if (pair.trim().split(":")[0] === type)
        return pair.trim().split(":")[1];
    }
  }
  SetExchangeRate(type, rate) {
    this.WriteKeyValuePairToFile(type, rate, FILEPATH2);
  }
  WriteKeyValuePairToFile(key, value, filePath) {
    let pair = key + ":" + value + ",";
    let oldFileContent = "";
    if (!fs.existsSync(filePath))
      fs.writeFileSync(filePath, pair);
    if (fs.existsSync(filePath))
      oldFileContent = fs.readFileSync(filePath);
    if (oldFileContent && oldFileContent.indexOf(pair) === -1 && oldFileContent.indexOf(key + ":") === -1)
      fs.writeFileSync(filePath, oldFileContent + pair);
  }
}
