const x_ratio = 0.40;
const y_ratio = 0.40;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

canvas.height = window.innerHeight*y_ratio;
canvas.width = window.innerWidth*x_ratio;

const c : CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

const graph_bg = "#56565d";
const fluid_bg = "#ff0000"

const amount_of_lines = 2000;
const freq = canvas.width/(amount_of_lines) * Math.PI * 2;
const rect_width = freq;

c.fillStyle = graph_bg;
c.fillRect(0,0, canvas.width, canvas.height);

c.strokeStyle = fluid_bg;
c.fillStyle = fluid_bg;

for(let angle = 0; angle < canvas.width; angle+=freq){
	console.log(angle);
	const sin_res = Math.sin(angle) * canvas.height/4 + canvas.height/2 - 10;
	c.lineTo(angle, sin_res);
	c.fillRect(angle, sin_res, rect_width, canvas.height - sin_res);
}

//c.stroke();
