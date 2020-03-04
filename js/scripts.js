$(window).scroll(function() {

if ($('#main').visible()){
    $('html').css("overflowX", "scroll");
    console.log("VIS")
}
else {
    console.log("GONE")
    $('html').css("overflowX", "hidden");
}
    
});


