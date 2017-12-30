$(window).scroll(function () {
    if ($(window).scrollTop() >= 132) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});


