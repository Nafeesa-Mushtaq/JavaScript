let user = prompt("Choose S, W or G")
let comp = ["S" , "W" , "G"][Math.floor(Math.random() * 3)]

// s = g
// g = w
// w = s

// s = w
// g = s
// w = g

const match = (user , comp) =>
{
    if (user === comp) 
    {
        return "NOBODY"
    }
    else if (user === "G" && comp === "S" || user === "W" && comp === "G" || user === "S" && comp === "W")
    {
        return "USER"
    }
    else
    {
        return "COMP"
    }
}

let result = match(user , comp)

document.write(`USER CHOICE : ${user} <br> COMP CHOICE, : ${comp} <br> WINNER IS : ${result}`)