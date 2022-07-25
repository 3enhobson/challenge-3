// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordArray = []

function generatePassword() {

var userAnswer = window.prompt("How many characters would you like in your password?")

var passwordLength = parseInt(userAnswer)

if (isNaN(passwordLength)){
  window.prompt("Must be a number!")
  return
}

if (passwordLength < 8 || passwordLength > 128){
  window.prompt("Password must be between 8 & 128 characters.")
} else {
 var includeLowercase = window.confirm("Would you like to include lowercase letter?")
 var includeUppercase = window.confirm("Would you like to include uppercase letters?")
 var includeNumbers = window.confirm("Would you like to include numbers?")
 var includeSymbols = window.confirm("Would you like to include symbols?")

 if (includeLowercase){
  passwordArray.push("a", "b","c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
 }
 if (includeUppercase){
  passwordArray.push("A", "B","C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
 }
 if (includeNumbers){
  passwordArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
 }
if (includeSymbols){
  passwordArray.push("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "}", "[", "]", "|", ":", ";", "?", "<", ">", ",", ".")
}
var finalArray = []
}



}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
