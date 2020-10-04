const CipherCliArguments = require('./src/arguments');
const { pipeline } = require('stream');
const fs = require('fs');
const CaesarCliTransform = require('./src/caesar-cli-transform');
const readline = require('readline');

var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    ['action']: 'a',
    ['shift']: 's',
    ['input']: 'i',
    ['output']: 'o',
  },
  default: {
    input: 'stdin',
    output: 'stdout',
  }
});

const arguments = new CipherCliArguments(argv);
arguments.validate();

let i = 1;
let readStream;
let writeStream;
const isFromConsole = arguments.isFromConsole();
if (isFromConsole) {
  readStream = process.stdin;
} else {
  readStream = fs.createReadStream(arguments.getInput());
}
if(arguments.isToConsole()) {
  writeStream = process.stdout;
} else {
  writeStream = fs.createWriteStream(arguments.getOutput(), {
    flags: 'a',
  });
}

  pipeline(
    readStream,
    new CaesarCliTransform(arguments.getAction(), arguments.getShift()),
    writeStream,
    (...args) => {},
  );
// } while(isFromConsole);
