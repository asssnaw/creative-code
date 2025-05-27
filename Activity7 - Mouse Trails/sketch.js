let trail = [];
let sparkleCount = 100;
let sparkles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);

  // Initialize sparkles
  for (let i = 0; i < sparkleCount; i++) {
    sparkles.push({
      x: random(width),
      y: random(height),
      size: random(2, 5),
      speed: random(0.01, 0.03),
      phase: random(TWO_PI)
    });
  }
}

function draw() {
  background(0);

  // Draw animated sparkles in the background
  drawSparkles();

  // Add mouse position to trail
  trail.push({ x: mouseX, y: mouseY, hue: frameCount % 360 });

  if (trail.length > 80) {
    trail.shift();
  }

  // Draw glowing trail
  for (let i = 0; i < trail.length; i++) {
    let t = trail[i];
    let size = map(i, 0, trail.length, 80, 20);
    let alpha = map(i, 0, trail.length, 100, 50);

    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = color(t.hue, 80, 100, alpha);
    fill(t.hue, 80, 100, alpha);
    ellipse(t.x, t.y, size);
  }

  // Reset shadow after drawing glow
  drawingContext.shadowBlur = 0;
}

// Draw background animated sparkles
function drawSparkles() {
  for (let s of sparkles) {
    let twinkle = sin(frameCount * s.speed + s.phase) * 2;
    let sparkleSize = s.size + twinkle;

    fill(0, 0, 100, 80);
    ellipse(s.x, s.y, sparkleSize);
  }
}
