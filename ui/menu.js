$(document).ready(function(){
    var mediaQuery = window.matchMedia( "(max-width: 500px)" );

	$('#nav-icon').click(function(){
        $(this).toggleClass('open');

        var width = document.getElementById("nav-links").style.width
        var mainRightMargin = document.getElementById("main").style.marginRight
        console.log(width)

        if (mediaQuery.matches) {
            if (width == "100%") {
                document.getElementById("nav-links").style.width = "0px";
                document.getElementById("nav-icon").style.position = "";
            } else {
                //document.getElementById("nav-links").style.top = "50px";
                document.getElementById("nav-links").style.width = "100%";
                document.getElementById("nav-icon").style.zIndex = "2";
                document.getElementById("nav-icon").style.position = "fixed";
                // document.getElementById("main").style.marginRight = "100%";
            }
        } else {
            if (width == "250px" && mainRightMargin == "250px") {
                document.getElementById("nav-links").style.width = "0px";
                document.getElementById("main").style.marginRight = "0px";
            } else {
                document.getElementById("nav-links").style.width = "250px";
                document.getElementById("main").style.marginRight = "250px";
            }
        }
	});
});
