// Arrays for computer to generate passwords 

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialCharacters  = ['~','!','@','#','%','&','*',]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var selectionPool = []

// Assignment Code

var generateBtn = document.querySelector("#generate");

// We're creating a function that will generate the entire process for producing our password.

function generatePassword() {
  // We need to ask the user how many characters do they want their password to have (between 8 - 128).
 
  let numberOfCharacters = parseInt(prompt(" How many characters would you like your password to have? "));
 
  if (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)){
    alert("Your password must have a character range between 8 and 128");
    return null;
  }

  // We need to ask the user if they would like to include uppercase, lowercase, numeric or special case characters.

  let uCoptions = confirm(" Would you like to have uppercase characters? ");

  if (
    uCoptions == true) {
    selectionPool = selectionPool.concat(upperCase);
    
  }
  console.log(selectionPool);
  let ulowerCase = confirm("Would you like to have lowercase characters?");

  if (ulowerCase == true) {
    selectionPool = selectionPool.concat(lowerCase);  
  }
  console.log(selectionPool);
  let uSoptions = confirm("Would you like to have special case characters?");

  if (uSoptions == true) {
    selectionPool = selectionPool.concat(specialCharacters);
  }
  console.log(selectionPool);
  let uNoptions = confirm("Would like to have numbers in your password?");

    if (uNoptions == true) { 
      selectionPool = selectionPool.concat(numeric);
    }
    console.log(selectionPool);

  // We must validate that at least one of these options have been chosen

  if (selectionPool.length == 0) {
    alert("No items have been selected, please return and select an items.");
    return

  }

  //Once we complete it we need to return our randomized password back to the user.

  var finalPassword = "";

  for (var i = 0; i < numberOfCharacters; i++){
      var randomIndex = Math.floor(Math.random() * selectionPool.length);
  
      finalPassword = finalPassword + selectionPool[randomIndex];
  }

  return finalPassword;
}

console.log(selectionPool);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);