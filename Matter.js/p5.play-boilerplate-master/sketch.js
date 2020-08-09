const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

var world,engine,bodies;
var box, ball, ground;

var ground_Property;

function setup(){
var canvas=createCanvas(1200,400);
engine=Engine.create();
world=engine.world;

box=Bodies.rectangle(300,200,50,50);
World.add(world,box);

ball=Bodies.circle(600,200,30);
World.add(world,ball);

ground_Property={
  isStatic:true
}

ground=Bodies.rectangle(600,400,1200,30,ground_Property);
World.add(world,ground);

}

function draw() {
  background(0,0,0); 
  Engine.update(engine) ;
  
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50)

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30)

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,30);

}