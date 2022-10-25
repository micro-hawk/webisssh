const spawn = require('cross-spawn')

const Client = spawn('npm', ['run', 'client'])

Client.on('exit', function (code, signal) {
  console.log('Client Dev process exited with ' +
    `code ${code} and signal ${signal}`);
});

Client.stdout.on('data', (data) => {
  console.log(`[Client Dev]: ${data}`);
});

Client.stderr.on('data', (data) => {
  console.error(`[Client Dev]: ${data}`);
});


const server = spawn('npm', ['run', 'server'])

server.on('exit', function (code, signal) {
  console.log('server Dev process exited with ' +
    `code ${code} and signal ${signal}`);
});

server.stdout.on('data', (data) => {
  console.log(`[server Dev]: ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`[server Dev]: ${data}`);
});
