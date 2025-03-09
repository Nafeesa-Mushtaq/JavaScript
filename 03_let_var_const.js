console.log("Let,var and const difference");

// we can give multiple values to a variable when we use var keyword
// let cannot be redeclared but var can be
var a = 35;
var b = "lisa";
var c = null;
var d = undefined;
var e = true;
{
  // let help to make the blocks, by using let,it will change the content only inside the brackets,when we use let we can store only one value in the variable

  // let can be updated but not redeclared
  let b = 35;
  console.log(b);
}
console.log(b);

// this is an example of updating
// let b = 35;
// b = "lisa";

// this is an example of redeclartion
// let b = 35;
// let b = "lisa";

// constants are fixed, they cannot be redeclared or reinitialized
const author="lisa";
console.log(author);