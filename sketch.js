var ball , ball_option,ground,rigtW,leftW
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(width/2,670,width,20)
rigtW= new Ground(1100,600,20,120)
leftW= new Ground(900,600,20,120)

var ball_option= {
	iStatic : false,
	restitution : 0.3,
	friction :0,
	density : 1.2,
}

ball=Bodies.circle(100,10,20,ball_option)
World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  
	ground.show()
	rigtW.show()
	leftW.show()

	ellipse (ball.position.x,ball.position.y,20,20)



 
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85},{x:85,y:-85})
	}
}


