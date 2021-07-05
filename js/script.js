const openDrop = document.querySelector('.dropdown-content')
const drop = document.querySelector('.nodrop-content')
const itemSelect = document.querySelector('li.dropdown .dropdown-content li:last-child')

function openDropdown(){
  openDrop.classList.toggle('active')
  drop.classList.toggle('selected')
}

function showContent(){
  itemSelect.classList.add('selected')
}




