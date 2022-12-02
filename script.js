src="https://code.jquery.com/jquery-3.6.1.js"

$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show');
    });
});

var count = 0;
var btn = document.getElementById("btn");
// var disp = document.getElementById("display");

var img = document.createElement("img");
img.src = "src/trooper.png";
var div = document.getElementById("x");

//block.setAttribute("style", "text-align:center");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    count++;
    // disp.innerHTML = count;
    if (count == 12) {
        div.appendChild(img);
        count = 0;
    }
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

    if (n > slides.length) {slideIndex = 1}  
    if (n < 1) {slideIndex = slides.length}
    
    // console.log(slideIndex)
    // console.log(slides.length)

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}