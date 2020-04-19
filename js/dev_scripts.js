window.togg;

$(function setup() {
    onepagescroll('div.pages', {
        pageContainer: 'section',
        animationType: 'ease',
        animationTime: 1250,
        infinite: false,
        pagination: true,
        keyboard: false,
        direction: 'horizontal'
    });

    $(".A").fadeOut(10);
    $("#nav").slideToggle(1);
    togg = false;
    var A = $("#point").position().left;
    var B = $(".last").position().left;


});


$(".pinfo").click(function () {
    togg = false;
    console.log(pages.length);
    console.log(currentPage);
    window.proj;
    if (currentPage == 2) {
        proj = (".A");
    } else if (currentPage == 3) {
        proj = (".B");
    } else if (currentPage == 4) {
        proj = (".C");
    } else if (currentPage == 5) {
        proj = (".D");
    } else if (currentPage == 6) {
        proj = (".E");
    } else if (currentPage == 7) {
        proj = (".F");
    }

    $("#nav").slideUp(1000);
    $(".pages").fadeOut(1000)
    $(proj).fadeIn(1000);
    console.log(togg);
});

$(".return").click(function () {
    togg = true;
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

$("#point").draggable({
    axis: 'x',
    containment: "parent",
    snap: true
});


$(window).mouseup(function () {
            A = $(".drg").position().left;
            B = $(".last").position().left;
            ratio = (A / B) * 100


            console.log(A + " " + B);

            if (ratio >= 80) {
                togg = true;
                $(".drg").draggable('disable');
                $(".drg").fadeOut(1250);
                $("#nav").slideDown(1250, function(){
                    $(".drg").css("left", "0");
                });
                $("#home").slideUp(1250);
            }
    });

        //$('a[href$="ABC"]')
        //var c = '#' + Math.floor(Math.random() * 16777215).toString(16);
