class PieceComponent{
	color = "black";
	constructor(y,x){
		this.y = y;
		this.x = x;
	}
}

class Piece{
	a = new PieceComponent();
	b = new PieceComponent();
	c = new PieceComponent();
	d = new PieceComponent();
	form = 0;
	piece_type = 0
	constructor(type){
		this.piece_type = type;
		switch(type){
			case 0:
				this.assignPosition(0,0,1,0,0,1,1,1);
				break;
			case 1:
				this.assignPosition(0,1,1,1,2,1,3,1);
				break;
			case 2:
				this.assignPosition(0,1,1,0,2,1,1,1);
				break;
			case 4:
				this.assignPosition(0,1,1,1,1,0,2,0);
				break;
			case 6:
				this.assignPosition(0,0,1,0,1,1,2,1);
				break;
			case 5:
				this.assignPosition(0,1,1,1,2,1,2,0);
				break;
			case 3:
				this.assignPosition(0,0,0,1,1,1,2,1);
				break;
		}
	}

	assignPosition(ax,ay,bx,by,cx,cy,dx,dy){
		this.a.x = ax;
		this.a.y = ay;
		this.b.x = bx;
		this.b.y = by;
		this.c.x = cx;
		this.c.y = cy;
		this.d.x = dx;
		this.d.y = dy;
	}

	translate(piece, ax,ay,bx,by,cx,cy,dx,dy){
		piece.a.x += ax;
		piece.a.y += ay;
		piece.b.x += bx;
		piece.b.y += by;
		piece.c.x += cx;
		piece.c.y += cy;
		piece.d.x += dx;
		piece.d.y += dy;
	}



 	getNewRotation(current_form){
		let r = new Piece(this.piece_type);
		r.a = {...this.a};
		r.b = {...this.b};
		r.c = {...this.c};
		r.d = {...this.d};
		r.form = current_form;
		switch(r.piece_type){
			case 1:
				switch(r.form){
					case 0:
						console.log('case 0');
						this.translate(r,2,-1,1,0,0,1,-1,2);
						r.form = 1;
						break;
					case 1:
						console.log('case 1');
						this.translate(r,1,2,0,1,-1,0,-2,-1);
						r.form = 2;
						break;
					case 2:
						console.log('case 2');
						this.translate(r,-2,1,-1,0,0,-1,1,-2);
						r.form = 3;
						break;
					case 3:
						console.log('case 3');
						this.translate(r,-1,-2,0,-1,1,0,2,1);
						r.form = 0;
						break;
				}
				break;
			case 2:
				switch(r.form){
					case 0:
						console.log('case 0');
						this.translate(r,1,-1,1,1,-1,1,0,0,1);
						r.form = 1;
						break;
					case 1:
						console.log('case 1');
						this.translate(r,1,1,-1,1,-1,-1,0,0);
						r.form = 2;
						break;
					case 2:
						console.log('case 2');
						this.translate(r,-1,1,-1,-1,1,-1,0,0)
						r.form = 3;
						break;
					case 3:
						console.log('case 3');
						this.translate(r,-1,-1,1,-1,1,1,0,0);
						r.form = 0;
						break;
				}
				break;
			case 3:
				switch(r.form){
					case 0:
						console.log('case 0');
						this.translate(r,2,0,1,-1,0,0,-1,1);
						r.form = 1;
						break;
					case 1:
						console.log('case 1');
						this.translate(r,0,2,1,1,0,0,-1,-1);
						r.form = 2;
						break;
					case 2:
						console.log('case 2');
						this.translate(r,-2,0,-1,1,0,0,1,-1);
						r.form = 3;
						break;
					case 3:
						console.log('case 3');
						this.translate(r,0,-2,-1,-1,0,0,1,1);
						r.form = 0;
						break;
				}
				break;
			case 4:
				switch(r.form){
					case 0:
						console.log('case 0');
						this.translate(r,1,-1,0,0,1,1,0,2);
						r.form = 1;
						break;
					case 1:
						console.log('case 1');
						this.translate(r,1,1,0,0,-1,1,-2,0);
						r.form = 2;
						break;
					case 2:
						console.log('case 2');
						this.translate(r,-1,1,0,0,-1,-1,0,-2);
						r.form = 3;
						break;
					case 3:
						console.log('case 3');
						this.translate(r,-1,-1,0,0,1,-1,2,0);
						r.form = 0;
						break;
				}
				break;
			case 5:
				switch(r.form){
					case 0:
						console.log('case 0');
						this.translate(r,1,-1,0,0,-1,1,0,2);
						r.form = 1;
						break;
					case 1:
						console.log('case 1');
						this.translate(r,1,1,0,0,-1,-1,-2,0);
						r.form = 2;
						break;
					case 2:
						console.log('case 2');
						this.translate(r,-1,1,0,0,1,-1,0,-2);
						r.form = 3;
						break;
					case 3:
						console.log('case 3');
						this.translate(r,-1,-1,0,0,1,1,2,0);
						r.form = 0;
						break;
				}
				break;
			case 6:
				switch(r.form){
					case 0:
						console.log('case 0');
						this.translate(r,2,0,1,1,0,0,-1,1);
						r.form = 1;
						break;
					case 1:
						console.log('case 1');
						this.translate(r,0,2,-1,1,0,0,-1,-1);
						r.form = 2;
						break;
					case 2:
						console.log('case 2');
						this.translate(r,-2,0,-1,-1,0,0,1,-1);
						r.form = 3;
						break;
					case 3:
						console.log('case 3');
						this.translate(r,0,-2,1,-1,0,0,1,1);
						r.form = 0;
						break;
				}
				break;
				
		}
		console.log(r);
		return r;
	}
}


