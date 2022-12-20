let slideIndex = 1;
showSlides(slideIndex);
var header = document.getElementById("features");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var aboutCar = {
    model: "Model Y",
    paint: "white",
    koleso: "First Wheel",
    autopilot: false
};

var bill = 0;

function infoTaker() {
    aboutCar = {
        model: "Model Y"
    }
    bill = 58190;
    document.getElementById('bill').innerHTML = '$ ' + bill;

}

function infoTaker2() {
    aboutCar = {
        model: "Model Y Performance"
    }
    console.log("basyldy")

    bill = 62190;
    document.getElementById('bill').innerHTML = '$ ' + bill;
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
        koleso: "First Wheel"
    }
}

function kolesoTaker2() {
    aboutCar = {
        koleso: "Second Wheel"
    }
}
var count = 0;
function autopilotTaker() {

    if (count < 1) {
        count++;
        aboutCar = {
            autopilot: true
        }
        bill += 6000;
        document.getElementById('bill').innerHTML = '$ ' + bill
    } else {
        aboutCar = {
            autopilot: false
        }
        count = 0;
    }
}

var add = false;

function addtoCart_button() {
    window.location.href = "Cart.html";
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
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}