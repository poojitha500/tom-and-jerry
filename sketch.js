var cat1, cat2, cat3, cat4, garden, mouse1, mouse2, mouse3, mouse4, catImg, gardenImg, mouseImg,
 initialcatImg, finalcatImg, initialmouseImg, finalmouseImg;
function preload() {
    //load the images here
gardenImg = loadImage("garden.png");
initialcatImg = loadAnimation("cat1.png");
catImg = loadAnimation("cat2.png","cat3.png");
finatcatImg = loadAnimation ("cat4.png");
initialmouseImg=loadImage("mouse1.png");
mouseImg=loadAnimation("mouse2.png","mouse3.png");
finalmouseImg=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(200,200,1000,800);
garden.addImage("background",gardenImg);
garden.scale=0.5;

var cat = createSprite(800,700,10,10);
cat.addImage("catImage",initialcatImg);
cat.scale=0.5;

var mouse= createSprite(200,700,10,10);
mouse.addImage("mouseImage",initialmouseImg);
mouse.scale=0.5;
}

function draw() {

    background(255);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        
    cat.addImage("finalImg",finalcatImg);
    cat.changeAnimation("finalImg");
    mouse.addImage("finalmouseImg",finalmouseImg);
    mouse.changeAnimation("finalmouseImg");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.x=cat.x-5;
    cat.addImage("catRunning",catImg);
    cat.changeAnimation("catRunning");
    mouse.addImage("mouseRunning",mouseImg);
    mouse.changeAnimation("mouseRunning");
}

}
