const sideLeft = document.getElementById('left');
const sideRight = document.getElementById('right');

var dice = document.getElementById('dice');
var diceImg = document.getElementById('.diceImg ')
var newGame = document.getElementById('newGame');
var rollDice = document.getElementById('rollDice');
var hold = document.getElementById('hold');
var global1 = document.querySelector('.scoreGlobalOne');
var global2 = document.querySelector('.scoreGlobalTwo');
var round1 = document.querySelector('.scoreRound1');
var round2 = document.querySelector('.scoreRound2');

var playerActive = 'pl1';
var round = '';
var global = '';




function getRandomDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changePlayer() {

    playerActive === 'pl1' ? playerActive = 'pl2' : playerActive = 'pl1';

    round = 0;
    round1.textContent = round;
    round2.textContent = round;
}



rollDice.addEventListener('click', () => {
    var result = getRandomDice(1, 6);
    document.getElementById('diceImg').src = "./img/dice" + result + ".svg";


    if ((result !== 1) && (playerActive === 'pl1')) {
        round += result;
        round1.textContent = round;




    } else if ((result !== 1) && (playerActive === 'pl2')) {
        round += result;
        round2.textContent = round;


    } else {

        changePlayer();

    }
})


hold.addEventListener('click', () => {

    if (playerActive === 'pl1') {
        global += round1;
        global1.textContent = global;
        changePlayer();

    } else {
        global += round2;
        global2.textContent = global;
        changePlayer();

    }


})

function init() {

    global = 0;
    round = 0;
    dice.style.display = none;



}
newGame.addEventListener('click', () => {



})

