float t;
int count = 0;

float a = 36.199673;
float b = 264.98825;

int multA = 2;
int multB = 1;

//A val36.199673B val264.98825
//A val143.7085B val250.5053
//A val30.493546B val299.71445


void setup() {
    size((screen.width / 3), (screen.height / 3));
    background(20, 20, 20);
    frameRate(60);

    if (screen.width < 800) {
        multA = 0.5;
        multB = 0.25;
    }
}


void draw() {
    noFill();
    strokeWeight(3);
    stroke(random(0, 255), random(0, 255), random(0, 255), 50);
    translate(width / 2, height / 2);
    rotate(radians(45));
    line(x(-t), y(-t), y(-t), x(t));
    t++;
    line(x(-t), y(-t), y(-t), x(t));
    t++;


    if (t == 1500) {
        a = random(1, 300);
        b = random(1, 300);
        t = 0;
    }
}

float x(float t) {
    return cos(t / a) * (100 * multA);
}

float y(float t) {
    return cos(t / b) * (100 * multB);
}
