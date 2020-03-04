$(".grid-item").click(function () {
    var item = "#" + $(this).attr('class').split(" ").pop();
    console.log(item);

    if ($(".port").hasClass('togg')) {
        $(item).removeClass('togg');
    } else {
        $(item).addClass('togg');
        $(window).scrollTo(item, 2000, {
            offset: -75
        });
        $(window).promise().done(function () {
            $('.cont').css('display', 'block');
            $('.desc').css('display', 'block');
        });
    }
});

$(".close").click(function () {
    console.log('closed');
    var item2 = $(this).parents('.port');
    $(item2).removeClass('togg');
    console.log(item2);
});

$("#dev-btn").click(function () {
    window.location.href = 'development.html';
});

$("#mood-btn").click(function () {
    window.location.href = 'dev.html';
});

$("#narr-btn").click(function () {
    window.location.href = 'Narrative.html';
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    autoWidth: true,
    items: 3,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


function load() {
    page = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("cover").style.display = "none";
}
