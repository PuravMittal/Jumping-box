//creates variable
var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    //preloads music
    music = loadSound("music.mp3");
}

function setup(){
    
    //creates canvas 
    canvas = createCanvas(800,600);

    //creates bouncng blocks
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "green";

    //creates ball that bounces on blocks
    ball = createSprite(random(20,750),100, 20,20);
    //gives color to block
    ball.shapeColor = "white";
    // add velocityX and velocityY to block
    ball.velocityX = 3;
    ball.velocityY = 3; 
}

function draw() {
    background(rgb(169,169,169));

    //bounce off ball from the block1 
    if(isTouching(ball,block1)){
        //gives color of block to ball
        ball.shapeColor = block1.shapeColor;
        bounceOff(ball,block1);
        //plays music
        music.play();
    }
    else if(isTouching(ball,block2)){
        ball.shapeColor = block2.shapeColor;
        //stops ball's velocity
        ball.velocityX = 0;
        ball.velocityY = 0;
        //stops music
        music.stop();
    }  
    else if(isTouching(ball,block3)){
        ball.shapeColor = block3.shapeColor;
        music.stop();
        bounceOff(ball,block3);
    } 
   else if(isTouching(ball,block4)){
        ball.shapeColor = block4.shapeColor;
        music.stop();
        bounceOff(ball,block4);
    }    
      
    //creates edges 
    edges=createEdgeSprites();
    //makes the ball bounce off the edges
    ball.bounceOff(edges);
     
    drawSprites();
}