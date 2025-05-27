let font;
let points;
let shadowPoints;
let fontSize = 100;
let amplitude = 8;
let frequency = 0.05;
let shadowOffsetX = 4;
let shadowOffsetY = 4;

function preload() {
  font = loadFont('SourceSansPro-Regular.otf'); 
}

function setup() {
  createCanvas(1400, windowHeight); // Increased canvas width
  textFont(font);
  textSize(fontSize);
  textAlign(CENTER, CENTER);

  // Measure text width for centering
  let textW = font.textBounds('BATHSPA UNIVERSITY', 0, 0, fontSize).w;

  // Convert text to points
  let xPos = (width - textW) / 2;
  points = font.textToPoints('BATHSPA UNIVERSITY', xPos, height / 2, fontSize, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });

  shadowPoints = font.textToPoints('BATHSPA UNIVERSITY', xPos + shadowOffsetX, height / 2 + shadowOffsetY, fontSize, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
}

function draw() {
  // Animated gradient background
  setGradientBackground();

  let time = millis() / 1000;

  // Shadow dots
  fill("#B0BEC5");
  noStroke();
  for (let pt of shadowPoints) {
    let wave = sin(pt.x * frequency + time) * amplitude;
    ellipse(pt.x, pt.y + wave, 4, 4);
  }

  // Main red dots
  fill("#E53935");
  for (let pt of points) {
    let wave = sin(pt.x * frequency + time) * amplitude;
    ellipse(pt.x, pt.y + wave, 4, 4);
  }
}

function setGradientBackground() {
  let from = color(255, 204, 229);
  let to = color(179, 229, 252);
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(from, to, sin(inter * PI + frameCount * 0.01));
    stroke(c);
    line(0, y, width, y);
  }
}
