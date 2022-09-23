var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

var zombie, zombieImg;
function preload(){
  pathImg = loadImage("./assets/background.jpg");
  boyImg = loadAnimation("./assets/davefrente.png","./assets/daveizq.png");
  zombieImg = loadImage("./assets/zombie.png");
}

function setup(){
  
createCanvas(560,560);
  
// Fondo en movimiento
path=createSprite(280,280);
path.addImage(pathImg);
//path.velocityY = 4;
//path.scale=1.2;


//Creando el niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.2;
boy.addAnimation("JakeRunning",boyImg);
  
//Crear límite izquierdo
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//Crear límite derecho
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  //path.velocityY = 4;
  
  // Niño moviéndose en el eje X con el mouse
  if(keyDown(RIGHT_ARROW)){
    boy.x = boy.x + 2;
  }
  if(keyDown(LEFT_ARROW)){
    boy.x = boy.x - 2;
  }
  if(keyDown(UP_ARROW)){
    boy.y = boy.y - 2;
  }
  if(keyDown(DOWN_ARROW)){
    boy.y = boy.y + 2;
  }
 
 
 
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //El código para restablecer el fondo
  /*if(path.y > 300 ){
    path.y = height/8;
  }*/
  spawnZombie();
  drawSprites();
}
function spawnZombie(){
  if(frameCount % 120 === 0){
    zombie = createSprite(200,300,30,30)
    zombie.addImage (zombieImg)
    zombie.scale=0.2
    zombie.x=Math.round(random(20,500))
    zombie.y=Math.round(random(20,500))
    
  }
}
