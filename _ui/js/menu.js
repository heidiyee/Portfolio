var topMenu = function() {
	$("#nav-icon").click(function(e) {
		var scrollTop = $(window).scrollTop();
        $(this).toggleClass("open");
        $("#nav-links").toggleClass("popup");
		if ($(this).hasClass("open")) {
			$('body').css("overflow", "hidden");
			if (scrollTop < 100) {
				console.log("not working");
				$(".st0").addClass('gray');
				$(".line").addClass('gray');
			}
		} else {
			$('body').css("overflow", "auto");
			if (scrollTop < 100) {
				$(".st0").removeClass('gray');
				$(".line").removeClass('gray');
			}
		}
		e.preventDefault();
	});
};

$(document).ready(topMenu);
