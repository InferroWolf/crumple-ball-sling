const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,pig1,pig2,log1,log2,log3,log4,log5,slinglog;
var backgroundImg,platform;
var release=0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    di=loadImage("sprites/dustbin.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(600,height,1200,20);
    bird = new Bird(100,100);
    platform = new Ground(150,300,300,170);
    slingshot = new Sling(bird.body,{x:223,y:81});
    dre=new dustbin(800,250,20,300);
    dle=new dustbin(600,350,20,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    image(di,500,130,400,300);
    bird.display();
    dre.display();
    dle.display();
    platform.display();
    slingshot.display();
    text(mouseX+","+mouseY,mouseX,mouseY);

}

function mouseDragged(){
if(release===0){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
 }
}

function mouseReleased(){
release=1;
slingshot.fly();
}
function keyPressed(){
if (keyCode===32){
slingshot.attach(bird.body);
}
}