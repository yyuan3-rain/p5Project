

let like_v3GIF;
let like;
let likenumGIF;
let test;
let insta;
let fb;
let laugh;

function preload(){
  like_v3GIF = loadImage("image/like_v3.gif")
  like = loadImage("image/like.gif")
  likenumGIF = loadImage("image/likenum.gif")
  test = loadImage("image/test.png")
  insta = loadImage("image/insta.png")
  fb = loadImage("image/facebook.png")
  laugh = loadImage("image/laugh.gif")
}
function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);

  //background(random(255), random(255), random(255));

  //print(windowWidth);
  rectMode (CENTER);
  imageMode(CENTER);
  //print(random(300));
}

function draw() {


  if (mouseX > windowWidth/2){
    background ('rgba(100%,0%,100%,0.5)');
    image (insta,500,600,300,300);
    image (like, mouseX,mouseY,240,200);
    print(mouseX);
  } else {
    background (59,89,152);
    stroke(59,89,152);
    strokeWeight(random(20,70));
    //fill('#fae');
    fill(255,255,255);
    rect(800,400,320,320);
    image (fb,800,430,300,300);
    image (likenumGIF,880,300,70,70);
    image (laugh, mouseX,mouseY,200,200);
    //fill(0,20,0)
    //textSize(50);
    //text ("like my picture");
  }
  strokeWeight(10);
  stroke (0,0,0)
  if(keyIsPressed == true){
    line(380, 420, 630, 775)
    line(600,420,400,775)
  }
  if (mouseIsPressed){
    stroke(0,0,0);
    strokeWeight(random(10,60));
    fill(255,255,255);
    ellipse(random(2000),300,200,200);

    stroke(0,0,0);
    strokeWeight(10);
    fill(0,0,0);
    ellipse(random(2000),300,50,50);

  } else {

  }


  //background('rgba(100%,0%,100%,0.5)');
  smooth();
  //




  //point is only x,y coordinate
  // put drawing code here


  //style for the point
  //strokeWeight(50);
  //fill(120);
  //stroke(40,200,100);
  //strokeWeight(10);
  //point(mouseX,mouseY);






}
