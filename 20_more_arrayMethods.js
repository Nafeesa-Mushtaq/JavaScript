let num = [1,2,3,4,56,7];
let num2=[6,7,8,9,88];

// this will help to add the arrays and store it in a new array, the original arrays will not change
let arr = num.concat(num2);  // we can add more than two arrays even
console.log(arr);

// this function will sort(in alphabetic order), the array and it will change the original array

let arr2=[1,99,66,55,88,33,100];
// it menas it will now write all numbers starting with 1 than with 2 and so on....
arr2.sort(); 
console.log(arr2);

// if we want to arrange the numbers in assending or decending order we will use compare function 
let compare = (a,b) =>{
    // to arrange in decending order write b - a;
    return a - b;
}
arr2.sort(compare);
console.log(arr2);

// this function will change the original array and reverse it 
num.reverse();
console.log(num);

// this function will delete the indexes and and return them and all add new indexes
let arr3=[0,6,7,8,9,10,11];
console.log(arr3);

// the importan thing here is , 2 is the starting index from where the index will start deleting ----- 3 is the number of indexes whicch will be deleted -- rest are the numbers which will be added -- d will store the deleted indexes in it

let d = arr3.splice(2, 3, 1,2 ,3, 4, 5 );
console.log(arr3 ,d);

// this will give us a new array starting from 2 index but doesn't modifiy the original one
let newArr = arr3.slice(2);
console.log(newArr);

// now this will make a new array starting from index 2 to 4 -- not that ending index will not be included 
let newArr2 = arr3.slice(2 , 5);
console.log(newArr2);
