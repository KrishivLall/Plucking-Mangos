
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var sling;

function preload(){
	treeIMG = loadImage("sprites/tree.png");
	boyIMG = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new Box(500, 640, 50, 20);
  tree2 = new Box(495, 550, 20, 200);
  tree3 = new Box(525, 550, 20, 200);

	ground1 = new Ground(400, 675, 800, 50);

  boy = new Boy(150, 600, 20, 20);


  mango1 = new Mango(300, 400, 40);
  mango2 = new Mango(540, 430, 40);
  mango3 = new Mango(590, 450, 40);
  mango4 = new Mango(560, 410, 40);
  mango5 = new Mango(580, 490, 40);
  
  stone = new Stone(50, 540, 40);

  sling = new SlingShot(stone.body,{x: 50, y:540 });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  ground1.display();

  imageMode(CENTER);
  image(boyIMG, 100, 590, 150, 220);

  boy.display();
  stone.display();
  
  imageMode(CENTER);
  image(treeIMG, 500, 460, 500, 400 );

  //tree1.display();
  //tree2.display();
  //tree3.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  //sling.display();

  stone.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{ x:mouseX, y:mouseY });
}

function mouseReleased(){
  sling.fly();
}

function detectCollision(lstone, lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }
}

