class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
             'isStatic': true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,50,70 , options);
        
        
        World.add(world, this.body);
      }
      display(){
    
        push();
        stroke("black");
        strokeWeight(2);
        fill("cyan");
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 50,70);
        pop();
      }
}