// Assignment Code
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%^*()_-";

var characterAmount = document.getElementById("characterAmount")
var numbersAmount = document.getElementById("numbers")
var uppercaseAmount = document.getElementById("uppercase")
var lowercaseAmount = document.getElementById("lowercase")
var specialAmount = document.getElementById("special")
var generate = document.getElementById("generate")
var yourPassword = document.getElementById("password")


generate.addEventListener("click",function(e) {

var characters = "upper";

  (numbersAmount.checked) ? characters += numbers:'';
  (uppercase.checked) ? characters += uppercase:'';
  (lowercaseAmount.checked) ? characters += lowercase:'';
  (specialAmount.checked) ? characters += special:'';

  yourPassword.value = password(characterAmount.value, characters);
});

function password(l, characters) {
  var pass = '';

  for(var i=0; i<l; i++) {
    pass += characters.charAt(Math.floor(Math.random() * characters.length));

  }

  return pass;
}

