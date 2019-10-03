document.body.style.background = 'black';


function beforeGameModal() {
  let modal = document.createElement('div');
  modal.id = "beforeGameModal";
  modal.className = "modal";
  let modal_content = document.createElement('div');
  modal_content.className='modal-content';
  modal_content.id='modal-content';
  let modal_body = document.createElement('div');
  modal_body.id = "modal-body";

  let modal_body_content = document.createElement('span');
  modal_body_content.textContent = 'test';

  modal_content.appendChild(modal_body_content);
  modal_content.appendChild(modal_body);
  modal.appendChild(modal_content);
  document.body.appendChild(modal);
}

function showBeforeGameModal() {
  let modal = document.getElementById('beforeGameModal');
  modal.style.display = "block";
}

function hideBeforeGameModal() {
  let modal = document.getElementById('beforeGameModal');
  modal.style.display = "none";
}

let terrain = new Terrain(17,11,32);
terrain.build_ground();


// beforeGameModal();
// showBeforeGameModal();
