let slideIndex = 1;
showSlides(slideIndex);
var header = document.getElementById("features");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var aboutCar = {
    model: "Model 3",
    paint: "Model 3 Performance",
    koleso: "First Wheel",
    autopilot: false
};

var bill = 0;

function infoTaker() {
    aboutCar = {
        model : "Model 3"
    }
}

function infoTaker2() {
    aboutCar = {
        model : "Model 3 Performance"
    }
}

function colorTaker() {
    aboutCar = {
        paint: "White"
    }
}
function colorTaker2() {
    aboutCar = {
        paint: "Red"
    }
}

function kolesoTaker() {
    aboutCar = {
        koleso : "First Wheel"
    }
}

function kolesoTaker2() {
    aboutCar = {
        koleso : "Second Wheel"
    }
}

function autopilotTaker(){
    aboutCar = {
        autopilot: true
    }
}
var add = false;
function addtoCart_button() {
    add = true;
}

    if (add === true) {

    }

    if (aboutCar.model === "Model 3" && aboutCar.autopilot === true) {
        bill = 46390;
    }

    if (aboutCar.model === "Model 3" && aboutCar.autopilot === false) {
        bill = 40390;
    }

    if (aboutCar.model === "Model 3 Performance" && aboutCar.autopilot === false) {
        bill = 56390;
    }

    if (aboutCar.model === "Model 3 Performance" && aboutCar.autopilot === true) {
        bill = 62390;
    }




function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}