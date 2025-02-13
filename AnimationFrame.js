const canvas = document.querySelector('#myCanvas');
const rtx = canvas.getContext('2d');
const player1 = {
  x: 50
  , y: 50
  , speed: 5, width: 15, height: 100
};
const player2 = {
  x: 550
  , y: 50
  , speed: 5, width: 15, height: 100
};
const keyz1 = { ArrowRight: false, ArrowLeft: false, ArrowUp: false, ArrowDown: false };
const keyz2 = { KeyA: false, KeyD: false, KeyW: false, KeyS: false };
requestAnimationFrame(draw);

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(event) {
  if (event.code in keyz1) { keyz1[event.code] = true; }
  if (event.code in keyz2) { keyz2[event.code] = true; }
}
function keyUp(event) {
  if (event.code in keyz1) { keyz1[event.code] = false; }
  if (event.code in keyz2) { keyz2[event.code] = false; }
}

function move() {
  if (keyz1.ArrowRight) { player1.x += player1.speed; } else if (keyz1.ArrowLeft) { player1.x -= player1.speed; };
  if (keyz1.ArrowUp) { player1.y -= player1.speed; } else if (keyz1.ArrowDown) { player1.y += player1.speed; };
  if (keyz2.KeyD) { player2.x += player2.speed; } else if (keyz2.KeyA) { player2.x -= player2.speed; };
  if (keyz2.KeyW) { player2.y -= player2.speed; } else if (keyz2.KeyS) { player2.y += player2.speed; };
}

function draw() {
  rtx.clearRect(0, 0, canvas.width, canvas.height);
  move();

  rtx.fillStyle = 'blue';
  rtx.fillRect(player1.x, player1.y, player1.width, player1.height);
  rtx.fillStyle = 'red';
  rtx.fillRect(player2.x, player2.y, player2.width, player2.height);

  let output = `Player 1 X ${player1.x} Y ${player1.y} Player 2 X ${player2.x} Y ${player2.y}`;

  rtx.font = '12px serif';
  rtx.textAlign = 'center';
  rtx.fillStyle = 'red';
  rtx.fillText(output, 300, 30);
  requestAnimationFrame(draw);
}