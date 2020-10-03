const fs = require('fs');

class Arguments {
  availableActions = ['encode', 'decode'];
  consoleStreams = {
    stdin: 'stdin',
    stdout: 'stdout',
  }

  constructor(argv) {
    this.argv = argv;
  }

  validate() {
    const validation =
      this._validateAction()
      && this._validateShift()
      && this._validateInput()
      && this._validateOutput();

    if (!validation) {
      process.exit(1);
    }
  }

  _validateShift() {
    if (this.argv.shift == null) {
      console.error('Shift not set. Please run the program again and specify shift.')
      return false;
    }

    const shift = parseInt(this.argv.shift + '', 10);
    if (Number.isNaN(shift)) {
      console.error('Shift is not a number. Please run the program again and specify correct shift.')
      return false;
    }

    return true;
  }

  _validateAction() {
    if (this.argv.action == null) {
      console.error('Action not setted. Please run the program again and specify action.')
      return false;
    }
    if (!this.availableActions.includes(this.argv.action)) {
      console.error(`'${this.argv.action}' action is not supported. Please run the program again and specify correct action.`)
      return false;
    }

    return true;
  }

  _validateInput() {
    if(this.argv.input === this.consoleStreams.stdin) {
      return true;
    }

    try {
      if (fs.existsSync(this.argv.input)) {
        return true;
      } else {
        console.error('The file `' + this.argv.input + '` not exists. Please re-run the program and write correct input file with path.');
        return false;
      }
    } catch(err) {
      console.error(err);
    }
  }

  _validateOutput() {
    if(this.argv.output === this.consoleStreams.stdout) {
      return true;
    }

    try {
      if (fs.existsSync(this.argv.output)) {
        return true;
      } else {
        console.error('The file `' + this.argv.output + '` not exists. Please re-run the program and write correct output file with path.');
        return false;
      }
    } catch(err) {
      console.error(err);
    }
  }
}

module.exports = Arguments;
