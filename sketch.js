const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground1, ground2;
var blk1,blk2,blk3,blk4,blk5,blk6,blk7,blk8,blk9,blk10,blk11,blk12;
var blk13,blk14,blk15,blk16;
var blk17, blk18, blk19, blk20;
var blk21, blk22, blk23, blk24;
var blk25, poly, chain;

function setup(){
    var canvas = createCanvas(1000,500);


 engine = Engine.create();
 world = engine.world;

 // bottom part for tower1
 
 blk1 = new Box(310,280);
 blk2 = new Box(341,280);
 blk3 = new Box(372,280);
 blk4 = new Box(403,280);
 blk5 = new Box(434,280);
 blk6 = new Box(465,280);
 blk7 = new Box(496,280);
 
 // 2nd last layer for tower1
 
 blk8 = new Box(335,250);
 blk9 = new Box(366,250);
 blk10 = new Box(397,250);
 blk11 = new Box(428,250);
 blk12 = new Box(459,180);

 //  2nd layer for tower1
 
 blk13 = new Box(365,100);
 blk14 = new Box(396,100);
 blk15 = new Box(427,100);

 // top layer for tower1

 blk16 = new Box(396,50)

 // bottom part for tower2
 
 blk17 = new Box(680,170);
 blk18 = new Box(711,170);
 blk19 = new Box(742,170);
 blk20 = new Box(773,170);
 blk21 = new Box(804,170);
 
 //  2nd layer for tower2
 
 blk22 = new Box(705,130);
 blk23 = new Box(736,130);
 blk24 = new Box(767,130);

 // top part for tower2

 blk25 = new Box(736,100);


 poly = new Polygon(100,250); 
 ground1 = new Ground(400,300,250,10);
 ground2 = new Ground(750,250,200,10);

 chain = new Sling(poly.body,{x:100,y:250});

}
function draw(){
 background("black");
 Engine.update(engine);

 ground1.display();
 ground2.display();

 fill("cyan");
 blk1.display();
 blk2.display();
 blk3.display();
 blk4.display();
 blk5.display();
 blk6.display();
 blk7.display();
 blk17.display();
 blk18.display();
 blk19.display();
 blk20.display();
 blk21.display(); 
 
 fill("red");
 blk8.display();
 blk9.display();
 blk10.display();
 blk11.display();
 blk12.display();
 blk22.display();
 blk23.display();
 blk24.display();

 fill("lime");
 blk13.display();
 blk14.display();
 blk15.display();
 blk25.display();

 fill("pink");
 blk16.display();
 
 poly.display();
 chain.display();

 drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function keyPressed(){

    if(keyCode === 32){

        chain.attach(poly.body);
    }
}
