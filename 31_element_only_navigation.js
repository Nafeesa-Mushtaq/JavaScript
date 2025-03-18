let b = document.body;

// it will access the first child,like if it is space it will consider it text node
// in this case the first child can be text node, comment node or the element node
console.log(b.firstChild);

// it will access the actual first child like it is nav, body's first child
console.log(b.firstElementChild);