var canvas = document.querySelector('canvas'),
    ctx    = canvas.getContext('2d');
const gridSquareSize = 25;
var grid = (new Array(24)).fill().map(function(){ return new Array(10).fill("white");});

fitToContainer(canvas);
let current_piece = new Piece(generateRandomPiece());

window.addEventListener('keydown',this.check,false);

function check(e) {
	var code = e.keyCode;
    switch (code) {
        case 37: moveLeft(current_piece); break; //Left key
        case 38: rotate(current_piece); break; //Up key
        case 39: moveRight(current_piece); break; //Right key
        case 40: moveDown(current_piece); break; //Down key
    }
}
function clearSquare(y, x){
	const context = canvas.getContext('2d');
	context.clearRect(x * gridSquareSize+2, y * gridSquareSize+2, gridSquareSize-2 , gridSquareSize-2);
}

function moveLeft(piece){
	if(piece.a.x - 1 >= 0 && piece.b.x - 1 >= 0 && piece.c.x - 1 >= 0 && piece.d.x - 1 >= 0 ){
		clearPiece(piece);
		piece.a.x--;
		piece.b.x--;
		piece.c.x--;
		piece.d.x--;
		drawPiece(piece);
	}
	

}

function moveRight(piece){
	if(piece.a.x + 1 < grid[0].length && piece.b.x + 1 < grid[0].length && piece.c.x + 1 < grid[0].length && piece.d.x + 1 < grid[0].length ){
		clearPiece(piece);
		piece.a.x++;
		piece.b.x++;
		piece.c.x++;
		piece.d.x++;
		drawPiece(piece);
	}

}

function moveDown(piece){
	if(piece.a.y + 1 < grid.length && piece.b.y + 1 < grid.length && piece.c.y + 1 < grid.length && piece.d.y + 1 < grid.length ){
		clearPiece(piece);
		piece.a.y++;
		piece.b.y++;
		piece.c.y++;
		piece.d.y++;
		drawPiece(piece);
	}
}

function outofBoundsCheck(piece){
	if(piece.a.x >= 0 && piece.b.x  >= 0 && piece.c.x  >= 0 && piece.d.x  >= 0 ){
		if(piece.a.x  < grid[0].length && piece.b.x  < grid[0].length && piece.c.x  < grid[0].length && piece.d.x < grid[0].length ){
			if(piece.a.y < grid.length && piece.b.y  < grid.length && piece.c.y  < grid.length && piece.d.y < grid.length ){
				return false;
			}
		}
	}
	return true;
}

function rotate(piece){
	console.log(piece);
	let rotated_piece = piece.getNewRotation(piece.form);
	if(!outofBoundsCheck(rotated_piece)){
		clearPiece(piece);
		current_piece = rotated_piece;
		drawPiece(current_piece);
	}


}

function clearPiece(piece){
	clearSquare(piece.a.y, piece.a.x);
	clearSquare(piece.b.y, piece.b.x);
	clearSquare(piece.c.y, piece.c.x);
	clearSquare(piece.d.y, piece.d.x);
}

function generateRandomPiece(){
	pieces = [0,1,2,3,4,5,6];
	var randomItem = pieces[Math.floor(Math.random()*pieces.length)];
	return randomItem;
}




function main(){
	console.log("game start")
	drawGrid(ctx);
	drawPiece(current_piece);
}

function drawPiece(piece){
	drawOnGrid(piece.a.y, piece.a.x, piece.a.color);
	drawOnGrid(piece.b.y, piece.b.x, piece.b.color);
	drawOnGrid(piece.c.y, piece.c.x, piece.c.color);
	drawOnGrid(piece.d.y, piece.d.x, piece.d.color);
}


function fitToContainer(canvas){
  canvas.style.width='50%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function drawGrid(){
	for(var y = 0; y < grid.length; y++){
		for(var x = 0; x < grid[0].length; x++){
			ctx.strokeRect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);
			clearSquare(y,x);
		}
	}
}



function drawOnGrid(y, x, color){
	grid[y][x] = color;
	ctx.fillStyle = color;
	ctx.fillRect(x * gridSquareSize + 2 , y * gridSquareSize + 2, gridSquareSize -  2 , gridSquareSize - 2);

	ctx.fillStyle = "white"
}



main();
