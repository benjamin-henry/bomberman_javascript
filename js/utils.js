function random_position(max) {
  var x = Math.floor(Math.random()*max);
  var y = Math.floor(Math.random()*max);
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function detectCollision(pos_x1, pos_x2, pos_y1, pos_y2, w1, w2, h1, h2) {
  return (pos_x1 < pos_x2 + w2 &&
   pos_x1 + w1 > pos_x2 &&
   pos_y1 < pos_y2 + h2 &&
   h1 + pos_y1 > pos_y2);
}

function compareWalls(pos_x, pos_y, width, height, w) {
  if (w.length > 0 && w != null){
    for(let i = 0; i < w.length; i++) {
      if (detectCollision(pos_x, w[i].pos_x, pos_y, w[i].pos_y, width, w[i].width, height, w[i].height)) return i;
    }
  }
  return -1;
}

function getRandomBetween(min,max) {
  return Math.random() * (max - min) + min;
}
