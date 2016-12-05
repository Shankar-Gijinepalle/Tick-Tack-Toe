
function setup() 
{
  createCanvas(800,800);
  background(200);
  noStroke();
  fill(0);
  gridSize = 3;
  drawGrid(gridSize);
  stroke(255);
  strokeWeight(4);
}

var gridSize;

function draw() 
{
  if(D === 0)
  {
     text("Player :"+playerS,10,10);
  }
}

function mousePressed()
{
  for(var i = 1; i <= gridSize; i++)
  {
    for(var j = 1; j <= gridSize; j++)
    {
      block[(i*10)+j].in();
    }
  }
}
