const button = Array.from(document.querySelectorAll('.button'));
const gameAnnouncer = document.getElementById('announcer');
const resetBtn = document.getElementById('reset');
const letterColor = document.getElementById('letter-color');

let num = 0;
var oWon = false;
var xWon = false;

/*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function potato() {
  for (let i = 0; i < 9; i++) {
    // console.log(i);
    let counterX = 0;
    let counterO = 0;

    for (let o = 0; o <= 2; o++) {
      var boxLoc = winningConditions[i][o];
      // console.log(boxLoc);

      if (button[boxLoc].innerHTML === 'X') {
        counterX++;

        if (counterX === 3) {
          xWon = true;
          console.log('X wonB');
          break;
        }
      }
      if (button[boxLoc].innerHTML === 'O') {
        counterO++;

        if (counterO === 3) {
          oWon = true;
        }
      }
    }

    if (xWon) {
      console.log('X won');
      gameAnnouncer.innerHTML =
        'Player <span style = " color: #ff160e ">X</span> won';

      break;
    }

    if (oWon) {
      console.log('X won');
      gameAnnouncer.innerHTML =
        'Player <span style = " color: #31fafa ">O</span> won';
      break;
    }
  }
}

for (let index = 0; index < button.length; index++) {
  button[index].addEventListener('click', function () {
    if (xWon) {
      return;
    }

    if (oWon) {
      return;
    }

    if (this.innerHTML === '') {
      num++;
      // console.log(button.indexOf(this));
      if (num === 1 || num === 3 || num === 5 || num === 7 || num === 9) {
        button[index].innerHTML = 'X';
        button[index].style.color = '#ff160e';
        button[index].style.textShadow = '#ff160e 0px 0px 15px';
        var click = new Audio('/projects/tic-tac-toe/sounds/red.mp3');
        click.play();
        potato();
      }

      if (num === 2 || num === 4 || num === 6 || num === 8) {
        // console.log('even num');
        button[index].innerHTML = 'O';
        button[index].style.color = '#31fafa';
        button[index].style.textShadow = '#31fafa 0px 0px 15px';
        var click = new Audio('/projects/tic-tac-toe/sounds/blue.mp3');
        click.play();
        potato();
      }
    }
  });
}

function resetGame(item, index, arr) {
  item.innerHTML = '';
  num = 0;
  gameAnnouncer.innerHTML = 'Game is on';
  xWon = false;
  oWon = false;
}

resetBtn.addEventListener('click', function () {
  button.forEach(resetGame);
  var click = new Audio('/projects/tic-tac-toe/sounds/click.mp3');
  click.play();
});
