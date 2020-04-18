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
    if (currentPage == 1) {
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

        $(".pages").slideUp(1750);
        $(".pages").children().slideUp(1750);
        $(".A").slideDown(1750);
        $(".ops-navigation").fadeOut(1750);

        /*$('html,body').animate({
                scrollTop: $(proj).offset().bottom
                
            },
            1750);*/


    } else if (currentPage == 3) {
        proj = (".B");
    } else if (currentPage == 4) {
        proj = (".C");
    }

});

$(".return").click(function () {

    $(".A").slideUp(1750);
    $(".pages").slideDown(1750);
    $(".pages").children().fadeIn(4000);
    $(".ops-navigation").fadeIn(1750);
    

});
