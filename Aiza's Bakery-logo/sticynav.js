window.onscroll = function() {navStickFunction()};

var navbar = document.getElementsByClassName("navbar")[0];
var sticky = navbar.offsetTop;

function navStickFunction() {
    if (window.pageYOffset >= sticky) {
        //alert('high' + document.getElementsByClassName("navbar").length + " -> " + sticky)
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}