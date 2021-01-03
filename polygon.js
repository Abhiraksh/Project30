class Polygon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,50,50 , options);
        this.image = loadImage("polygon.png");
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        rotate(angle);
        stroke("black");
        strokeWeight(2);
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 50,50);
        pop();
      }
}