// Added an opening and closing screen
// Changed the velocity of object
// Lowered the gravity, changed key pressed to jump and changed the force of the object
var man;
let img, img2;
// let rock;
let coins = [];
let bg;
let y = 0;
let sceneNum = 0;

function setup() {
  createCanvas(500, 500);

  img = loadImage("basketball.png");
  img2 = loadImage("coin.jpg")

  man = new Person(img);
  // rock = new Obstacle(img2);

  //obstacles
  for (let i = 0; i < 10; i++) {
    coins[i] = new Obstacle(img2, random(10));
  }
}


function keyPressed() {
  if (key == 'w') {
    let force = createVector(0, -19);
    man.applyForce(force);
  }
}

function mouseClicked() {
  // if (sceneNum == 1) {
  //   drawScene2();
  // }
  sceneNum++;
}
var drawScene1 = function() {
  // sceneNum = 1;
  background(120, 20, 100);
  textSize(18);
  text('Coin collector! Click mouse to start, press W to jump', 20, 200)
}
var drawScene2 = function() {
  //sceneNum = 2;
  game();
}
var drawScene3 = function() {
  gameOver();
}
var drawScene4 = function() {
  background(100, 20, 150);
  textSize(18);
  text('Thank you for playing! Reload page to play again', 60, 200)
}

function draw() {
  if (sceneNum % 4 == 0) {
    drawScene1();
  } else if (sceneNum % 4 == 1) {
    drawScene2();
  } else if (sceneNum % 4 == 2) {
    drawScene3();
  } else if (sceneNum % 4 == 3) {
    drawScene4();
  }
}

function gameOver() {
  background(130, 20, 170);
  text("Game Over!" + '\n' + man.score, 50, 200)
}

function game() {
  background(100, 50, 125);

  //point of view around "man"
  translate(-man.pos.x + 50, 0);

  let gravity = createVector(0, 0.7);
  man.applyForce(gravity);



  //the player
  man.update();
  man.display();
  man.edges();

  //an obstacle as a rock
  // coins.update();
  // coins.display();
  // coins.edges();


  //obstacles

  for (let i = 0; i < 10; i++) {
    coins[i].update();
    coins[i].display()
    coins[i].edges();
    man.hits(coins[i])
  }
  // for (let i = 0; i < 10; i++) {
  //   fill(10);
  //   rect(250+i*160, 350+i, 100, 100);
  // }

}
