var topMenu = function() {
	$("#nav-icon").click(function(e) {
        $(this).toggleClass("open");
        $("#nav-links").toggleClass("popup");

		if ($(this).hasClass("open")) {
			
		} else {
			console.log("close");
		}
		e.preventDefault();
	});
};

$(document).ready(topMenu);
