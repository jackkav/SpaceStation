import Parser from "./parser.js";
import Calc from "./calculator.js";
import Teacher from "./teacher.js";

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Prompt> ');
rl.prompt();

rl.on('line', (line) => {
  let x = new Parser({teacher:new Teacher(), calc: new Calc()}).Read(line);
  console.log(x);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
