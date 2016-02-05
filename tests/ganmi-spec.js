const expect = require('expect');
const spyOn = expect.spyOn;
const fs = require('fs');
const mock = require('mock-fs');

const ganmi = require('../bin/ganmi');

describe('ganmi function', () => {
  it('should call fs.watch', () => {
    const spy = spyOn(fs, 'watch');
    const inputArray = ['directory', 'regex', 'command'];

    ganmi(inputArray);

    expect(spy)
      .toHaveBeenCalled();
  });
});