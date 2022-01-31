class btns {
  constructor(text, callback) {
    const $body = document.querySelector(".optionsContainer");
    const $button = document.createElement("button");
    $button.textContent = text;

    callback($button);

    $body.insertAdjacentElement("beforeend", $button);

    return $button;
  }
}

let msg = document.querySelector(".msg");
document.addEventListener("DOMContentLoaded", function () {
  let squares = document.querySelectorAll(".square");

  for (let square of squares) {
    square.addEventListener("click", handleClick);
  }
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(function () {
      msg.innerText = `O vencedor foi o jogador ${playerTime + 1}!`;
    }, 200);
  }
  updateSquares();
}
const createBtns = new btns("Restart", function (button) {
  button.style.cssText = `
        margin:auto;
        border: #111 solid 2px;
        padding: 20px;
        font-size:20px;`;
  button.addEventListener("mouseenter", style);
  button.addEventListener("mouseleave", style1);
  button.addEventListener("click", restart);
  function restart() {
    document.location.reload();
  }
  function style() {
    button.style.cssText = `
    margin:auto;
          font-size:20px;
              background-color: #111;
            color: #eee;
            border: 2px #eee solid;
            cursor: pointer;
            padding: 20px;`;
  }
  function style1() {
    button.style.cssText = `
    margin:auto;
            border: #111 solid 2px;
            padding: 20px;
            font-size:20px;`;
  }
});

msg.innerText = `Vez do jogador ${playerTime + 1}!`;

function updateSquares() {
  msg.innerText = `Vez do jogador ${playerTime + 1}!`;
  let squares = document.querySelectorAll(".square");

  for (let square of squares) {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  }
}
