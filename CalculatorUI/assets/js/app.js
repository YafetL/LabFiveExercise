function division() {
    var value = document.getElementById("displayText").innerHTML;
    document.getElementById("historyScreen").innerHTML += "/";
    value = parseInt(value);
    numArray.push(value);
    if(numArray.length == 3){
        value = numArray[0] / numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML += value;
        numArray = [];
        numArray.push(value);
    }
    else{
        document.getElementById("displayText").innerHTML = "0";
        numArray.push("/");
    }
}

function multiplication() {
    var value = document.getElementById("displayText").innerHTML;
    document.getElementById("historyScreen").innerHTML += "x";
    value = parseInt(value);
    numArray.push(value);
    if(numArray.length == 3){
        value = numArray[0] * numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML += value;
        numArray = [];
        numArray.push(value);
    }
    else{
        document.getElementById("displayText").innerHTML = "0";
        numArray.push("x");
    }
}

function subtraction() {
    var value = document.getElementById("displayText").innerHTML;
    document.getElementById("historyScreen").innerHTML += "-";
    value = parseInt(value);
    numArray.push(value);
    if(numArray.length == 3){
        value = numArray[0] - numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML += value;
        numArray = [];
        numArray.push(value);
    }
    else{
        document.getElementById("displayText").innerHTML = "0";
        numArray.push("-");
    }
}

function addition() {
    var value = document.getElementById("displayText").innerHTML;
    document.getElementById("historyScreen").innerHTML += "+";
    value = parseInt(value);
    numArray.push(value);
    if(numArray.length == 3){
        value = numArray[0] + numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML += value;
        numArray = [];
        numArray.push(value);
    }
    else{
        document.getElementById("displayText").innerHTML = "0";
        numArray.push("+");
    }
}

function equals() {
    var value = document.getElementById("displayText").innerHTML;
    value = parseInt(value);
    numArray.push(value);
    if(numArray[1] == "+"){
        value = numArray[0] + numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML += value;
        numArray = [];
    }
    else if(numArray[1] == "-"){
        value = numArray[0] - numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML += value;
        numArray = [];
    }
    else if(numArray[1] == "/"){
        value = numArray[0] / numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML += value;
        numArray = [];
    }
    else if(numArray[1] == "x"){
        value = numArray[0] * numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML += value;
        numArray = [];
    }
}

function dot() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "."
    document.getElementById("displayText").innerHTML = value;
    document.getElementById("historyScreen").innerHTML += value;
}

function clearscreen() {
    document.getElementById("displayText").innerHTML = "0";
    document.getElementById("historyScreen").innerHTML = 0;
}

function nine() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "9"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

function eight() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "8"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

function seven() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "7"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

function six() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "6"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

function five() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "5"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

function four() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "4"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

function three() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "3"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

function two() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "2"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

function one() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "1"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

function zero() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "0"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    document.getElementById("historyScreen").innerHTML += value;
}

var numArray = [];

document.getElementById("one").addEventListener("click", one);
document.getElementById("two").addEventListener("click", two);
document.getElementById("three").addEventListener("click", three);
document.getElementById("four").addEventListener("click", four);
document.getElementById("five").addEventListener("click", five);
document.getElementById("six").addEventListener("click", six);
document.getElementById("seven").addEventListener("click", seven);
document.getElementById("eight").addEventListener("click", eight);
document.getElementById("nine").addEventListener("click", nine);
document.getElementById("zero").addEventListener("click", zero);
document.getElementById("clearScreen").addEventListener("click", clearscreen);
document.getElementById("divide").addEventListener("click", division);
document.getElementById("multiply").addEventListener("click", multiplication);
document.getElementById("minus").addEventListener("click", subtraction);
document.getElementById("plus").addEventListener("click", addition);
document.getElementById("equals").addEventListener("click", equals);