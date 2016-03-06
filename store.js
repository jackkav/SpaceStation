var HashMap = require("hashmap")
// var FS = require("fs")
var map = new HashMap();
export default class CurrencyStore {
  addMapping(userInput) {
    let alienWord = userInput.trim().split(" ")[0],
     romanNumeral = userInput.trim().split(" ")[2];
     map.set(alienWord, romanNumeral);
     return map;
  }
  addMappingToFile(input){
      let alienWord = userInput.trim().split(" ")[0],
       romanNumeral = userInput.trim().split(" ")[2];
  }
  getAlienWord(romanNumeral){
    return map.search(romanNumeral);
  }
  getRomanNumeral(alienWord){
    return map.get(alienWord);
  }
}
