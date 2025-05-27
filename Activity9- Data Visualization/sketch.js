let games = [
  "Minecraft", "Fortnite", "Roblox", "Valorant", "COD",
  "PUBG", "GTA V", "League of Legends", "Apex Legends", "Among Us"
];

let percentages = [85, 70, 80, 45, 50, 90, 80, 40, 35, 60];

let colors = [];

function setup() {
  createCanvas(1000, 550);
  textFont('Arial');
  textSize(12);
  textAlign(CENTER, BOTTOM);

  // Generate pastel colors
  for (let i = 0; i < games.length; i++) {
    colors.push(color(random(180, 255), random(180, 255), random(180, 255)));
  }
}

function draw() {
  background(30);
  fill(255);
  textSize(22);
  text("Percentage of Game Popularity", width / 2, 40);

  let margin = 60;
  let barWidth = (width - 2 * margin) / games.length;
  let maxHeight = 100;

  for (let i = 0; i < games.length; i++) {
    let barHeight = map(percentages[i], 0, maxHeight, 0, height - 150);
    let y = height - margin;
    let x = margin + i * barWidth;

    // Bar
    fill(colors[i]);
    stroke(255);
    strokeWeight(1);
    rect(x, y - barHeight, barWidth - 10, barHeight, 6);

    // Game label (horizontal now)
    noStroke();
    fill(255);
    textSize(10);
    textAlign(CENTER, TOP);
    text(games[i], x + (barWidth - 10) / 2, y + 5);

    // Percentage label
    textSize(12);
    textAlign(CENTER, BOTTOM);
    text(percentages[i] + "%", x + (barWidth - 10) / 2, y - barHeight - 8);
  }
}
