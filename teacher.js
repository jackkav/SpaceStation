 var map = [];
export class Teacher {
  addMapping(userInput) {
    let alienWord = userInput.trim().split(" ")[0],
     romanNumeral = userInput.trim().split(" ")[2];
     map.push({alienWord,romanNumeral});
     return map;
  }
  // getAlienWord(romanNumeral){
  //   let m = {1,1}
  //   return _.findWhere(m,{romanNumeral:romanNumeral}).alienWord;
  // }
  // getRomanNumberal(alienWord){
  //     let m = {1,1}
  //   return _.findWhere(m,{alienWord:alienWord})
  // }
}
