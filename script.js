src="https://code.jquery.com/jquery-3.6.1.js"

$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show');
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // console.log(typeof(slides))

    // console.log(slides.length)
    // console.log(n)

    // for (i = 0; i < 6; i++) {
    //     slides[i].style.display = 1 ;  
    // }

    if (n > 6) {slideIndex = 1}  
    if (n < 1) {slideIndex = 6}
    
    // console.log(slideIndex)
    // console.log(slides.length)

    for (i = 0; i < 6; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}