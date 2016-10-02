//varibles for nav and hero events when first scrolling
var hero = $(".hero"),
    navBar = $(".nav-bar"),
    navIcon = $("#nav-icon");

//for showing the nav when scrolling up
var scrollTop,
    lastScrollTop = 0,
    delta = 15;


//showing footer at the very end
var footer = $("footer"),
    footerHeight = footer.outerHeight();


$(window).scroll(function(){
    scrollTop = $(this).scrollTop();

    // fade in and out hero text
    if (scrollTop < 500) {
        hero.css("opacity", 1 - scrollTop / 350);
    }

    //parallax scrolling
    $('.parallax').css('top', scrollTop/3);

    // stick the nav bar on index page up at the top momentarily and add white background with black and gray font
    if (scrollTop > 100) {
        if (!navBar.hasClass('project')) {
            $(".st0").addClass('black');
            $(".line").addClass('gray');
            $('#nav-links a').addClass('gray');
            navBar.addClass('sticky');
        }
    } else {
        if (!navBar.hasClass('project')) {
            $(".st0").removeClass('black');
            $(".line").removeClass('gray');
            $('#nav-links a').removeClass('gray');
            navBar.removeClass('sticky');
        }
    }

    if(scrollTop + window.innerHeight >= getDocHeight()) {
       footer.addClass("appear");
    } else {
       footer.removeClass("appear");
    }

    //hide nav-bar on project sites at higher scrolltop
    if (navBar.hasClass('project')) {
        if (scrollTop > 275) {
            upOrDown();
        }
    } else {
        //hide navbar on main page
        if (scrollTop > 400) {
            upOrDown();
        }
    }

});

//returns true if scrolling down, returns false if scrolling up
function upOrDown() {

    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
    }

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
