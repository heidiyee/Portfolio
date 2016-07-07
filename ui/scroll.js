var navScroll = function () {
    $('a[href^="#"]').on('click', function (event){
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
            return false;
        }
    });
};

$(document).ready(navScroll);
