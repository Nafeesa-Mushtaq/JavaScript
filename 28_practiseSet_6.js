// Problem 01
let age=prompt("Enter your age");
age=Number.parseInt(age);

const drive=((age) =>{
    return age>=18? "true":"false";
})
if (drive(age)){
    alert("Congratulations!!, you can derive" );
}
else{
    alert("Sorry, You cannot derive")
}

// Problem 02
let run = true;
const Drive = (age1) => {
  return age1 >= 18 ? true : false;
};
while (run) {
  let age1 = prompt("Enter your age");
  age1 = Number.parseInt(age1);
  if (Drive(age1)) {
    alert("Congratulations!!, you can derive");
  }
   else {
    alert("Sorry, You cannot derive");
  }
  run = confirm("Do you want to see the prompt agian");
}

// problem 03
let run1 = true;

const Drive1 = (age1) => {
  return age1 >= 18 ? true : false;
};
while (run1) {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if(age <0){
    console.error("PLease enter a valid age");
    break;
  }
  if (Drive1(age)) {
    alert("Congratulations!!, you can derive");
  }
   else {
    alert("Sorry, You cannot derive");
  }
  run1 = confirm("Do you want to see the prompt agian");
}

// Problem 04
let num = prompt("Enter a number");
num=Number.parseInt(num);
if(num>4){
    location.href="https://www.google.com"
}

// Problem 05
let colour=prompt("Enter the colour of your background");
document.body.style.background=colour;