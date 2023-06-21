// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var numbers = [1,2,3,4,5,6,7,8,9,0]
var symbols = ["@", "#", "$"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",'R',"S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function generatePassword() {
  // prompt user ask user for number of character 8-128
// if value is not between 8 and 128 or not a number,
// promp the user agian
// prompt the user for lowercase, uppercase, numbers, special characters
// validate the input
// generate password
// display the password to the page
// 
var numcharacters = window.prompt('Enter a number between 8 and 128'); {

if (numcharacters <= 8 && numcharacters >= 128);{
console.log(numcharacters);

} if (numcharacters > 8 && numcharacters < 128); {
  numcharacters = window.prompt('Enter a number between 8 and 128');


} if (!numcharacters); {
numcharacters = window.prompt('Enter a number between 8 and 128');
}
}

message = alert ('Click Ok to confirm using lowercase');
console.log( lowercase);


message = alert ('Click Ok to confirm using Uppercase');
console.log( uppercase);

message = alert ('Click Ok to confirm using Numbers');
console.log( numbers);

message = alert ('Click Ok to confirm using Special characters');
console.log(symbols);

message = confirm ('Are you sure you want to generate new password')
if (!message) 
prompt('Enter a number between 8 and 128');;



return 'somePassword';
};



generateBtn.addEventListener("click", writePassword);







