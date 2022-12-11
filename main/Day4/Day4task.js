//Task: Take input from html
//let x = document.getElementById("number1").value;
//let y = document.getElementById("number2").value;
//let z = 0;

//global variable
//let x=0;
//let y=0;
//document.getElementById("number1").textContent = x;
//document.getElementById("number2").textContent = y;


function add(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let z = Number.parseFloat(x) + Number.parseFloat(y);
    //document.getElementById("output2").innerHTML= z;
    output(z);
    
}
function sub(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let z = Number.parseFloat(x) - Number.parseFloat(y);
    //document.getElementById("output2").innerHTML= z;
    output(z);
}
function multiply(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let z = Number.parseFloat(x) * Number.parseFloat(y);
    //document.getElementById("output2").innerHTML= z;
    output(z);
}
function divide(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    let z = Number.parseFloat(x) / Number.parseFloat(y);
    //document.getElementById("output2").innerHTML= z;
    output(z);
}

function output(z){
    document.getElementById("output2").innerHTML= z;
    //alert("at add")
}