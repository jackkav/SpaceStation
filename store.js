var HashMap = require("hashmap")
// var FS = require("fs")
export default class CurrencyStore {
  constructor(dataStore)
  {
    this.dataStore = dataStore||new HashMap();
  }
  addMappingToHash(userInput) {
    let alienWord = userInput.trim().split(" ")[0],
     romanNumeral = userInput.trim().split(" ")[2];
     this.dataStore.set(alienWord, romanNumeral);
     return this.dataStore;
  }
  addMappingToFile(input){
      let alienWord = userInput.trim().split(" ")[0],
       romanNumeral = userInput.trim().split(" ")[2];
       //does file exist?
       //create file
       //write data to file
  }
  getAlienWord(romanNumeral){
    return this.dataStore.search(romanNumeral);
  }
  getRomanNumerals(alienWords){
    return this.dataStore.get(alienWords);
  }
}
