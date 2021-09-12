var runner, runnerImg;
var path, pathImg;
var bar1, bar2;

function preload(){
  //pre-load images
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(350,600);
  //create sprites here
  runner = createSprite(175,500,20,20);
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.05;

  path = createSprite(175,200);
  path.addImage("path",pathImg);
  path.scale = 1;

  bar1 = createSprite(45,300,10,600);
  bar2 = createSprite(310,300,10,600);

  bar1.visible=false;
  bar2.visible=false;

  
}

function draw() {
  background(180);
  drawSprites();

  path.velocityY = 10;

  if (path.y>480){
    path.y=height/2;
  }

  if (keyDown("RIGHT_ARROW")){
    runner.x = runner.x+5;
  }

  if (keyDown("LEFT_ARROW")){
    runner.x = runner.x-5;
  }

  runner.collide(bar1);
  runner.collide(bar2);

  path.depth = runner.depth;
  runner.depth = runner.depth+1;
}