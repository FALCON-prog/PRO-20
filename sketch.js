var bgImg, bg1Img, bg2Img;
var backgroundImg;
var smImg, sm1Img , sm2Img;
function preload() {
    //load the images here
    bgImg = loadAnimation("images/cat1.png");
    bg1Img = loadAnimation("images/cat2.png","images/cat3.png");
    bg2Img = loadAnimation("images/cat4.png");
    backgroundImg = loadImage("images/garden.png");
    smImg = loadAnimation("images/mouse1.png");
    sm1Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    sm2Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom = createSprite(800,650,50,50);
   jerry = createSprite(100,600,20,20);
   tom.addAnimation("tomSleeping",bgImg);
   tom.scale = 0.3;
   jerry.addAnimation("jerryHappy",sm2Img);
   jerry.scale = 0.2;
}

function draw(){
    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomSitting",bg2Img);
        tom.changeAnimation("tomSitting");
        jerry.addAnimation("jerryNormal",smImg);
        jerry.changeAnimation("jerryNormal");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     tom.velocityX = -2;
     tom.addAnimation("tomRunning",bg1Img);
     tom.changeAnimation("tomRunning");
     jerry.addAnimation("jerryTeasing",sm1Img);
     jerry.changeAnimation("jerryTeasing");
 }

}
