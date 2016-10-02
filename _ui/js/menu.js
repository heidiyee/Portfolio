var topMenu = function() {
	$("#nav-icon").click(function(e) {
		var currentScrollTop = $(window).scrollTop();
        $(this).toggleClass("open");
        $("#nav-links").toggleClass("popup");
		if ($(this).hasClass("open")) {
			$('body').css("overflow", "hidden");
			if (currentScrollTop < 100) {
				$(".st0").addClass('black');
				$(".line").addClass('gray');
			}
		} else {
			$('body').css("overflow", "auto");
			if (currentScrollTop < 100) {
				$(".st0").removeClass('black');
				$(".line").removeClass('gray');
			}
		}
		e.preventDefault();
	});
};

$(document).ready(topMenu);
