var score=0;
var PLAY = 1;
var END = 0;
 var man=[];
var gameState = PLAY;
var trex_running,man_running,dino_running;
var trex,dino,trees,treesGroup;
var form;
function preload(){

  man_running= loadAnimation("images/man1.png","images/man3.png","images/man3.png","images/man4.png");
  dino_running= loadAnimation("images/dino1.png","images/dino3.png","images/dino3.png","images/dino4.png")
  trex_running = loadAnimation("images/trex1.png","images/trex3.png","images/trex3.png","images/trex4.png");

  
  gameOverImage = loadImage("images/gameOver.jpg");
  tree = loadImage("images/tree.png");
  
 

  backgroundImage = loadImage("images/bg.jpg");

}

function setup() {
  createCanvas(1300,700);
   man=createSprite(500,425);
   man.scale=0.5;
   man.addAnimation("mans",man_running)
   
   
   
   treesGroup= new Group;
   
   

   ground = createSprite(650,500,1400,20);
   
   

   invisibleGround = createSprite(650,520,1400,10);
   invisibleGround.visible = false;


   

   trex=createSprite(200,400);
   trex.scale=0.7
   trex.collide(invisibleGround);
   trex.setCollider("rectangle",20,30,trex.width,trex.height);
   trex.debug = true;
   trex.addAnimation("trexs",trex_running);
  

   dino=createSprite(200,700);
   dino.scale=0.5
   dino.addAnimation("dions",dino_running);
   

   
   //trex.addAnimation("running", trex_running);
   //scale=0.3;
   
  
}

function draw() {
 background(backgroundImage);  
 textSize(20)
 fill("red")
 text("Score: "+ score, 1100,50);


 if(gameState === PLAY){

  //gameOver.visible = false;
  //restart.visible = false;
  
  backgroundImage.velocityX = -(4 + 3* score/100)
  //scoring
  score = score + Math.round(getFrameRate()/100);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
      trex.velocityY = -12;
     // jumpSound.play();
  } 
  
  //add gravity
  //trex.velocityY = trex.velocityY + 0.8

  //spawn the clouds


  //spawn obstacles on the ground
  spawnTree();
  
  if(treesGroup.isTouching(trex)){
      //trex.velocityY = -12;
      //jumpSound.play();
      gameState = END;
     
      //dieSound.play()
    
  }
}
 else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    invisibleGround.velocityY=0;
    invisibleGround.velocityX=0;
    //trees.lifetime(-1);
    gameOver = createSprite(750,700,300,20);
    gameOver.addImage(gameOverImage);
     
     

 }
 
  drawSprites();
}


function spawnTree(){
  if (frameCount % 75 === 0){
    trees=createSprite(800,400);
    trees.addImage(tree);
    trees.velocityX = -(6 + score/100);
    treesGroup.add(trees);
     //generate random obstacles
  
    
     //assign scale and lifetime to the obstacle           
     trees.scale = 1;
     trees.lifetime = 300;
    
    //add each obstacle to the group
     
  }
 }

