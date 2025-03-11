console.log("Today we will study about conditionals in JS");

// prompt is used to ask something from the user
let a = prompt("Hey whats your age");
console.log(a);
console.log(typeof a); // output---> string

// this mehod is used to convert the string type to number
a = Number.parseInt(a);
console.log(typeof a);

// alert is used to tell something to user

if (a < 0) {
  alert("This is an invalid age");
} 
else if (a > 0 && a < 10) {
  alert("You are a kid, you cannot drive");
}
 else if (a > 9 && a < 18) {
  alert("You are a young but not adult so, you cannot drive");
} 
else if (a > 18) {
  alert("You are adult , you can drive");
}
console.log("Done");

// remember the syntax, can say a shorter form of if-else
console.log("You can", (a<18? "Not drive": "Drive"));
