/* eslint-env mocha */
const expect = require('expect')
const spyOn = expect.spyOn
const helptText = require('../bin/string-collection').helptText

const fs = require('fs')

const ganmi = require('../bin/ganmi')

describe('ganmi function', () => {
  afterEach(() => {
    expect.restoreSpies()
  })

  it('should call fs.watch with directory as first argument', () => {
    const spy = spyOn(fs, 'watch')
    spyOn(console, 'log') // just to shut it up
    const inputArray = ['fakeDirectory', 'command', 'regex']

    ganmi(inputArray)

    expect(spy.calls[0].arguments[0])
      .toEqual(inputArray[0])
  })

  it('should console log error message if no parameters are passed', () => {
    const spy = spyOn(console, 'log')

    ganmi()

    expect(spy.calls[0].arguments[0])
      .toEqual(helptText)
  })

  it('should console log friendly message when two or more arguments passed', () => {
    const spy = spyOn(console, 'log')
    spyOn(fs, 'watch') // just to stud it to death
    const inputArray = ['fakeDirectory', 'command', 'regex']

    ganmi(inputArray)

    expect(spy.calls[0].arguments[0])
      .toEqual(
`GANMI IS WATCHING!
Directory: ${inputArray[0]}
Command: ${inputArray[1]}
Regex: ${new RegExp(inputArray[2])}`)
  })
})
