


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
//let groups = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  /*let baseLayerStartX=0.3*width;
  let baseLayerStartY=0.8*height;
  let baseLayerEndX=0.7*width;
  let baseLayerEndY=0.2*height;
  let baseLayerAngle=-radians(PI/3);


  groups.push(new lineGroup(baseLayerStartX, baseLayerStartY, baseLayerEndX, baseLayerEndY,baseLayerAngle, random(20), random(100,200),20,3));



  groups.push(new lineGroup(600, 50, 100, 400, radians(80), 13, color(200,200,0),1, 5));  
  */
  //groups.push(new lineGroup(100, 100, 400, 100, radians(0), 1, color(0),100, 5));   
  //groups.push(new lineGroup(200, 200, 500, 300, -radians(30), 15, color(0),20,1));   
  //groups.push(new lineGroup(150, 500, 450, 200, -radians(0), 20, color(150),10, 3));  

  drawLineGroups();
  
}


function draw() {
  for (let group of groups) {
    group.draw();
  }
  
}

function drawLineGroups() {
  // Clear existing groups when resizing
  groups = [];
  
  let baseLayer1StartX = 0.15 * windowWidth;
  let baseLayer1StartY = 0.75 * windowHeight;
  let baseLayer1EndX = 0.544 * windowWidth;
  let baseLayer1EndY = 0.4 * windowHeight;
  let baseLayer1Angle = PI / 6.78;

  let baseLayer2StartX = 0.582 * windowWidth;
  let baseLayer2StartY = 0.325 * windowHeight;
  let baseLayer2EndX = 0.72 * windowWidth;
  let baseLayer2EndY = 0.203 * windowHeight;
  let baseLayer2Angle = PI / 6.78; 

  let baseLayer3StartX = 0.2314 * windowWidth;
  let baseLayer3StartY = 0.814 * windowHeight;
  let baseLayer3EndX = 0.83 * windowWidth;
  let baseLayer3EndY = 0.285 * windowHeight;
  let baseLayer3Angle = PI / 6.78; 


  groups.push(new lineGroup(baseLayer1StartX, baseLayer1StartY, baseLayer1EndX, baseLayer1EndY, baseLayer1Angle, 3, color(100,0,200), 10, 3));
  groups.push(new lineGroup(baseLayer2StartX, baseLayer2StartY, baseLayer2EndX, baseLayer2EndY, baseLayer2Angle, 3, color(100,0,200), 10, 3));
  groups.push(new lineGroup(baseLayer3StartX, baseLayer3StartY, baseLayer3EndX, baseLayer3EndY, baseLayer3Angle, 6, color(100,0,200), 5, 3));
  //groups.push(new lineGroup(600, 50, 100, 400, radians(80), 13, color(200, 200, 0), 1, 5));
}

function windowResized() {
  // Adjust canvas size and redraw the shape when the window is resized
  resizeCanvas(windowWidth, windowHeight);
  drawLineGroups();
}