class BaseClass{
    constructor(x, y, width, height, angle) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(angle);
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
      }
}