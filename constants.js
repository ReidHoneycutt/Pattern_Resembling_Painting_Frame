let W = window.innerWidth;
let H = window.innerHeight;
var numJoints = 20;

//script.forwardShift, class
var theta = [Math.PI / 4, 0, - Math.PI / 4, - Math.PI / 2, - Math.PI / 4, 0, Math.PI / 4, Math.PI / 2];
let n = theta.length;

//script
let k = 0;
let arr = [];

let vshift = 50;
let hshift = 50; 


/*let n = 50;
let phi = 2 * Math.PI / n;
let theta = [];
let k = 0;
theta[0] = phi;
console.log(0, theta[0]);

for (let i = 0; i < n; i++) {
    theta[i] = 0;
}

for (let i = 1; i < n; i++) {
    if (i % 7 == 0) {
        k = 0;
    }
    if (k < 3) {
        theta[i] = phi + theta[i-1];
    } else {
        theta[i] = theta[i-1] - phi;
    }
    k += 1;
}*/



