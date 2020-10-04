const { Transform } = require('stream');
const CaesarCipher = require('./caesar-cipher');

class CaesarCliTransform extends Transform {
  constructor(action, step, transformOpts) {
    super(transformOpts);

    this.action = action;
    this.step = step;
    this.caesarCipher = new CaesarCipher();
  }

  _transform(chunk, encoding, callback) {
    try {
      let resultString;
      if(this.action === 'encode') {
        resultString = this.caesarCipher.encode(chunk.toString('utf8'), this.step);
      } else {
        resultString = this.caesarCipher.decode(chunk.toString('utf8'), this.step);
      }
      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = CaesarCliTransform;
