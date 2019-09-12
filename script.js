"use strict";

/*
var canvas = document.getElementById('mat');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var cxt = canvas.getContext('2d');

var sizeReference = window.innerWidth;

var paddleX1 = (sizeReference/15);
var paddleY1 = (canvas.height/2 - sizeReference/30);
var paddleX2 = (sizeReference - sizeReference/15 - sizeReference/45);
var paddleY2 = (canvas.height/2 - sizeReference/30);

var padSizeX1 = (sizeReference/45);
var padSizeY1 = (sizeReference/15);
var padSizeX2 = (sizeReference/45);
var padSizeY2 = (sizeReference/15);

var circX = canvas.width/2;
var circY = canvas.height/2;

var Rise;
var Run;
var Hyp = 8;

var angleFactor;

var circRad  = (sizeReference/91);

var padDown1 = false;
var padUp1   = false;

var padDown2 = false;
var padUp2   = false;

var ctrlSpeed = 10;

var scoreR = 0;
var scoreL = 0;

var serveDirR = ( Math.random()*2 >= 1 ? false : true );

var Serv = true;

	window.addEventListener("keyup", KeyUp, false);
	window.addEventListener("keydown", KeyDown, false);

function KeyDown(key){
	
	if(key.keyCode == '81'){
		
		padUp1   = true;
		padDown1 = false;
		
	}else if(key.keyCode == '83'){
		
		padDown1 = true;
		padUp1   = false;
		
	}else if(key.keyCode == '80'){
		
		padUp2 =   true;
		padDown2 = false;
		
	}else if(key.keyCode == '76'){
		
		padDown2 = true;
		padUp2 =   false;
		
	}
	
}

function KeyUp(key){
	
	if(key.keyCode == '80'){
		
		padUp2 = false;
		
	}else if(key.keyCode == '76'){
		
		padDown2 = false;
		
	}else if(key.keyCode == '81'){
		
		padUp1 = false;
		
	}else if(key.keyCode == '83'){
		
		padDown1 = false;
		
	}
	
}

function Animate(){
	
	requestAnimationFrame(Animate);
	
	draw();
	
	if(Serv){
		Start();
	}
	
	Ball();
	
	Paddle();

}

function Start(){
	
	//TODO: timer
	
	circX = canvas.width/2;
	circY = canvas.height/2;
	
	paddleX1 = (sizeReference/15);
	paddleY1 = (canvas.height/2 - sizeReference/30);
	paddleX2 = (sizeReference - sizeReference/15 - sizeReference/45);
	paddleY2 = (canvas.height/2 - sizeReference/30);
	
	if(serveDirR){
		
		Rise = 0
		Run  = Hyp;
		
	}else{
		
		Rise = 0
		Run  = -1*Hyp;
		
	}
	
	Serv = false;
	
}

function Ball(){
	
	if((circY - circRad) <= 0 || (circY + circRad) >= canvas.height){
		Rise = Rise*-1;
	}
	if((circX-circRad)<=(paddleX1+padSizeX1)&&(circX-circRad)>=(paddleX1+padSizeX1+Run-1)&&(circY)>=paddleY1&&(circY)<=(paddleY1+padSizeY1)){
		
		angleFactor = 2*(paddleY1 + padSizeY1/2 - circY)/padSizeY1;
		
		Rise = -1*Hyp*angleFactor;
		Run  = Math.sqrt(Hyp*Hyp + Rise*Rise);
		
	}
	if((circX+circRad)>=(paddleX2)&&(circX+circRad)<=(paddleX2+Run+1)&&(circY)>=paddleY2&&(circY)<=(paddleY2+padSizeY2)){
		
		angleFactor = 2*(paddleY2 + padSizeY2/2 - circY)/padSizeY2;
		
		Rise = -1*Hyp*angleFactor;
		Run  = -1*Math.sqrt(Hyp*Hyp + Rise*Rise);
		
	}
	
	if(circX <= (paddleX1+padSizeX1+Run-5)){
		
		serveDirR = false;
		Start();
		
	}if(circX >= (paddleX2-Run+5)){
		
		serveDirR = true;
		Start();
		
	}
	
	circX = circX + Run;
	circY = circY + Rise;
	
}

function draw(){
	
	cxt.clearRect(0, 0, canvas.width, canvas.height);
	
	cxt.fillStyle = "black";
		
	cxt.fillRect(paddleX1, paddleY1, padSizeX1, padSizeY1);
		
	cxt.fillRect(paddleX2, paddleY2, padSizeX2, padSizeY2);
	
	cxt.beginPath();
	cxt.arc(circX, circY, circRad, 0, Math.PI * 2, false);
	cxt.fillStyle = "red";
	cxt.fill();
	cxt.stroke();
		
}

function Paddle(){
	
	if(padDown1 == true && paddleY1 <= canvas.height - padSizeY1){
		
		paddleY1 = paddleY1 + ctrlSpeed;
		
	}
	if(padUp1 == true   && paddleY1 >= 0){
		
		paddleY1 = paddleY1 - ctrlSpeed;
		
	}
	if(padDown2 == true && paddleY2 <= canvas.height - padSizeY2){
		
		paddleY2 = paddleY2 + ctrlSpeed;
		
	}
	if(padUp2 == true   && paddleY2 >= 0){
	
		paddleY2 = paddleY2 - ctrlSpeed;
		
	}
	
}

Animate();

*/

