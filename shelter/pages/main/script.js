// //dom elements

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body')
const dark = document.querySelector('.dark')

// flags
let isMobileOpen = false;


//functions
function openOrCloseMobileMenu(){
  dark.classList.toggle('darkened')
  if (isMobileOpen) {closeMobile()}
  else {openMobile()}
  
}


function openMobile(){
  mobileMenu.classList.add('active')
  burger.classList.add('opened')
  isMobileOpen = true;
  
}

function closeMobile(){
  mobileMenu.classList.remove('active')
  burger.classList.remove('opened')
  isMobileOpen = false;
}


// event listeners
burger.addEventListener('click', openOrCloseMobileMenu)

body.addEventListener('click', (e)=> console.log(e.target))
//dark.classList.toggle('darkened')


const footerPuppy = document.querySelector('.footer-puppy')
footerPuppy.addEventListener('click', (e)=> e.target.classList.toggle('active'))






