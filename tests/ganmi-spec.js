const expect = require('expect');
const spyOn = expect.spyOn;

const fs = require('fs');
const child_process = require('child_process');

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

  it.skip('should console log error message if no parameters are passed', () => {

    const spy = spyOn(child_process, 'exec');
    const inputArray = ['tests', 'speak', 'regex'];

    //ganmi(inputArray);

    console.log(spy.calls);

    expect(spy)
      .toHaveBeenCalled();
  });



});