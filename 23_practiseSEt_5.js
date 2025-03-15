// Problem 01
let arr = [1,2,3,4,5,6,7,8,9];
// let a = prompt("Enter a number");
// a=Number.parseInt(a);
// arr.push(a);
console.log(arr);

// Problem 02
// let b;
// while (b!=0) {
//     b=prompt("Enter a number");
//     b=Number.parseInt(b);
//     arr.push(b);    
// }
// console.log(arr);

// Problem 03
let num=[10,20,33,40,55,60,8,9,20];
let i = num.filter((a) =>{
    return a%10==0;
});
console.log(i);

// Problem 04
let j=arr.map(element => {
    return element*element;    
});
console.log(j);

// Problem 05
 let k = arr.reduce((x,y) =>{
    return x*y;
 });
 console.log(k);