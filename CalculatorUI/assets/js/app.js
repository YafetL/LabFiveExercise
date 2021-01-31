function division() {
    var value = document.getElementById("displayText").innerHTML;
    value = parseInt(value);
    numArray.push(value);
    if(numArray.length == 3){
        value = skipStep();
        document.getElementById("displayText").innerHTML = "0";
        document.getElementById("historyScreen").innerHTML = value + "/";
        numArray = [];
        numArray.push(value);
        numArray.push("/");
    }
    else{
        document.getElementById("displayText").innerHTML = "0";
        document.getElementById("historyScreen").innerHTML += "/";
        numArray.push("/");
    }
}

function multiplication() {
    var value = document.getElementById("displayText").innerHTML;
    value = parseInt(value);
    numArray.push(value);
    if(numArray.length == 3){
        value = skipStep();
        document.getElementById("displayText").innerHTML = "0";
        document.getElementById("historyScreen").innerHTML = value + "x";
        numArray = [];
        numArray.push(value);
        numArray.push("x");
    }
    else{
        document.getElementById("displayText").innerHTML = "0";
        document.getElementById("historyScreen").innerHTML += "x";
        numArray.push("x");
    }
}

function subtraction() {
    var value = document.getElementById("displayText").innerHTML;
    value = parseInt(value);
    numArray.push(value);
    if(numArray.length == 3){
        value = skipStep();
        document.getElementById("displayText").innerHTML = "0";
        document.getElementById("historyScreen").innerHTML = value + "-";
        numArray = [];
        numArray.push(value);
        numArray.push("-");
    }
    else{
        document.getElementById("displayText").innerHTML = "0";
        document.getElementById("historyScreen").innerHTML += "-";
        numArray.push("-");
    }
}

function addition() {
    var value = document.getElementById("displayText").innerHTML;
    value = parseInt(value);
    numArray.push(value);
    if(numArray.length == 3){
        value = skipStep();
        document.getElementById("displayText").innerHTML = "0";
        document.getElementById("historyScreen").innerHTML = value + "+";
        numArray = [];
        numArray.push(value);
        numArray.push("+");
    }
    else{
        document.getElementById("displayText").innerHTML = "0";
        document.getElementById("historyScreen").innerHTML += "+";
        numArray.push("+");
    }
}

function display(value){
    value = String(value);
    if(opArray.includes(numArray[numArray.length - 1])){
        value = value.slice(0,1);
        document.getElementById("historyScreen").innerHTML += value;
    }
    else{
        document.getElementById("historyScreen").innerHTML = value;
    }
}

function skipStep(){
    var value;
    if(numArray[1] == "+"){
        value = numArray[0] + numArray[2];
    }
    else if(numArray[1] == "x"){
        value = (numArray[0]) * (numArray[2]);
    }
    else if(numArray[1] == "/"){
        value = (numArray[0]) / (numArray[2]);
    }
    else if(numArray[1] == "-"){
        value = numArray[0] - numArray[2];
    }
    return value
}

function equals() {
    var value = document.getElementById("displayText").innerHTML;
    value = parseInt(value);
    numArray.push(value);
    if(numArray[1] == "+"){
        value = numArray[0] + numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML = value;
        numArray = [];
    }
    else if(numArray[1] == "-"){
        value = numArray[0] - numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML = value;
        numArray = [];
    }
    else if(numArray[1] == "/"){
        value = numArray[0] / numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML = value;
        numArray = [];
    }
    else if(numArray[1] == "x"){
        value = numArray[0] * numArray[2];
        document.getElementById("displayText").innerHTML = String(value);
        document.getElementById("historyScreen").innerHTML = value;
        numArray = [];
    }
    else{
        document.getElementById("displayText").innerHTML = String(numArray[-1]);
        document.getElementById("historyScreen").innerHTML = value;
    }
}

function dot() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "."
    document.getElementById("displayText").innerHTML = value;
    //document.getElementById("historyScreen").innerHTML += value;
}

function clearscreen() {
    document.getElementById("displayText").innerHTML = "0";
    document.getElementById("historyScreen").innerHTML = "0";
}

function nine() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "9"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    display(value);
}

function eight() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "8"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    display(value);
}

function seven() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "7"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    display(value);
}

function six() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "6"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    display(value);
}

function five() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "5"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    display(value);
}

function four() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "4"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    display(value);
}

function three() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "3"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    display(value);
}

function two() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "2"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    display(value);
}

function one() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "1"
    document.getElementById("displayText").innerHTML = value;
    value = parseInt(value)
    display(value);
}

function zero() {
    var value = document.getElementById("displayText").innerHTML;
    value = value + "0"
    document.getElementById("displayText").innerHTML = value;
    display(value);
    value = parseInt(value)
}

var numArray = [];
var opArray = ["+","-","/","x"];

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

/*
let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};


function reverseInsertionSort(arr) { 

    for(var i = arr.length-2; i>=0; i--) {

        var value = arr[i];
        var j;

        for(j = i; ((j < arr.length) && (arr[j+1] > value)); j++){ 
            arr[j] = arr[j+1]; 
        } 
        arr[j] = value;
    }
    return arr;
}

console.log(insertionSort(["kebede","abel","kassahun","tesla"]));
console.log(reverseInsertionSort(["kebede","abel","kassahun","tesla"]));

<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">

<ul id="myUL">
  <li><a href="#">Adele</a></li>
  <li><a href="#">Agnes</a></li>

  <li><a href="#">Billy</a></li>
  <li><a href="#">Bob</a></li>

  <li><a href="#">Calvin</a></li>
  <li><a href="#">Christina</a></li>
  <li><a href="#">Cindy</a></li>
</ul>

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
*/