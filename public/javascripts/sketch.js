// Variables to make the player and the walls that will be made.
var player;
var pipes = [];
var score;

// Variables for text fonts
var font_italic, font_bold, font_do_hyeon, font_bold_italic;

// Variables for sliders
var red_slider;
var green_slider;
var blue_slider;

// Setting the fonts before the page loads
function preload() {
  font_italic = loadFont('assets/Italic.ttf');
  font_bold = loadFont('assets/Bold.ttf');
  font_do_hyeon = loadFont('assets/DoHyeon.ttf');
  font_bold_italic = loadFont('assets/BoldItalic.ttf')
}

function setup() {
  // Create the basic canvas
  var canvas = createCanvas(640, 480);
  canvas.parent("canvas-holder"); // relocate the canvas

  // Slider 1
  textFont(font_do_hyeon, 15); // Sets all of the texts from now to the next text to font_do_hyeon and the font size of 15
  text("Red",10,20);
  red_slider = createSlider(0, 255, 127) // minimum value, maximum value, default value of the slider
  red_slider.position(70,15);
  red_slider.style('width', '255px');

  // Slider 2
  text("Green",10,40);
  green_slider = createSlider(0, 255, 127) // minimum value, maximum value, default value of the slider
  green_slider.position(70,35);
  green_slider.style('width', '255px');

  // Slider 3
  text("Blue",10,60);
  blue_slider = createSlider(0, 255, 127) // minimum value, maximum value, default value of the slider
  blue_slider.position(70,55);
  blue_slider.style('width', '255px');

  // Create new bird and new pipe at start.
  player = new Player();
  pipes.push(new Pipe());
}

function draw() {
  background(red_slider.value(), green_slider.value(), blue_slider.value());

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(player)) {
      player.endgame();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  if(frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }

  player.update();
  player.show();
}

function keyPressed() {
  if(key == ' ') {
    player.up();
  }
}
