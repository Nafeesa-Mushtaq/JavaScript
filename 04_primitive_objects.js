// following are the primitive data types of java script
// nn bb ss u 

// null number boolean bigint string symbol undefined
let a = null;
let b = 45;
let c = true;
let d = BigInt("35");
let e = "Lisa";
let f = Symbol("I am a nice symbol");
let g = undefined;

// if we write simply --- let g; it means its value is undefined 
console.log(a , b , c , d, e , f , g);

// we can find the type of data type also
console.log(typeof d)

//OBJECTS IN JAVA SCRIPT
// Non-primitive datatypes in JS are called as objects
// remember the syntax
const item = {
    "harry": true,
    "lisa" : false,
    "Nona" : 65,
    "shazu" : undefined
}

// it will print the value stored in the given item
// if we write something in the item which is not present, the compiler will return undefined

console.log(item["lisa"]);