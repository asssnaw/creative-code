function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 30, 50);
  
  
  fill(100, 255, 100);
  ellipse(200, 150, 120, 160);

  
  fill(255,0,0);
  ellipse(170, 140, 30, 60);
  ellipse(230, 140, 30, 60);

 
  fill(100, 255, 100);
  ellipse(200, 230, 80, 100);
  
  fill(255,0,0);
  arc(200, 170, 40, 20, 0, PI); 

  
  stroke(100, 255, 100);
  strokeWeight(10);
  line(160, 250, 120, 300);
  line(240, 250, 280, 300);

  
  line(190, 200, 180, 360);
  line(210, 200, 220, 360);

  
  strokeWeight(5);
  line(170, 100, 150, 50);
  line(230, 100, 250, 50);

 
  fill(255, 0, 0);
  noStroke();
  ellipse(150, 50, 10, 10);
  ellipse(250, 50, 10, 10);

  fill(255, 0, 0); 
  triangle(170, 80, 200, 60, 200, 90); // Left side of bow
  triangle(230, 80, 200, 60, 200, 90); // Right side of bow
  fill(255, 0, 0);
  ellipse(200, 80, 15, 15); 
}
