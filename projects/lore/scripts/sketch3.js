let X = 1.00;
let h = 0.00;
let v = 0.00;
let delta = 0;
let imgs = []; //source images
let dimg = []; //display images
let init = true;

function preload() {
    for (let i = 0; i <= 15; i++) {
        let i2 = i + 1;
        imgs[i] = loadImage("../lore/images/Home/" + i2 + ".png");
    }
    print("preload complete");
}

function setup() {
    createCanvas(1000, 1000, WEBGL);
    fill(255);
    background(255);
    
    dimg.push(new Piece(500, 500, imgs[0], 850));
    dimg.push(new Piece(500, 500, imgs[1], 820));
    dimg.push(new Piece(279, 321, imgs[2], 800));
    dimg.push(new Piece(450, 500, imgs[8], 200));
    dimg.push(new Piece(693, 500, imgs[3], 790));
    dimg.push(new Piece(661, 464, imgs[4], 780));
    dimg.push(new Piece(211, 633, imgs[5], 760));
    dimg.push(new Piece(500, 532, imgs[6], 700));
    dimg.push(new Piece(636, 253, imgs[7], 690));
    dimg.push(new Piece(500, 500, imgs[9], 600));
    dimg.push(new Piece(453, 729, imgs[10], 500));
    dimg.push(new Piece(806, 561, imgs[11], 450));
    dimg.push(new Piece(500, 500, imgs[12], 400));
    dimg.push(new Piece(500, 170, imgs[13], 350));
    dimg.push(new Piece(500, 500, imgs[14], 300));
    dimg.push(new Piece(500, 912, imgs[15], 200));
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
