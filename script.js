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

function getPassLength() {
  var valid = false;
  var passwordLength = 0;
  while (!valid) {
    var checkLength = prompt("Please enter desired length between 8-128");
    passwordLength = parseInt(checkLength);
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid number");
    } else {
      valid = true;
    }
  }
  return checkLength;
}

function generatePassword() {
  var password = "";
  var charPool = "";
  var userLength = 8;
  var checkLower = confirm("Would you like to add Lower Case?");
  var checkUpper = confirm("Would you like to add Upper Case?");
  var checkNumbers = confirm("Would you like to add numbers?");
  var checkSpecial = confirm("Would you like to add Special Characters?");

  if (checkLower) {
    charPool = charPool.concat(addLowers());
  }
  if (checkUpper) {
    charPool = charPool.concat(addUppers());
  }
  if (checkNumbers) {
    charPool = charPool.concat(addNumerics());
  }
  if (checkSpecial) {
    charPool = charPool.concat(addSpecials());
  }

  userLength = getPassLength();

  for (i = 0; i < userLength; i++) {
    password = password.concat(charPool.charAt(Math.floor(Math.random() * charPool.length)));
    console.log(i);
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
