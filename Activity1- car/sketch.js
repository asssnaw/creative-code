function setup() {
  createCanvas(600, 400);
  background(300);

  // Car body 
  // baby pink
  fill(255, 182, 193);
  // bottom body
  rect(150, 200, 300, 75);
  // top body
  rect(200, 150, 200, 75); 

  
  
  
  // Door handle - back side
  fill(100);
  // handle with curved corner
  rect(310, 230, 20, 5, 2);      
  
  
  
  
  // Door handle- front side
  fill(100);
  rect(270, 230, 20, 5, 2); 
  
  
  

  // Windows
  // blue
  fill(135, 206, 250);
  // front window
  rect(210, 160, 80, 50);  
  // rare window
  rect(310, 160, 80, 50);         
  
  
  
  
  // Verticle Line between the windows 
  stroke(50);                     
  strokeWeight(2);
  line(300, 150, 300, 275);      
  noStroke();

  
  
  

  // Wheels
  fill(0);
  // front wheel
  ellipse(200, 280, 60, 60);      
  // rear wheel
  ellipse(400, 280, 60, 60);      
  
  
  
  
  
  // Small grey circles in wheel
  fill(169);
  // front wheel
  ellipse(200, 280, 25, 25);   
  // rear wheel
  ellipse(400, 280, 25, 25);      

  
  
  
  // Headlights
  // yellow
  fill(255, 255, 0);
  // front light
  ellipse(150, 240, 25, 35);
  // red
  fill(255, 100, 100);
  //rear light
  ellipse(450, 220, 20, 30);     
}
