function phoneNumber(number){
while (number.length !== 12){
  number = prompt("please reenter your number and use dashes");
  }
if (number.charAt(3&&7)==="-")
  alert("Your phone number looks correct");
}

function birthdayDate(birthday){
while (birthday.length !== 8) {
  birthday = prompt("please use the format xx/xx/xx");
}
if (birthday.charAt(2&&5)==="/") {
  alert("Awesome!");
  }
}

function checkPostal(postalCode){
  if (postalCode.length === 5 || postalCode.length === 10){
    if (postalCode.length > 5){
      if (postalCode.charAt(5)==="-") {
        alert("thank you for the full zip code");
      }else{
        checkPostal(prompt("that is not correct please enter your postal code with a dash"));
      }
    }else{
      alert("good job");
    }
  }else{
    checkPostal(prompt("that is not correct please enter your postal code"));
    }
  }

function checkAbbreviation(state){
  if (state.length === 2){
    if(state === state.toUpperCase()){
      alert("Great!");
    }else{
      checkAbbreviation(prompt("please capitalize the abbreviation"));
    }
  }else{
    checkAbbreviation(prompt("please use the abbreviation"));
  }
}

function isMarried(answer){
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "no"){
    alert("Good for you");
  }else{
    isMarried(prompt("Answer yes or no."));
  }
}

phoneNumber(prompt("please enter your phone numb with dashes- ex. 'xxx-xxx-xxxx'"));
birthdayDate(prompt("Please enter your birthday "));
checkPostal(prompt("please enter your postal code"));
checkAbbreviation(prompt("What state do you live in?"));
isMarried(prompt("Are you Married yes or no?"));
