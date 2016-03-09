const PATHTOCURRENCYLOOKUP = "/tmp/lookup";
const PATHTOEXCHANGERATES = "/tmp/exchange";
let fs = require('fs-extra');
export default class CurrencyStore {
  //TODO: overwrite existing record if keys match
  SetCurrencyLookup(userInput) {
    let alienUnit = userInput.trim().split(" ")[0],
      romanUnit = userInput.trim().split(" ")[2];
    this.WriteKeyValuePairToFile(romanUnit, alienUnit, PATHTOCURRENCYLOOKUP);
  }

  GetRomanUnit(alienUnit) {
    if (!fs.existsSync(PATHTOCURRENCYLOOKUP)) return;
    let oldFileContent = fs.readFileSync(PATHTOCURRENCYLOOKUP);
    if (!oldFileContent) return;
    let keyValuePairs = oldFileContent.toString().trim().split(",");
    for (let pair of keyValuePairs) {
      if (pair.trim().split(":")[1] === alienUnit)
        return pair.trim().split(":")[0];
    }
  }

  SetMaterialTypeExchangeRate(type, rate) {
    this.WriteKeyValuePairToFile(type, rate, PATHTOEXCHANGERATES);
  }

  GetMaterialTypeExchangeRate(materialType) {
    if (!fs.existsSync(PATHTOEXCHANGERATES)) return;
    let oldFileContent = fs.readFileSync(PATHTOEXCHANGERATES);
    if (!oldFileContent) return;
    let keyValuePairs = oldFileContent.toString().trim().split(",");
    for (let pair of keyValuePairs) {
      if (pair.trim().split(":")[0] === materialType)
        return pair.trim().split(":")[1];
    }
  }

  WriteKeyValuePairToFile(key, value, filePath) {
    let pair = key + ":" + value + ",";
    let oldFileContent = "";
    let fileExists = fs.existsSync(filePath);
    if (!fileExists)
      fs.writeFileSync(filePath, pair);
    if (fileExists)
      oldFileContent = fs.readFileSync(filePath);
    let newPairNotFound = oldFileContent.indexOf(pair) === -1;
    let newKeyNotFound = oldFileContent.indexOf(key + ":") === -1;
    if (oldFileContent && newPairNotFound && newKeyNotFound)
      fs.writeFileSync(filePath, oldFileContent + pair);
  }
}
