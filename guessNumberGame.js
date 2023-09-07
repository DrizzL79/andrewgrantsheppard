let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const correct = document.querySelector('.correctAnswer');
var rebtn = document.getElementById('btun');
let guessCount = 1;
let resetButton;

function checkGuess() {
  
  const userGuess = Number(guessField.value);
  
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';
  
  if (userGuess === randomNumber) {
    lastResult.textContent = `Congratulations! ${randomNumber} is the right number!`;
    lastResult.style.color = 'white';
    lastResult.style.backgroundColor = 'blue';
    lastResult.style.width = '275px';
    lowOrHi.textContent = '';
    setGameOver();
  }

  else if (guessCount === 10) {
    lastResult.textContent = `THAT\'S 10 GUESSES! !!GAME OVER!!!`; 
    correct.textContent = `The Number Was ${randomNumber}`;
    lowOrHi.textContent = '';
    setGameOver();
  } 
  
  else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    lastResult.style.width = '150px';
  
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!' ;
    } 
  
    else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  rebtn.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}