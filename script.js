// Assignment Code
var generateBtn = document.querySelector("#generate");

function genUpper() {
  //ASCII capital letter range [65-90]
  //Generate capital letters
  return String.fromCharCode(Math.floor(Math.random() * (91 - 65) ) + 65);
}

function genLowercase() {
  //ASCII lowercase letter range [97-122]
  //Generate lowercase letters
  return String.fromCharCode(Math.floor(Math.random() * (123 - 97) ) + 97);
}

function genSpecialChar() {
  //Special characters string " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ASCII range [32-47]U[58-64]U[91-96] possibly not
  //But since that range is terrible, I'm going to use the string given in the source provided by the project outline
  const specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~"
  //Generates special characters
  return specialChars.charAt(Math.floor(Math.random() * (specialChars.length)));
}

function genNumericalChar() {
  //ASCII Numerics range [48-57]
  //Generate random numbers in string form
  return String.fromCharCode(Math.floor(Math.random() * (58 - 48) ) + 48);
}

function generatePassword() {
  var password = "";
  var hasLower = true;
  var hasUpper = false;
  var hasNumbers = false;
  var hasSpecialChars = false;
  var userLength = 8;
    
  for (var i = 0; i <=  userLength; i++) {

  }
  while (password.length <= userLength) {
    if (hasLower) {
      password.concat(genLowercase());
    }
    if (hasUpper) {
      password.concat(genUpper());
    }
    if (hasNumbers) {
      password.concat(genNumericalChar());
    }
    if (hasSpecialChars) {
      password.concat(genSpecialChar());
    }
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
