var topMenu = function() {
	$("#nav-icon").click(function(e) {
        $(this).toggleClass("open");
        $("#nav-links").toggleClass("popup");
		//e.preventDefault();
	});
};

$(document).ready(topMenu);
