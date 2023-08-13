let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector('.lastResult');
const StartOver = document.querySelector('.resultPara')
const loworHi = document.querySelector('.loworHi');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number");
    }
    else if (guess < 1) {
        alert("Please Enter a Number Greater than 1 ");
    }
    else if (guess > 100) {
        alert("Please Enter a Number Less than 100 ");
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Random number was${randomNumber}`);
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess() {
    if (guessSlot === randomNumber) {
        displayMessage(`You guessed it right : ${randomNumber}`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is toooo Low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is tooo High`)

    }
}

function displayGuess() {

}

function displayMessage() {

}

function endGame() {

}

function newGame() {

}