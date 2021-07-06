const openDrop = document.querySelector('.dropdown-content')
const drop = document.querySelector('.nodrop-content')
const itemSelect = document.querySelector('li.dropdown .dropdown-content li:last-child')
const menuMobile = document.querySelector('#menu-mobile')

function openDropdown(){
  openDrop.classList.toggle('active')
  drop.classList.toggle('selected')
}

function showContent(){
  itemSelect.classList.add('selected')
}

menuMobile.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('active')
})



