// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getRandomItem(list) {
  var randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]

}

var passwordArray = []

function generatePassword() {

  var userAnswer = window.prompt("How many characters would you like in your password?")

  var passwordLength = parseInt(userAnswer)

  if (isNaN(passwordLength)) {
    window.alert("Must be a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.prompt("Password must be between 8 & 128 characters.")
    return
  }

  var includeLowercase = window.confirm("Would you like to include lowercase letter?")
  var includeUppercase = window.confirm("Would you like to include uppercase letters?")
  var includeNumbers = window.confirm("Would you like to include numbers?")
  var includeSymbols = window.confirm("Would you like to include symbols?")

  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "}", "[", "]", "|", ":", ";", "?", "<", ">", ",", "."]


  if (includeLowercase === true) {
    passwordArray.push(lowercaseList)
    
  }

  if (includeUppercase === true) {
    passwordArray.push(uppercaseList)
    
  }
  if (includeNumbers === true) {
    passwordArray.push(numberList)
    
  }
  if (includeSymbols === true) {
    passwordArray.push(symbolList)
    
  }

  if (passwordArray.length === 0) {
    window.alert("You must select at least one catagory!")
    return
  }

  var generatedPassword = ""
 
  

  for (var i = 0; i < passwordLength; i++) {
    //randomList picks a list 
    var randomList = getRandomItem(passwordArray)
    
    //randomCharacter picks a character from whatever list was picked
    var randomCharacter = getRandomItem(randomList)

    generatedPassword += randomCharacter
  }

  return generatedPassword
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
