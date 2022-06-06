// export function initLogInJS() {
//   const signUp = document.querySelector(".sign-up");
//   signUp.addEventListener("click", popUpSignUp);
// }
function initLogInJS() {
  const signUp = document.querySelector(".sign-up");
  signUp.addEventListener("click", popUpSignUp);
}

initLogInJS();

function popUpSignUp() {
  const signUpWindow = window.open(
    "/page/sign-up.html",
    "width=1200, height=800",
    "_blank"
  );
}
