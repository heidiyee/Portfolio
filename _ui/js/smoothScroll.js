var smoothScroll = function() {
    $('.smooth').on('click', function (event) {
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
            }

            $('html, body').stop().animate({
                scrollTop: upTop
            }, 700);
        } else {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 700);
        }
    });
};

$(document).ready(smoothScroll);
