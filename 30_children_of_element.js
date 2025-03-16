console.log(document.body.firstChild);
// the space after body tag will be a text node, and read as first child
// if we remove the space, the the elemnts like div will be the first child 

console.log(document.body.lastChild);

// it will give all child nodes of the html document
console.log(document.body.childNodes);  // it looks like array but not an array but a node list

// we can convert it into array
let arr=Array.from(document.body.childNodes);
console.log(arr);

console.log(document.body.firstChild);
let a =document.body.firstChild;
console.log(a.parentNode);
// console.log(a.parentElement); // it will return the html body tag