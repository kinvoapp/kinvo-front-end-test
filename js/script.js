const openDrop = document.querySelector('.dropdown-content')
const drop = document.querySelector('.nodrop-content')

function openDropdown(){
  openDrop.classList.toggle('active')
  drop.classList.toggle('selected')
}