let m1;
let m2;

let vol1;

let button1;
let button2;

let button3;
let button4;

function preload() {
  soundFormats("mp3", "ogg");
  m1 = loadSound("Unconditional.mp3");
  m2 = loadSound("Completely.mp3");
}
function setup() {
  createCanvas(400, 400);
  vol1 = 0.5;
  // mu.play();
  button1 = createButton("PLAY1");
  button1.mousePressed(Playmusic1);
  button2 = createButton("PLAY2");
  button2.mousePressed(Playmusic2);

  button3 = createButton("+");
  button3.mousePressed(plusVol);
  button4 = createButton("-");
  button4.mousePressed(minusVol);
}

function draw() {
  background(220);
  m1.setVolume(vol1);
  m2.setVolume(vol1);
}

function Playmusic1() {
  if (!m1.isPlaying() && !m2.isPlaying()) {
    m1.setVolume(0.5);
    m1.play();
    button1.html("STOP1");
  } else {
    m1.stop();
    button1.html("PLAY1");
  }
}

function Playmusic2() {
  if (!m1.isPlaying() && !m2.isPlaying()) {
    m2.setVolume(0.5);
    m2.play();
    button2.html("STOP2");
  } else {
    m2.stop();
    button2.html("PLAY2");
  }
}

function minusVol() {
  vol1 -= 0.1;
}
function plusVol() {
  vol1 += 0.1;
}

// function mouseClicked(){
//   mu.play();
// }
