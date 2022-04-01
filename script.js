'use strict';

//const MyMathGame = function (num) {
//return (num * num) / num + num - num;
//};
//const userInput = Number(document.querySelector(".answer").textContent);
//console.log(typeof userInput);
//const displayMessage = function (message) {
// document.querrySelector('.message').textContent = message;
//};

document.querySelector('.submit').addEventListener('click', function () {
  const userInput = Number(document.querySelector('.answer').value);
  console.log(userInput);
  const mathGame = num => (num * num) / num + num - num;
  const cal = mathGame(4);

  //document.querySelector('.question').textContent = mathGame(userInput);
  if (!userInput) {
    document.querySelector('.message').textContent = 'No Input⛔';
    //displayMessage('No Input⛔');
  } else if (userInput === cal) {
    document.querySelector('.message').textContent = 'CORRECT🤩';
    //displayMessage('CORRECT🤩');
    document.querySelector('.question').textContent = cal;
    document.querySelector('.score').textContent = '100%';
    document.querySelector('body').style.backgroundColor = 'rgb(141, 140, 140)';
  } else if (userInput !== cal) {
    document.querySelector('.message').textContent = 'WRONG🛑🛑';
    //displayMessage('WRONG🛑🛑');
    document.querySelector('.score').textContent = '0💔';
  } else {
    document.querySelector('.message').textContent = 'incorrect input🚫';
   // displayMessage('incorrect input🚫');
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'start💡';
  //displayMessage('start💡');
  document.querySelector('.question').textContent = '?';
  document.querySelector('.answer').value = '';
  document.querySelector('.score').textContent = 'score';
   document.querySelector('.score').textContent = '💯:score';
  document.querySelector('body').style.backgroundColor =
    'rgba(163, 214, 44, 0.774)';
});
