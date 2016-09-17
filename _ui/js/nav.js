$(window).scroll(function(){

    var scrollTop = $(this).scrollTop();
    var hero = $(".hero");
    var navBar = $(".nav-bar");


    // fade in and out hero text
    if (scrollTop < 500) {
        hero.css("opacity", 1 - scrollTop / 350);
    }

    // stick the nav bar up at the top momentarily
    if (scrollTop > 100) {
        navBar.addClass('sticky');
        $(".st0").addClass('gray');
        $(".line").addClass('gray');
    } else {
        navBar.removeClass('sticky');
    }

    if (scrollTop > 450) {
        navBar.css("height", "0");
        //overflow is hidden to hide svg and nav-icon
        navBar.css("overflow", "hidden");
    } else {
        navBar.css("height", "80px");
        //overflow is visble to show side menu
        navBar.css("overflow", "visible");
    }
});
