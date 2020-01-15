let IP = '10.0.13.4';
let PORT = 50541;

let dir = {
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  w: 'Move: up'
}

let phrases = {
  q: 'Say: wowzers',
  e: 'Say: not this time',
  r: 'Say: KILL IT!'
}

module.exports = {
  IP,
  PORT,
  phrases,
  dir
}