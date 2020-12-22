var canvas = document.querySelector('canvas'),
    ctx    = canvas.getContext('2d');
const gridSquareSize = 25;
var grid = (new Array(24)).fill().map(function(){ return new Array(10).fill("white");});
var position = [0,0];
fitToContainer(canvas);

window.addEventListener('keydown',this.check,false);

function check(e) {
	var code = e.keyCode;
    switch (code) {
        case 37: move(0,-1); break; //Left key
        case 38: console.log("Up"); break; //Up key
        case 39: move(0,1); break; //Right key
        case 40: move(1,0); break; //Down key
    }
}
function clearSquare(y, x){
	const context = canvas.getContext('2d');
	context.clearRect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);
}

function move(y, x){
	clearSquare(position[0],position[1]);
	position[0] += y;
	position[1] += x;
	drawOnGrid(position[0],position[1], "blue")
}


function main(){
	console.log("game start")
	drawGrid(ctx);
	drawOnGrid(position[0], position[1], grid, "blue");
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


function drawOnGrid(y, x, color){
	grid[y][x] = color;
	ctx.fillStyle = color
	ctx.fillRect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);
	ctx.fillStyle = "white"
}





main();
