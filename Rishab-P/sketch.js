const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sample;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    

    sample1 = new Sample(700,320,70,70);
    

}

function draw(){
    background(0);
    Engine.update(engine);
   
    sample1.display();
    
}