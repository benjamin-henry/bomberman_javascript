let walls = [];
let walls_counter = 0;
let destrucWalls = [];
let destructWalls_counter = 0;
let bombs = [];
let ennemies = [];
let players = [];

let keysDown = [];
let keyInterval;

let fps = 50;
let moveSpeed = .25;

let explosion_counter = 0;
let explosions = [];

let commands = new Array();
commands.push(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space']);
commands.push(['Numpad8', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad0']);

document.addEventListener('keydown', function(event) {
  if (isInArray(event.code, keysDown) == -1) {
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
  for (let player = 0; player < players.length; player++) {
    if (isInArray(commands[player][0], keysDown) > -1) {
      players[player].moveUp();
    }
    if (isInArray(commands[player][1], keysDown) > -1) {
      players[player].moveLeft();
    }
    if (isInArray(commands[player][2], keysDown) > -1) {
      players[player].moveDown();
    }
    if (isInArray(commands[player][3], keysDown) > -1) {
      players[player].moveRight();
    }
    if (isInArray(commands[player][4], keysDown) > -1) {
      players[player].dropBomb();
    }
  }
}

function enableKeysTimer() {
  keyInterval = setInterval(function() {
    if(players.length==0) {
      disableKeysTimer();
    } else {
      readDownKeys();
      update();
    }
  }, 1000 / fps);
}

function disableKeysTimer() {
  clearInterval(keyInterval);
}

var modal_btn = document.getElementById('landingModalBtn');
modal_btn.onclick = function() {
  var check1 = document.getElementById('enablePLayer1').checked;
  var check2 = document.getElementById('enablePLayer2').checked;
  var player_1_name = document.getElementById('player_1_name').value;
  var player_2_name = document.getElementById('player_2_name').value;

  if (check1) {
    players.push(new Player(player_1_name));
    players[0].spawn([0, 0]);
  }
  if (check2) {
    players.push(new Player(player_2_name));
    players[1].spawn([16, 10]);
  }
  // terrain.build_dynamic_elems();
  enableKeysTimer();
  document.getElementById('myModal').style.display = 'none';
}

function update() {
  updatePlayersPosition();
}

function updatePlayersPosition() {
  for (let player = 0; player < players.length; player++) {
    let p = document.getElementById(players[player].get_id());
    let coords = players[player].getCoords();
    p.style.left = new String(coords[0] * terrain.tile_size) + "px";
    p.style.top = new String(coords[1] * terrain.tile_size) + "px";
  }
}
