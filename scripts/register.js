function validateName(fullNameValue) {
  let regexName = /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi;
  return regexName.test(fullNameValue);
}

function validatePassword(passwordValue) {
  let passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;
  return passwordRegex.test(passwordValue);
}
function validateEmail(emailValue) {
  let emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return emailRegex.test(emailValue);
}
function validateNumber(phoneNumberValue) {
  let numberRegex =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
  return numberRegex.test(phoneNumberValue);
}
function validatePasswordConfirm(confirmPasswordValue) {
  let confirmPasswordRegex =
    /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;
  return confirmPasswordRegex.test(confirmPasswordValue);
}
fullRegistrationInfo = [];
function register() {
  let fullNameValue = document.getElementById("fullName").value;
  let fullName = document.getElementById("fullName");
  let emailValue = document.getElementById("email").value;
  let email = document.getElementById("email");
  let phoneNumberValue = document.getElementById("phoneNumber").value;
  let phoneNumber = document.getElementById("phoneNumber");
  let passwordValue = document.getElementById("password").value;
  let password = document.getElementById("password");
  let confirmPasswordValue = document.getElementById("confirmPassword").value;
  let confirmPassword = document.getElementById("confirmPassword");
  let error = document.getElementById("error");
  let fullRegistrationInformation = {
    Name: fullNameValue,
    password: passwordValue,
    email: emailValue,
    passwordConfirm: confirmPasswordValue,
    phoneNumber: phoneNumberValue,
  };

  if (
    fullNameValue === "" ||
    emailValue === "" ||
    phoneNumberValue === "" ||
    passwordValue === "" ||
    confirmPasswordValue === ""
  ) {
    error.style.margin = "0px 0 10px 0 ";
    error.innerText = "მიუთითე ყველა პარაგრაფი";
    error.style.color = "red";
    if (!validateName(fullNameValue)) {
      fullName.style.border = "1px solid red";
    } else {
      fullName.style.border = "";
    }
    if (!validatePassword(passwordValue)) {
      password.style.border = "1px solid red";
    } else {
      password.style.border = "";
    }
    if (!validateEmail(emailValue)) {
      email.style.border = "1px solid red";
    } else {
      email.style.border = "";
    }
    if (!validateNumber(phoneNumberValue)) {
      phoneNumber.style.border = "1px solid red";
    } else {
      phoneNumber.style.border = "";
    }
    if (!validatePasswordConfirm(confirmPasswordValue)) {
      confirmPassword.style.border = "1px solid red";
    } else {
      confirmPassword.style.border = "";
    }
  } else if (passwordValue !== confirmPasswordValue) {
    error.style.margin = "0px 0 10px 0 ";
    error.innerText = "პაროლი არ ემთხვევა ერთმანეთს";
    error.style.color = "red";
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
  } else {
    window.location.href = "index.html";
    fullRegistrationInfo.push(fullRegistrationInformation);
  }
}
