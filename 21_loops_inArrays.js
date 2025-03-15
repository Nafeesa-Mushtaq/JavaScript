let num =[1,2,3,54,67,8,9];
for(let i = 0; i < num.length ; i++)
{
    console.log(num[i]); 
}

// this loop will rum for each elemnt 
num.forEach((element) => {
    console.log(element*element);
});

// ARRAY FORM --- string is converted to an array
let name = "harry"
let arr = Array.from(name);
console.log(arr);

// FOR OF LOOP -- it will print array elements
for (let item of num) {
    console.log(item);    
}

//FOR IN LOOP -- it will print indexes 
for (let key in name) {
    console.log(key);   // it will print arry indexes
   // console.log(name[key]); -- it will pint array elemnts
}