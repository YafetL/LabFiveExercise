function display(value){
    value = String(value);
    if(opArray.includes(numArray[numArray.length - 1])){
        value = value.slice(0,1);
        document.getElementById("historyScreen").innerHTML += value;
    }
    else{
        document.getElementById("historyScreen").innerHTML += value;
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
    value = parseFloat(value);
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
    else{
        document.getElementById("displayText").innerHTML = String(numArray[-1]);
        document.getElementById("historyScreen").innerHTML += value;
    }
}

var numArray = [];
var opArray = ["+","-","/","x"];
const numberButton = document.querySelectorAll(".numButton > p");
const operatorButton = document.querySelectorAll(".oprButton > p");
const displayed = document.querySelector(".displayInput");
numberButton.forEach(element => {
    element.addEventListener('click', () => {
        if(element.innerHTML == '.' && displayed.innerHTML.includes(".")){
            return;
        }
        if(displayed.innerHTML == "0" && element.innerHTML != "." && numArray.length == 0){
            return;
        }
        // displayed.append(element.innerHTML);
        displayed.append(element.innerHTML);
        document.getElementById("historyScreen").innerHTML += element.innerHTML;
    });
});

operatorButton.forEach(element => {
    element.addEventListener('click', () => {
        numArray.push(parseFloat(displayed.innerHTML.toString()));
        console.log(element.innerHTML)
        if(element.innerHTML == "="){
            document.getElementById("historyScreen").innerHTML += element.innerHTML.toString();
            equals();
            return;
        }
        else if(element.innerHTML == "CE"){
            displayed.innerHTML = "";
            document.getElementById("historyScreen").innerHTML = "";
        }
        else if(numArray.length == 3){
            value = skipStep();
            // displayed.innerHTML = value;
            displayed.innerHTML = "0";
            document.getElementById("historyScreen").innerHTML += "=" + (value.toString()).bold() + element.innerHTML.toString();
            numArray = [];
            numArray.push(value);
            numArray.push(element.innerHTML.toString());
        }
        else{
            displayed.innerHTML = "0";
            document.getElementById("historyScreen").innerHTML += element.innerHTML.toString();
            numArray.push(element.innerHTML.toString());
        }
    });
});

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

*/