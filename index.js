/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
    //timeString =  empty text box value 
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
        //uses function below taking in the inout from above 
}


/* Write your implementation of displayMessage() */
function displayMessage(msg) {
    //filling empty h1 (under text box)
    document.getElementById("greeting").innerText = msg;
}

function greet(timeStr) {
    const hour = parseInt(timeStr, 10);
    if (hour < 12) return "Good Morning"
    if (hour > 17) return "Good Evening"
    return "Good Afternoon"
}