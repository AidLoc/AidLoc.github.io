let X = 1.00;
let h = 0.00;
let v = 0.00;
let delta = 0;
let imgs = []; //source images
let dimg = []; //display images
let init = true;

function preload() {
    for (let i = 0; i <= 19; i++) {
        let i2 = i + 1;
        imgs[i] = loadImage("../LOFI/images/Hydro/" + i2 + ".png");
    }
    print("preload complete");
}

function setup() {
    createCanvas(1000, 1000, WEBGL);
    fill(20);
    background(255);

    dimg.push(new Piece(500, 500, imgs[0], 850));
    dimg.push(new Piece(500, 165, imgs[1], 800));
    dimg.push(new Piece(773, 562, imgs[2], 750));
    dimg.push(new Piece(631, 655, imgs[3], 700));
    dimg.push(new Piece(560, 452, imgs[4], 650));
    dimg.push(new Piece(648, 781, imgs[5], 600));
    dimg.push(new Piece(608, 812, imgs[6], 530));
    dimg.push(new Piece(559, 837, imgs[7], 510));
    dimg.push(new Piece(219, 500, imgs[8], 500));
    dimg.push(new Piece(500, 500, imgs[9], 450));
    dimg.push(new Piece(465, 267, imgs[10], 425));
    dimg.push(new Piece(620, 500, imgs[11], 400));
    dimg.push(new Piece(455, 500, imgs[13], 275));
    dimg.push(new Piece(435, 729, imgs[14], 250));
    dimg.push(new Piece(868, 500, imgs[15], 200));
    dimg.push(new Piece(500, 446, imgs[16], 150));
    dimg.push(new Piece(313, 500, imgs[17], 100));
    dimg.push(new Piece(500, 531, imgs[18], 50));
    dimg.push(new Piece(570, 500, imgs[19], 0));

}

class Piece {
    constructor(cx, cy, ctx, cd) {
        this.x = cx;
        this.y = cy;
        this.tx = ctx;
        this.d = cd;
    }

    zoom() {
        stroke(255);
        noFill();
        if (init) {
            translate(0, 0, this.d)
        } else {
            translate(0 + h, 0 + v, X)
        }
    }

    display() {
        stroke(255);
        noFill();
        imageMode(CENTER);
        image(this.tx, this.x - 500, this.y - 500);
    }
}

function draw() {
    background(20);
    lights();
    //camera(0, 0, ((height/2) / tan(PI/6)), 0 + h, 0 + v, 0, 0, 1, 0)
    for (let i = 0; i < dimg.length; i++) {
        dimg[i].zoom();
        dimg[i].display();
        if (i == 0) {
            init = false;
        }
    }
    
     if (keyIsDown(LEFT_ARROW)) {
        h = h + 0.5;
        print(h);
    }

    if (keyIsDown(RIGHT_ARROW)) {
        h = h - 0.5;
        print(h);
    }

    if (keyIsDown(UP_ARROW)) {
        v = v + 0.5;
        print(v);
    }

    if (keyIsDown(DOWN_ARROW)) {
        v = v - 0.5;
        print(v);
    }
    
    if (h > 25){h = 25}
    if (h < -25){h = -25}
    if (v > 25){v = 25}
    if (v < -25){v = -25}

}


function mouseWheel(event) {
    if (X >= 1) {
        X = Math.max(X + (event.delta / 10), 1)
        clear();
        background(20);
    }
    if (X > 360) {
        X = 359
    }
    print(X);
    return false;
}
