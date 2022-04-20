var ball , ball_option,ground,rigtW,leftW
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(width/2,670,width,20)
rigtW= new Ground(1100,600,20,120)
leftW= new Ground(1100,600,20,120)

var ball_option= {
	iStatic : false,
	restitution : 0.3,
	friction :0,
	density : 1.2,
}



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display()
	rigtW.display()
	leftW.display()





  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.03,y:0})
	}
}


