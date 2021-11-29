 class Border {
    constructor(x, y) {
        this.x = 0;
        this.y = 8;
        this.r = 10;
        this.x_c = x;
        this.y_c = y;
    }
    show() {
        for (let i = 0; i < n; i++) {
            //vertical
            curve(this.y, this.x, this.y + this.r * cos(theta[i]), this.x + this.r * sin(theta[i]), this.y + this.r * cos(theta[i+2]), this.x + this.r * sin(theta[i+2]), this.y + this.r * cos(theta[i+3]), this.x + this.r * sin(theta[i+3]));
            // 
            curve(this.y, this.x, this.y + this.r * cos(theta[i]), this.x + this.r * sin(theta[i]), this.y + this.r * cos(theta[i+2]), this.x + this.r * sin(theta[i+2]), this.y + this.r * cos(theta[i+3]), this.x + this.r * sin(theta[i+3]));
            //horizontal
            curve(this.x , this.y, this.x + this.r * cos(theta[i]), this.y + this.r * sin(theta[i]), this.x + this.r * cos(theta[i+2]), this.y + this.r * sin(theta[i+2]), this.x + this.r * cos(theta[i+3]), this.y + this.r * sin(theta[i+3]));

            this.x = (this.x + this.r * cos(theta[i])) % W;
            this.y = (this.y + this.r * sin(theta[i])) % H;
        }
        forwardShift();
    }
}