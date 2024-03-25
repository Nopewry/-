const bt = document.querySelector(".bt");
const form = document.querySelector("#myForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

function checkUsername(min, max) {
  if (username.value.length < min || username.value.length > max) {
    showErrMessage("Username must be 6 - 10", username);
  } else {
    showPassMessage("Username are correct", username);
  }
}

function checkPassword(password, confirm) {
  if (password.value !== confirm.value) {
    showErrMessage("Wrong password", confirm);
  } else {
    showPassMessage("Correct password", confirm);
  }
}

function showPassMessage(message, input) {
  const formControl = input.parentElement;
  formControl.className = "frmDiv correct";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showErrMessage(message, input) {
  const formControl = input.parentElement;
  formControl.className = "frmDiv error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUsername(6, 10);
  checkPassword(password, confirm);

  // if(checkPassword(password.value, confirm.value)){
  //     console.log(password.value, confirm.value);
  //     password_error.style.visibility = "hidden";
  //     confirm_error.style.visibility = "hidden";
  // }
  // else{
  //     password_error.style.visibility = "visible";
  //     confirm_error.style.visibility = "visible";
  // }
});

// function checkPassword(password, confirm){
//     if(password === confirm){
//         return true;
//     }
//     return false;
// }
