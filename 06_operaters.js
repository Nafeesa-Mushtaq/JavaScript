// they are also valid in JS
// 44;
// "helllo world";
// 2455;
// false;

console.log("Arithematic Operaters in JS");
let a = 45;
let b = 7;
console.log("a + b =", a + b);
console.log("a x b =", a * b);

//this will give the exact calculation not like c language,in which it only gives quotient
console.log("a - b =", a - b);
console.log("a / b =", a / b);

// this expression means a to the power b
console.log("a ** b =", a ** b);

// this expression will give us the reminder
console.log("a % b =", a % b);

// increment and decrement opertaers work same as in c
console.log("a++ = ", a++);
console.log("a-- = ", a--);
console.log("++a = ", ++a);
console.log("--a = ", --a);

// Asssignment operaters
let c = 1;
c += 5;
console.log(c);
c -= 5;
c *= 5;
c /= 5;
c %= 5;
c **= 5;

// comparison operaters
let i = 23;
let j = 34;
console.log("i == j is", i == j);
console.log("i != j is", i != j);

let k = "23";

// the === will return false as k is a string and i is an integar
console.log("i === k is", i === j);
// similarly !== will return true
console.log("i !== k is", i !== j);

console.log("i > j is", i > j);
console.log("i < j is", i < j);
console.log("i >= j is", i >= j);
console.log("i <= j is", i <= j);

// logical operaters
// they work same as in c language
console.log(i < j && j == 34);
console.log(i > j && j == 34);
console.log(i < j && j == 4);
console.log(i < j || j == 34);
console.log(i > j || j == 34);
console.log(i < j || j == 4);
console.log(!true);
console.log(!false);
