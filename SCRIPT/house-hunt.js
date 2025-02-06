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

//validate form sections

if (name===""|| email ===""||phone==="") {
    alert("please fill in all required fields."); return;
  }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }
    //display success message
    successMessage.textContent="Thank you! Your request has been submitted succesfully.";
    successMessage.style.display="block";
    successMessage.style.color="green";

    //clear form fields
    form.reset();
  });
   function validateEmail(email) {
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
        return phoneRegex.test(phone);
    }
   }