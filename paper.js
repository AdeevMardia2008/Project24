class Paper {
    constructor(x, y, width, height) {
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        Matter.Body.circle(x,y,radius)
      }
      display(){
     
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
      }
}