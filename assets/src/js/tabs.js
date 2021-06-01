const Login = document.getElementById('LoginBtn');
const Register = document.getElementById('RegisterBtn');

document.addEventListener('DOMContentLoaded', function () {
  Register.addEventListener('click', function(){
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("show");
    }
    if (Login.classList.contains('active')) {
      Login.classList.remove("active")
    }
    document.getElementById("Register").classList.add("show");
    Register.classList.add("active");
  }, false);

  Login.addEventListener('click', function(){
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("show");
    }
    if (Register.classList.contains('active')) {
      Register.classList.remove("active")
    }
    document.getElementById("Login").classList.add("show");
    Login.classList.add("active");
  }, false);
  Login.click();
})





