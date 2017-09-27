//Find the canvas element in this document
var canvas = document.getElementById("canvas");
// A context object will be used to draw on the canvas
var context = canvas.getContext("2d");
context.fillStyle = 'purple';
var squareShowing = false;
var circleVis = false;

var cirRad = 50;

var cirX = 0 - cirRad;
var cirY = 300;

// setInterval - do a task repeatedly. Specify a task to do, like the function name to call,
// and the time between repeats in milliseconds. 1000 milliseconds == 1 seconds.
// setInterval( nameOfFunction, timeBetweenCallingFunctionInMs )
//setInterval(drawSquare, 33);

var canvasWidth = 1000;

function drawSquare() {
    if (squareShowing) {
        context.clearRect(0, 0, 300, 300);
        squareShowing = false;
    } else {
        context.fillRect(100, 50, 100, 100);
        squareShowing = true
    }
}

function drawCircle() {
    if (circleVis) {
        context.clearRect(0, 0, 1000, 600);
        circleVis = false;
    } else {
        cirX += 1;
        context.beginPath();
        context.arc(cirX, cirY, 50, 0, 2 * Math.PI);
        context.stroke();
        if ( cirX == (canvasWidth + cirRad) ) {
            cirX = 0 - cirRad;
        }
        circleVis = true;
    }
}

setInterval(drawCircle, 10);