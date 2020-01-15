const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.13.4',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('You are connected!');
  });
  conn.on('connect', () => {
    conn.write('Name: MAX');
  });
  
  return conn;
}

module.exports = {
  connect
};