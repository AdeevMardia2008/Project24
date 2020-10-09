
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBin;
var paper;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustBin=new DustBin(700,600,100,20);
	paper=new Paper(100,600,20,20);
	ground=new Ground(400,650,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustBin.display();
  paper.display();
  ground.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	}
}


