const FILEPATH = "/tmp/test"
let fs = require('fs-extra');
export default class CurrencyStore {
  addMappingToFile(userInput) {
    let alienWord = userInput.trim().split(" ")[0],
      romanNumeral = userInput.trim().split(" ")[2];
    var oldFileContent = "";
    let currency = alienWord + ":" + romanNumeral + ",";

    if (!fs.existsSync(FILEPATH))
      fs.writeFileSync(FILEPATH, currency);
    if (fs.existsSync(FILEPATH))
      oldFileContent = fs.readFileSync(FILEPATH);
    if (oldFileContent && oldFileContent.indexOf(currency) === -1 && oldFileContent.indexOf(":" + romanNumeral + ",")===-1)
      fs.writeFileSync(FILEPATH, oldFileContent + currency);
  }
  getRomanNumeralFromFile(alienWords) {
    if (!fs.existsSync(FILEPATH))return;
    let oldFileContent = fs.readFileSync(FILEPATH);
    if(!oldFileContent)return;
      let pairs = oldFileContent.toString().trim().split(",");
      for(let pair of pairs){
        if(pair.trim().split(":")[0]===alienWords)
          return pair.trim().split(":")[1];
      }

  }
}
