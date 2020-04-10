var index = 1;

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index-1].style.display = "block";
}
function nextSlide() {
    showSlide(index=index+1);
}

function preSlide(){
    showSlide(index=index-1);
}
showSlide(index);
window.setInterval(nextSlide,6000);