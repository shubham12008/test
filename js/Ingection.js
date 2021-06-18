class Ingenction {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
           //isStatic : true
        }

        this.body_1 = Bodies.rectangle(x-200, y, width-390, height-40, options);
        this.body_2= Bodies.rectangle(x-360,y,width-660,height,options);
        this.body_3 = Bodies.rectangle(x-430,y,width-580,height-150,options);
        this.body_4 = Bodies.rectangle(x-523,y,width-635,height-60,options);
        this.body_5 = Bodies.rectangle(x-35,y,width-635,height-150,options);
        this.body_6 = Bodies.rectangle(x-10,y,width-650,height-200,options);
        this.body_7 = Bodies.rectangle(x-5,y,width-400,height-230,options);

        this.body = Body.create({parts: [this.body_1, this.body_2,this.body_3,this.body_4,this.body_5,this.body_6,this.body_7]});

        this.width = width;
        this.height = height;
        this.image = loadImage("images/injection.png");
        this.smokeImage = loadImage("images/smoke.png");
        this.trajectory =[];

        World.add(world, this.body);


        //super(x,y,50,50);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 20, 0, this.width, this.height);
        pop();

        //super.display();

        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
         
      
          for(var i=0; i<this.trajectory.length; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
          }        
      }
}