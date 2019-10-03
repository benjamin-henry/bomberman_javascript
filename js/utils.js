function random_position() {
  var x = Math.floor(Math.random()*64);
  var y = Math.floor(Math.random()*64);
  console.log(x,y);
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
