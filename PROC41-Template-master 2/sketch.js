const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var drop = []
var engine,world;

var maxDrops=100;

function preload(){
    lightningImage1 = loadImage("1.png");
    lightningImage2 = loadImage("2.png");
    lightningImage3 = loadImage("3.png");
    lightningImage4 = loadImage("4.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(400,700);

    umbrella = new Umbrella(200,570);
  //creating drops
  if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drop.push(new Particle(random(0,400), random(0,400)));
    
    }
}
}

function draw(){
    Engine.update(engine);
   background(0);
   
   umbrella.display();



   for(var i =0; i< maxDrops;i++){
       drop[i].showDrop();
       drop[i].updateY();
   }
   drawSprites();
}   

