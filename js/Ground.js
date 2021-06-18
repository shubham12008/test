class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/ground.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, pos.x,pos.y-55,this.width,this.height+60);
    }
  };