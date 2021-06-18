const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


var engine, world;
var backgroundImg,screen ;
var xpos,ypos;
var launcher_1img,launcher;
var gameState = "onSling";


function preload(){
  backgroundImg = loadImage("images/Background Angry bird.jpg");
  launcher_1img = loadImage("images/injection launcher.png");

}

function setup() {
  createCanvas(4600,1500);
  engine = Engine.create();
  world = engine.world;

  screen = createSprite(width/2,height/2,4600,1500);
  screen.visible = false ;

  launcher = createSprite(550,900,28,700);
  launcher.addImage(launcher_1img);
  launcher.scale = 1.25

  ground = new Ground(width/2,height-40,4700,130);
  plartform = new Plartform

  CYB = new Crystal_block (4200,1350,700,185);
  CYB_2 = new Crystal_block(3380,90,100,80);
  CYB_3 = new Crystal_block(3000,90,100,80);
  CYB_4 = new Crystal_block(2200,1350,700,185);


  //CB = new Concreat_block (1000,400,350,130);
  CB_2 = new Concreat_block (4200,500,340,200);
  //CB_3 = new Crystal_block (3200,1350,700,185);
  


  CL = new Concreat_log (4400,990,435,0);
  CL_2 = new Concreat_log (4000,990,435,0);
  CL_3 = new Concreat_log_2 (3200,1200,400,0);
  CL_4 = new Concreat_log_2 (3500,800,350,0);
  CL_5 = new Concreat_log_2(2900,800,350,0);
  CL_6 = new Concreat_log(2220,990,435,0);



  CYL = new Crystal_log(4200,990,435,0);
  CYL_2 = new Crystal_log(4200,725,600,1.571)
  CYL_3 = new Crystal_log(3580,1200,400,0); 
  CYL_4 = new Crystal_log(2800,1200,400,0);
  CYL_5 = new Crystal_log(3200,1000,1000,1.570);
  CYL_6 = new Crystal_log_2(3200,600,800,1.570);
  CYL_7 = new Crystal_log_2(3400,380,300,0);
  CYL_8 = new Crystal_log_2(3000,380,300,0);
  CYL_9 = new Crystal_log_2(3190,200,550,1.570);
  CYL_10 = new Crystal_log_2(2200,725,600,1.571);


  V = new Virus (4325,1130,90);
  V_2 = new Virus(4100,1130,90);
  V_3 = new Virus(3400,1300,120);
  V_4 = new Virus(3000,1300,120);
  V_5 = new Virus_2(3380,855,80);
  V_6 = new Virus_2(3000,855,80);
  V_7 = new Virus_2(3200,800,120);
  V_8 = new Virus_2(3200,580,130);
  V_9 = new Virus(2100,1130,90);
  V_10 = new Virus(2300,1130,90);

  IN = new Ingenction (750,810,700,275);
  

  slingshot = new SlingShot(IN.body,{x:750, y:810});

  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 4600,
		  height: 1500,
		  wireframes: false
		}
	  });
 
  Engine.run(engine);
  Render.run(render);
}

function draw() {
  background(backgroundImg);
  check_cordinates();


  
  if(keyIsDown(RIGHT_ARROW)){
    launcher.x = 550;
    launcher.y = 900;
   }
   else if(keyIsDown(LEFT_ARROW)){
    launcher.x = 550;
    launcher.y = 820;
   }
   else if (keyIsDown(32)) {
    launcher.x = 550;
    launcher.y = 900;
    launcher.rotation = 0;
  }
  if(keyIsDown(RIGHT_ARROW) && launcher.rotation < 15){
    launcher.rotation = launcher.rotation+3;
   }
   else if(keyIsDown(LEFT_ARROW) && launcher.rotation > -12){
    launcher.rotation = launcher.rotation-3;  
   }

   plartform.display();



   CL.display();
   CL_2.display();
   CL_3.display();
   CL_4.display();
   CL_5.display();
   CL_6.display();
  

   CYL.display();
   CYL_2.display();
   CYL_3.display();
   CYL_4.display();
   CYL_5.display();
   CYL_6.display();
   CYL_7.display();
   CYL_8.display();
   CYL_9.display();
   CYL_10.display();


   V.display();
   V_2.display();
   V_3.display();
   V_4.display();
   V_5.display();
   V_6.display();
   V_7.display();
   V_8.display();
   V_9.display();
   V_10.display();

   CYB.display();
   CYB_2.display();
   CYB_3.display();
   CYB_4.display();

   //CB.display();
   CB_2.display();
   
   IN.display();

   ground.display();


   

  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(IN.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}


function keyPressed(){
  if (keyCode === 32)
  {}}


function check_cordinates(){
  textSize(45);
  text("X position "+ xpos,300,50);
  text("Y position "+ ypos,300,100);

if (mousePressedOver(screen)){
  xpos = mouseX;
  ypos = mouseY;

  console.log(xpos,ypos,launcher.rotation);
}
}  