const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
const btn = document.createElement('button');
const div = document.createElement('div');
btn.textContent = "Game Reset";
btn.addEventListener('click', () => {
  //reset game
  player1.score = 0;
  player2.score = 0;
  ballReset();
  player1.x = 50;
  player2.x = canvas.width - (50 + player2.width);
  player1.y = canvas.height / 2 - player1.height / 2;
  player2.y = canvas.height / 2 - player2.height / 2;
})
document.body.prepend(div);
div.append(btn);

let speed = 5;

const player1 = {
  x: 50
  , y: 50
  , speed: 10
  , width: 35
  , height: 100, score: 0
};
const player2 = {
  x: 550
  , y: 50
  , speed: 10
  , width: 35
  , height: 100, score: 0
};
const ball = {
  x: canvas.width / 2
  , y: canvas.height / 2
  , width: 10
  , height: 10
  , xs: speed
  , ys: -speed
}
const keyz1 = {
  ArrowRight: false
  , ArrowLeft: false
  , ArrowUp: false
  , ArrowDown: false
};
const keyz2 = {
  KeyA: false
  , KeyD: false //keyS
  , KeyW: false
  , KeyS: false //keyX
};
requestAnimationFrame(draw);
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(event) {
  if (event.code in keyz1) {
    keyz1[event.code] = true;
  }
  if (event.code in keyz2) {
    keyz2[event.code] = true;
  }
}

function keyUp(event) {
  if (event.code in keyz1) {
    keyz1[event.code] = false;
  }
  if (event.code in keyz2) {
    keyz2[event.code] = false;
  }
}
function ballReset() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.xs = speed;
  ball.ys = -speed;
}
function move() {
  if (keyz1.ArrowRight && player1.x < (canvas.width / 2 - player1.width)) {
    player1.x += player1.speed;
  }
  else if (keyz1.ArrowLeft && player1.x > 0) {
    player1.x -= player1.speed;
  };
  if (keyz1.ArrowUp) {
    player1.y -= player1.speed;
  }
  else if (keyz1.ArrowDown) {
    player1.y += player1.speed;
  };
  if (keyz2.KeyD && player2.x < (canvas.width - player2.width)) { //keyS
    player2.x += player2.speed;
  }
  else if (keyz2.KeyA && player2.x > (canvas.width / 2 - player2.width)) {
    player2.x -= player2.speed;
  };
  if (keyz2.KeyW) {
    player2.y -= player2.speed;
  }
  else if (keyz2.KeyS) { //keyX
    player2.y += player2.speed;
  };
  ball.x += ball.xs;
  ball.y += ball.ys;
  if (ball.x < 0) {
    player2.score++;
    ballReset();
  }
  if (ball.x > canvas.width) {
    player1.score++;
    ballReset();
  }

  /*  if ((ball.x < 0 || ball.x > canvas.width)) {
      ball.xs *= -1;
    }*/
  if ((ball.y < 0 || ball.y > canvas.height)) {
    ball.ys *= -1;
  }
  if (checkCol(ball, player1)) {
    ball.xs *= -1;
    let temp = ((player1.y + player1.height) / 2);
    let temp1 = ((ball.y + ball.height) / 2);
    if (temp < temp1) {
      ball.ys = speed;
    }
    else {
      ball.ys = -speed;
    }
  }
  if (checkCol(ball, player2)) {
    ball.xs *= -1;
    let temp = ((player2.y + player2.height) / 2);
    let temp1 = ((ball.y + ball.height) / 2);
    if (temp < temp1) {
      ball.ys = speed;
    }
    else {
      ball.ys = -speed;
    }
  }
}

function checkCol(ob1, ob2) {
  /*  if(ob1.x<ob2.x+ob2.width && ob1.x + ob1.width > ob2.x){
      console.log('X hit');
    }
    if(ob1.y<ob2.y+ob2.height && ob1.y + ob1.height > ob2.y){
      console.log('Y hit');
    }*/
  let val = ob1.x < ob2.x + ob2.width && ob1.x + ob1.width > ob2.x && ob1.y < ob2.y + ob2.height && ob1.y + ob1.height > ob2.y;
  if (val) {
    console.log(val);
  }
  return val;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  move();
  checkCol(player1, player2);
  ctx.fillStyle = 'blue';
  ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
  ctx.fillStyle = 'red';
  ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
  ctx.fillStyle = 'white';
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
  //let output = `Player 1 X ${player1.x} Y ${player1.y} Player 2 X ${player2.x} Y ${player2.y}`;
  let output = `Player1 : ${player1.score} vs Player2 :${player2.score}`;
  ctx.font = '24px arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.fillText(output, 300, 30);
  requestAnimationFrame(draw);
}