function startGame(){

var canvas = document.getElementById('mat');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var cxt = canvas.getContext('2d');

var sizeReference = window.innerWidth;

var paddleX1 = (sizeReference/15);
var paddleY1 = (canvas.height/2 - sizeReference/30);
var paddleX2 = (sizeReference - sizeReference/15 - sizeReference/45);
var paddleY2 = (canvas.height/2 - sizeReference/30);

var padSizeX1 = (sizeReference/45);
var padSizeY1 = (sizeReference/15);
var padSizeX2 = (sizeReference/45);
var padSizeY2 = (sizeReference/15);

var circX = canvas.width/2;
var circY = canvas.height/2;

var Rise;
var Run;
var Hyp = 8;

var angleFactor;

var circRad  = (sizeReference/91);

var padDown1 = false;
var padUp1   = false;

var padDown2 = false;
var padUp2   = false;

var ctrlSpeed = 10;

var scoreR = 0;
var scoreL = 0;

var serveDirR = ( Math.random()*2 >= 1 ? false : true );

var Serv = true;

	window.addEventListener("keyup", KeyUp, false);
	window.addEventListener("keydown", KeyDown, false);
	
var scoreRSelector = document.getElementById("playerOneScore");
var scoreLSelector = document.getElementById("playerTwoScore");

scoreLSelector.innerHTML = "00";
scoreRSelector.innerHTML = "00";

function KeyDown(key){
	
	if(key.keyCode == '81'){
		
		padUp1   = true;
		padDown1 = false;
		
	}else if(key.keyCode == '83'){
		
		padDown1 = true;
		padUp1   = false;
		
	}else if(key.keyCode == '80'){
		
		padUp2 =   true;
		padDown2 = false;
		
	}else if(key.keyCode == '76'){
		
		padDown2 = true;
		padUp2 =   false;
		
	}
	
}

function KeyUp(key){
	
	if(key.keyCode == '80'){
		
		padUp2 = false;
		
	}else if(key.keyCode == '76'){
		
		padDown2 = false;
		
	}else if(key.keyCode == '81'){
		
		padUp1 = false;
		
	}else if(key.keyCode == '83'){
		
		padDown1 = false;
		
	}
	
}

function Animate(){
	
	requestAnimationFrame(Animate);
	
	draw();
	
	Start();
	
	Ball();
	
	Paddle();

}

function Start(){
	
	//TODO: timer
	
	if(Serv){
	
		circX = canvas.width/2;
		circY = canvas.height/2;
		
		paddleX1 = (sizeReference/15);
		paddleY1 = (canvas.height/2 - sizeReference/30);
		paddleX2 = (sizeReference - sizeReference/15 - sizeReference/45);
		paddleY2 = (canvas.height/2 - sizeReference/30);
		
		if(serveDirR){
			
			Rise = 0
			Run  = Hyp;
			
		}else{
			
			Rise = 0
			Run  = -1*Hyp;
			
		}
		
		Serv = false;

	}
	
	return;
	
}

function Ball(){
	
	if((circY - circRad) <= 0 || (circY + circRad) >= canvas.height){
		Rise = Rise*-1;
	}
	if((circX-circRad)<=(paddleX1+padSizeX1)&&(circX-circRad)>=(paddleX1+padSizeX1+Run-1)&&(circY)>=paddleY1&&(circY)<=(paddleY1+padSizeY1)){
		
		angleFactor = 2*(paddleY1 + padSizeY1/2 - circY)/padSizeY1;
		
		Rise = -1*Hyp*angleFactor;
		Run  = Math.sqrt(Hyp*Hyp + Rise*Rise);
		
	}
	if((circX+circRad)>=(paddleX2)&&(circX+circRad)<=(paddleX2+Run+1)&&(circY)>=paddleY2&&(circY)<=(paddleY2+padSizeY2)){
		
		angleFactor = 2*(paddleY2 + padSizeY2/2 - circY)/padSizeY2;
		
		Rise = -1*Hyp*angleFactor;
		Run  = -1*Math.sqrt(Hyp*Hyp + Rise*Rise);
		
	}
	
	if(circX <= -1*circRad){
		
		serveDirR = false;
		Serv = true;
		Start();
		
		scoreLSelector.innerHTML = ++scoreR;
		
	}if(circX >= canvas.width){
		
		serveDirR = true;
		Serv = true;
		Start();
		
		scoreRSelector.innerHTML = ++scoreL;
		
	}
	
	circX = circX + Run;
	circY = circY + Rise;
	
}

function draw(){
	
	cxt.clearRect(0, 0, canvas.width, canvas.height);
	
	cxt.fillStyle = "black";
		
	cxt.fillRect(paddleX1, paddleY1, padSizeX1, padSizeY1);
		
	cxt.fillRect(paddleX2, paddleY2, padSizeX2, padSizeY2);
	
	cxt.beginPath();
	cxt.arc(circX, circY, circRad, 0, Math.PI * 2, false);
	cxt.fillStyle = "red";
	cxt.fill();
	cxt.stroke();
		
}

function Paddle(){
	
	if(padDown1 == true && paddleY1 <= canvas.height - padSizeY1){
		
		paddleY1 = paddleY1 + ctrlSpeed;
		
	}
	if(padUp1 == true   && paddleY1 >= 0){
		
		paddleY1 = paddleY1 - ctrlSpeed;
		
	}
	if(padDown2 == true && paddleY2 <= canvas.height - padSizeY2){
		
		paddleY2 = paddleY2 + ctrlSpeed;
		
	}
	if(padUp2 == true   && paddleY2 >= 0){
	
		paddleY2 = paddleY2 - ctrlSpeed;
		
	}
	
}

Animate();

}













