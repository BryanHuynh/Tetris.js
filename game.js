var canvas = document.querySelector('canvas'),
    ctx    = canvas.getContext('2d');
const gridSquareSize = 25;
var grid = (new Array(24)).fill().map(function(){ return new Array(10).fill("white");});
var block = (new Array(24)).fill().map(function(){ return new Array(10).fill("white");});
fitToContainer(canvas);

window.addEventListener('keydown',this.check,false);

function check(e) {
	var code = e.keyCode;
    switch (code) {
        case 37: moveLeft(); break; //Left key
        case 38: console.log("Up"); break; //Up key
        case 39: moveRight(); break; //Right key
        case 40: moveDown(); break; //Down key
    }
}
function clearSquare(y, x){
	const context = canvas.getContext('2d');
	context.clearRect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);
}

function moveLeft(){
	for(let i = 0 ; i < block.length; i++){
		let first = block[i][0];
		block[i].shift()
		block[i].push(first)
	}
	drawBlock()
}

function moveRight(){
	for(let i = 0 ; i < block.length; i++){
		let last = block[i].slice(-1)[0]
		block[i].pop()
		block[i].unshift(last)
	}
	drawBlock()
}

function moveDown(){

	let bottom = block[23];
	block.pop();
	block.unshift(bottom)

	drawBlock()
}


function shift(rows, pos) {

}




function main(){
	console.log("game start")
	drawGrid(ctx);
	block[1][1] = "black"
	drawBlock();
}


function fitToContainer(canvas){
  canvas.style.width='50%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function drawGrid(){
	ctx.beginPath();
	for(var y = 0; y < 24; y++){
		for(var x = 0; x < 10; x++){
			ctx.rect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);
		}
	}
	ctx.stroke();
}

function drawBlock(){
	for(var y = 0; y < 24; y++){
		for(var x = 0; x < 10; x++){
			ctx.fillStyle  = block[y][x];
			ctx.fillRect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);
			ctx.fillStyle  = "white";
		}
	}
}


function drawOnGrid(y, x, color){
	grid[y][x] = color;
	ctx.fillStyle = color
	ctx.fillRect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);
	ctx.fillStyle = "white"
}





main();
