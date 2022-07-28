const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function random(n, m) {
    let num = Math.floor(Math.random() * (m + 1 - n)) + n;
    return num;
}

const i = math.sqrt(-1);

const cellSize = 5;
const number = Math.floor(canvas.width / cellSize);

let count = 0;
let angle = random(1, 4);

let antx;
let anty;
let zahyouX = [];
let zahyouY = [];
let color = [];

let x = canvas.width / number;
let y = canvas.height / number;

const a = random(number / 2 - canvas.width / 100, number / 2 + canvas.width / 100);
const b = random(number / 2 - canvas.width / 100, number / 2 + canvas.width / 100);

antx = a;
anty = b;

for (let i = 0; i < number; i++) {
    color[i] = [];
    for (let j = 0; j < number; j++) {
        color[i][j] = "aliceblue";
    }
}
color[a][b] = "black";


function draw() {
    count++;

    for (let i = 0; i < number; i++) {
        zahyouX[i] = [];
        zahyouY[i] = [];
        for (let j = 0; j < number; j++) {
            zahyouX[i][j] = i * x;
            zahyouY[i][j] = j * y;
            ctx.fillStyle = color[i][j];
            ctx.beginPath();
            ctx.fillRect(i * x, j * y, x, y);
        }
    }

    if (color[antx][anty] == "black") {
        color[antx][anty] = "aliceblue";
        if (angle == 1) {
            antx++;
            angle++;
        } else if (angle == 2) {
            anty++; angle++;
        } else if (angle == 3) {
            antx--; angle++;
        } else {
            anty--; angle = 1;;
        }
    } else {
        color[antx][anty] = "black";
        if (angle == 1) {
            antx--; angle = 4;
        } else if (angle == 2) {
            anty--; angle = 1;
        } else if (angle == 3) {
            antx++; angle = 2;
        } else {
            anty++; angle = 3;
        }
    }

    //angle = math.evaluate('angle * i');

}

setInterval(draw, 10);