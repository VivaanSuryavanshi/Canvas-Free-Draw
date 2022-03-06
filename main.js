canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "purple";
width = 4;
var mouseEvent = "";
var lastPositionX, lastPositionY;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentPositionmouseX = e.clientX - canvas.offsetLeft;
    currentPositionmouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(currentPositionmouseX, currentPositionmouseY);
        ctx.stroke()
    }
    lastPositionX = currentPositionmouseX;
    lastPositionY = currentPositionmouseY;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
    console.log("clear");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
