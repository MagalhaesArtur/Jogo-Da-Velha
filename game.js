let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let poss = ["o", "x"];
let gameOver = false;

function handleMove(position) {
  if (gameOver) {
    return;
  }
  if (board[position] === "") {
    board[position] = poss[playerTime];

    gameOver = isWin();
    if (gameOver == false) {
      if (playerTime === 0) {
        playerTime = 1;
      } else {
        playerTime = 0;
      }
    }
  }
  return gameOver;
}

function isWin() {
  winPoss = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winPoss.length; i++) {
    let seq = winPoss[i];
    if (
      board[seq[0]] == board[seq[1]] &&
      board[seq[0]] == board[seq[2]] &&
      board[seq[0]] != ""
    ) {
      return true;
    }
  }
  return false;
}
