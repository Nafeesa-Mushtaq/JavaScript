let sum = 0;
let n = prompt("Enter your desired number");
n = Number.parseInt(n);

for (let i = 1; i <= n; i++) {
    sum +=i;
}
console.log("The sum of the numbers till " + n + " is " +sum);

// FOR-IN-LOOP

let obj={
    harry : 33,
    nona : 45,
    Lisa : 67,
    Shazu : 99,
}

for (let a in obj) {
    console.log(a);
    console.log("The marks of "+ a + " are " +obj[a]);
}


// FOR OF LOOP
for (let b in "lisa") {
    console.log(b);
}