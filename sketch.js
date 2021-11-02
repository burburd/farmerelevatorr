var canvas;
var backgroundImg;
var farmer,farmerImg,elevatorImg,elevator,cow,cowImg,cowGroup,meat,bulletGroup,meatImg,bullet,bullet2,bulletGroup2,cow2,cowGroup2,meat2,score = 0;

function preload(){
    backgroundImg=loadImage("qwertyuiop.png");
    farmerImg=loadImage("farmer.png");
    elevatorImg=loadImage("elveator.jpg")
    cowImg=loadImage("cow.png")
    meatImg=loadImage("meat.png")
}

function setup(){
    createCanvas(1200,800)
   farmer=createSprite(100,600)
   farmer.addImage(farmerImg)
   farmer.scale = 0.5

   elevator=createSprite(100,600)
   elevator.addImage(elevatorImg)
   elevator.scale = 0.9

   edges=createEdgeSprites()
   
   cowGroup= new Group()
  bulletGroup= new Group()
   cowGroup2= new Group()
   bulletGroup2= new Group()

}

function draw(){
    background(backgroundImg)
    enemy()
   bullet()
   enemy2()
   bullet2()


    if(keyDown(RIGHT_ARROW)){
        farmer.y = farmer.y +3; 
        elevator.y = elevator.y+3;    
     }
    if(keyDown(LEFT_ARROW)){
        farmer.y = farmer.y -3;
        elevator.y = elevator.y -3;
    }

     farmer.depth=elevator.depth
     farmer.depth = farmer.depth +1

     

     if(bulletGroup.isTouching(cowGroup)){
         cowGroup.destroyEach()
         
         bulletGroup.destroyEach()
         score= score+1
     }
 
     if(bulletGroup2.isTouching(cowGroup2)){
         cowGroup2.destroyEach()
         bulletGroup2.destroyEach()
         score= score+1
     }
     
     
     
     farmer.bounceOff(edges)
     elevator.bounceOff(edges)
    
     
      
     //console.log(farmer.x)
     console.log(farmer.y)


     drawSprites()
     textSize(20)
     fill('blue')
     text('score = '+score,1000,100)
     
    

}

function enemy(){
    if(frameCount%150==0){
    
    
    cow=createSprite(1000,500)
    cow.addImage(cowImg)
    cow.scale= 0.5
    cow.velocityX= -2
    cow.y=Math.round(random(600,600))
    cowGroup.add(cow)
    
    }
}


function enemy2(){
    if(frameCount%500==0){
    
    
    cow2=createSprite(1200,500)
    cow2.addImage(cowImg)
    cow2.scale= 0.5
    cow2.velocityX= -2
    cow2.y=Math.round(random(234,234))
    cowGroup2.add(cow2)
    
    }
}

function bullet(){

   if(keyWentDown(UP_ARROW)){
    meat=createSprite(farmer.x,farmer.y)
    meat.addImage(meatImg)
    meat.scale = 0.2
    meat.velocityX = 5
    bulletGroup.add(meat)
   }

}

function bullet2(){

    if(keyWentDown(DOWN_ARROW)){
     meat2=createSprite(farmer.x,farmer.y)
     meat2.addImage(meatImg)
     meat2.scale = 0.3
     meat2.velocityX = 6
     bulletGroup2.add(meat2)
    }
 
 }


















































