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

    if (cVal2 > 11.5) {
        document.getElementById("A").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 11.5) {
        document.getElementById("A").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 11.5) {
        document.getElementById("G").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 11.5) {
        document.getElementById("G").setAttribute("src", "images/tree.png");
    }
    
    if (cVal2 > 30) {
        document.getElementById("B").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 30) {
        document.getElementById("B").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 30) {
        document.getElementById("H").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 30) {
        document.getElementById("H").setAttribute("src", "images/tree.png");
    }
    
    
    if (cVal2 > 50) {
        document.getElementById("C").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 50) {
        document.getElementById("C").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 50) {
        document.getElementById("I").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 50) {
        document.getElementById("I").setAttribute("src", "images/tree.png");
    }
    
    
    if (cVal2 > 70) {
        document.getElementById("D").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 70) {
        document.getElementById("D").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 70) {
        document.getElementById("J").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 70) {
        document.getElementById("J").setAttribute("src", "images/tree.png");
    }
    
    
    if (cVal2 > 90) {
        document.getElementById("E").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 90) {
        document.getElementById("E").setAttribute("src", "images/tree.png");
    }
    if (cVal2 > 90) {
        document.getElementById("K").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 90) {
        document.getElementById("K").setAttribute("src", "images/tree.png");
    }
    
    if (cVal2 >= 100) {
        document.getElementById("F").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 100) {
        document.getElementById("F").setAttribute("src", "images/tree.png");
    }
    if (cVal2 >= 100) {
        document.getElementById("L").setAttribute("src", "images/haus.png");
    }
    if (cVal2 < 100) {
        document.getElementById("L").setAttribute("src", "images/tree.png");
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
    if (document.getElementById('healthy').checked){
        document.getElementById('statusimg').setAttribute("src", "images/healthy.png")
        document.getElementById('effect_header').innerHTML = "Those living in rural environments have on average the lowest number of chronic medical conditions.";
    }
    
    else if (document.getElementById('moderate').checked){
        document.getElementById('statusimg').setAttribute("src", "images/moderate.png")
        document.getElementById('effect_header').innerHTML = "Those living in urban environments have on average 2nd highest number of chronic medical conditions.";
    }
    
    else if (document.getElementById('unhealthy').checked){
        document.getElementById('statusimg').setAttribute("src", "images/unhealthy.png")
        document.getElementById('effect_header').innerHTML = "Those living in suburban environments have on average the highest number of chronic medical conditions.";
    }
    
}



$("#T1").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        3000);
});

$("#T2").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T3").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T4").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T5").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T6").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T7").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T8").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});

$("#home").click(function () {
    $('html,body').animate({
            scrollTop: $(".header").offset().top
        },
        1750);
});

$("#stats").click(function () {
    $('html,body').animate({
            scrollTop: $(".migration").offset().top
        },
        1750);
});
