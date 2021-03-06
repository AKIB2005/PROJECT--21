var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2)
  speed=random(223,321)
  weight=random(500,1400)
  thickness=random(30,52)
}

function draw() {
  background(80,80,80); 
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 *weight*speed*speed/22509;
    if(deformation>180)
      {
        car.shapeColor=color(255,0,0);
      }
      if(deformation<180 && deformation>100)
      {
        car.shapeColor=color(230,230,0);
      }

      if(deformation<100)
      {
        car.shapeColor=color(0,255,0);
      }
} 
  drawSprites();
}
function hasColloded( lbullet, lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bullrtRightEdge>=wallLeftEdge)
  {
    return true 
  }
  return false;
}
if(hasCollided(bullet, wall))
{
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    
    
      if(damage>10)
     {
       wall.shapeColor=color(255,0,0);
     }


     if(damage<10)
     {
       wall.shapeColor=color(0,255,0);
     }

}
