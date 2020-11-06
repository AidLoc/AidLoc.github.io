let X = 1.00;
let h = 0.00;
let v = 0.00;
let delta = 0;
let imgs = []; //source images
let dimg = []; //display images
let init = true;

function preload() {
    for (let i = 0; i <= 16; i++) {
        let i2 = i + 1;
        imgs[i] = loadImage("../LOFI/images/Hydro/" + i2 + ".png");
    }
    print("preload complete");
}

function setup() {
    createCanvas(1000, 1000, WEBGL);
    fill(20);
    background(255);

    dimg.push(new Piece(308, 500, imgs[0], 575));
    dimg.push(new Piece(753, 500, imgs[1], 575));
    dimg.push(new Piece(680, 493, imgs[2], 550));
    dimg.push(new Piece(500, 690, imgs[3], 500));
    dimg.push(new Piece(250, 543, imgs[4], 450));
    dimg.push(new Piece(500, 646, imgs[5], 400));
    dimg.push(new Piece(525, 500, imgs[6], 350));
    dimg.push(new Piece(545, 458, imgs[7], 300));
    dimg.push(new Piece(945, 458, imgs[8], 275));
    dimg.push(new Piece(180, 530, imgs[9], 225));
    dimg.push(new Piece(500, 500, imgs[10], 175));
    dimg.push(new Piece(500, 500, imgs[11], 125));
    dimg.push(new Piece(495, 500, imgs[12], 100));
    dimg.push(new Piece(486, 513, imgs[13], 75));
    dimg.push(new Piece(639, 580, imgs[14], 50));
    dimg.push(new Piece(553, 513, imgs[15], 0));
    dimg.push(new Piece(500, 564, imgs[16], 0));

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
        //X = Math.min(X + (event.delta / 10), 360)
        clear();
        background(20);
    }
    if (X > 360) {
        X = 359
    }
    print(X);
    return false;
}
