const canvas=document.querySelector('#myCanvas');
const rtx = canvas.getContext('2d');
const player = 
{
    x     : 50,
    y     : 50,
    speed : 5
};
const keyz = {
    ArrowRight:false,
    ArrowLeft:false,
    ArrowUp:false,
    ArrowDown:false};
draw();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
 
function keyDown(event){
  keyz[event.code] = true;
  console.log(keyz);
  move();
}
function keyUp(event){
  keyz[event.code] = false;
  console.log(keyz);
}
 
function move(){
  if(keyz.ArrowRight){player.x+=player.speed;}else if(keyz.ArrowLeft){player.x-=player.speed;};
  if(keyz.ArrowUp){player.y-=player.speed;}else if(keyz.ArrowDown){player.y+=player.speed;};
  draw();
}

function draw(){
    rtx.clearRect(0,0,canvas.width,canvas.height);
    let output = `Pos X ${player.x} Y ${player.y}`;
    rtx.fillStyle = '#ffffff';
    rtx.fillRect(player.x, player.y, 100, 100);
    rtx.font = '24px serif';
    rtx.textAlign = 'center';
    rtx.fillStyle = 'red';
    rtx.fillText(output, 300, 30);
}
