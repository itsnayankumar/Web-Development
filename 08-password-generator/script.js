const password = document.getElementById("password");
const lengthInput = document.getElementById("length");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const statuss = document.getElementById("status");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "1234567890";
const symbolChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

generate.addEventListener("click", function () {
  const passwordLength = Number(lengthInput.value);
  if (!passwordLength || passwordLength < 4 || passwordLength > 64) {
    password.textContent = "Length must be 4 to 64";
    return;
  } else {
    let chars = "";
    if (upper.checked) {
      chars += upperChars;
    }
    if (lower.checked) {
      chars += lowerChars;
    }
    if (numbers.checked) {
      chars += numberChars;
    }
    if (symbols.checked) {
      chars += symbolChars;
    }
    if (!chars) {
      password.textContent = "Select at least one type";
      return;
    }
    console.log(chars);
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    password.textContent = result;
  }
});

copy.addEventListener("click", function () {
  navigator.clipboard.writeText(password.textContent);
  statuss.textContent = "Copied!!"
})