$(".bomb").click(function () {
    $('html,body').animate({
            scrollTop: $("#r1").offset().top
        },
        1750);
});

$(".comp").click(function () {
    $('html,body').animate({
            scrollTop: $("#r2").offset().top
        },
        1750);
});

$(".int").click(function () {
    $('html,body').animate({
            scrollTop: $("#r3").offset().top
        },
        1750);
});

$(".pat").click(function () {
    $('html,body').animate({
            scrollTop: $("#r4").offset().top
        },
        1750);
});

$(".bus").click(function () {
    $('html,body').animate({
            scrollTop: $("#r5").offset().top
        },
        1750);
});

$(".thumb").click(function () {
    $('html,body').animate({
            scrollTop: $("#r6").offset().top
        },
        1750);
});

$("#main-btn").click(function () {
    $('html,body').animate({
            scrollTop: $(".main").offset().top
        },
        1250);
});

$("#splash-btn").click(function () {
    $('html,body').animate({
            scrollTop: $(".splash").offset().top
        },
        1250);
});

$("#resp-btn").click(function () {
    $('html,body').animate({
            scrollTop: $(".resp").offset().top
        },
        1250);
});

$(".w4").click(function () {
    $(".os").each(function () {
        var pos = Math.floor(Math.random() * (90 - 1 + 1) + 1);
        var nw = "\r\n";
        $(this).css('left', pos + 'vw');
    });

    $(".o").fadeIn(1000);
    $('html,body').animate({
            scrollTop: $(".o").offset().top
        },
        1250);
    alert("wow! randomly positioned o's AND rellax? This student must want a good grade... (click the o's to hide them)");
});

$(".o").click(function () {
    $(".o").fadeOut(1000);
});
