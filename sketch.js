
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 =new Bob(800-80,675,20);
	bob2 =new Bob(800-40,675,20);
	bob3 =new Bob(800,675,20);
	bob4 =new Bob(800+40,675,20);
	bob5 =new Bob(800+80,675,20);

	roof = new Roof(400,175,width/4,20);
	

	rope1 = new Rope(bob1.body,roof.body,-80,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
}



