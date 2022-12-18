function passwordPage(){
    const form = document.getElementById("form");
    const email = document.getElementById("email");

    form.addEventListener('submit', function (e){
        e.preventDefault();

        const emailValue = email.value;

        localStorage.setItem('email', emailValue);

        window.location.href = "Password.html";
    })
}


const formInput = document.querySelector(".form-input");
const formButton = document.querySelector(".form-button");

formButton.disabled = true;

formInput.addEventListener("keyup", buttonState);

function buttonState() {
    if (document.querySelector("#email").value === "") {
        formButton.disabled = true;
        formButton.style.backgroundColor = '#9fb5f0';
    } else {
        formButton.disabled = false;
        formButton.style.backgroundColor = '#3e6ae1';
    }
}

