const expect = require('expect');
const spyOn = expect.spyOn;

const ganmi = require('../bin/ganmi');

const fsStub = {
  watch() { }
};

describe('ganmi function', () => {
  afterEach(() => {
    expect.restoreSpies();
  });

  it('should call fs.watch with directory as first argument', () => {
    const spy = spyOn(fsStub, 'watch');
    const inputArray = ['.', 'regex', 'command'];

    ganmi(inputArray, fsStub);

    expect(spy.calls[0].arguments[0]).toEqual(inputArray[0]);
  });

});