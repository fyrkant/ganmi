const expect = require('expect');
const spyOn = expect.spyOn;
const helptText = require('../bin/string-collection').helptText;

const fs = require('fs');

const ganmi = require('../bin/ganmi');

describe('ganmi function', () => {
  afterEach(() => {
    expect.restoreSpies();
  });

  it('should call fs.watch with directory as first argument', () => {
    const spy = spyOn(fs, 'watch');
    const inputArray = ['fakeDirectory', 'command', 'regex'];

    ganmi(inputArray);

    expect(spy.calls[0].arguments[0])
      .toEqual(inputArray[0]);
  });

  it('should console log error message if no parameters are passed', () => {
    const spy = spyOn(console, 'log');

    ganmi();

    expect(spy.calls[0].arguments[0])
      .toEqual(helptText);
  });

  it('should console log friendly message when two or more arguments passed', () => {
    const spy = spyOn(console, 'log');
    const spy2 = spyOn(fs, 'watch'); //just to stud it to death
    const inputArray = ['fakeDirectory', 'command', 'regex'];

    ganmi(inputArray);

    expect(spy.calls[0].arguments[0])
      .toEqual(`GANMI IS WATCHING! \nDirectory: ${inputArray[0]}\nCommand: ${inputArray[1]}\nRegex: ${new RegExp(inputArray[2])}`);
  });


});