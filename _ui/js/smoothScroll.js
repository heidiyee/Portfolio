var smoothScroll = function() {
    $('a[href*="#"]:not([href="#"])').on('click', function (event) {
        event.preventDefault();

        var upTop;
        var target = $(this.getAttribute('href'));
        var t = $(window).scrollTop();

        if (target.length) {
            $('body').css("overflow", "auto");
            $("#nav-icon").removeClass("open");
            $("#nav-links").removeClass("popup");
            upTop = target.offset().top;

            if (upTop < t) {
                upTop -= navBar.outerHeight();
                console.log("scroll down " + upTop);
            }

            $('html, body').stop().animate({
                scrollTop: upTop
            }, 700);
        }
    });
};

$(document).ready(smoothScroll);
