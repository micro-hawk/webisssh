const fs = require('fs')
const spawn = require('cross-spawn')

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

const buildDist = () => {

  const build = spawn('npm', ['run', 'build']);

  build.on('exit', function (code, signal) {
    startServer()
    console.log('Build process exited with ' +
      `code ${code} and signal ${signal}`);
  });
  
  build.stdout.on('data', (data) => {
    console.log(`[Build]: ${data}`);
  });
  
  build.stderr.on('data', (data) => {
    console.error(`[Build]: ${data}`);
  });
}


const startServer = () => {
  const server = spawn('node', ['server/server-build.js']);
  
  server.on('exit', function (code, signal) {
    console.log('server process exited with ' +
      `code ${code} and signal ${signal}`);
  });
  
  server.stdout.on('data', (data) => {
    console.log(`[server]: ${data}`);
  });
  
  server.stderr.on('data', (data) => {
    console.error(`[server]: ${data}`);
  });
}



if (getDirectories('.').includes('dist')) {
  startServer()
} else {
  buildDist()
}



