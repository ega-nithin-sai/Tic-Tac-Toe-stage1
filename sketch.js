var T00,T01,T02,T10,T11,T12,T20,T21,T22;
var placeNames = [
	                [T00,T01,T02]
				   ,[T10,T11,T12]
				   ,[T20,T21,T22]
				];


var xyPos = [   
	          [[100,100], [300,100], [500,100]]
	         ,[[100,300], [300,300], [500,300]]
		     ,[[100,500], [300,500], [500,500]]
            ];  
function preload(){
	X = loadImage("X.png");
	O = loadImage("O.png");
}

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(0);

	createButtons();

	drawSprites();
}

function drawFrame(){
	stroke(255);
	strokeWeight(10);
	
	//To draw vertical lines
	line(200,0,200,600);
	line(400,0,400,600);

	//To draw horizontal lines
	line(0,200,600,200);
	line(0,400,600,400);
}

function createButtons(){
	for(var x =0;x<3;x++) {
		for(var y=0;y<3;y++){
		   var btn = createButton("","");
		   placeNames[x][y]=btn;
		   //btn.attribute("MyX",x);
		   //btn.attribute("MyY",y);

		   btn.position(xyPos[x][y][0] - 100,xyPos[x][y][1] - 100);
		   btn.style("font-size","100px");
		   btn.style("width","200px");
		   btn.style("height","200px");
		}
   }
}