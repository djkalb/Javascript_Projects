function startCountdown() {
    let seconds = document.getElementById("seconds").value
    function tick() {
        seconds --
        timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);
        if(seconds == -1) {
            alert('Time up');
            clearTimeout(time);
            timer.innerHTML = ""
        }

    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex)
//changes the slides with arrow keys
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    //creates two arrays for the number of slides and dots respectively
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    //allows the arrows to cycle through
    if (n > slides.length) {slideIndex = 1}
    if (n < 1 ) {slideIndex = slides.length}
    //removes the previously shown picture and dot 
    for (i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i =0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    //displays the photo
    slides[slideIndex-1].style.display = "block";
    //changes the dot display to mark which slide you are on
    dots[slideIndex-1].className += " active"
}
