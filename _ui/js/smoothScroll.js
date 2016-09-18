var smoothScroll = function() {
    $('a[href*="#"]:not([href="#"])').on('click', function (event) {
        event.preventDefault();

        var target = $(this.getAttribute('href'));
        if (target.length) {
            console.log("hello");
            $("#nav-icon").removeClass("open");
            $("#nav-links").removeClass("popup");
            $(".nav-bar").addClass("hide");

            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);

        }
    });
};

// $(document).ready(function(){
//     $('input, textarea').placeholder();
// });

$(document).ready(smoothScroll);
