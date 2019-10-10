document.body.style.background = 'black';

function showBeforeGameModal() {
  let modal = document.getElementById('beforeGameModal');
  modal.style.display = "block";
}

function hideBeforeGameModal() {
  let modal = document.getElementById('beforeGameModal');
  modal.style.display = "none";
}

let terrain = new Terrain(17,11,32);
terrain.build_static_elems();
terrain.build_dynamic_elems();
