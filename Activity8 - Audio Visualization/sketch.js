let song, fft;
let whiteKeys = [];
let blackKeys = [];
let keyWidth;
let bgHue = 0;
let sparkles = [];

function preload() {
  song = loadSound('music.mp3'); 
}

function setup() {
  createCanvas(windowWidth, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  fft = new p5.FFT();
  song.play();

  keyWidth = width / 52;

  for (let i = 0; i < 52; i++) {
    whiteKeys.push({ x: i * keyWidth, index: i });
    if ([0, 1, 3, 4, 5].includes(i % 7)) {
      blackKeys.push({ x: i * keyWidth + keyWidth * 0.65, index: i });
    }
  }

  for (let i = 0; i < 100; i++) {
    sparkles.push(new Sparkle());
  }
}

function draw() {
  // Pastel background
  bgHue = (bgHue + 0.2) % 360;
  background(bgHue, 40, 95);

  let spectrum = fft.analyze();

  // White keys
  for (let i = 0; i < whiteKeys.length; i++) {
    let k = whiteKeys[i];
    let amp = spectrum[i * 2] || 0;
    let h = map(amp, 0, 255, 0, -100);

    fill(0, 0, 100);
    rect(k.x, 0, keyWidth, height);

    fill(200, 80, 100, 0.6);
    rect(k.x, height, keyWidth, h);
  }

  // Black keys
  for (let i = 0; i < blackKeys.length; i++) {
    let k = blackKeys[i];
    let amp = spectrum[i * 2 + 1] || 0;
    let h = map(amp, 0, 255, 0, -60);

    fill(0);
    rect(k.x, 0, keyWidth * 0.7, height * 0.6);

    fill(60, 100, 100, 0.5);
    rect(k.x, height * 0.6, keyWidth * 0.7, h);
  }

  // Sparkle effect
  for (let s of sparkles) {
    s.update();
    s.show();
  }
}

class Sparkle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(2, 5);
    this.opacity = random(50, 100);
    this.speed = random(0.2, 1);
    this.hue = random(0, 360);
  }

  update() {
    this.y -= this.speed;
    this.opacity -= 0.5;
    if (this.opacity < 0) this.reset();
  }

  show() {
    fill(this.hue, 80, 100, this.opacity);
    ellipse(this.x, this.y, this.size);
  }
}
