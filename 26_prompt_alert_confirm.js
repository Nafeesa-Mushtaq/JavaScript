// it is used to invoke a mini window
alert("Hello yuor script works");

// prompt is used to tae input from the user
// here 233 is default value
let a = prompt("Enter a number", "233");

let write=confirm("Do you want to write it on the page");
if(write){
    // it is used to write on the document
    document.write(a);
}
else{
    document.write("Please let me write");
}

