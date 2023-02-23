
// Title of index.html
var i = 0, welcome;

welcome = "Welcome to my website!"

function typing() {
    if (i < welcome.length) {
        document.getElementById("first-heading").innerHTML += welcome.charAt(i)
        i++
        setTimeout(typing, 50);
    }
}

typing();

//Name animation

let section = document.querySelector(".AName section")

// adds span to each letter of the word
let text = section.textContent.split("")
section.innerHTML = "";
text.forEach((e) => {
    section.innerHTML += "<span>" + e + "</span>"
})

let k = 0

let AddOnTime = setInterval(AddAnimToSpan, 100)

function AddAnimToSpan() {
    let span = document.querySelectorAll(".AName section span")[k]
    // adds a class to the span
    span.classList.add('anim_text')
    k++
    if (text.length == k) {
        HandleInterval()
        return 1
    }

}

function HandleInterval() {
    clearInterval(AddOnTime)
}



