var togg = true;

$(".enter").click(function () {
    $('html,body').animate({
            scrollTop: $(".pages").offset().top
        },
        1750);
    onepagescroll('div.pages', {
        pageContainer: 'section',
        animationType: 'ease-in-out',
        animationTime: 1000,
        infinite: false,
        pagination: togg,
        keyboard: false,
        direction: 'horizontal'
    });
});

var proj;

$(".pinfo").click(function () {
    if (currentPage == 2) {
        togg = false;
        proj = (".A");
        onepagescroll('div.A', {
            pageContainer: 'section',
            animationType: 'ease-in-out',
            animationTime: 1000,
            infinite: false,
            pagination: false,
            keyboard: false,
            direction: 'vertical'
        });
        $(".pages").hide("ops-container");
        $(".A").removeClass("hide");
        $("#home").addClass("hide");
        
        
        
    } else if (currentPage == 3) {
        proj = (".B");
    } else if (currentPage == 4) {
        proj = (".C");
    }

    console.log(proj);
    $('html,body').animate({
            scrollTop: $(proj).offset().bottom
        },
        1750);
});
