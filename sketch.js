function setup() {
    createCanvas(400, 400);
    background("maroon");
  }
  
  function draw() {
  
    stroke("black");
    fill("black");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }
  