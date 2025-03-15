let num = Math.random() * 100
num = Number.parseInt(num)

let attempts = 0
let input

while (input != num)
{
    input = prompt("Enter the number : ")
    input = Number.parseInt(input)
    
    if (input == num) 
    {
        console.log("Congratulations! You guessed the number in " , attempts , " attempts.")
    }
    else if (input > num) 
    {
        console.log("Lower number please!")
    }
    else if (input < num) 
    {
        console.log("Higher number please!")
    }
    else
    {
        console.log("Invalid input!")
    }
    
 attempts++;
}