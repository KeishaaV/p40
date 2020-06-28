var canvas, backgroundImage;

var gameState = 0;
var distance = 0;

var car1, car2;

var car= new Group();

var rand; 

var life= 5;
var score= 0;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
}

function draw(){
 text("Life:" +life,windowWidth*9/ 10, windowHeight/10);
 text("Score:"+score,windowWidth/10, windowHeight/10 );

 score= Math.round(frameCount/60);

  if (keyDown(UP_ARROW)){
    distance+=50;
  }

  if(car.isTouching(car1)){
    life--;
  }
}

function spawnCars(){
  rand= Math.round(random(0,800))
  if (frameCount/120){
    car2= createSprite(rand, windowHeight+100);
    car2.addImage(car2_img);
    car2.velocityY= 50;
    car.add(car2);
  }
}
