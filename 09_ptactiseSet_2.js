// problem 01
let a = prompt("Tell me your age");
console.log(a);
if (a>10 && a<20) {
    console.log("Your age lies between 10 and 20");
}
else{
console.log("Your age does not lies between 10 and 20");
}

// problem 02

let b = prompt("Tell me your age");
// we need to write the case in '' or "" as its type is string
switch (b) {
  case '10':
    console.log("You are 10 years old");
    break;

  case '20':
    console.log("You are 20 years old");
    break;

  case '30':
    console.log("You are 30 years old");
    break;

  default:
    console.log("Sorry, we have no message for your age");
}

// problem 03
let c = prompt("enter your desired number");
c=Number.parseInt(c);
if(c%2==0 && c%3==0){
    console.log("Your number is divisible by 2 and 3")
}
else{
    console.log("Your number is not divisible by 2 and 3")
}

// problem 04

let num = prompt("Enter your desired number");
num=Number.parseInt(num);
if(num % 2== 0 || num % 3== 0){
    console.log("Your number is either divisible by 2 or 3")
}
else{
    console.log("Your number is not divisible by either 3 or 2")
}

// problem 05
let age = prompt("Tell me what is your age");
let i = age>18? "you can drive": "You cannot drive";
console.log(i);