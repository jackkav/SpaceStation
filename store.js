var HashMap = require("hashmap")
var map = new HashMap();
export default class CurrencyStore {
  addMapping(userInput) {
    let alienWord = userInput.trim().split(" ")[0],
     romanNumeral = userInput.trim().split(" ")[2];
     map.set(alienWord, romanNumeral);
     return map;
  }
  getAlienWord(romanNumeral){
    return map.search(romanNumeral);
  }
  getRomanNumberal(alienWord){
    return map.get(alienWord);
  }
}
