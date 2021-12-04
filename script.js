'use strict';

let secretNumber;
const secretNum = function () {
  return (secretNumber = Math.trunc(Math.random() * 20) + 1);
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreFunction = function (sc) {
  document.querySelector('.score').textContent = sc;
};

const numbserOnBox = function (nb) {
  document.querySelector('.number').textContent = nb;
};

const backgroundColor = function (bg) {
  document.querySelector('body').style.backgroundColor = bg;
};

const boxWidth = function (bw) {
  document.querySelector('.number').style.width = bw;
};

secretNum();
// document.querySelector('.number').textContent = secretNumber; // Done to just see what is the secret number.
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage(' ⛔ No Number! ');
  } else if (guess === secretNumber) {
    displayMessage(
      'You are a Genuis! You are boon to the humanity! Your guess is absolutely correct! Congratulations! 🎉 🎊✨'
    );

    numbserOnBox(secretNumber);

    backgroundColor('#60b347');

    boxWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber
      //       ? 'Your guess is High! 📈'
      //       : 'Your guess is Low! 📉';
      displayMessage(
        guess > secretNumber
          ? 'Your guess is High! 📈'
          : 'Your guess is Low! 📉'
      );
      score--;
      scoreFunction(score);
    } else {
      displayMessage('💥 You Lost the GAME!');
      scoreFunction(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreFunction(score);
  secretNum();
  displayMessage('Start guessing...');
  numbserOnBox('?');
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  boxWidth('15rem');

  //   document.querySelector('.number').textContent = secretNumber;
});
