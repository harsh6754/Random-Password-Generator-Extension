//get id, class, tag or any other type of selector.
const button = document.querySelector("#generate");
// only get by id
const txt = document.getElementById("password");

const icon = document.querySelector(".fa-copy");

const alert = document.querySelector(".alert");

let up = document.getElementById("uc");
let lc = document.getElementById("lc");
let no = document.getElementById("no");
let sp = document.getElementById("sp");

icon.addEventListener("click", () => {
  if (txt.value) {
    copypassword();
    alert.classList.remove("active");
    setTimeout(() => {
      alert.classList.add("active");
    }, 1111);
  }
});

function copypassword() {
  // Select the text field
  txt.select();
  // For mobile devices
  txt.setSelectionRange(0, 99999);
  // Copy the text inside the text field
  navigator.clipboard.writeText(txt.value);
}

button.addEventListener("click", () => {
  console.log(
    up.checked + " " + lc.checked + " " + no.checked + " " + sp.checked
  );
  generatePassword();
});

function generatePassword() {
  let password = "";
  let possible = "";
  if (up.checked) possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lc.checked) possible += "abcdefghijklmnopqrstuvwxyz";
  if (no.checked) possible += "0123456789";
  if (sp.checked) possible += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let length = 14;

  for (let i = 0; i < length; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  txt.value = password;

  alert.innerText = password + " copied !";
}
