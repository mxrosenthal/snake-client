// const net = require('net');


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupIput = function() {
  console.log('stting up!');
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput)

  return stdin;
}
const handleUserInput = function(data) {
  console.log('data: ', data);

  if (data === '\u0003') {
    // conn.write('Goodbye');
    console.log('Goodbye');
    process.exit();
  }
  // return data;
}

const { connect } = require('./client');
console.log('Connecting ...');
// connect();
setupIput();
let conn = connect();