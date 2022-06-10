var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, hp1, hp2;
var hps= [];
var cave1, cave2, caveimg;
var riddle1, riddle1img;
var riddle1Answer, riddle1Ansimg, riddle1Option, riddle1Opimg;
var riddle2, riddle2img;
var riddle2Answer, riddle2Ansimg, riddle2Option, riddle2Optimg;
var centaur1, centaur2, centaurimg;
var centaur5, centaur6;
var forest1, forest2, forestimg;

function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  hp1img = loadImage("../assets/hp1.png");
  hp2img = loadImage("../assets/hp2.png");
  track = loadImage("../assets/track.jpg");
  caveimg = loadImage("../assets/cave.png");
  centaurimg = loadImage("../assets/centaur.png");
  forestimg = loadImage("../assets/forest.png");
  riddle1img = loadImage("../assets/spell1.png");
  riddle2img = loadImage("../assets/centaur1.png");
  forestRidimg = loadImage("../assets/forest1.png");
  riddle1Ansimg =loadImage("../assets/spell1Answer.png");
  riddle2Ansimg = loadImage("../assets/rid2Ans.png");
  riddle3Ansimg = loadImage("../assets/rid3Ans.png");
  riddle1Optimg = loadImage("../assets/rid1Option.png");
  riddle2Optimg = loadImage("../assets/rid2Option.png");
  riddle3Optimg = loadImage("../assets/rid3Option.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  hp1 = createSprite(100,1600,20,20);
  hp1.addImage(hp1img);
  hp1.scale= 0.3
 
  hp2 = createSprite(500,1600,20,20);
  hp2.addImage(hp2img);
  hp2.scale= 0.3
 
  cave1 = createSprite(100, 1400, 20, 20);
  cave1.addImage(caveimg);
  cave1.scale = 0.4;
  cave1.setCollider("circle", 0,0,50);
 
  cave2 = createSprite(500, 1400, 20, 20);
  cave2.addImage(caveimg);
  cave2.scale = 0.4;
  cave2.setCollider("circle", 0,0,50);
 
  centaur1 = createSprite(100, 1200, 20, 20);
  centaur1.addImage(centaurimg);
  centaur1.scale = 0.4;
  centaur1.setCollider("circle", 0,0,50);
 
  centaur2 = createSprite(500, 1200, 20, 20);
  centaur2.addImage(centaurimg);
  centaur2.scale = 0.4;
  centaur2.setCollider("circle", 0,0,50);
 
  forest1 = createSprite(100, 1000, 20, 20);
  forest1.addImage(forestimg);
  forest1.scale = 0.15;
  forest1.setCollider("circle", 0,0,50);
 
  forest2 = createSprite(500, 1000, 20, 20);
  forest2.addImage(forestimg);
  forest2.scale = 0.15;
  forest2.setCollider("circle", 0,0,50);
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  resizeCanvas(windowWidth, windowHeight);
}

function spawnCaves() {
  
  if(hp1.isTouching(cave1)){
    hp1.velocityY = 0;
    cave1.destroy();
   riddle1 = createSprite(200,1350,20,20);
   riddle1.addImage(riddle1img);
   riddle1.scale= 0.9;
   
    
   riddle1Answer = createSprite(50, 1350, 10, 10);
   riddle1Answer.addImage(riddle1Ansimg);
   riddle1Answer.scale = 0.7;
    
  riddle1Option = createSprite(300, 1380, 10, 10);
  riddle1Option.addImage(riddle1Optimg);
  riddle1Option.scale = 0.7;
  }

  if (gameState===0 && mousePressedOver(riddle1Answer)){
    riddle1.destroy();
    riddle1Answer.destroy();
    riddle1Option.destroy();
  }

  if(gameState === 1){
    hp1.destroy();
    text("you failed, kindly restart the game", 150, 1350);
  }
}

function spawnCentaur() {
  if(hp1.isTouching(centaur1)){
    hp1.velocityY = 0;
    centaur1.destroy();
   riddle2 = createSprite(200,1170,20,20);
   riddle2.addImage(riddle2img);
   riddle2.scale= 0.9;
    
   riddle2Answer = createSprite(200, 1210, 10, 10);
   riddle2Answer.addImage(riddle2Ansimg);
   riddle2Answer.scale = 0.7;
    
  riddle2Option = createSprite(300, 1230, 10, 10);
  riddle2Option.addImage(riddle2Optimg);
  riddle2Option.scale = 0.7;
  }
  if (mousePressedOver(riddle2Answer)) {
    riddle2.destroy();
    riddle2Answer.destroy();
    riddle2Option.destroy();
  }
}

function spawnForest() {
   if(hp1.isTouching(forest1)){
    hp1.velocityY = 0;
    forest1.destroy();
   forestRiddle = createSprite(200,900,20,20);
   forestRiddle.addImage(forestRidimg);
   forestRiddle.scale= 0.9;
     
   riddle3Answer = createSprite(300, 920, 10, 10);
   riddle3Answer.addImage(riddle3Ansimg);
   riddle3Answer.scale = 0.7;
     
  riddle3Option = createSprite(200, 920, 10, 10);
  riddle3Option.addImage(riddle3Optimg);
  riddle3Option.scale = 0.7;
   }
  if (mousePressedOver(riddle3Answer)) {
    forestRiddle.destroy();
    riddle3Answer.destroy();
    riddle3Option.destroy();
  }
}
}