const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground1, ground2;
var blk1,blk2,blk3,blk4,blk5,blk6,blk7,blk8,blk9,blk10,blk11,blk12;
var blk13,blk14,blk15,blk16;

function setup(){
    var canvas = createCanvas(1800,1000);


 engine = Engine.create();
 world = engine.world;

 // bottom part for tower1

 blk1 = new Box(200,700);


 ground1 = new Ground(900,700,600,20);

}
function draw(){
 background("black");

 ground1.display();
 blk1.display();
 

 drawSprites();
}
