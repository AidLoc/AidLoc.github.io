$(document).ready(function () {
    var colors = ["#FFB938", "#DF7153", "#626793", "#81B19A", "#015979", "rgb(20,20,20)"];
    var rand = colors[Math.floor(Math.random() * colors.length)];
    $("body").get(0).style.setProperty("--color", rand);
    var date = new Date().getFullYear();
    document.getElementById("CC").innerHTML = "&nbsp;" + date;
});

$(function () {
    $("#enter").on('click', function () {
        $.scrollTo($('#work'), 2500);
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

$('#shop').on('click', function () {
    window.open('https://www.redbubble.com/people/lockedsgn/shop', '_blank');
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

$('#muse').on('click', function () {
    window.location.href = '/projects/muse.html';
});
