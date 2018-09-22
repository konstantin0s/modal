//get modal element
var modal = document.getElementById('simpleModal');
//get open modal modalButton
var modalButton = document.getElementById('modalButton');
//get close buttion
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for Click
modalButton.addEventListener('click', openModal);

//listen for close Click
closeBtn.addEventListener('click', closeModal);

//listen for outside Click
window.addEventListener('click', clickOutside);

//function to open modal
function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
