var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

showslides(current);
prev.onclick = prevslide;
next.onclick = nextslide;

function showslides(n){
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    slides[n].style.display="block";
}

function prevslide() {
    if(current > 0) current -= 1;
    else current = slides.length -1 ;
        showslides(current);
}

function nextslide() {
    if(current<slides.length - 1) current += 1;
    else current = 0;
        showslides(current);
}


