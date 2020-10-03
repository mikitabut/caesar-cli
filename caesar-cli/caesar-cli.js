const CaesarCipher = require('./src/caesar-cipher');
const Arguments = require('./src/arguments');

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

const caesarCipher = new CaesarCipher();

const arguments = new Arguments(argv);

arguments.validate();
