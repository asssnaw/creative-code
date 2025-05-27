function setup() {
  createCanvas(800, 500);
  noLoop();
}

function draw() {
  // Sky
  background(135, 206, 235); // Sky blue

  // Sun
  fill(255, 204, 0);
  noStroke();
  ellipse(700, 100, 100);

  // Clouds
  drawCloud(150, 100);
  drawCloud(300, 70);
  drawCloud(500, 120);

  // Mountains (brown triangles)
  drawMountain(200, 400, 250, 200);
  drawMountain(500, 400, 300, 180);

  // Ground
  fill(85, 107, 47);
  rect(0, 400, width, 100);

  // House
  drawHouse(350, 320);

  // Tree (closer to the house & touching ground)
  drawTree(280, 340); // Tree base at y = 340 so top ends at ~280
}

// Function to draw a triangle mountain
function drawMountain(x, baseY, width, height) {
  fill(139, 69, 19); // Brown
  triangle(
    x, baseY - height,           // Top point
    x - width / 2, baseY,        // Bottom left
    x + width / 2, baseY         // Bottom right
  );
}

// Function to draw a cloud
function drawCloud(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 60, 60);
  ellipse(x + 30, y - 10, 60, 60);
  ellipse(x + 60, y, 60, 60);
  ellipse(x + 30, y + 10, 60, 60);
}

// Function to draw a tree
function drawTree(x, y) {
  fill(101, 67, 33); // Trunk
  rect(x, y, 20, 60);

  fill(34, 139, 34); // Leaves
  ellipse(x + 10, y - 10, 60, 60);
  ellipse(x - 10, y, 60, 60);
  ellipse(x + 30, y, 60, 60);
}

// Function to draw a house
function drawHouse(x, y) {
  fill(210, 180, 140); // Base
  rect(x, y, 100, 80);

  fill(139, 69, 19); // Roof
  triangle(x, y, x + 50, y - 50, x + 100, y);

  fill(101, 67, 33); // Door
  rect(x + 40, y + 30, 20, 50);

  fill(173, 216, 230); // Windows
  rect(x + 10, y + 20, 20, 20);
  rect(x + 70, y + 20, 20, 20);
}
