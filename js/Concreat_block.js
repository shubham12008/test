class Concreat_block {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/concreat block.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos =this.body.position;
      push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height+10);

       pop();
      }
      Rotate_ (){
        var angle = this.body.angle;
    rotate(angle);
      }
};

