//select all form elements
let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
let email = document.querySelector(".email");
let generalEnquiry = document.querySelector(".general-enquiry");
let supportRequest = document.querySelector(".support-request");
let message = document.getElementById("message-text-area");
let termsCheckBox = document.getElementById("terms-consent");
let submitButton = document.querySelector(".submit-button");
let successMessage = document.querySelector(".success-message");

//select all error elements
let errorFirstName = document.getElementById("error-first-name");
let errorLastName = document.getElementById("error-last-name");
let errorIncorrectEmail = document.getElementById("error-email-incorrect");
let errorEmailRequired = document.getElementById("error-email-required");
let errorQueryType = document.getElementById("error-query-type");
let errorMessage = document.getElementById("error-message");
let errorTermsCheckBox = document.getElementById("error-terms-consent");

// function submit() {
//   if (!firstName.value) {
//     errorFirstName.style.display = "flex";
//   } else {
//     errorFirstName.style.display = "none";
//   }

//   if (!lastName.value) {
//     errorLastName.style.display = "flex";
//   } else {
//     errorLastName.style.display = "none";
//   }

//   if (!email.value) {
//     errorEmailRequired.style.display = "flex";
//   } else {
//     errorEmailRequired.style.display = "none";
//   }

//   if (!generalEnquiry.checked && !supportRequest.checked) {
//     errorQueryType.style.display = "flex";
//   } else {
//     errorQueryType.style.display = "none";
//   }

//   if (!message.value) {
//     errorMessage.style.display = "flex";
//   } else {
//     errorMessage.style.display = "none";
//   }
//   if (!termsCheckBox.checked) {
//     errorTermsCheckBox.style.display = "flex";
//   } else {
//     errorTermsCheckBox.style.display = "none";
//   }
// }
function submit() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let hasError = false;

  const fields = [
    { input: firstName, error: errorFirstName },
    { input: lastName, error: errorLastName },
    { input: email, error: errorEmailRequired },
    { input: message, error: errorMessage },
    { input: termsCheckBox, error: errorTermsCheckBox, type: "checkbox" },
  ];

  fields.forEach(({ input, error, type }) => {
    const isInvalid = type === "checkbox" ? !input.checked : !input.value;
    error.style.display = isInvalid ? "flex" : "none";
    if (isInvalid) hasError = true;
  });

  if (!generalEnquiry.checked && !supportRequest.checked) {
    errorQueryType.style.display = "flex";
    hasError = true;
  } else {
    errorQueryType.style.display = "none";
  }

  // Email format validation
  if (email.value && !emailRegex.test(email.value)) {
    errorIncorrectEmail.style.display = "flex";
    hasError = true;
  } else {
    errorIncorrectEmail.style.display = "none";
  }

  // If there is any error, return without showing success message
  if (hasError) return;

  // Display success message
  successMessage.style.display = "flex";
}

submitButton.addEventListener("click", submit);
