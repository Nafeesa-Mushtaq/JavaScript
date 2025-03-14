let num = [1,2,3,4,56,7];
let b = num.toString();

console.log(num);  // (6) [1, 2, 3, 4, 56, 7]

console.log(b);   // 1,2,3,4,56,7

let c =num.join("_");
console.log(c , typeof c);

// this function will actually remove the last index from the array
num.pop();
console.log(num);

// in order to find the popped element we can store it in a variable and then print it
let r = num.pop();
console.log(r);

// this mehtod will actually add a new element in a array and change its length
num.push(58);
console.log(num, typeof num);

// this function will actually remove the first element of array and also returns it
let i = num.shift();
console.log(num , i);

// this function will actually add new index in array and return new array length
let j = num.unshift(23);
console.log(num , j);

// this will delete the element at given index but not change the array length 
let k = num.delte[3];
console.log(k, num);