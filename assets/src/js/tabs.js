const Login = document.getElementById('LoginBtn');
const Register = document.getElementById('RegisterBtn');

Login.addEventListener('click', openTab("Login", Login));

Register.addEventListener('click', openTab("Register", Register));

function openTab(Name, btn) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    console.log("hidden");
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    console.log("none-active");
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Name).style.display = "block";
    btn.className += " active";
    console.log("activated");
  }

