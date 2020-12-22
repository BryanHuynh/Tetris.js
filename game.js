var canvas = document.querySelector('canvas'),
    ctx    = canvas.getContext('2d');
const gridSquareSize = 25;
fitToContainer(canvas);
drawGrid(ctx);

window.addEventListener('keydown',this.check,false);

function check(e) {
	var code = e.keyCode;
    switch (code) {
        case 37: console.log("Left"); break; //Left key
        case 38: console.log("Up"); break; //Up key
        case 39: console.log("Right"); break; //Right key
        case 40: console.log("Down"); break; //Down key
        default: console.log(code); //Everything else
    }
}


function main(){
	console.log("game start")
	var grid = (new Array(24)).fill().map(function(){ return new Array(10).fill("white");});
	drawOnGrid(0, 1, grid, "blue");

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


function drawOnGrid(y, x, grid, color){
	console.log(grid)
	grid[y][x] = color;
	ctx.fillStyle = color
	ctx.fillRect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);
	ctx.fillStyle = "white"
}

function clearGrid(){
	const context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
}




main();
