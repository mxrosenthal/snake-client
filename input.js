
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
    connection.write('Move: up');

  }else if (data === 'a') {
    connection.write('Move: left');

  }else if (data === 's') {
    connection.write('Move: down');

  }else if (data === 'd') {
    connection.write('Move: right');
  }else if (data === 'q') {
    connection.write('Say: qwertyuiopasdfghjk');
  }
  else if (data === 'e') {
    connection.write('Say: Eat my tail!');
  }else if (data === 'r') {
    connection.write('Say: Better than Vancouver');
  }

}

module.exports = {
  setupInput
};