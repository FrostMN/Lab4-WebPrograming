var canvas = document.getElementById("canvas");
// A context object will be used to draw on the canvas
var context = canvas.getContext("2d");

function draw(e) {
    var x = e.clientX;
    var y = e.clientY;
    context.fillRect(x - 1, y - 1 , 2, 2 )
}