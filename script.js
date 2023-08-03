function resetForm() {
  document.getElementById("studentForm").reset();
}

document.getElementById("studentForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Validate Mobile Number
  const mobileNumberInput = document.getElementById("mobile");
  const mobileNumber = mobileNumberInput.value.trim();

  if (!isValidMobileNumber(mobileNumber)) {
    alert("Please enter a 10-digit mobile number containing only numbers (0-9).");
    mobileNumberInput.value = ""; // Clear the incorrect value
    mobileNumberInput.focus();
    return;
  }

  // You can add your form submission logic here (e.g., sending data to the server)
  alert("Form submitted successfully!");
});

document.getElementById("mobile").addEventListener("input", function () {
  // Remove non-numeric characters from the input
  this.value = this.value.replace(/[^0-9]/g, '');

  // Ensure the input is not longer than 10 digits
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10);
    alert("Mobile number should be exactly 10 digits.");
  }
});

function isValidMobileNumber(mobileNumber) {
  // Check if the mobileNumber is exactly 10 digits and contains only numeric characters (0-9)
  return /^\d{10}$/.test(mobileNumber);
}
