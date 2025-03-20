
let x = function(e){
    console.log(e)  // it will give pointer event
    alert("Hello World");
}

let y = function(e){
    console.log(e.target)   // it will give us the element on which this function act
    alert("Hello Miss World");
}

btn.addEventListener('click',x);
btn.addEventListener('click',y);

let a = prompt("What is your favourite number")
if(a == 2){
    btn.removeEventListener('click',x)
}