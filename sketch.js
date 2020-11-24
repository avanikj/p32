const Engine = Matter.Engine,
const World = Matter.World,
const Bodies = Matter.Bodies,
const Body = Matter.Body,
const Constraint = Matter.Constraint;

var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9,bl10,
    bl11,bl12,bl13,bl14,bl15,bl16;
var engine,world;


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;

//1 player
bl1 = new Box(510,520,30,40)
bl2 = new Box(540,520,30,40)
bl3 = new Box(570,520,30,40)
bl4 = new Box(600,520,30,40)
bl5 = new Box(630,520,30,40)
bl6 = new Box(660,520,30,40)
bl7 = new Box(690,520,30,40)

bl8 = new Box(540,500,30,40)
bl9 = new Box(570,500,30,40)
bl10 = new Box(600,500,30,40)
bl11 = new Box(630,500,30,40)
bl13 = new Box(660,500,30,40)

bl14 = new Box(570,480,30,40)
bl15 = new Box(600,480,30,40)
bl16 = new Box(630,480,30,40)

bl17 = new Box(600,460,30,40)

base = new Ground(600,590,1200,20)
g1 = new Ground(600,540,250,10)
g2 = new Ground(860,270,200,10)


//2 player
bl18 = new Box(800,250,30,40)
bl19 = new Box(830,250,30,40)
bl20 = new Box(860,250,30,40)
bl21 = new Box(890,250,30,40)
bl22 = new Box(910,250,30,40)

bl23 = new Box(830,230,30,40)
bl24 = new Box(860,230,30,40)
bl25 = new Box(890,230,30,40)

bl26 = new Box(860,210,30,40)

striker = Bodies.circle(50,200,20)
World.add(world,striker)

slingshot = new Slingshot(this.striker,{x:200,y:200})
}

function draw() {
background("purple"); 
Engine.update(engine);
base.display();
g1.display();
g2.display();

fill("lightblue")
bl1.display();
bl2.display();
bl3.display();
bl5.display();
bl6.display();
bl7.display();

fill("pink")
bl8.display();
bl9.display();
bl10.display();
bl11.display();
bl12.display();
bl13.display();

fill("lightgreen")
bl14.display();
bl15.display();
bl16.display();

fill("gray")
bl17.display();

fill("lightblue")
bl18.display();
bl19.display();
bl20.display();
bl21.display();
bl22.display();

fill("lightgreen")
bl23.display();
bl24.display();
bl25.display();

fill("pink")
bl26.display();


imageMode(CENTER)
image(strikerImg,striker.position.x,striker.position.y,50,50)

  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(striker,{x:mouseX , y:mouseY})
}

function mouseReleased(){
slingshot.fly();
}