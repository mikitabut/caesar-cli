# Caesar Cipher
This is the program for encoding and decoding text using caesar cipher as alghorithm.

## Running the program
To run the program you should start the main nodeJS file using node as environment runner.
```
node caesar-cli
```
In next step you should type some of the required and non-reuired arguments which will be described below.

## Arguments
1. (**REQUIRED**) `--action ACTION_NAME` - action what you want to do.
Available values for `ACTION_NAME`: `encode`, `decode`.
2. (**REQUIRED**) `--shift NUMBER` - shift for the alghoritm. You can use any number. For negative numbers use next pattern - `--shift=NEGATIVE_NUMBER`
3. `--input FILENAME_WITH_PATH` - name as path of the input file. In case when the file with such name will not exist you will see error message. By default console as input is using.
4. `--output FILENAME_WITH_PATH` - name as path of the input file. In case when the file with such name will not exist you will see error message. By default console as output is using.

## Arguments aliases
Instead of using full name arguments you can use their aliases.

1. `--action` -> `-a`
1. `--shift` -> `-s`
1. `--input` -> `-i`
1. `--output` -> `-o`

## Program Usage Examples
```
node caesar-cli.js --action encode --shift 1 --input input.txt --output output.txt
```
```
node caesar-cli.js --action decode --shift 5 --input input.txt
```
```
node caesar-cli.js -a encode -s=-1 -i input.txt -o output.txt
```
