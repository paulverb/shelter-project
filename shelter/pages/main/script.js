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

//=============== start carousel ===============================================


const carousel = document.querySelector('.carousel');
const card = document.querySelector('.card')
const cards = document.querySelectorAll('.card')

const cardContainer = document.querySelector('.card-container')
const btnLeft = document.querySelector('.arrow-left')
const btnRight = document.querySelector('.arrow-right')
const btnLeftForSmallScreen = document.querySelector('.for-small-screen-btn.arrow-left')
const btnRightForSmallScreen = document.querySelector('.for-small-screen-btn.arrow-right')

let leftCardContainer = cardContainer.cloneNode(true)
// leftCardContainer.classList.add('left-card-container')
let rightCardContainer = cardContainer.cloneNode(true)
// rightCardContainer.classList.add('right-card-container')
// console.log(cardContainer)
carousel.prepend(leftCardContainer)
carousel.append(rightCardContainer)

const cardContainerOne = document.querySelectorAll('.card-container')[0]
const cardContainerTwo = document.querySelectorAll('.card-container')[1]
const cardContainerThree = document.querySelectorAll('.card-container')[2]



const countVisibleCards = () => {
          let numberOfVisibleCards = 0;
          for(let card of cards) {
            if (getComputedStyle(card).display !== 'none') {
              numberOfVisibleCards++;
            }
          }
          return numberOfVisibleCards;
        }




// choose 3 random items from petsJson -> current cards
// choose 3 random items from array which has all pets except for the ones in current cards -> next cards
// return object with current and next cards

const chooseNRandom = (arrToChooseFrom, n, arrWithNotAvailable = []) => {
  let result = [];
  let chosenIndexes = [];
  let chosenObjects = [];

  arrWithNotAvailable.forEach(pet=> chosenIndexes.push(pet.id))
  while(result.length < n) {
    let randomChoise = arrToChooseFrom[ Math.floor(Math.random() * arrToChooseFrom.length) ]

    if (!(chosenIndexes.includes(randomChoise.id) )) {
      result.push(randomChoise)
      chosenIndexes.push(randomChoise.id)
      chosenObjects.push(randomChoise)
    }
  }
  return result;
}





const makeInnerHtmlForCards = (chosenPets, cardContainer) => {
  let card = document.createElement("div");
  card.classList.add("card");
  for(let i = 0; i < chosenPets.length; i++) {
    cards.innerHTML = `<div class="pet-img"><img src="${chosenPets[i]['img']}" alt="pet photo"></div>
           <p class="pet-name">${chosenPets[i]['name']}</p>
           <button class="button button-secondary">Learn more</button>`
    cardContainer.append(card);
  }
  return cardContainer;
}

const makeInnerHtmlOfContainer = (chosenPets) => {
  let result = '';
  for (let i = 0; i < 3; i++) {
    result += `<div class="pet-img"><img src="${chosenPets[i]['img']}" alt="pet photo"></div>
    <p class="pet-name">${chosenPets[i]['name']}</p>
    <button class="button button-secondary">Learn more</button>`
  }  
  return result;
}

const activeCardContainerOuterHtml = () => {

}

const numberOfVisibleCards = countVisibleCards();
// chooseThreeRandom(petsJson)
// let shownPets = chooseNRandom(petsJson, numberOfVisibleCards);
// let nextPets = chooseNRandom(petsJson, numberOfVisibleCards, shownPets)
// console.log(chosenPets)
// makeInnerHtmlForCards(chosenPets)


// cardContainer.innerHTML = ''

const createCardTemplate = () => {
  const card = document.createElement("div");
  card.classList.add("card")
  return card;
}

const moveLeft = () => {
  console.log('left button clicked');
  carousel.classList.add('transition-left');
  btnLeft.removeEventListener('click', moveLeft);
  btnRight.removeEventListener('click', moveRight);
}

const moveRight = () => {
  console.log('right button clicked');
  carousel.classList.add('transition-right');
  btnLeft.removeEventListener('click', moveLeft);
  btnRight.removeEventListener('click', moveRight);
}




// const card = createCardTemplate();
// cardContainer.innerHTML = ''
// cardContainer.append(card)

// card.outerHTML = `<div class="card">
//             <div class="pet-img"><img src="../../assets/images/pets-jennifer.png" alt="pet photo"></div>
//             <p class="pet-name">Jennifer</p>
//             <button class="button button-secondary">Learn more</button>
//           </div>`



let activePets = chooseNRandom(petsJson, 3)
let nextPets = chooseNRandom(petsJson, 3, activePets)


btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)
btnLeftForSmallScreen.addEventListener('click', moveLeft)
btnRightForSmallScreen.addEventListener('click', moveRight)

// cardContainerOne.innerHTML = makeInnerHtmlOfContainer(activePets)

const populateContainer = (container, chosenPets) => {
  container.innerHTML = '';
  for(let i = 0; i < chosenPets.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="pet-img"><img src="${chosenPets[i]['img']}" alt="pet photo"></div>
    <p class="pet-name">${chosenPets[i]['name']}</p>
    <button class="button button-secondary">Learn more</button>`
    container.append(card)
    console.log(container)
  }
}

const onAnimationEnd = () => {
  cardContainerTwo.innerHTML = cardContainerOne.innerHTML;
  activePets = nextPets;
  nextPets = chooseNRandom(petsJson, 3, activePets);
  populateContainer(cardContainerOne, nextPets);
  populateContainer(cardContainerThree, nextPets);
  carousel.classList.remove('transition-left');
  carousel.classList.remove('transition-right');
  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);
  // btnLeftForSmallScreen.addEventListener()
}

populateContainer(cardContainerTwo, activePets)
populateContainer(cardContainerOne, nextPets)
populateContainer(cardContainerThree, nextPets)


carousel.addEventListener('animationend', onAnimationEnd)