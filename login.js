form = document.querySelector(".form");
login = document.querySelector(".login-link");
register = document.querySelector(".register-link");

register.addEventListener("click", function(){
    form.classList.add("active");
});
login.addEventListener("click", function(){
    form.classList.remove("active");
})