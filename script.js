var number = prompt("please enter your phone numb with dashes- ex. 'xxx-xxx-xxxx'");
console.log(number);
console.log(number.length);
if (number.length === 12)
    if (number.charAt(3&&7)==="-")
      console.log("good job");
else console.log("please reenter your number");
