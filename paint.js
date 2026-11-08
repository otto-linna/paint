var pencil_size = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background("black");
  noStroke()
}

function draw(){
  if(mouseIsPressed)
  {
    ellipse(mouseX, mouseY, pencil_size, pencil_size);
  }  
}

function red_color(){
  fill("red");
}

function blue_color(){
  fill("blue");
}

function green_color(){
  fill("green");
}

function black_color(){
  fill("black");
}

function html_loaded(){
  var slider = document.getElementById("sliderID")
  var output = document.getElementById("pencilSize")
  output.innerHTML = slider.value
  pencil_size = slider.value

  slider.oninput = function(){
    output.innerHTML = this.value
    pencil_size = this.value
  }
}