
var bomb
var coin
var drink
var path
var power
var runner,runner1,runner2





function preload(){
  //pre-load images
runner_running=loadAnimation("Runner-1.png","Runner-2.png")

 bomb=loadImage("bomb.png")
coin=loadImage("coin.png")
drink=loadImage("energyDrink.png")
pathImg=loadImage("path.png")
power=loadImage("power.png")


}

function setup(){
  createCanvas(400,400);
  //create sprites here




  path=createSprite(200,200,200,200)
  path.addImage(pathImg)
  path.scale=1.2

  runner=createSprite(200,200,200,200)
  runner.addAnimation("running",runner_running)
  runner.scale=0.05
  

    //making the ground
    invisibleWall1=createSprite(0,0,100,800)
    invisibleWall1.visible=false;
   
     invisibleWall2=createSprite(410,0,100,800)
     invisibleWall2.visible=false;



 
}

function draw() {
  background(0);
  
  path.velocityY=4

  runner.x=World.mouseX

 Edges=createEdgeSprites()



 runner.collide(Edges[3])


  runner.collide(invisibleWall1)
  runner.collide(invisibleWall2)
  if (path.y > 400){
    path.y=height/2
  }
  
  
 console.log(path.height)


 

  drawSprites();
}
