// Assignment Code
var generateBtn = document.querySelector("#generate");

/* ASCII capital letter range [65-90]
create temp string to return so program can garbage collect it after result has been pooled
for loop uses fromCharCode to generate a string of A-Z from the ASCII table */
function addUppers() {
  var temp = "";
  for (var i = 65; i < 91; i++) {
    temp = temp.concat(String.fromCharCode(i));
  }
  return temp;
};

/* ASCII lowercase letter range [97-122]
create temp string to return so program can garbage collect it after result has been pooled
for loop uses fromCharCode to generate a string of A-Z from the ASCII table */
function addLowers() {
  var temp = "";
  for (var i = 97; i < 123; i++) {
    temp = temp.concat(String.fromCharCode(i));
  }
  return temp;
};

/* ASCII Numerics range [48-57]
create temp string to return so program can garbage collect it after result has been pooled
for loop uses fromCharCode to generate a string of 0-9 from the ASCII table */
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
  //this variable is a bit redundant, but it kind of makes things more clear. Still, I debate removing it.
  const specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~"
  return specialChars;
};

function getPassLength() {
  var valid = false;
  var passwordLength = 0;
  //Password is false by default, while loop continues until a valid password meeting parameters is met.
  while (!valid) {
    passwordLength = parseInt(prompt("Please enter desired length between 8-128"));
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Please enter valid number");
    } else {
      valid = true;
    }
  }
  return passwordLength;
}

function generatePassword() {
  var password = "";
  var charPool = "";
  var userLength = 0; //User defined password length
  var checkLower = confirm("Would you like to add Lower Case?");
  var checkUpper = confirm("Would you like to add Upper Case?");
  var checkNumbers = confirm("Would you like to add numbers?");
  var checkSpecial = confirm("Would you like to add Special Characters?");

  //password pool generation done by external functions to keep code clean.
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

  //This code was placed outside aswell, for cleanliness, and to reduce the number of variables in this function.
  userLength = getPassLength();

  for (i = 0; i < userLength; i++) {
    //add a random character from the pool onto the password up until the length defined by the user
    password = password.concat(charPool.charAt(Math.floor(Math.random() * charPool.length)));
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