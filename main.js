import {
  Parser
} from "./parser.js";
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);


rl.setPrompt('ForEx> ');
rl.prompt();

rl.on('line', (line) => {
  let x = new Parser().read(line);
  console.log(x);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
