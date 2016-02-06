const fs = require('fs');
const exec = require('child_process').exec;

module.exports = (inputArray) => {
  console.log(inputArray);

  const directory = inputArray[0];
  const command = inputArray[1];
  const re = inputArray[2] ? new RegExp(inputArray[2]) : '.*'; // matches all files if not set

  if (!directory || !command) {
    console.log(`Uh oh!
You need to enter at least:
  1. a directory to watch
  2. a command to call
Optional third is regex to match filename.`);
  } else {
    console.log(`GANMI IS WATCHING! \nDirectory: ${directory}\nCommand: ${command}\nRegex: ${re}`);

    const callbackFn = (event, filename) => filename.match(re) &&
      exec(command, (error, stdout, stderr) => {
        stdout && console.log(stdout);
        stderr && console.log(stderr);
        error && console.log(`exec error: ${error}`);
      }
    );
    fs.watch(directory, callbackFn);
  }
};