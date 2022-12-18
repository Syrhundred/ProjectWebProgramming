const email = localStorage.getItem("email");
document.getElementById("log_email").textContent = email;
document.getElementById('user').value = email;

function login(event) {

    event.preventDefault();
    let form = event.target;

    let formData = new FormData(form);
    fetch('http://localhost/login.php').then(result => {
        return result.text();
    }).then(text => {
        prompt(text);
    })
}

////////////////////////////////////////////////////////////////////////////////
const passwordInput = document.querySelector('#password');
const eye = document.querySelector('#eye');

eye.addEventListener('click', function () {
    this.classList.toggle('fa-eye-slash');
    const type = passwordInput.getAttribute('type') === 'password' ?
        'text' : 'password';
    passwordInput.setAttribute('type', type);
});
///////////////////////////////////////////////////////////////////////////////

const formInput = document.querySelector(".form-input");
const formButton = document.querySelector(".form-button");

formButton.disabled = true;

formInput.addEventListener("keyup", buttonState);

function buttonState() {
    if (document.querySelector("#password").value === "") {
        formButton.disabled = true;
        formButton.style.backgroundColor = '#9fb5f0';
    } else {
        formButton.disabled = false;
        formButton.style.backgroundColor = '#3e6ae1';
    }
}

/////////////////////////////////////////////////////////////////////////
formButton.addEventListener("click", () => {
    console.log("You entered:", document.querySelector(".form-input").value);
});

