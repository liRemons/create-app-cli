const { spawn } = require('child_process')
const spawnCommand = (...args) => {
  return new Promise((resole, reject) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on('close', () => {
      resole();
    })
  })
}

module.exports = {
  spawnCommand
}
