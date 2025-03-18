// Problem 01
let a=document.getElementsByTagName("nav")[0].firstElementChild;
a.style.color="red";

// Problem 02
// --- ans "No";

// Problem 03
let b =document.getElementsByTagName("nav")[0].firstElementChild.firstElementChild;
b.style.color="green";
let c =document.getElementsByTagName("nav")[0].firstElementChild.lastElementChild;
c.style.color="green";

// Problem 04
let b1 =document.getElementsByTagName("nav")[0].firstElementChild.firstElementChild;
b1.style.background="pink";
let c1 =document.getElementsByTagName("nav")[0].firstElementChild.lastElementChild;
c1.style.background="pink";

// short ans of Problem 04
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background="cyan"
});