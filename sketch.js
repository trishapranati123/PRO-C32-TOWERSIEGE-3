
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,ground2,ground3 ;
var block1,block2,block3, block4, block5,block6 ,block7 ,block8 , block9, block10, block11, block12, block13,block14,block15,block16 ;
var block17,block18,block19, block20, block21,block22 ,block23 ,block24 , block25;
var polygonObj;
var launcherObj;
var score=0;
var backgroundImg;
function preload()
{
	getbackgroundImg();
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  fill('#fae')
  ground1=new ground(width/2,400,width,20);
  ground2=new ground(410,295,250,10);
  ground3=new ground(580,145,170,10);
  //Level1
  fill('#fae')
  block1=new block(320,270,30,40);
  block2=new block(350,270,30,40);
  block3=new block(380,270,30,40);
  block4=new block(410,270,30,40);
  block5=new block(440,270,30,40);
  block6=new block(470,270,30,40);
  block7=new block(500,270,30,40);
  //Level2
  fill('rgb(0,255,0)');
  block8=new block(350,230,30,40); 
  block9=new block(380,230,30,40); 
  block10=new block(410,230,30,40); 
  block11=new block(440,230,30,40); 
  block12=new block(470,230,30,40);
  //Level3
  fill('rgba(100%,0%,100%,0.5)');
  block13=new block(380,190,30,40); 
  block14=new block(410,190,30,40);
  block15=new block(440,190,30,40);
  //Level4
  fill(255, 204, 0);
  block16 =new block(410,150,30,40);
  //Second Tower Level 1
  block17=new block(520,120,30,40);
  block18=new block(550,120,30,40);
  block19=new block(580,120,30,40);
  block20=new block(610,120,30,40);
  block21=new block(640,120,30,40);
  //Level2
  block22=new block(550,80,30,40);
  block23=new block(580,80,30,40);
  block24=new block(610,80,30,40);
  //Level3
  block25=new block(580,40,30,40);
  //polygon
  polygonObj=new polygon(50,50,30);
  //Launcher
  launcherObj = new launcher(polygonObj.body,{x:100, y:100});
	
	
	Engine.run(engine);
  
}

function draw() {
    if (backgroundImg)
    background(backgroundImg);
    noStroke();
    textSize(20);
    fill("white")
    text ("SCORE:"+score,700,40);
  //background("grey");
  ground1.display();
  ground2.display();
  ground3.display();
  block1.display();    
  block2.display();    
  block3.display();    
  block4.display();    
  block5.display();    
  block6.display();    
  block7.display();
  block8.display();    
  block9.display();    
  block10.display();    
  block11.display();    
  block12.display(); 
  block13.display();
  block14.display();
  block15.display();
  block16.display();   
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygonObj.display();
  launcherObj.display();  
  block1.score();    
  block2.score();    
  block3.score();    
  block4.score();    
  block5.score();    
  block6.score();    
  block7.score();
  block8.score();    
  block9.score();    
  block10.score();    
  block11.score();    
  block12.score(); 
  block13.score();
  block14.score();
  block15.score();
  block16.score();   
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  drawSprites(); 
}
function mouseDragged()
{
	Matter.Body.setPosition(polygonObj.body,{x:mouseX , y:mouseY});
}
function mouseReleased()
{
	launcherObj.fly();
}
function keyPressed(){
	if(keyCode===32)
	{
		Matter.Body.setPosition(polygonObj.body,{x:100, y:180});
		launcherObj.attach(polygonObj.body);

	}
}

async function getbackgroundImg(){
var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json ();
console.log(responseJSON);

var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);
console.log(hour);
if(hour >= 06 && hour <= 19){
    bg="bg1.png";
}
else{
    bg="bg2.png";
}
backgroundImg = loadImage(bg);
//console.log(backgroundImg);
}
