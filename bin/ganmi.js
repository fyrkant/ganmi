const exec = require('child_process').exec;

module.exports = (inputArray, fileSystem) => {

  const directory = inputArray[0];
  const re = new RegExp(inputArray[1]);
  const command = inputArray[2];

  fileSystem.watch(directory, (event, filename) => filename.match(re) &&
      exec(command, (error, stdout, stderr) => error === null ?
          console.log(stdout) :
          console.log(`exec error: ${error}`)
          )
      );
};