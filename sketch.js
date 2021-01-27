const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,paperObject,groundObject;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj = new Dustbin(1200,650);
	paperObject  = new Paper(200,450,40);
	groundObject = new Ground(width/2, 670, width, 20);

	

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  	rectMode(CENTER);
  background(0);
  
  dustbinObj.display();
  paperObject.display();
  groundObject.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode===UP_ARROW){
		Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}

}


