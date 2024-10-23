
// Define a LineGroup class to manage the properties of each group of parallel lines
class LineGroup {
  constructor(startX, startY, endX, endY, angle, numLines, color) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.angle = angle;
    this.numLines = numLines;
    this.color = color;
    this.lineSpacing = 10; // Spacing between lines
  }

  draw() {
    stroke(this.color);
    strokeWeight(1);

    // Loop to create multiple lines in the group
    for (let i = 0; i < this.numLines; i++) {
      // Calculate new positions for each line based on the loop index
      let offsetX = cos(this.angle) * this.lineSpacing * i;
      let offsetY = sin(this.angle) * this.lineSpacing * i;

      line(this.startX + offsetX, this.startY + offsetY, this.endX + offsetX, this.endY + offsetY);
    }
  }
}

let groups = [];

function setup() {
  createCanvas(600, 600);
  background(255);

  // Create multiple LineGroup objects for different sections of the artwork
  groups.push(new LineGroup(100, 100, 400, 100, radians(0), 20, color(0)));    // Black horizontal lines
  groups.push(new LineGroup(200, 200, 500, 300, radians(30), 15, color(0)));   // Diagonal black lines
  groups.push(new LineGroup(150, 500, 450, 550, radians(0), 20, color(150)));  // Gray horizontal lines

  // Gray lines breaking the pattern
  groups.push(new LineGroup(100, 300, 500, 350, radians(0), 5, color(150)));   // Gray parallel line section
}

function draw() {
  // Draw each group of lines
  for (let group of groups) {
    group.draw();
  }
}
