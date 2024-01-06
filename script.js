// Define the arrays of characters for each character type
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeric = '0123456789';
const specialCharacters = '!@#$%^&*()-_=+[]{},.;:\'",<>?/';

// Function to prompt user for password options
function getPasswordOptions() {
 const length = parseInt(prompt('Enter password length (8-128):'));
 const hasLowerCase = confirm('Include lowercase letters?');
 const hasUpperCase = confirm('Include uppercase letters?');
 const hasNumeric = confirm('Include numeric characters?');
 const hasSpecialCharacters = confirm('Include special characters?');

 if (length < 8 || length > 128 || (!hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecialCharacters)) {
    alert('Invalid input. Please try again.');
    return getPasswordOptions();
 }

 return { length, hasLowerCase, hasUpperCase, hasNumeric, hasSpecialCharacters };
}

// Function for getting a random element from an array
function getRandom(arr) {
 return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input

function generatePassword() {
  const options = getPasswordOptions();
  let password = '';
  const charactersArray = [];
  
  if (options.hasLowerCase) charactersArray.push(lowerCase);
  if (options.hasUpperCase) charactersArray.push(upperCase);
  if (options.hasNumeric) charactersArray.push(numeric);
  if (options.hasSpecialCharacters) charactersArray.push(specialCharacters);
  
  for (let i = 0; i < options.length; i++) {
     // Changed from < to <=
      const characterType = getRandom(charactersArray);
      password += getRandom(characterType);
  }
  return password;
 }
 
 // Function to shuffle the elements in an array
 Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
 };
 
 // Get references to the #generate element
 var generateBtn = document.querySelector('#generate');
 
 // Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
 
  passwordText.value = password;
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener('click', writePassword);


// This code defines an interactive program that prompts the user to select their password generation options and generates a password based on the user's preferences.

// Here is a step-by-step explanation of the code:

// Define arrays of characters for each character type (lowercase, uppercase, numeric, and special characters).

// Define a function called getPasswordOptions that prompts the user to input their desired password length and choose the character types they want to include in their password. The function also includes error handling to ensure the user provides valid input.

// Define a helper function called getRandom that takes an array as an argument and returns a random element from the array.

// Define the main function called generatePassword that first calls the getPasswordOptions function to obtain the user's password generation options.

// Inside the generatePassword function, create an empty array called charactersArray to store the selected character types based on the user's options.

// Add the selected character types to the charactersArray based on the user's options.

// Use a for loop to iterate the desired number of times based on the user's input. In each iteration, randomly select a character type from the charactersArray and add a random character from that character type to the password string.

// After generating the password, the function returns the password string to the user.

// Overall, this interactive program allows users to easily generate customized passwords based on their preferences for password length and character types.