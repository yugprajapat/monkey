var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground,rand
var score;
var survivaltime = 0;

function preload(){
  
  
  monkey_running =              loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey = createSprite(150,515,10,10);
  monkey.addAnimation("running",monkey_running);
    monkey.scale = 0.2;
  
  ground = createSprite(400,580,900,10);
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}

function draw() {
  createCanvas(650,585);
  background("blue");
  
  monkey.collide(ground);
  
  if(gameState === PLAY){
      ground.velocityX = -4;
  ground.x = ground.width/2;

  monkey.changeAnimation("running",monkey_running);
   
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyDown("space") && monkey.y >= 400){
    monkey.velocityY = -14;
  }
    
  obs();
  bana();
    
    text("survival time = "+survivaltime,500,50);
  survivaltime = survivaltime + Math.round(frameCount/577.5);
    
  if(FoodGroup.isTouching(monkey)){
    
   FoodGroup.destroyEach();
    survivaltime = survivaltime + 10;
     }
     }
  
   
  if(gameState === END){
    obstacleGroup.destroyEach();
    FoodGroup.destroyEach();
    obstacleGroup.velocityX = 0;
    FoodGroup.velocityX = 0;
    
  }
  
  drawSprites();
}

function obs(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(600,550,10,40);
   obstacle.velocityX = -(6);
   obstacle.addImage(obstacleImage);
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
   
   obstacleGroup.add(obstacle); 
 }
}
function bana(){
  if (frameCount % 100 === 0){
  
  banana = createSprite(600,300,10,10); 
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -6;
  banana.lifetime = 100;
  
    FoodGroup.add(banana);
  }
}