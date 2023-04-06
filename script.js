// Assignment Code
var characterLength = 8;
var choice = []
var special = ["!","@","#","$","%","^","&","*",")","("];
var lowerCase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var upperCase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var numbers = ["1","2","3","4","5","6","7","8","9"];
var generateBtn = document.querySelector("#generate");
/*these items not implemented in this revision, storing for future attempt to write tool using checkboxes rather than prompts.
let numInput = document.getElementById('length')
let upInput= document.getElementById('uppercase')
let lowInput= document.getElementById('lowercase')
let num= document.getElementById('numbers')
let spec= document.getElementById('special')
console.log(lowercase)*/




// Write password to the #password input
function writePassword() {
  var complete = getPrompts(); 
  if (complete){
  var userPass = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = userPass;
}};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// for loop created using MATH functions to randomize the return index from the choice array created in the getPrompts function.
function generatePassword() {
  var password = "";
  for(var i =0; i < characterLength; i++ ){
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex];}
  return password;}


/*this function creates the prompts that the user can elect to have included in the password.
the use of a prompt for this item however, came across to me as not the best choice for user functionality
 as when clicking a cancel button I would expect it to halt the entire operation, rather than proceed and opt out that choice.*/
function getPrompts(){
  choice = [];
  characterLength = parseInt(prompt("How many characters would you like your new password to be? Choose between 8 to 128"))
if (isNaN(characterLength) || characterLength <8 || characterLength > 128){
  alert("The desired number must be within range, make a new choice");
  return false;
}
if(confirm ("Lowercase letters included?")){
  
  choice = choice.concat(lowerCase)}
if(confirm ("Uppercase letters included?")){
  choice= choice.concat(upperCase);
}
if(confirm ("Special characters included?")){
  choice= choice.concat(special);
}
if(confirm ("AAAAANNND Numbers included?Almost there!")){
choice= choice.concat(numbers);  
}                                                                                                                                           
return choice;}

/* This portion commented out, I plan on further debugging and figuring out how I can create this same tool but utilizing checkboxes
feel free to comment on tips during graded if you have any ideas!*/
/*function getPrompts(){
    choice = [];
    characterLength = parseInt(prompt("How many characters would you like your new password to be? Choose between 8 to 128"))
if (isNaN(characterLength) || characterLength <8 || characterLength > 128){
  alert("The desired number must be within range, make a new choice");
  return false;
}
  if(document.getElementById('lowercase').checked){{
      lowercase.innerHTML = 'lowercase characters will be included'
  }
  choice.concat(lowerCase)
};

  if(upperCase.checked){
      uppercase.innerHTML = 'uppercase characters will be included'
  }
  choice.concat(upperCase)


  if(special.checked){
      special.innerHTML = ' special characters will be included'
  }
  choice.concat(special);

  if(numbers.checked){
      numbers.innerHTML = 'numbers will be included'
  }
  choice.concat(numbers);

  return choice;}
  
/*addEventListener('change', incLow())
  function incLow(){
    if(lowerCase.checked){
        lowercase.innerHTML = 'lowercase characters will be included'
    }
    choice.concat(lowerCase)
};
function incUpp(){
    if(upperCase.checked){
        uppercase.innerHTML = 'uppercase characters will be included'
    }
    choice.concat(upperCase)
};
function incSpec(){
    if(special.checked){
        special.innerHTML = ' special characters will be included'
    }
    choice.concat(special)
};
function incNumb(){
    if(numbers.checked){
        numbers.innerHTML = 'numbers will be included'
    }
    choice.concat(numbers)
};
*/
