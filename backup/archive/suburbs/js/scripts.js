//snapping
$('#myRange').change(function () {
    var cVal = $(this).val();
    if (cVal <= 5) {
        $('#myRange').prop("value", "0");
        myFunction()
        document.getElementById("migration_header").innerHTML = "In 1900, 2/3 of Canadians lived in rural areas.";
    }

    if (cVal >= 45 && cVal <= 55) {
        $('#myRange').prop("value", "50");
        myFunction()
        document.getElementById("migration_header").innerHTML = "By 1971, 2/3 of Canadians lived in towns or cities.";
    }

    if (cVal >= 95) {
        $('#myRange').prop("value", "100");
        myFunction()
        document.getElementById("migration_header").innerHTML = "In 2016, 74% of Canadians live in suburbs.";

    }
});


//graphic i/o
document.getElementById("myRange").oninput = function () {
    myFunction()
}

function myFunction() {
    var pos = document.getElementById("myRange").value
    if (pos <= 50) {
        var g1 = ((pos / 50) * 33) + 33;
        var g2 = ((pos / -50) * 33) + 66;
        document.documentElement.style.setProperty('--Rval', g1 + '%');
        document.documentElement.style.setProperty('--Uval', g2 + '%');

        document.getElementById("rural_p").innerHTML = Math.round(g2) + '%';
        document.getElementById("suburban_p").innerHTML = Math.round(g1) + '%';
    }

    if (pos > 50) {
        var g1 = ((pos * 0.16) + 58);
        var g2 = ((pos * -0.16) + 41);
        document.documentElement.style.setProperty('--Rval', g1 + '%');
        document.documentElement.style.setProperty('--Uval', g2 + '%');

        document.getElementById("rural_p").innerHTML = Math.round(g2) + '%';
        document.getElementById("suburban_p").innerHTML = Math.round(g1) + '%';
    }

}

//snapping2
$('#myRange2').mousemove(function () {
    var cVal2 = $(this).val();

    if (cVal2 > 15) {
        document.getElementById("A").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 15) {
        document.getElementById("A").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 15) {
        document.getElementById("H").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 15) {
        document.getElementById("H").setAttribute("src", "images/tree.png");
    }

    if (cVal2 > 30) {
        document.getElementById("B").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 30) {
        document.getElementById("B").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 30) {
        document.getElementById("I").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 30) {
        document.getElementById("I").setAttribute("src", "images/tree.png");
    }


    if (cVal2 > 45) {
        document.getElementById("C").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 45) {
        document.getElementById("C").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 45) {
        document.getElementById("J").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 45) {
        document.getElementById("J").setAttribute("src", "images/tree.png");
    }


    if (cVal2 > 60) {
        document.getElementById("D").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 60) {
        document.getElementById("D").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 60) {
        document.getElementById("K").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 60) {
        document.getElementById("K").setAttribute("src", "images/tree.png");
    }


    if (cVal2 > 75) {
        document.getElementById("E").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 75) {
        document.getElementById("E").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 75) {
        document.getElementById("L").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 75) {
        document.getElementById("L").setAttribute("src", "images/tree.png");
    }

    if (cVal2 >= 90) {
        document.getElementById("F").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 90) {
        document.getElementById("F").setAttribute("src", "images/tree.png");
    }
    if (cVal2 >= 90) {
        document.getElementById("M").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 90) {
        document.getElementById("M").setAttribute("src", "images/tree.png");
    }


    if (cVal2 >= 100) {
        document.getElementById("G").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 100) {
        document.getElementById("G").setAttribute("src", "images/tree.png");
    }
    if (cVal2 >= 100) {
        document.getElementById("N").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 100) {
        document.getElementById("N").setAttribute("src", "images/tree.png");
    }




});

//graphic i/o2
document.getElementById("myRange2").oninput = function () {
    myFunction2()
}

function myFunction2() {
    var pos = document.getElementById("myRange2").value;
    console.log(pos);
    var g3 = (89.848484848485 * pos) + 5561.1515151515;

    document.getElementById("area").innerHTML = Math.round(g3);
}

function status() {
    if (document.getElementById('healthy').checked) {
        document.getElementById('statusimg').setAttribute("src", "images/healthy.png")
        document.getElementById('effect_header').innerHTML = "Those living in rural environments have on average the lowest number of chronic medical conditions.";
    } else if (document.getElementById('moderate').checked) {
        document.getElementById('statusimg').setAttribute("src", "images/moderate.png")
        document.getElementById('effect_header').innerHTML = "Those living in urban environments have on average 2nd highest number of chronic medical conditions.";
    } else if (document.getElementById('unhealthy').checked) {
        document.getElementById('statusimg').setAttribute("src", "images/unhealthy.png")
        document.getElementById('effect_header').innerHTML = "Those living in suburban environments have on average the highest number of chronic medical conditions.";
    }

}


//nav

$("#home").click(function () {
    $('html,body').animate({
            scrollTop: $(".header").offset().top
        },
        1750);
});

$("#stats").click(function () {
    $('html,body').animate({
            scrollTop: $(".s1").offset().top
        },
        1750);
});

$("#essay").click(function () {
    $("#book").css("opacity", "0");
    $("#book").css("display", "block");
    $("#book").animate({opacity: 1}, 1000);
    $("#book").scrollTo("#A1", 2800);
});

$("#scenes").click(function () {
    $('html,body').animate({
            scrollTop: $(".gallery").offset().top
        },
        1750);
});


//gallery scrolling

$(".exit").click(function () {
    $("#book").fadeOut(800);
});

$("#F1").click(function () {
    $("#book").css("opacity", "0");
    $("#book").css("display", "block");
    $("#book").animate({opacity: 1}, 1000);
    $("#book").scrollTo("#A1", 2800);
});

$("#F2").click(function () {
    $("#book").css("opacity", "0");
    $("#book").css("display", "block");
    $("#book").animate({opacity: 1}, 1000);
    $("#book").scrollTo("#A2", 2800);
});

$("#F3").click(function () {
    $("#book").css("opacity", "0");
    $("#book").css("display", "block");
    $("#book").animate({opacity: 1}, 1000);
    $("#book").scrollTo("#A3", 2800);
});

$("#F4").click(function () {
    $("#book").css("opacity", "0");
    $("#book").css("display", "block");
    $("#book").animate({opacity: 1}, 1000);
    $("#book").scrollTo("#A4", 2800);
});

$("#F5").click(function () {
    $("#book").css("opacity", "0");
    $("#book").css("display", "block");
    $("#book").animate({opacity: 1}, 1000);
    $("#book").scrollTo("#A5", 2800);
});

$("#F6").click(function () {
    $("#book").css("opacity", "0");
    $("#book").css("display", "block");
    $("#book").animate({opacity: 1}, 1000);
    $("#book").scrollTo("#A6", 2800);
});

$("#F7").click(function () {
    $("#book").css("opacity", "0");
    $("#book").css("display", "block");
    $("#book").animate({opacity: 1}, 1000);
    $("#book").scrollTo("#A7", 2800);
});

$("#F8").click(function () {
    $("#book").css("opacity", "0");
    $("#book").css("display", "block");
    $("#book").animate({opacity: 1}, 1000);
    $("#book").scrollTo("#A8", 2800);
});
