var number = prompt("please enter your phone numb with dashes- ex. 'xxx-xxx-xxxx'");
while (number.length !== 12){
  number = prompt("please reenter your number");
}
if (number.charAt(3&&7)==="-")
  alert("Your phone number looks correct");
var birthday = prompt("Please enter your birthday xx/xx/xx");
while (birthday.length !== 8) {
  birthday = prompt("please reenter your birthday");
}
if (birthday.charAt(2&&5)==="/") {
  prompt("Awesome!");
}
var postalCode = prompt("enter your postal code as xxxxx or xxxxx-xxxx");
while (postalCode.length !== 8 || 10) {
  postalCode = prompt("reenter your postal code");
}
if (postalCode.length ===10) {
  if (postalCode.charAt(8==="-")) {
    alert("Good job");
  }else {
    alert("good job");
  }
}
// var birth = prompt("please enter your birthday as xx/xx/xx")
// if (birth.charAt === "/")
//
// TODO:
    // postal code (xxxxx OR xxxxx-xxxx)
    // state abbreviation (XX)
    // married ("yes" or "no" or "YES" or "NO" or "Yes" or "No")
