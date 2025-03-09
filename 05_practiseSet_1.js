// Problem 1
let a = "harry";
let b = 9;

// this will concatenate the two strings
console.log(a + b);

// Problem 2
 console.log(typeof (a+b));
// this will be a string

// Problem 3
const a1 ={
    name : "harry",
    section : 2,
    principle : true,
}

// this will print the whole object
console.log(a1);

// we can add members to this object by the following methid given below
// Problem 4

a1['friend'] = "Mehoo";
a1['name']  = "Misha";
console.log(a1);

// Problem 5
const dict = {
    adjective : "a word naming an attribute of a noun, such as sweet, red, or technica",
    weird : "suggesting something supernatural; unearthly",
    yakka : "Hard work",
}
console.log(dict["weird"]);

// we can also write as follows
console.log(dict.yakka);
