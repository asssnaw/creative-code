let cloudX1 = 150;
let cloudX2 = 300;
let cloudX3 = 500;

let sunY = 100;
let sunDirection = 1;

let treeSway = 0;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(135, 206, 235); // Sky blue

  // Animate Sun
  sunY += sunDirection * 0.3;
  if (sunY > 105 || sunY < 95) sunDirection *= -1;

  // Sun
  fill(255, 204, 0);
  noStroke();
  ellipse(700, sunY, 100);

  // Animate clouds moving right
  cloudX1 += 0.4;
  cloudX2 += 0.3;
  cloudX3 += 0.2;

  // Reset clouds when they go off screen
  if (cloudX1 > width + 60) cloudX1 = -100;
  if (cloudX2 > width + 60) cloudX2 = -100;
  if (cloudX3 > width + 60) cloudX3 = -100;

  drawCloud(cloudX1, 100);
  drawCloud(cloudX2, 70);
  drawCloud(cloudX3, 120);

  // Mountains
  drawMountain(200, 400, 250, 200);
  drawMountain(500, 400, 300, 180);

  // Ground
  fill(85, 107, 47);
  rect(0, 400, width, 100);

  // House
  drawHouse(350, 320);

  // Tree animation (leaves sway)
  treeSway = sin(frameCount * 0.05) * 5;
  drawTree(280, 340, treeSway);
}

// Mountain
function drawMountain(x, baseY, width, height) {
  fill(139, 69, 19);
  triangle(x, baseY - height, x - width / 2, baseY, x + width / 2, baseY);
}

// Cloud
function drawCloud(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 60, 60);
  ellipse(x + 30, y - 10, 60, 60);
  ellipse(x + 60, y, 60, 60);
  ellipse(x + 30, y + 10, 60, 60);
}

// Tree with sway
function drawTree(x, y, sway) {
  fill(101, 67, 33); // Trunk
  rect(x, y, 20, 60);

  fill(34, 139, 34); // Leaves (sway with sine wave)
  ellipse(x + 10 + sway, y - 10, 60, 60);
  ellipse(x - 10 + sway, y, 60, 60);
  ellipse(x + 30 + sway, y, 60, 60);
}

// House
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
