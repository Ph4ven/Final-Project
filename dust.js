var dust = ['40', '100', '400', '1600']
var db = firebase.database();
var c = document.getElementById('sketch');
var ctx = c.getContext('2d');
var mX;
var mY;
var p;

function saveDeck(){
  var deckName = document.getElementById('deckName').value;
  var com = document.getElementById('common').value;
  var rare = document.getElementById('rare').value;
  var epic = document.getElementById('epic').value;
  var leg = document.getElementById('legend').value;

  var dCom = com*dust[0];
  var dRare = rare*dust[1];
  var dEpic = epic*dust[2];
  var dLeg = leg*dust[3];
  var tDust = dCom+dRare+dEpic+dLeg

  var dustSaved= db.ref(deckName).set(tDust);
  document.getElementById('dD').innerHTML= 'Dust Needed: '+tDust;
}

document.addEventListener('mousedown', mousePress, false);
document.addEventListener('mouseup', mouseUnpress, false);
document.addEventListener('mousemove', mouseMovement, false);

function mouseLocation(e){
  mX = e.offsetX;
  mY = e.offsetY;
}

function mousePress(){
  p= 1;
}

function mouseUnpress(){
  p= 0;
}

function mouseMovement(e){
  mouseLocation(e);
  if (p==1){
    draw();
  }
}

function draw(){
  ctx.beginPath()
  ctx.arc(mX, mY, 3, 0, Math.PI*2);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

function clearSketch(){
ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
}

function indvDust(){
  var d= 0;
  while(d<4){
    window.alert(dust[d])
    d++
  }
};
