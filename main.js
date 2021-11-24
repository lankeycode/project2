const sideLeft = document.getElementById('left');
const sideRight = document.getElementById('right');

var dice = document.getElementById('dice');
var newGame = document.getElementById('newGame');
var rollDice = document.getElementById('rollDice');
var hold = document.getElementById('hold');
var global1 = document.querySelector('.scoreGlobal1');
var global2 = document.querySelector('.scoreGlobal2');
var round1 = document.querySelector('.scoreRound1');
var round2 = document.querySelector('.scoreRound2');

var player1 = 'active';
var round = 0;
var global = 0;

function getRandomDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



rollDice.addEventListener('click', () => {
    var result = getRandomDice(1, 6);
    dice.textContent = result;
    round += result;
    round1.textContent = round;







})

