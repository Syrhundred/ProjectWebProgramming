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
