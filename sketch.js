
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper,ground;	
var world,engine;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbin=new Dustbin(1000,550);
	paper=new Paper(150,350,30);
	//Create a Ground
	ground=new Ground(width/2,570,width,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin.display();
  paper.display();
  ground.display();
 
}

function keyPressed() {
		if (keyCode === UP_ARROW) {

			Matter.Body.applyForce(paper.body,paper.body.position,{x:37,y:-37});
		
		}
}





