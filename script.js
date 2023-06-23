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
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",'R',"S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function pickRandom(arr) {
 var index = Math.floor(Math.random() *arr.length);
 console.log(index,arr[index])
 return arr[index]
}
function generatePassword() {
  // prompt user ask user for number of character 8-128
// if value is not between 8 and 128 or not a number,
// promp the user agian
// prompt the user for lowercase, uppercase, numbers, special characters
// validate the input
// generate password
// display the password to the page
// 

var numcharacters = window.prompt('Enter a number between 8 and 128'); 
numcharacters = parseInt(numcharacters)

if (numcharacters && numcharacters >= 8 && numcharacters <= 128){
console.log(numcharacters);

} else {
  return ('Try Again');
}

var lowercaseMessage = confirm ('Click Ok to confirm using lowercase');
var userPassWord = []
if (lowercaseMessage){
console.log(lowerCase);
userPassWord.push(pickRandom(lowerCase))
}



var uppercaseMessage = confirm ('Click Ok to confirm using Uppercase');

if (uppercaseMessage){
  console.log(upperCase);
  userPassWord.push(pickRandom(upperCase))
}

var numbersMessage = confirm ('Click Ok to confirm using Numbers');

if (numbersMessage){
  console.log(numbers);
  userPassWord.push(pickRandom(numbers))
}

  
var symbolsMessage = confirm ('Click Ok to confirm using Special characters');

if (numbersMessage){
  console.log(symbolsMessage);
  userPassWord.push(pickRandom(symbols))
}
console.log(userPassWord)





//var userpassword = '';
// TODO write for loop to generate password.


//for(let i = 0; i < 5; i++)
for (let index = userPassWord.length; index < numcharacters; index++) {
  userPassWord.push(pickRandom(lowerCase))
  console.log(userPassWord);
}



return userPassWord.join('');
};



generateBtn.addEventListener("click", writePassword);







