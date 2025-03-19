let i = document.getElementById("first");

// it is saying that get the attribute of class from id "first"
let a =i.getAttribute("class");    // give class name
console.log(a);

// it is saying that tell me if the following attribute is set in this id or not
let b = i.hasAttribute("style");
console.log(b);   // it give "false" as their is no style attribute in this id
let b1 = i.hasAttribute("class");
console.log(b1);   // it will give tue as their is a class attribute in this id

// we can set an element in using this 
i.setAttribute("hidden","true");
i.removeAttribute("class")    // it will remove the class

// it will give all the attributes of this id
console.log(i.attributes);

// we should always add our custom attributes by data-....
// it will give us our custom attributes
console.log(i.dataset);