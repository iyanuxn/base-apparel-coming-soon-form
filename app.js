document.getElementById("myInput").addEventListener("invalid", myFunction);
var email = document.querySelector(".mail")
var error = document.querySelector(".errortext")

function myFunction() {
    this.setCustomValidity(" ");
}

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
      location.reload()
      return true;
    } 
    else {
        email.classList.add("wrong-mail");
        error.style.display = "block";
        return false
    }
  
  }