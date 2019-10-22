$('#myRange').change(function () {
    var cVal = $(this).val();
    console.log(cVal);
    if (cVal <= 15) {
        $('#myRange').prop("value", "0");
        document.getElementById("migration_header").innerHTML = "In 1900, 2/3 of Canadians lived in rural areas.";
    }

    if (cVal >= 40 && cVal <= 60) {
        $('#myRange').prop("value", "50");
        document.getElementById("migration_header").innerHTML = "By 1971, 2/3 of Canadians lived in towns or cities.";
    }

    if (cVal >= 85) {
        $('#myRange').prop("value", "100");
        document.getElementById("migration_header").innerHTML = "In 2016, 74% of Canadians live in suburbs.";
    }
});

document.getElementById("myRange").oninput = function () {
    myFunction()
}

function myFunction() {
    var pos = document.getElementById("myRange").value
    if (pos <= 50) {
        var g1 = ((pos / 50) * 33) + 33;
        var g2 = ((pos / -50) * 33) + 66;
        document.documentElement.style.setProperty('--Rval', g1 + '%');
        document.documentElement.style.setProperty('--Uval', g2 + '%');
    }

    if (pos > 50) {
        var g1 = ((pos * 0.16) + 58);
        var g2 = ((pos * -0.16) + 41);
        document.documentElement.style.setProperty('--Rval', g1 + '%');
        document.documentElement.style.setProperty('--Uval', g2 + '%');
    }

}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  console.log(n);
}



$("#T1").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        3000);
});

$("#T2").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});

//document.getElementById("#T2").addEventListener("click", function(){plusSlides(1)});

$("#T3").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T4").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T5").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T6").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T7").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});


$("#T8").click(function () {
    $('html,body').animate({
            scrollTop: $(".essay").offset().top
        },
        1750);
});

$("#home").click(function () {
    $('html,body').animate({
            scrollTop: $(".header").offset().top
        },
        1750);
});

$("#stats").click(function () {
    $('html,body').animate({
            scrollTop: $(".migration").offset().top
        },
        1750);
});

