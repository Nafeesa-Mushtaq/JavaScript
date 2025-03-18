
console.log(document.getElementById("id1"));
console.log(document.getElementById("sp11"));
// this will tell us if the following id matches the css selsctor like class
console.log(id1.matches(".class1"));   // true
console.log(id1.matches(".class2"));   // false

// this will tell us if the following css-selsctor is present in the ancesstors of given id "sp1"
console.log(sp1.closest("#id1"));
// in simple words--sp1 will search backwards if the css-selesctor is present or not
console.log(sp1.closest(".class1"));
console.log(sp1.closest("#sp1"));  // will return itself

// it will see if the following css-selesctor is present in it or not
console.log(id1.contains(sp1));  // true
console.log(id1.contains(sp1));  // true
console.log(sp1.contains(id1));  // false