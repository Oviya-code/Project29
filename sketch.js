const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1050,400);

    engine=Engine.create();
    world=engine.world;
     
stand1=new Ground(275,370,170,20);
stand2=new Ground(790,200,170,20); 
box1 = new Box(215,340,30,40);
box2 = new Box(245,340,30,40);
box3 = new Box(275,340,30,40);
box4 = new Box(305,340,30,40);
box5 = new Box(335,340,30,40);

box6 = new Box(245,300,30,40);
box7 = new Box(275,300,30,40);
box8 = new Box(305,300,30,40);
box9 = new Box(275,260,30,40);

box10 = new Box(730,170,30,40);
box11 = new Box(760,170,30,40);
box12 = new Box(790,170,30,40);
box13 = new Box(820,170,30,40);
box14 = new Box(850,170,30,40);

box15 = new Box(760,130,30,40);
box16 = new Box(790,130,30,40);
box17= new Box(820,130,30,40);
box18 = new Box(790,90,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new SlingShot(this.polygon,{x:50,y:100});

Engine.run(engine);
 }
   function draw() {
     background("red");  
    Engine.update(engine);
     stand1.display();
     stand2.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     box18.display();

imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);

slingShot.display();

     drawSprites();
   }

   function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingShot.fly();
}
