const sideLeft = document.getElementById('left');
const sideRight = document.getElementById('right');
const player1 = document.querySelector('.pl1');
const player2 = document.querySelector('.pl2');
const player1Select = document.querySelector('.player1Select');
const player2Select = document.querySelector('.player2Select');

var dice = document.getElementById('dice');
var diceImg = document.getElementById('.diceImg ');
var newGame = document.getElementById('newGame');
var rollDice = document.getElementById('rollDice');
var hold = document.getElementById('hold');
var global1 = document.querySelector('.scoreGlobalOne');
var global2 = document.querySelector('.scoreGlobalTwo');
var round1 = document.querySelector('.scoreRound1');
var round2 = document.querySelector('.scoreRound2');

var playerActive = 'pl1';
var round = 0;
var global = 0;
var score1 = 0;
var score2 = 0;

startNewGame();

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
    indicatePlayer();
}

// Display playerActive
function indicatePlayer() {
    if (playerActive === 'pl1') {
        player1Select.style.visibility = 'visible';
        player2Select.style.visibility = 'hidden';
        sideLeft.classList.add('active');
        player1.classList.add('active');
        sideRight.classList.remove('active');
        player2.classList.remove('active');
    } else {
        player2Select.style.visibility = 'visible';
        player1Select.style.visibility = 'hidden';
        sideRight.classList.add('active');
        player2.classList.add('active');
        sideLeft.classList.remove('active');
        player1.classList.remove('active');
    }
}

// PlayerActive roll the dice
// If playerActive get number one, then 'round' = 0 
// else playerActive add 'result' to 'round'
rollDice.addEventListener('click', () => {
    var result = getRandomDice(1, 6);
    document.getElementById('diceImg').src = "./img/dice" + result + ".svg";
    dice.style.display = 'block';

    if ((result !== 1) && (playerActive === 'pl1')) {
        round += result;
        round1.textContent = round;
        indicatePlayer();

    } else if ((result !== 1) && (playerActive === 'pl2')) {
        round += result;
        round2.textContent = round;
        indicatePlayer();

    } else {

        gameOver();
    }
})

// recover 'round' of the active player and display global score
hold.addEventListener('click', () => {


    if (playerActive === 'pl1') {
        score1 += round;
        global1.textContent = score1;
        gameOver();

    } else {
        score2 += round;
        global2.textContent = score2;
        gameOver();
    }
})

//   player choice who start the game
//  start or reset the game
function startNewGame() {

    var choicePlayer = getRandomDice(1, 2);
    playerActive = `pl${choicePlayer}`;
    global = 0;
    round = 0;
    score1 = 0;
    score2 = 0;
    global1.textContent = '';
    global2.textContent = '';
    round1.textContent = '';
    round2.textContent = '';
    dice.style.display = 'none';
    rollDice.style.display = 'block'
    hold.style.display = 'block'
    indicatePlayer();

}
newGame.addEventListener('click', () => {
    (startNewGame())
})

//  If playerActive has 100 points, playerActive win
// end of game
function gameOver() {
    if ((playerActive === 'pl1') && (score1 >= 100)) {

        global1.textContent = 'WIN'
        rollDice.style.display = 'none'
        hold.style.display = 'none'

    } else if ((playerActive === 'pl2') && (score2 >= 100)) {

        global2.textContent = 'WIN'
        rollDice.style.display = 'none'
        hold.style.display = 'none'

    } else {
        (changePlayer())
    }
}


