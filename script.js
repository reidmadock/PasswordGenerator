// Assignment Code
var generateBtn = document.querySelector("#generate");

//ASCII capital letter range [65-90]
function addUppers() {
  var temp = "";
  for (var i = 65; i < 91; i++) {
    temp = temp.concat(String.fromCharCode(i));
  }
  console.log(temp);
  return temp;
};

//ASCII lowercase letter range [97-122]
function addLowers() {
  var temp = "";
  for (var i = 97; i < 123; i++) {
    temp = temp.concat(String.fromCharCode(i));
  }
  return temp;
};

//ASCII Numerics range [48-57]
function addNumerics() {
  var temp = "";
  for (var i = 48; i < 58; i++) {
    temp = temp.concat(String.fromCharCode(i));
  }
  return temp;
};

//Special characters string " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ASCII range [32-47]U[58-64]U[91-96] possibly not
//But since that range is terrible, I'm going to use the string given in the source provided by the project outline
function addSpecials() {
  const specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~"
  return specialChars;
};

function generatePassword() {
  var password = "";
  var charPool = "";
  var hasLower = true;
  var hasUpper = true;
  var hasNumbers = true;
  var hasSpecialChars = true;
  var userLength = 8;

  if (hasLower) {
    charPool = charPool.concat(addLowers());
  }
  if (hasUpper) {
    charPool = charPool.concat(addUppers());
  }
  if (hasNumbers) {
    charPool = charPool.concat(addNumerics());
  }
  if (hasSpecialChars) {
    charPool = charPool.concat(addSpecials());
  }

  for (i = 0; i <= userLength; i++) {
    password = password.concat(charPool.charAt(Math.floor(Math.random() * charPool.length)));
  }
  console.log(password);
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
