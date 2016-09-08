var sideNav = function() {
    var mediaQuery = window.matchMedia( "(max-width: 500px)" );

	$('#nav-icon').click(function() {
        $(this).toggleClass('open');

        var width = document.getElementById("nav-links").style.width
        var mainRightMargin = document.getElementById("main").style.marginRight

        if ($(this).hasClass('open')) {
            if (mediaQuery.matches) {
                document.getElementById("nav-links").style.width = "100%";
                document.getElementById("nav-icon").style.zIndex = "2";
            } else {
                document.getElementById("nav-links").style.width = "250px";
                document.getElementById("main").style.marginRight = "250px";
                document.getElementById("nav-icon").style.marginRight = "270px";
            }
        } else {
            document.getElementById("nav-links").style.width = "0px";
            document.getElementById("main").style.marginRight = "0px";
            document.getElementById("nav-icon").style.marginRight = "2em";
        }
	});
};

$(document).ready(sideNav);
