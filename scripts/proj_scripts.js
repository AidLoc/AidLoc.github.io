$(document).ready(function () {
    /*var colors = ["#587291", "#89D2DC", "#e9c46a", "#f4a261", "#e76f51"];
    var rand = colors[Math.floor(Math.random() * colors.length)];
    $("body").get(0).style.setProperty("--color", rand);*/
    var date = new Date().getFullYear();
    document.getElementById("CC").innerHTML = "&nbsp;" + date;
});

//return home

$('#port').on('click', function () {
    window.location.href = '../index.html#work';
});

$('#about').on('click', function () {
    window.location.href = '../index.html#me';
});

$('#shop').on('click', function () {
    window.open('https://lockedsgn.threadless.com/', '_blank');
});
