
//This class draws groups of lines using a class.
//In this class, the startX, startY, endX, endY, angle, numLines, color, space, strokeWeight
//are used as parameters.
class lineGroup {
  constructor(startX, startY, endX, endY, angle, numLines, color, space, strokeWeight) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.angle = angle;
    this.numLines = numLines;
    this.color = color;
    this.lineSpacing = space; 
    this.strokeWeight = strokeWeight;
  }

  draw() {
    stroke(this.color);
    strokeWeight(this.strokeWeight);

 
    for (let i = 0; i < this.numLines; i++) {
      
      let offsetX = cos(this.angle) * this.lineSpacing * i;
      let offsetY = sin(this.angle) * this.lineSpacing * i;

      line(this.startX + offsetX, this.startY + offsetY, this.endX + offsetX, this.endY + offsetY);
    }
  }
}

//Storing the line groups into an array.
let groups = [];

function setup() {
  createCanvas(1000, 1000);
  background(255);

  groups.push(new lineGroup(600, 50, 100, 400, radians(80), 13, color(200,200,0),1, 5));  
  groups.push(new lineGroup(100, 100, 400, 100, radians(0), 1, color(0),100, 5));   
  groups.push(new lineGroup(200, 200, 500, 300, -radians(30), 15, color(0),20,1));   
  groups.push(new lineGroup(150, 500, 450, 200, -radians(0), 20, color(150),10, 3));  

  
}


function draw() {
  for (let group of groups) {
    group.draw();
  }
}
