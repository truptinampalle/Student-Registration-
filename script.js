document.getElementById("studentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Registration Successful!");

    this.reset();

});