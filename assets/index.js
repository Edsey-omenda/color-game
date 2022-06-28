


//colourgame design motivated by codepen.
let blocks = 9;
let colors = generateRandomColors(blocks);
let block = document.querySelectorAll(".block");
let pickedColor = pickColor();
let rgbCode = document.getElementById("rgbCode");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let level6 = document.querySelector("#low");
let level9 = document.querySelector("#high");


level6.addEventListener("click", function(){
  level9.classList.remove("selected");
  level6.classList.add("selected");
  blocks = 6;
  colors = generateRandomColors(blocks);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(let i = 0; i < block.length; i++) {
    if (colors[i]) {
      block[i].style.background = colors[i];
    } else {
      block[i].style.display = "none";
    }
  }
});

level9.addEventListener("click", function(){
  level6.classList.remove("selected");
  level9.classList.add("selected");
  blocks = 9;
  colors = generateRandomColors(blocks);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < block.length; i++) {
      block[i].style.background = colors[i];
      block[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
  
  colors = generateRandomColors(blocks);
 
  pickedColor = pickColor();
 
  rgbCode.textContent = pickedColor;
  this.textContent = "New Color";
  messageDisplay.textContent = "";
 
  for (let i = 0; i < block.length; i++) {
    block[i].style.background = colors[i];
  }
  h1.style.background = "brown";
})

rgbCode.textContent = pickedColor;

for(let i = 0; i < block.length; i++) {
 
  block[i].style.background = colors[i];
  
  block[i].addEventListener("click", function() {
   
    let clickedColor = this.style.background;
   
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Congratulations";
      resetButton.textContent = "Play Again ?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Don't quit";
    }
  })
}

function changeColors(color){
  
for (let i = 0; i < block.length; i++) {
 
    block[i].style.background = color;
}

}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
 
  let colorArray = []

  for (let i = 0; i < num; i++) {
    colorArray.push(randomColor())
   
  }
 
  return colorArray;
}

function randomColor(){
  
let r = Math.floor(Math.random() * 256)
 
let g = Math.floor(Math.random() * 256)
  
let b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}
