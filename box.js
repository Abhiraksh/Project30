class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y,30,50 , options);
        this.vanish = 255;
        
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed<6){
        var angle = this.body.angle;
     
        push();
        rotate(angle);
        stroke("black");        
        strokeWeight(2);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 30,50);
        pop();
      }

      else{

        push();
        World.remove(world,this.body);
        this.vanish = this.vanish-5;
        tint(255,this.vanish);
        color("grey");
        pop();
      }
    }

    
  }