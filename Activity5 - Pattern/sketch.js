function setup() {
  createCanvas(600, 600);
  background(20);
  drawHeartGrid();
}

function drawHeartGrid() {
  let spacing = 80; // Space between hearts

  for (let x = spacing / 2; x < width; x += spacing) { // Loop for columns
    for (let y = spacing / 2; y < height; y += spacing) { // Loop for rows
      let size = 30; // Heart size
      drawHeart(x, y, size);
    }
  }
}

function drawHeart(x, y, size) {
  fill(255, 182, 193); // Baby pink color
  noStroke();
  beginShape();
  for (let t = 0; t < TWO_PI; t += 0.1) {
    let heartX = 16 * pow(sin(t), 3);
    let heartY = -(13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));
    vertex(x + heartX * (size / 16), y + heartY * (size / 16));
  }
  endShape(CLOSE);
}
