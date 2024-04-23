function logIn() {
  function validateEmail(emailValue) {
    let emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return emailRegex.test(emailValue);
  }
  function validatePassword(passwordValue) {
    let passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;
    return passwordRegex.test(passwordValue);
  }

  let passwordValue = document.getElementById("password").value;
  let password = document.getElementById("password");
  let emailValue = document.getElementById("email").value;
  let email = document.getElementById("email");
  let error1 = document.getElementById("error1");
  let error2 = document.getElementById("error2");
  if (passwordValue === "" || emailValue === "") {
    error1.style.margin = "0px 0 10px 0 ";
    error1.innerText = "აუცილებელი ველი";
    error1.style.color = "red";
    error2.style.margin = "0px 0 10px 0 ";
    error2.innerText = "აუცილებელი ველი";
    error2.style.color = "red";
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

  if (validatePassword(passwordValue) & (validateEmail(emailValue) === true)) {
    window.location.href = "index.html";
  }
}
