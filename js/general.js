let walls = [];
let bombs = [];
let ennemies = [];

let keysDown = [];
let keyInterval;

document.addEventListener('keydown', function(event) {
  if(isInArray(event.code, keysDown)==-1) {
    keysDown.push(event.code);
  }
});

document.addEventListener('keyup', function(event) {
  keysDown.splice(keysDown.indexOf(event.code));
});

function isInArray(key, arr) {
  return arr.indexOf(key);
}

function readDownKeys() {
  console.log(keysDown);
}

function enableKeysTimer() {
  keyInterval = setInterval(function(){readDownKeys()}, 100);
}

function disableKeysTimer() {
  clearInterval(keyInterval);
}

enableKeysTimer();
