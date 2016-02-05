const expect = require('expect');
const spyOn = expect.spyOn;
const fs = require('fs');

const ganmi = require('../bin/ganmi');

describe('ganmi function', () => {
  afterEach(() => {
    expect.restoreSpies();
  });

  it('should call fs.watch with directory as first argument', () => {
    const spy = spyOn(fs, 'watch');
    const inputArray = ['directory', 'regex', 'command'];

    ganmi(inputArray);

    expect(spy.calls[0].arguments[0])
      .toEqual(inputArray[0]);
  });

});