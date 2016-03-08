var HashMap = require("hashmap")
const FILEPATH = "/tmp/test"
var fs = require('fs');
// var FS = require("fs")
export default class CurrencyStore {
  constructor(dataStore) {
    this.dataStore = dataStore || new HashMap();
  }
  // addMappingToHash(userInput) {
  //   let alienWord = userInput.trim().split(" ")[0],
  //     romanNumeral = userInput.trim().split(" ")[2];
  //   this.dataStore.set(alienWord, romanNumeral);
  //   return this.dataStore;
  // }
  addMappingToFile(userInput) {
    let alienWord = userInput.trim().split(" ")[0],
      romanNumeral = userInput.trim().split(" ")[2];
    var oldFileContent = "";
    let currency = alienWord + ":" + romanNumeral + ",";

    if (!fs.existsSync(FILEPATH))
      fs.writeFileSync(FILEPATH, currency);
    if (fs.existsSync(FILEPATH))
      oldFileContent = fs.readFileSync(FILEPATH);
    if (oldFileContent && oldFileContent.indexOf(currency) === -1)
      fs.writeFileSync(FILEPATH, oldFileContent + currency);
  }
  // getAlienWord(romanNumeral) {
  //   return this.dataStore.search(romanNumeral);
  // }
  // getRomanNumerals(alienWords) {
  //   return this.dataStore.get(alienWords);
  // }
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
