
const {phrases, dir} = require('./constants');
// const {dir} = require('./co')
let connection; 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

const handleUserInput = function(data) {
  if (data === '\u0003') {
    console.log('Goodbye');
    process.exit();
  } else if (data === 'w') {
    connection.write(dir.w);

  }else if (data === 'a') {
    connection.write(dir.a);

  }else if (data === 's') {
    connection.write(dir.s);

  }else if (data === 'd') {
    connection.write(dir.d);
  }
  else if (data === 'q') {
    connection.write(phrases.q);
  }
  else if (data === 'e') {
    connection.write(phrases.e);
  }else if (data === 'r') {
    connection.write(phrases.r);
  }

}

module.exports = {
  setupInput
};