function setup() {
    createCanvas(W, H);
    background(255);
    S = new Border(W / 2, H / 2);
}
function draw() {
    S.show();
}

function forwardShift() {
    let t = theta[0];
    for (let i = 1; i < n; i++) {
        theta[i-1] = theta[i];
    }
    theta[n-1] = t;
}

/*function mouseClicked() {
    S.show();
}*/