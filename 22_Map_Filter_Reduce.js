let arr = [23 , 45 ,67];
console.log(arr);

// it looks like for-each loop but is used to create a new array 
let a =arr.map((Element) =>{
    console.log(Element);
    return Element+3;
});
console.log(a);

// we can also give sach arguments to map and for-each loop
let b =arr.map((Element , index ,array) =>{
    console.log(Element , index , array);
    return Element+index;
});
console.log(b);

// FILTER FUNCTION
let arr1 =[22,3,55,6,88,6,3,9];
// it will filter the elements and store them in a new array \nd the original array will remian the same
let c= arr1.filter((a) =>{
    return a<10;
});
console.log(c);


// REDUCE FUNCTION -- reduces an array to a single value
let j = arr.reduce((h, h1) =>{
    return h + h1;
});
console.log(j);

// we can also write it as a simple function
const reduce_fun = (x,y) =>{
    return x+y;
}
let k = arr.reduce(reduce_fun);
console.log(k);