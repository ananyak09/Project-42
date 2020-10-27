 var hr, sc, mn;
 var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);

}

function draw() {
  background(0); 
  
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map( sc , 0 , 60 , 0 , 360 );
  minAngle = map( min, 0 , 60 , 0 , 360 );
  hrAngle = map( hr % 12, 0 , 12 , 0 , 360 );

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  stroke(157, 55, 204);
  strokeWeight(10);
  point(0,0);

  stroke(255, 204, 100);
  noFill();
  strokeWeight(10);
  arc(0,0,300,300,0,scAngle);

  stroke('rgb(0,255,0)');
  noFill();
  strokeWeight(10);
  arc(0,0,280,280,0,mnAngle);

  stroke(212, 42, 127);
  noFill();
  strokeWeight(10);
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}