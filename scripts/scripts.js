$(document).ready(function () {
    var colors = ["#FFB938", "#DF7153", "#626793", "#81B19A", "#015979", "rgb(20,20,20)"];
    var rand = colors[Math.floor(Math.random() * colors.length)];
    $("body").get(0).style.setProperty("--color", rand);
    var date = new Date().getFullYear();
    document.getElementById("CC").innerHTML = "&nbsp;" + date;
    /*$('#enter').animate(
        { deg: 720 },
        {
          duration: 1000,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );*/
});

$(function () {
    $("#enter").on('click', function () {
        $.scrollTo($('#work'), 2500);
    });
});

$(document).ready(function () {
    $('a.gallery').featherlightGallery({
        previousIcon: '«',
        nextIcon: '»',
        galleryFadeIn: 600,
        autoBind: '[data-featherlight-gallery]',
        openSpeed: 3000
    });
});


$('.bg').plate({
    perspective: 650
});


const desc = new TypeIt("#type", {
        loop: true,
        deleteSpeed: 50
    })
    .type("Graphic Designer.")
    .pause(1000)
    .delete(17)
    .pause(1000)
    .type("Photographer.")
    .pause(1000)
    .delete(13)
    .pause(1000)
    .type("Videographer.")
    .pause(1000)
    .delete(13)
    .pause(1000)
    .type("Web Designer.")
    .pause(1000)
    .delete(13)
    .pause(1000)
    .type("Creator.")
    .pause(1000)
    .delete(8)
    .pause(1000)
    .go();


//navigation scripts

$('#port').on('click', function () {
    $.scrollTo($('#work'), 2500);
});

$('#about').on('click', function () {
    $.scrollTo($('#me'), 3250);
});

/*$('#shop').on('click', function () {
    window.open('https://www.lockesupply.square.site', '_blank');
});*/

//animated still

$("#vid").hover(function(){
    $(this).attr("src", "images/fold/promo.gif");
});

$("#vid").mouseout(function(){
    $(this).attr("src", "images/fold/still.jpg");
});


$('#lofi').on('click', function () {
    window.location.href = '/projects/lofi.html';
});

$('#fofa').on('click', function () {
    window.location.href = '/projects/fofa.html';
});

$('#smt').on('click', function () {
    window.location.href = '/projects/smt.html';
});

$('#dida').on('click', function () {
    window.location.href = '/projects/dida.html';
});

$('#illu').on('click', function () {
    window.location.href = '/projects/illu.html';
});

$('#karl').on('click', function () {
    window.location.href = '/projects/karl.html';
});

$('#ding').on('click', function () {
    window.location.href = '/projects/ding.html';
});

$('#park').on('click', function () {
    window.location.href = '/projects/park.html';
});

$('#mons').on('click', function () {
    window.location.href = '/projects/mons.html';
});

$('#brnd').on('click', function () {
    window.location.href = '/projects/brnd.html';
});

$('#link').on('click', function () {
    window.location.href = '/projects/link.html';
});

$('#fold').on('click', function () {
    window.location.href = '/projects/fold.html';
});

$('#bact').on('click', function () {
    window.location.href = '/projects/bact.html';
});

$('#lost').on('click', function () {
    window.location.href = '/projects/lost.html';
});

$('#lore').on('click', function () {
    window.location.href = '/projects/lore.html';
});

$('#aqtr').on('click', function () {
    window.location.href = '/projects/aqtr.html';
});

$('#3d').on('click', function () {
    window.location.href = '/projects/3d.html';
});

$('#buha').on('click', function () {
    window.location.href = '/projects/buha.html';
});
