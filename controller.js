document.addEventListener("DOMContentLoaded", function () {
  let squares = document.querySelectorAll(".square");

  for (let square of squares) {
    square.addEventListener("click", handleClick);
  }
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  handleMove(position);
  updateSquares();
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");

  for (let square of squares) {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  }
}
