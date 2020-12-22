var canvas = document.querySelector('canvas'),
    ctx    = canvas.getContext('2d');
const gridSquareSize = 25;
fitToContainer(canvas);
drawGrid(ctx)
function fitToContainer(canvas){
  canvas.style.width='50%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function drawGrid(ctx){
	ctx.beginPath();
	for(var y = 0; y < 24; y++){
		for(var x = 0; x < 10; x++){
			ctx.rect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);
		}
	}
	ctx.stroke();

}
