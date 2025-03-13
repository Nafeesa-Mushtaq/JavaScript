let a = 4;
let b = 5;
let c = 6;
let d = 7;

// function to find the average of two numbers
function average(a , b) {
    // if we want the value to round off we can use math.round function here as shown:
    let j = Math.round((a + b )/2);
    let i = (a + b )/2;
    console.log("The average of the "+ a +" and "+b+" is "+i);    
    console.log("The average round-of value of the "+ a +" and "+b+" is "+j);    
}
average(a,b);
average(b,c);
average(c,d);
average(d,a);

// ARROW FUNCTION
const sum = (p,q)=>{
    return p+q;
}
console.log(sum(9,9));