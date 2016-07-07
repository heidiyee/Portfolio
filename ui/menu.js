function openNav() {
    document.getElementById("nav-links").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

$(document).ready(function(){
	$('#nav-icon').click(function(){
        $(this).toggleClass('open');

        var width = document.getElementById("nav-links").style.width
        var mainRightMargin = document.getElementById("main").style.marginRight

        if (width == "250px" && mainRightMargin == "250px") {
            document.getElementById("nav-links").style.width = "0px";
            document.getElementById("main").style.marginRight = "0px";
        } else {
            document.getElementById("nav-links").style.width = "250px";
            document.getElementById("main").style.marginRight = "250px";
        }
	});
});
