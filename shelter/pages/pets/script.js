const petsJson = [
  {
    "id":1,
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id":2,
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id":3,
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "id":4,
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id":5,
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id":6,
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "id":7,
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id":8,
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

// //dom elements

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body')
const dark = document.querySelector('.dark')
const burgerItems = document.querySelectorAll('.burger-nav-item')


// flags
let isMobileOpen = false;

//functions for burger
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


// end burger ============================================

// start pagination =======================================
const firstPageBtn = document.querySelector('#first-page-btn')
const prevPageBtn = document.querySelector('#prev-page-btn')
const currentPageBtn = document.querySelector('#current-page-btn')
const nextPageBtn = document.querySelector('#next-page-btn')
const lastPageBtn = document.querySelector('#last-page-btn')
let allCards = document.querySelectorAll('.card')
const cardsContainer = document.querySelector('.cards-container')



const shuffleArray = (unshuffled) => {
  let shuffled = unshuffled
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  return shuffled;
}


const countVisibleCards = (cards) => {
  let numberOfVisibleCards = 0;
  for(let card of cards) {
    if (getComputedStyle(card).display !== 'none') {
      numberOfVisibleCards++;
    }
  }
  return numberOfVisibleCards;
}

const makeArrayOf48Pets = (petsJson, visibleCardsCount) => {
  let result = [];
  if(visibleCardsCount === 8) {
    for(let i = 0; i < 6; i++) {
      result.push(...shuffleArray(petsJson))
    }
  } else {
    const shuffledArray = shuffleArray(petsJson);
    result = [].concat(...Array(6).fill(shuffledArray))
  }
  return result;
}

const populateContainerOnPagePets = (container, arrayOf48Pets) => {
  container.innerHTML = '';
  for(let i = 0; i < visibleCardsCount; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="pet-img"><img src="${arrayOf48Pets[currentPetArrayStartIndex]['img']}" alt="pet photo"></div>
    <p class="pet-name">${arrayOf48Pets[currentPetArrayStartIndex]['name']}</p>
    <button class="button button-secondary">Learn more</button>`
    container.append(card)
    currentPetArrayStartIndex++;
  }
}

const makeBtnsAvailable = (btnOne, btnTwo) => {
  btnOne.classList.remove('inactive');
  btnOne.classList.add('available');
  btnTwo.classList.remove('inactive');
  btnTwo.classList.add('available');
}

const makeBtnsInactive = (btnOne, btnTwo) => {
  btnOne.classList.add('inactive');
  btnOne.classList.remove('available');
  btnTwo.classList.add('inactive');
  btnTwo.classList.remove('available');
}

const clickNextPageBtn = () => {
  if(!(nextPageBtn.classList.contains('inactive'))){
    populateContainerOnPagePets(cardsContainer, arrayOf48Pets);
    currentPageBtn.innerHTML = currentPetArrayStartIndex / visibleCardsCount;
    makeBtnsAvailable(prevPageBtn, firstPageBtn)

    if (currentPetArrayStartIndex === arrayOf48Pets.length) {
      makeBtnsInactive(nextPageBtn, lastPageBtn);
    } 
  }
}

const clickLastPageBtn = () =>{
  if(!(lastPageBtn.classList.contains('inactive'))){
    currentPetArrayStartIndex = arrayOf48Pets.length - visibleCardsCount;
    populateContainerOnPagePets(cardsContainer, arrayOf48Pets);
    currentPageBtn.innerHTML = currentPetArrayStartIndex / visibleCardsCount;
    makeBtnsAvailable(prevPageBtn, firstPageBtn);
    makeBtnsInactive(nextPageBtn, lastPageBtn);
  }
}

const clickPrevPageBtn = () => {
  if(!(prevPageBtn.classList.contains('inactive'))) {
    currentPetArrayStartIndex -= 2 * visibleCardsCount;
    populateContainerOnPagePets(cardsContainer, arrayOf48Pets)
    currentPageBtn.innerHTML = +currentPageBtn.innerHTML - 1;
    makeBtnsAvailable(nextPageBtn, lastPageBtn)  
    console.log(currentPetArrayStartIndex)  
  }
  if (currentPageBtn.innerHTML == '1') {
    makeBtnsInactive(prevPageBtn, firstPageBtn);
  }
}

const clickFirstPageBtn = () => {
  if(!(firstPageBtn.classList.contains('inactive'))) {
    currentPetArrayStartIndex = 0;
    populateContainerOnPagePets(cardsContainer, arrayOf48Pets)
    currentPageBtn.innerHTML = 1;
    makeBtnsAvailable(nextPageBtn, lastPageBtn);
    makeBtnsInactive(firstPageBtn, prevPageBtn);
  }
}



const cardNumberOnPage = () => {
  if (window.innerWidth < 768) {
    return 3;
  } else if (window.innerWidth < 1280) {
    return 6;
  } else {return 8}
}

let visibleCardsCount = cardNumberOnPage()
let currentPage = +currentPageBtn.innerHTML;
let currentPetArrayStartIndex = 0;

// window.addEventListener('load', onWindowLoad)

let arrayOf48Pets = makeArrayOf48Pets(petsJson, visibleCardsCount);
populateContainerOnPagePets(cardsContainer, arrayOf48Pets)

nextPageBtn.addEventListener('click', clickNextPageBtn);
lastPageBtn.addEventListener('click', clickLastPageBtn);
prevPageBtn.addEventListener('click', clickPrevPageBtn);
firstPageBtn.addEventListener('click', clickFirstPageBtn);

console.log(arrayOf48Pets)

//================= popup =================================
// let allCards = document.querySelectorAll('.card')
const popupContainer = document.querySelector('.popup-container')
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup-btn')
const alsoCloses = document.querySelector('.also-closes')


const openPopup = (e) => {
  let petCard = e.currentTarget;
  popupContainer.classList.add('flex-open')
  body.classList.add('hide-scroll')
  const petName = petCard.childNodes[2].innerHTML;
  let currentPet;
  petsJson.forEach( pet => {
    if (pet.name === petName) {
      currentPet = pet;
    }
  })
  // console.log(currentPet)
  let petImg = popup.querySelector('.popup-pet-img');
  // console.log(petImg)
  petImg.src = currentPet['img'];
  for (let i of popup.querySelectorAll('[data-pet]')) {
    let field = i.getAttribute('data-pet')
    i.innerHTML = currentPet[field]
  }
}

const closePopup = (e) => {
  if (e.target === popupContainer || e.target === popupBtn || e.target === alsoCloses) {
    popupContainer.classList.remove('flex-open')
    body.classList.remove('hide-scroll')
  }
}

const makeBtnActive = (e) => {
  console.log(e.target)
  if (e.target === popupContainer || e.target === popupBtn) {
    popupBtn.classList.add('btn-active')
  } else {
    popupBtn.classList.remove('btn-active')
  }
}
allCards = document.querySelectorAll('.card')

allCards.forEach( card => card.addEventListener('click', ()=> console.log('card clicked')))
// body.addEventListener('click', (e)=> console.log(e.target))

popupContainer.addEventListener('mouseover', makeBtnActive)
popupContainer.addEventListener('click', closePopup)
body.addEventListener('click', (e)=> console.log(e.target))
// carousel.addEventListener('animationend', ()=> {allCards = document.querySelectorAll('.card')})
allCards.forEach( card => card.addEventListener('click', openPopup))


const paginationBtns = document.querySelectorAll('.button-pagignator')
paginationBtns.forEach(btn => btn.addEventListener('click', ()=> {
  allCards = document.querySelectorAll('.card');
  allCards.forEach( card => card.addEventListener('click', openPopup))
}))
