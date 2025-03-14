let arr = [1,3,5,7,9];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// we can also add value of different data types in array in JS
let arr1 = [1,3,5,"null","not present"];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);

// if we try to print the index which is not present the browser will return undefined
console.log(arr1[5]);

// we can also add a new index to the array as
arr1[5]=67;

// we can also change the value of any array index
arr1[0]=98;

console.log(arr1);

// we can find the length of the array 
console.log("The length of the array is " +arr1.length);

console.log(typeof arr1); // it will give "object"
