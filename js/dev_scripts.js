window.togg;

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
    $("#nav").hide();
    $("#dbox").hide();
    togg = false;
    var A = $("#point").position().left;
    var B = $(".last").position().left;


});

/*$("#point").click(function () {
    $('body').jGravity({ 
        target: 'img#logo', 
        ignoreClass: 'ignoreMe', 
        weight: 75, 
        depth: 5, 
        drag: true 
    });
});*/

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
    console.log(hr);
    var incr = (hr - currentPage);
    if (hr > currentPage) {
        changePage(pages.length, 1, incr);
    } else if (hr < currentPage) {
        changePage(1, pages.length, incr);
    }
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
            /*$('html,body').animate({
                    scrollTop: $(".pages").offset().top
                },
                1750);*/
            home = false;
        }
    });
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

var coll = $(.gall img);




//$('a[href$="ABC"]')
//var c = '#' + Math.floor(Math.random() * 16777215).toString(16);
