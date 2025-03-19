console.log(document.getElementsByTagName("span")); // it will give span of html

// it will give the span elemnent properties
console.dir(document.getElementsByTagName("span"));

// tag name is for elements only while node name is for node as well as element
console.log(document.body.firstChild.nodeName);    // it will give node
console.log(document.body.firstElementChild.nodeName);   // it will give element

// inner html is valid only for element nodes
// it will give the inner html present in first
console.log(first.innerHTML);    // hi i am span

// $0.innerHTML="Hello";        we can change the inner html in console like this

// outer html give the whole tag including class id and text
console.log(first.outerHTML);

console.log(document.body.firstChild.data);
console.log(document.body.firstChild);

console.log(document.body.textContent);  // it will give the whole text content of html

// $0.hidden=false ---  or --- id.hidden=false
//  if we do it in the console the hidden element will start displaying