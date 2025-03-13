// Problem 01
let marks={
    lisa : 50,
    harry : 60,
    nona : 70,
    shazu : 80,
    maham : 90,
}

// this is the only syntax to print the marks using for loop
for(let i = 0; i <Object.keys(marks).length;i++)
{
 console.log("The marks of "+Object.keys(marks)[i]+ " is "+marks[Object.keys(marks)[i]]);
}

// Problem 02 printing marks using for of loop

for (let a in marks) {
   console.log("The marks of "+a+" is "+marks[a]);
}

// Problem 03
let num = 5;
let a ;
while (a != num) {
    console.log("try again");
    a= prompt("Enter a number");
}
console.log("You have entered a correct number");

// Problem 04
function mean(a,b,c,d,e){
    let i = (a+b+c+d+e)/5;
    return i;    
}
console.log("The mean of the given numbers is "+ mean(1,2,3,4,5))