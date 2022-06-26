var diffEls = document.querySelectorAll(".diff__btn");
var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var n = diffEl;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var colors = [];
var blocks = 9;
createBlocks(n);
resetGame();

function checkColors(e) {
  // your code here
  
}

function resetGame() {
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
}

function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
  // your code here
  var s6btn = document.querySelector("#diff__btn");
var n9btn = document.querySelector("#diff__btn active");
}

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", checkColors);
  }
}

n9btn.addEventListener("click", function(){
  s6btn.classList.remove("selected");
  n9btn.classList.add("selected");
  blocks = 9;
  colors = randomColor(blocks);
  pickedColor = pickColors();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < blocks.length; i++) {
      blocks[i].style.background = colors[i];
      blocks[i].style.display = "block";
  }
});