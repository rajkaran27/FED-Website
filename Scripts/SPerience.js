// Title of AboutSP.html
// typing animation
var i = 0, welcome;

welcome = "My SPerience"

function typing() {
    if (i < welcome.length) {
        document.getElementById("first-heading").innerHTML += welcome.charAt(i)
        i++
        setTimeout(typing, 50);
    }
}

typing();