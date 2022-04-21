// //dom elements

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body')
const dark = document.querySelector('.dark')
const burgerItems = document.querySelectorAll('.burger-nav-item')


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
  body.classList.add('hide-scroll')
  
  isMobileOpen = true;
  
}

function closeMobile(){
  mobileMenu.classList.remove('active')
  burger.classList.remove('opened')
  body.classList.remove('hide-scroll')
  dark.classList.remove('darkened')
  isMobileOpen = false;
}

const disableScroll = (body) => body.classList.add('hide-scroll')

// event listeners
burger.addEventListener('click', openOrCloseMobileMenu)
// burger.addEventListener('click', ()=> body.classList.add('hide-scroll'))
dark.addEventListener('click', (e)=> {
  if (e.target.classList.contains('darkened')){
    closeMobile();
  }
})


//body.addEventListener('click', (e)=> console.log(e.target))
//dark.classList.toggle('darkened')


const footerPuppy = document.querySelector('.footer-puppy')
footerPuppy.addEventListener('click', (e)=> e.target.classList.toggle('active'))

burgerItems.forEach( (item)=> item.addEventListener('click', (item)=>console.log('burger' + item) ))
burgerItems.forEach( (item)=> item.addEventListener('click', closeMobile ))







