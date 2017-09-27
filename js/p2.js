var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var canvasWidth = document.getElementById("canvas").getAttribute("width");
var canvasHeight = document.getElementById("canvas").getAttribute("height");

console.log(canvasWidth)
console.log(canvasHeight)

document.getElementById("wid").innerHTML = canvasWidth;
document.getElementById("hei").innerHTML = canvasHeight;

context.fillRect(20, 20, 100, 100);
context.strokeRect(150, 120, 100, 100);

context.strokeRect(350, 120, 100, 100);

context.strokeRect(150, 320, 100, 100);

context.strokeRect(canvasWidth/2 - 50, canvasHeight/2 - 50, 100, 100);


