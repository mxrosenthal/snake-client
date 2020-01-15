const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

//connection object is being generated
let conn = connect();

//connection object gets passed along to the setupInput function
setupInput(conn);

// module.exports = connect();