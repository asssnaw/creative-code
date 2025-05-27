let apples = [];
let score = 0;
let lives = 5;
let basketWidth = 120;
let basketHeight = 40;

let catchEffects = []; // catch animations
let gameOver = false;
let playAgainButton;

function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  textFont("Georgia");

  // Create Play Again button 
  playAgainButton = createButton('Play Again');
  playAgainButton.size(120, 50);
  playAgainButton.style('font-size', '20px');
  playAgainButton.style('background-color', '#ffd1dc'); // pastel pink
  playAgainButton.style('color', '#333');               // dark text  
  playAgainButton.style('border', 'none');
  playAgainButton.style('border-radius', '10px');
  playAgainButton.style('cursor', 'pointer');
  playAgainButton.hide();
  playAgainButton.mousePressed(resetGame);
}

function draw() {
  background(230, 250, 230); // soft background

  // Title and Scoreboard
  fill(50, 50, 80);
  textSize(26);
  textAlign(CENTER);
  text("Catch the Apples 🍎", width / 2, 40);

  textAlign(LEFT);
  textSize(18);
  text("Score: " + score, 40, 70);
  text("Lives: " + lives, width - 140, 70);

  // Instructions
  if (!gameOver) {
    fill(80);
    textSize(16);
    textAlign(CENTER);
    text("Move your mouse left and right to move the basket", width / 2, height - 10);
  }

  if (!gameOver) {
    // Limit basket movement within canvas
    let basketX = constrain(mouseX, basketWidth / 2, width - basketWidth / 2);
    drawBasket(basketX, height - 30);

    // Add apples every 35 frames
    if (frameCount % 35 === 0) {
      apples.push(new Apple());
    }

    // Move and show apples
    for (let i = apples.length - 1; i >= 0; i--) {
      apples[i].fall();
      apples[i].show();

      // Catching condition
      if (
        apples[i].y > height - 50 &&
        apples[i].x > basketX - basketWidth / 2 &&
        apples[i].x < basketX + basketWidth / 2
      ) {
        score++;

        // Add a catch effect at apple position
        catchEffects.push(new CatchEffect(apples[i].x, apples[i].y));

        apples.splice(i, 1);
      }
      // Missed apple
      else if (apples[i].y > height + 20) {
        lives--;
        apples.splice(i, 1);
      }
    }

    // Draw catch effects and update them
    for (let i = catchEffects.length - 1; i >= 0; i--) {
      catchEffects[i].update();
      catchEffects[i].show();
      if (catchEffects[i].finished()) {
        catchEffects.splice(i, 1);
      }
    }

    // Check Game Over
    if (lives <= 0) {
      gameOver = true;
      noLoop();
      playAgainButton.show();

      // Center the button on the canvas
      playAgainButton.position(
        width / 2 - playAgainButton.width / 2,
        height / 2 - playAgainButton.height / 2
      );
    }
  } else {
    // Dark overlay to dull background
    fill(0, 0, 0, 150);
    rect(width / 2, height / 2, width, height);

    // Game Over text on top of overlay
    fill(255, 100, 100);
    textSize(42);
    textAlign(CENTER);
    text("Game Over!", width / 2, height / 2 - 40);
    textSize(20);
    text("Click 'Play Again' to restart", width / 2, height / 2 + 20);
  }
}

// Apple class
class Apple {
  constructor() {
    this.x = random(50, width - 50);
    this.y = 0;
    this.size = random(25, 35);
    this.speed = random(3, 6);
    this.color = color(255, random(30, 60), random(30, 60)); // shades of red
  }

  fall() {
    this.y += this.speed;
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);

    // Apple stem
    stroke(80, 42, 42);
    strokeWeight(2);
    line(this.x, this.y - this.size / 2 + 2, this.x, this.y - this.size / 2 - 6);
  }
}

// CatchEffect class for visual effect on catching apple
class CatchEffect {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.alpha = 255;
  }

  update() {
    this.size += 3;       // Grow effect
    this.alpha -= 15;     // Fade out
  }

  show() {
    noFill();
    stroke(255, 150, 0, this.alpha); // Orange glow
    strokeWeight(3);
    ellipse(this.x, this.y, this.size, this.size);
  }

  finished() {
    return this.alpha <= 0;
  }
}

// Realistic basket drawing
function drawBasket(x, y) {
  noStroke();

  // Basket base
  fill(139, 69, 19); // brown
  rect(x, y, basketWidth, basketHeight, 12);

  // Basket weave lines
  stroke(100, 50, 20);
  strokeWeight(1.5);
  for (let i = -basketWidth / 2 + 10; i < basketWidth / 2; i += 10) {
    line(x + i, y - basketHeight / 2, x + i, y + basketHeight / 2);
  }
  noStroke();
}

function resetGame() {
  score = 0;
  lives = 5;
  apples = [];
  catchEffects = [];
  gameOver = false;
  loop();
  playAgainButton.hide();
}
