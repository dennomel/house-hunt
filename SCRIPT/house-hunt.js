//Initiating DOM
document.addEventListener("DOMContentLoaded", function () {
  const form = this.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  
  
  //stop default form submission
  form.addEventListener("submit",function(event) {event.preventDefault();
