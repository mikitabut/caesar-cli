const CaesarCipher = require('./src/caesar-cipher');

const caesarCipher = new CaesarCipher();

console.log('abc123 abc привет', -1, '----', caesarCipher.decode('abc123 abc привет', -1));
console.log('abc123 abc привет', 25, '----', caesarCipher.decode('abc123 abc привет', 25));
console.log('abc123 abc привет', 0, '----', caesarCipher.decode('abc123 abc привет', 0));
console.log('abc123 abc привет', 26, '----', caesarCipher.decode('abc123 abc привет', 26));
