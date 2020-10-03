const data = require('./data');

class CaesarCipher {
  encode (stringForEncoding = '', step = 0) {
    let finalString = '';
    for (let charNumber = 0; charNumber < stringForEncoding.length; charNumber++) {
      const charCode = stringForEncoding.charCodeAt(charNumber);
      const alphabet = this._getAlphabetRanges(charCode);

      if (!alphabet) {
        finalString += String.fromCharCode(charCode);
      } else {
        finalString += String.fromCharCode(this._getCharCodeWithChange(charCode, alphabet, step));
      }
    }

    return finalString;
  }

  decode (stringForDecoding = '', step = 0) {
    return this.encode(stringForDecoding, step);
  }

  _getAlphabetRanges(charCode) {
    if (charCode <= data.alphabetBigEnd && charCode >= data.alphabetBigStart) {
      return {
        start: data.alphabetBigStart,
        end: data.alphabetBigEnd,
      };
    } else if (charCode <= data.alphabetSmallEnd && charCode >= data.alphabetSmallStart){
      return {
        start: data.alphabetSmallStart,
        end: data.alphabetSmallEnd,
      }
    }

    return null;
  }

  _getCharCodeWithChange(charCode, { start, end }, step = 0) {
    const absoluteCharCode = charCode - start;
    const diff = end - start + 1;
    let resultCharCode = (absoluteCharCode + step) % diff;

    if (resultCharCode < 0) {
      resultCharCode += diff;
    }

    return resultCharCode + start;
  }
}

module.exports = CaesarCipher;
