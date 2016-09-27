//varibles for nav and hero events when first scrolling
var hero = $(".hero"),
    navBar = $(".nav-bar"),
    navIcon = $("#nav-icon");

//for showing the nav when scrolling up
var scrollTop,
    lastScrollTop = 0,
    //if user is scrolling up, add space to scrollTop
    extraSpace = false;


//showing footer at the very end
var footer = $("footer"),
    footerHeight = footer.outerHeight(),
    main = $("main");


$(window).scroll(function(){
    scrollTop = $(this).scrollTop();

    // fade in and out hero text
    if (scrollTop < 500) {
        hero.css("opacity", 1 - scrollTop / 250);
    }

    if ($('header').length) {
        $('.parallax').css('top', scrollTop/3);
    }

    // stick the nav bar up at the top momentarily
    if (scrollTop > 100) {
        navBar.addClass('sticky');
        $(".st0").addClass('gray');
        $(".line").addClass('gray');
        $('#nav-links a').addClass('gray');


    } else {
        navBar.removeClass('sticky');
        $(".st0").removeClass('gray');
        $(".line").removeClass('gray');
        $('#nav-links a').removeClass('gray');
    }

    //hide nav-bar
    if (scrollTop > 425) {
        //overflow is hidden to hide svg and nav-icon
        navBar.addClass("hide");
        upOrDown();
    } else {
        extraSpace = false;
    }

    if(scrollTop + window.innerHeight == getDocHeight()) {
       footer.addClass("appear");
    } else {
       footer.removeClass("appear");
    }
});

//returns true if scrolling down, returns false if scrolling up
function upOrDown() {

    if (lastScrollTop > scrollTop) {
        //scrolling up
        navBar.removeClass("hide");
        lastScrollTop = scrollTop;
    } else {
        //scrolling down, hide nav-icon
        navBar.addClass("hide");
    }
    lastScrollTop = scrollTop;

};

function getDocHeight() {
    var D = document; return Math.max( D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight
    );
}
