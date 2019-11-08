var t2_toilet = false;
var rate = 0;
var count = 0;
var time = 0;
var counting = true; //is the counter running? on by default
var i; //for counter

var active;
//current room is active room

var queued;
//room clicked

var obj; //index number

var id; //temp id

var name; //svg filename "a string"

var t2lamp = false;
var t2shower = false;
var t2sink = false;

var complamp = false;
var complight = false;
var comptable = false;
var compm1 = false;
var compm2 = false;
var comprouter = false;

var laudryer = false;
var lauiron = false;
var laulamp = false;
var laulight = false;

var b1drawer = false;
var b1lamp = false;
var b1light = false;

var b2lamp = false;
var b2light = false;
var b2table = false;

var tvcable = false;
var tvgame = false;
var tvlight = false;
var tvtv = false;
var tvlamp = false;

var kitfridge = false;
var kitlight = false;
var kitoven = false;
var kitsink = false;

var t1light = false;
var t1sink = false;

var attlight = false;
var atttable = false;
var attfurnace = false;
var attheater = false;

var items = new Array(t2lamp, t2shower, t2sink, complamp, complight, comptable, compm1, compm2, comprouter, laudryer, lauiron, laulamp, laulight, b1drawer, b1lamp, b1light, b2lamp, b2light, b2table, tvcable, tvgame, tvlight, tvtv, tvlamp, kitfridge, kitlight, kitoven, kitsink, t1light, t1sink, attlight, atttable, attfurnace, attheater);

var values = new Array(0.833, 6.083, 6.083, 0.833, 2, 1.666, 0.5, 0.5, 0.1, 74.166, 18.333, 0.833, 2, 0.033, 0.833, 2, 0.833, 2, 0.833, 0.416, 1.666, 2, 0.5, 0.833, 3, 2, 41.666, 6.083, 2, 6.083, 2, 0.833, 300, 66.666);

(function counter(i) {
    setTimeout(function () {
        count = count + rate;
        time = time + 1;
        count = Math.round(count * 10) / 10;
        if (count >= 9999) {
            document.getElementById("c1").style.fontSize = "1.5vmax";
        }
        if (count >= 99999) {
            document.getElementById("c1").style.fontSize = "1.25vmax";
        }
        if (count >= 999999) {
            document.getElementById("c1").style.fontSize = "1vmax";
        }
        document.getElementById("c1").innerHTML = count;
        document.getElementById("c2").innerHTML = Math.round(rate * 10) / 10;;
        if (--i) {
            counter(i);
        }
    }, 1000);
})(100000);


function modal() {
    if (typeof active !== 'undefined') {
        active.style.display = "none";
    }
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal").style.animationName = "scale-up";
    document.getElementById("modal").style.animationPlayState = "running";
    document.getElementById("modal-content").innerHTML = "In &nbsp;" + time + "&nbsp; minutes (1 second = 1 minute), you consumed &nbsp;" + count + "&nbsp; watts of power. Compared to the Canadian average, you were &nbsp;" + (((11, 135 - ((count * 60) / 1000)) / 11, 135) * 100) + "% off.";
}

function reset() {
    document.getElementById("modal").style.display = "none";

    rate = 0;
    count = 0;
    time = 0;
    
    Arrays.fill(items, false);
}

function trigger(queued) {
    console.log(queued);
    document.getElementById("tip").style.display = "none";
    if (typeof active === 'undefined') { //check if first time running
        active = document.getElementById(queued);
        console.log(active);
        active.style.animationName = "scale-up";
        active.style.animationPlayState = "running";
        active.style.display = "grid";
    } else if (active !== queued) { //if active room is NOT the triggered room
        active.style.animationName = "scale-down";
        active.style.animationPlayState = "running";
        active.style.display = "none";

        active = document.getElementById(queued); //set next active room

        active.style.display = "grid";
        active.style.animationName = "scale-up";
        active.style.animationPlayState = "running";
    }
}

function object(obj, id) {
    if (items[obj] === true) { //if toggled on
        items[obj] = false; //turn off

        name = id.getAttribute("src");

        name = name.replace("active", "inactive");

        id.setAttribute("src", name);

        rate = rate - values[obj];
        console.log("rate is now " + rate);

    } else if (items[obj] === false) { //if toggled off
        items[obj] = true; //turn on

        name = id.getAttribute("src");

        name = name.replace("inactive", "active");

        id.setAttribute("src", name);

        rate = rate + values[obj];
        console.log("rate is now " + rate);
    }
}
