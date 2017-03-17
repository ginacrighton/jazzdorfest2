/*
 * twisted lines
 *
 * @author aadebdeb
 * @date 2017/02/04
 edited by gina crighton
 */

var colors;
var type;

function setup() {
  createCanvas(600,600);
  
  colors = [
    color(247,247,69),
    color(255,54,54),
    color(94,120,252)
  ];
  
  type = 0;
}

function draw() {
  blendMode(BLEND);
  
  if(type == 0) {
    background(0);
    blendMode(EXCLUSION);
  } else {
    background(183,224,243);
  }
  noFill();
  strokeWeight(20);
  for(var i = 0; i < 3; i++) {
    stroke(colors[i]);
    beginShape();
    for(var w = -20; w < width + 20; w += 5) {
      var h = height / 2;
      h += 200 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
      curveVertex(w, h);
    }    
    endShape();
  }
  
}

function mousePressed() {
  if(type == 0) {
    type = 1;
  } else {
    type = 0;
  }
}
