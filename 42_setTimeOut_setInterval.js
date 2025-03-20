document.write("Hello");

const sum = ((a,b) =>{
    console.log("The sum function is running " ,a+b)
    return a+b;
})

// it  will run function once after 2000 miliseconds
setTimeout(sum ,2000 , 1,2);

// it will run the function again and again after 10000 miliseconds
setInterval(sum , 10000,10,10);
clearInterval(); // it will stop teh execution of setInterval

let a = setTimeout(function(){
    alert("Hello is written on the document");
}, 5000)    // this is time in miliseconds

let b = prompt("Do you want to run the set Time out");
if("n"==b){
    clearTimeout(a);  // it will stop teh execution of setTimeout
}

console.log(a);

