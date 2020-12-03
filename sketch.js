var Car,Wall

function setup() {
  createCanvas(1600,400);
  Car = createSprite(200, 200, 30, 30);
  Car.shapeColor = "white";
 
  Wall= createSprite(1300,200,30,100)
  Wall.shapeColor= "white";
}

function draw() {
  background(0,0,0); 
Car.velocityX=3
  
if(istouching(Car,Wall)){
 Car.shapeColor="red"
 Car.velocityX=0
}
else{
 
  Car.shapeColor="white"
 
}
  drawSprites();
}