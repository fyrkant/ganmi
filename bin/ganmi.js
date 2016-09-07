const fs = require('fs')
const exec = require('child_process').exec
const helptText = require('./string-collection').helptText

module.exports = (inputArray) => {
  if (inputArray && inputArray.length >= 2) {
    const directory = inputArray[0]
    const command = inputArray[1]
    const re = inputArray[2] ? new RegExp(inputArray[2]) : '.*' // matches all files if not set

    console.log(`GANMI IS WATCHING! \nDirectory: ${directory}\nCommand: ${command}\nRegex: ${re}`)

    const callbackFn = (event, filename) => filename.match(re) &&
      exec(command, (error, stdout, stderr) => {
        stdout && console.log(stdout)
        stderr && console.log(stderr)
        error && console.log(`exec error: ${error}`)
      }
    )
    fs.watch(directory, callbackFn)
  } else {
    console.log(helptText)
  }
}
