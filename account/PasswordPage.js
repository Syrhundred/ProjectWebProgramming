const email = localStorage.getItem("email");
document.getElementById("log_email").textContent = email;

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
const passwordInput = document.querySelector('#password');
const eye = document.querySelector('#eye');

eye.addEventListener('click', function () {
    this.classList.toggle('fa-eye-slash');
    const type = passwordInput.getAttribute('type') === 'password' ?
        'text' : 'password';
    passwordInput.setAttribute('type', type);
});


function changeColorOfButton() {
    if (document.getElementById('password').value !== '') {
        document.getElementById('nextBtn').style.backgroundColor = rgb(62, 106, 225);
    } else {
        document.getElementById('nextBtn').style.backgroundColor = rgb(159, 181, 240);
    }
}

const usernName = localStorage.getItem('email');

document.getElementById('user').value = usernName;

