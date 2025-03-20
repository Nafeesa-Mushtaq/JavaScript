// onmousedown
// onmouseenter
// onmousemove

// we can give alert prompt or console on these contiditions

 // <div class="container" onmouseenter="alert('Mouse entered in container')"
 // onclick="console.log('I entered in console')">
// <button onclick="alert('Hello')">Click me </button>
// </div>

let a =document.getElementsByTagName('div')[0];
a.onclick = () =>{
    console.log("I entered in cosole with onclick method");
}