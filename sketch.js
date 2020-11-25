var wall,thickness;

var Bullet,speed,weight;

var lBullet,lwall;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  Bullet=createSprite(50,200,50,5);
  Bullet.velocityX=speed;
  Bullet.shapeColor=(255);

  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  
}

function draw() {
  background(0); 
  
  if(hasCollided(Bullet,wall)){
      Bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

      if(damage>10){
        wall.shapeColor=color(225,0,0);
        
      }
      if(damage<10){
        wall.shapeColor=color(0,255,0);
      }
  }
  
  drawSprites();
}

function hasCollided(lBullet,lwall){
  BulletRightEdge=lBullet.x+lBullet.width;
  wallLeftEdge=lwall.x;
  if(BulletRightEdge>=wallLeftEdge){
     return true
  }
     return false;
}