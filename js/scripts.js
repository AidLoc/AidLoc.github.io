window.togg;
window.scrolled = false;
var home = true;


$(function setup() {
    onepagescroll('div.pages', {
        pageContainer: 'section',
        animationType: 'ease',
        animationTime: 1100,
        infinite: false,
        pagination: true,
        keyboard: false,
        direction: 'horizontal'
    });

    $(".A").hide();
    $(".B").hide();
    $(".C").hide();
    $(".D").hide();
    $(".E").hide();
    $(".F").hide();
    $("#helper").hide();
    $("#nav").hide();
    $("#dbox").hide();
    togg = false;
    var A = $("#point").position().left;
    var B = $(".last").position().left;
});

$(".info").click(function () {
    togg = false;
    console.log(currentPage);
    window.proj;
    if (currentPage == 1) {
        proj = (".A");
    } else if (currentPage == 2) {
        proj = (".B");
    } else if (currentPage == 3) {
        proj = (".C");
    } else if (currentPage == 4) {
        proj = (".D");
    } else if (currentPage == 5) {
        proj = (".E");
    } else if (currentPage == 6) {
        proj = (".F");
    }

    $("#dbox").hide('slide', {
        direction: "left"
    }, 1000);
    $("#nav").slideUp(1000);
    $(".pages").fadeOut(1000);
    $(proj).fadeIn(1000);
    console.log(togg);
});

var contact = function () {
    if (home == false && togg == true) {
        if (currentPage == pages.length) {
            $("#dbox").fadeOut(1000);
            $("#nav").slideUp(1000);
        } else {
            $("#dbox").fadeIn(1000);
            $("#nav").slideDown(1000);
        }
    }
}

setInterval(contact, 500);


$(".return").click(function () {
    togg = true;
    $("#dbox").show('slide', {
        direction: "left"
    }, 1000);
    $("#nav").slideDown(1000);
    $(".pages").fadeIn(1000);
    $(proj).fadeOut(1000);
    console.log(togg);
});


//navigation via pagination
function navi(hr) {
    var incr = (hr - currentPage);
    var mult = Math.abs(incr);
    setting.animationTime = setting.animationTime + (200 * mult);
    console.log(mult);
    console.log(setting.animationTime);
    if (hr > currentPage) {
        changePage(pages.length, 1, incr);
    } else if (hr < currentPage) {
        changePage(1, pages.length, incr);
    }
    setting.animationTime = 500;
}



//homepage stuffs
$(".drg").draggable({
    axis: 'x',
    containment: "#sliderbox"
});

$(".drg").mouseenter(function () {
    $(".drg > p").fadeOut(500);
});

if (home == true) {
    $(window).mouseup(function () {
        A = $(".drg").position().left;
        B = $(".last").position().left;
        ratio = (A / B) * 100
        W = $(window).height();

        if (ratio >= 80) {
            togg = true;
            $(".drg").draggable('disable');
            $(".drg").fadeOut(1250);
            $("#nav").slideDown(1250);
            $("#dbox").show('slide', {
                direction: "left"
            }, 1250);
            $("#home").slideUp(1250);
            $("#hbox").animate({
                'up': W
            }, 1250);

            $('#helper').fadeIn(1500);
            $('body').css("cursor", "none");

            home = false;
        }
    });
}

//custom tooltips

$(document).on('mousemove', function (e) {
    if (scrolled == false) {
        $("#helper").css({
            left: e.pageX,
            top: e.pageY
        });
    }
});

window.helper = function () {
    $('body').css("cursor", "default");
    $('#helper').fadeOut(1000);
    scrolled = true;
    return;
}

//draggable galleries

$(".right .fimg").draggable({
    containment: "parent"
});

$(".left .fimg").draggable({
    containment: "parent"
});

$(".lofi2 .fimg").draggable({
    containment: "parent"
});

$(".dida1 .fimg").draggable({
    containment: "parent"
});

$(".gall .fimg").draggable({
    containment: "parent"
});


var z = 100;

$(".fimg").mousedown(function () {
    z++;
    $(this).css("z-index", z);
    $(this).css("animation-play-state", "paused");
    //$(this).addClass("grow");
});

$(".fimg").mouseup(function () {
    //$(this).removeClass("grow");
    $(this).css("animation-play-state", "running");
});

var coll = $(".gall img");
var item;

//randomly brings illustration to front
var zrand = function () {
    if ($(".F").is(":visible")) {
        item = coll[Math.floor(Math.random() * coll.length)];
        z++;
        $(item).css("z-index", z);
    }
}

setInterval(zrand, 1000);

//preload code

function load() {
    page = setTimeout(showPage, 3000);
}

function showPage() {
    $(".preload").fadeOut(2000);
}



//$('a[href$="ABC"]')
//var c = '#' + Math.floor(Math.random() * 16777215).toString(16);
