// Problem 01

let name1="har\"ry"
console.log(name1);
console.log(name1.length);

// Problem 02
const sentence = "The quick brown fox jumps over the lazy dog";
const word = "fox";
// this function is used to findif any word is present in the sentence or not 
console.log(`The word "${word}" ${sentence.includes(word)? "is" : "is not"} in the sentence`);

// Problem 03
 let a = "NAFEESA";
 console.log(a.toLowerCase());
 console.log(a.endsWith("A"));
 console.log(a.startsWith("N"));

 //Problem 04
let str ="The amount is RS 1000";
let amount = str.slice("The amount is RS".length);
console.log(amount);

// problem 05
let frnd = "Alia";
frnd[2]= "w";
console.log(frnd[2]);   // the output shows that string is immutable so it will not change 