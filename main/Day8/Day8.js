//arrow function 
//const x =(a,b) => { }
// closure= local and global variables
//------------------Closure---------------
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
}
// Call add() 3 times
add();
add();
add();
//The counter should now be 3. But it is 0
//-----------------------------------------
//Anonymous Classes
//Var C={ x:1, y:2 } 
//or 
//myObj = {
//  name:"John",
//  age:30,
//  cars: {
//    car1:"Ford",
//    car2:"BMW",
//    car3:"Fiat"
//  }
//}
//----------------TRY CATCH FINALLY--------------------------
function exampleOfTryCatch(){
    try {
        let x=5/0;
      }
      catch(err) {
        document.getElementById("demo").innerHTML = err.message;
      }
}
function exampleOfTryCatch2(){
    const message = document.getElementById("message");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if(x == "") throw "is Empty";
        if(isNaN(x)) throw "not a number";
        if(x > 10) throw "too high";
        if(x < 5) throw "too low";
    }
    catch(err) {
        message.innerHTML = "Input " + err;
    }
}
//-------------REGULAR EXPERESSION--------------
//Regular expressions are patterns used to match character combinations in strings. 
function exampleOfMyRegx(){
    let myString= 'This is a String with 3 numbers 123'

    const condition1=/[3]/g;
    const condition2=/[a-e]/g;
    const condition3=/[^a-e]/g; //not a to e
    const condition4=/[^0-9]/g; // not 0 to 9
    const condition5=/[a|3]/g; // this or that // alternate specified
    const condition6=/[This]/gi; //atleast once
    // if I remove g from stirng about it will just find first 3 and stop
    //console.log(myString.exec(condition))
    //only digit id 'd' and 
    

    console.log(myString.match(condition6))
    console.log(condition6.test(myString))

}
//CLASS method 
function exampleOfMyRegx2(){
    let myString= 'This is a String with 3 numbers 123'

    const regex = new RegExp(3);

    console.log(regex.test(myString));
    console.log(myString.match(regex));
    
}
//------------------USE PATTERN IN HTML5 INPUT-----------
// <input name="" pattern="0-5" or a REGEX experession></input>

//-------------Array SORT----------
function exampleOfSort(){
    const fruits = [2, 300, 20, 33];
    console.log(fruits.sort())
    // using compare function 
    //ascentding
    console.log(fruits.sort(function(a, b){return a - b}))
    //descending
    console.log(fruits.sort(function(a, b){return b - a}))
    //random
    console.log(fruits.sort(function(){return 0.5 - Math.random()}))
    
}