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
        pagination: true,
        keyboard: false,
        direction: 'horizontal'
    });
});

var proj;

$(".pinfo").click(function () {
    if (currentPage == 2) {
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
        $(".A").removeClass("hide");
        $(".pages").removeClass("ops-container");
    } else if (currentPage == 3) {
        proj = (".B");
    } else if (currentPage == 4) {
        proj = (".C");
    }

    console.log(proj);
    $('html,body').animate({
            scrollTop: $(proj).offset().top
        },
        1750);
});
