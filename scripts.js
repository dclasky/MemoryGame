const cardArray = [
    {
        name: 'fries',
        img: 'Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png',
    },
    {
        name: 'fries',
        img: 'Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random());

const board = document.getElementById('board');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsSolved = [];

function placeCards() {
    for (i = 0; i < 12; i++) {
        const newCard = document.createElement('img');
        newCard.setAttribute('src', 'Images/blank.png');
        newCard.classList.add("cardstyle");
        newCard.setAttribute('data-id', i);
        newCard.addEventListener('click', choose);
        board.appendChild(newCard);
    }
}

placeCards()

function choose() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length == 2) {
        setTimeout(compare, 500);
    }

}

function compare() {
    let cardduo = document.querySelectorAll('img');
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("that's a match!");
        cardduo[cardsChosenIds[0]].setAttribute('src', 'Images/white.png')
        cardduo[cardsChosenIds[1]].setAttribute('src', 'Images/white.png')
        cardsSolved.push(cardsChosenIds[0]);
        cardsSolved.push(cardsChosenIds[1]);
    }
    else {
        alert("try again!");
        cardduo[cardsChosenIds[0]].setAttribute('src', 'Images/blank.png')
        cardduo[cardsChosenIds[1]].setAttribute('src', 'Images/blank.png')
    }

    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsSolved.length == cardArray.length) {
        alert("You Won!")
    }
}