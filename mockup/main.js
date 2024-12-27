var x_ratio = 0.40;
var y_ratio = 0.40;
var canvas = document.getElementById("canvas");
canvas.height = window.innerHeight * y_ratio;
canvas.width = window.innerWidth * x_ratio;
var c = canvas.getContext("2d");
var graph_bg = "#56565d";
var fluid_bg = "#ff0000";
var amount_of_lines = 2000;
var freq = canvas.width / (amount_of_lines) * Math.PI * 2;
var rect_width = freq;
c.fillStyle = graph_bg;
c.fillRect(0, 0, canvas.width, canvas.height);
c.strokeStyle = fluid_bg;
c.fillStyle = fluid_bg;
for (var angle = 0; angle < canvas.width; angle += freq) {
    console.log(angle);
    var sin_res = Math.sin(angle) * canvas.height / 4 + canvas.height / 2 - 10;
    c.lineTo(angle, sin_res);
    c.fillRect(angle, sin_res, rect_width, canvas.height - sin_res);
}
//c.stroke();
