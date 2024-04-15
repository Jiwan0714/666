// https://coolors.co/227c9d-17c3b2-ffcb77-fef9ef-fe6d73
let bg = "#263752";
let colors = ["#227c9d", "#ffcb77", "#fe6d73"];
let karada = "#fef9ef";

class MovingObject {
  constructor(x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = random(20, 60);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width + this.size) {
      this.x = -this.size;
    }
    if (this.x < -this.size) {
      this.x = width + this.size;
    }
    if (this.y > height + this.size) {
      this.y = -this.size;
    }
    if (this.y < -this.size) {
      this.y = height + this.size;
    }
  }

  display() {
    let d = this.size;

    push();
    translate(this.x, this.y);

    shearX(10);
    shearY(-10);

    drawingContext.setLineDash([1, d / 16]);
    stroke(karada);
    strokeWeight(d / 16);

    //   カオ
    fill(karada);
    rect(-d / 4, -d / 4, d / 4, d / 4);
    arc(0, -d / 4, d / 2, d / 2, 180, 270, PIE);
    arc(0, -d / 4, d / 2, d / 2, 270, 360, PIE);

    //　 アシ      
    fill(karada);
    arc(-d / 4, d / 1.5, d / 4, d / 4, 180, 270, PIE);

    //　カラダ
    fill(karada);
    rect(-d / 4, 0, d / 2, d / 1.5);
    arc(d / 4, d / 1.5, d, d, 270, 360, PIE);

    //   ハナ
    fill(karada);
    arc(-d / 4, -d / 4, d / 1.8, d / 1.8, 90, 180, PIE);

    let hana = random(colors);

    stroke(hana);
    fill(hana);
    arc(-d / 2, -d / 3.8, d / 5, d / 5, 0, 180, PIE);

    // 　ミミ
    let mimi = random(colors);

    stroke(mimi);
    fill(mimi);
    rect(0, -d / 4, d / 4, d / 3);
    arc(d / 8, -d / 4 + d / 3, d / 4, d / 4, 0, 180, PIE);

    //   シッポ
    let shippo = random(colors);

    stroke(shippo);
    fill(shippo);

    arc(d / 4 + d / 2, d / 1.5, d / 5, d / 5, 180, 360, PIE);

    //   メ
    noStroke();
    fill(bg);
    circle(-d / 6, -d / 4, d / 18);

    pop();
  }
}

let movingObjects = [];

function setup() {
  createCanvas(390, 390);
  angleMode(DEGREES);
  background(bg);

  let numObjects = 10;
  for (let i = 0; i < numObjects; i++) {
    let x = random(width);
    let y = random(height);
    let speedX = random(-2, 2);
    let speedY = random(-2, 2);
    let object = new MovingObject(x, y, speedX, speedY);
    movingObjects.push(object);
  }
}

function draw() {
  background(bg);

  for (let i = 0; i < movingObjects.length; i++) {
    movingObjects[i].update();
    movingObjects[i].display();
  }
}