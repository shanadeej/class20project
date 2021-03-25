const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var car,wall;
var speed,weight;
var Zenia,Tourus;
var Cyclop;

function setup() {
  var canvas = createCanvas(1600,400);
  engine = Engine.create();
  world = engine.world;

  speed=random(55,90)
  weight=random(40,1500)

  car=createSprite(50,200,50,50);
  car.velocityX = speed;



  wall=createSprite(1500,200,60,height/2);


}

function draw() {
  background(255,255,255);  

  car.colide(wall)

  destruction=(0.5*weight*speed*speed)/22500

  if(Destruction>100){
    set.color=0,255,0;
  }
  else if(Destruction<180){
    set.color = 255,0,0;
  }
  else if(Destruction^100,180){
    set.color = 230,230,0;
  }

  drawSprites();
}