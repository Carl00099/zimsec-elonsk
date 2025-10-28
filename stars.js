const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
const stars = [];

window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

function random(min, max) { return Math.random() * (max - min) + min; }

for (let i = 0; i < 150; i++) {
    stars.push({ x: random(0,w), y: random(0,h), r: random(0.5,1.5), d: random(0.1,0.5) });
}

function draw() {
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();
    stars.forEach(s => { ctx.moveTo(s.x,s.y); ctx.arc(s.x,s.y,s.r,0,Math.PI*2,true); });
    ctx.fill();
    update();
    requestAnimationFrame(draw);
}

let angle = 0;
function update() {
    angle += 0.01;
    stars.forEach(s => {
        s.y += Math.cos(angle+s.d)+1+s.r/2;
        s.x += Math.sin(angle);
        if (s.x > w+5 || s.x < -5 || s.y > h) { s.x = random(0,w); s.y = -10; }
    });
}
draw();
