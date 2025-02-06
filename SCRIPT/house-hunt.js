//Initiating DOM
document.addEventListener("DOMContentLoaded", function () {
  const form = this.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  
  
  //stop default form submission
  form.addEventListener("submit",function(event) {event.preventDefault();

//Get form values
const name=document.getElementById("Name").ariaValueMax.trim();
const name=document.getElementById("Email").ariaValueMax.trim();
const name=document.getElementById("phone").ariaValueMax.trim();
