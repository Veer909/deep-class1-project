var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg1 = loadAnimation("ship-2.png","ship-1.png");
 
}

function setup(){
  createCanvas(400,400);
  

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;
  
  
  ship = createSprite(200,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  edges=createEdgeSprites()
}

function draw() {
  background("blue");
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
 if (keyDown("enter")) {
ship.velocityX=5
 }
  
 if (keyDown("left")) { 
  ship.velocityX=-5
   }
  
   if (keyDown("space")) { 
    ship.velocityX=0
     }

     if(sea.x < 0){
    sea.x=sea.width/2
     }
 ship.collide(edges)

    drawSprites();
}
