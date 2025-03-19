let i = document.getElementsByTagName('div')[0]
// // this is the traditional method
// i.innerHTML=i.innerHTML + '<h1>Hello World</h1>';

let a = document.createElement('div');
a.innerHTML='<h1>Hello Miss World</h1>';

// i.prepend(a);   // it will add the element at start of div
// i.appendChild(a);   // it will add the element at the end of the div

// i.before(a);    // it will add the element before the div
// i.after(a);    // it will add the element after the div

// i.replaceWith(a);   // it will replace the div with element given