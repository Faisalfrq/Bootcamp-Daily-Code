//------------------------generator function------------------
//keeps the values in the memory
function* idMaker(){ // * makes function generator it keeps the 
    let index = 0;
    while(true){
        yield index++; //yield returns in a generator function
    }
}
const gen= idMaker();
console.log(gen.next().value); //next used to call next value
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//line by line 
function* anotherGenerator(i){
    yield i+1;
    yield i+2;
    yield i+3;
}
function* generator(i){
    yield i;            
    yield* anotherGenerator(i)
    yield i+10;
}

const gen2 = generator(10)
console.log(gen2.next().value); //line 21
console.log(gen2.next().value); //line 22 > 16
console.log(gen2.next().value); //line 22 > 17
console.log(gen2.next().value); //line 22 > 18
console.log(gen2.next().value); //line 23
console.log(gen2.next().value); //undefined 
console.log(gen2.next().value); //undefined

//Return function in GENERATOR
function* yieldReturn(){
    yield "Y";
    return "R";
    yield "Y";
}
const gen3 = yieldReturn();
console.log(gen3.next().value); // line 38
console.log(gen3.next().value); // line 39
console.log(gen3.next().value); // unreachable
//------------------------
function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  const gen4 = generator(10);
  
  console.log(gen4.next().value); // 10
  console.log(gen4.next().value); // 11
  console.log(gen4.next().value); // 12
  console.log(gen4.next().value); // 13
  console.log(gen4.next().value); // 20
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*#examples

//----------------------console cleared--------------------
console.clear()

//=================== JSON =====================================
//parse
//stringify
//person.name/person["name"]
//double quotes

//======================AJAX+===================================
// xhttp.open(method,URL,)


//-------------------with Onload------------------------------------------------
function loadAjax(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){ 
        document.getElementById("demo").innerHTML= this.responseText;
    }
    xhttp.open("GET", "LoremIpsum.txt")
    //xhttp.open("GET", "Day12.json")
    xhttp.send();
}
//-----------------with onreadystate-----------
function loadAjax2(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() { //onready state keep getting called each time state is changed
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
        console.log(this.readyState) //testing states
        console.log(this.status) //testing status
        }
    }
    xhttp.open("GET", "Day12.json")
    //xhttp.open("GET", "Day12.json")
    xhttp.send();
}


function testingJson(){
    // const fs = require('fs')
    // // Read the JSON file
    // let data = fs.readFileSync('Day12.json');

    // // Parse the JSON data into a JavaScript object
    // let obj = JSON.parse(data);

    // // Access the data in the object
    // console.log(obj.users);
    let data= '{ "id": 1, "name": "Leanne Graham", "username": "Bret","email": "Sincere@april.biz"}';
    let js=JSON.parse(data);
    console.log(js.name)
    js.name="DEFAULT NAME";
    console.log(js.name)
    
}
//====================================ACCESSING JSON USING AJAX==================================
function testingJson2(){
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() { //onready state keep getting called each time state is changed
        if (this.readyState == 4 && this.status == 200) {

            let obj=JSON.parse(this.responseText)//reponseText get text from file

            console.log(obj[2].name)    // obj[0] because our json starts with array

            document.getElementById("demo").innerHTML = obj[2].name;
        }else { console.log("Some Error")}
    }

    xhttp.open("Get", "Day12.json");
    xhttp.send();
}
    
// .innerHTML Includes TAGS also works at times of assigning 
// .Text doesnt include tags and isonlu

//=======================Call Back function=============================
//A callback is a function passed as an argument to another function.
function display(output){
    console.log(output)
}

function sum(input1,input2,func){
    func(input1+input2)
}

sum(5,4,display)
//used in asyncronous programs
//======================Asynchronous========================

setTimeout(myFunction, 3000); //function as argument and 3000 timer

function myFunction() {
  document.getElementById("demo").innerHTML = "3000 Second Async";
}
//====================Promises===========================
//promises a result
function myDisplayer() {
    document.getElementById("promises").innerHTML = this.responseText;
  }
  
  let myPromise = new Promise(
        function(myResolve, myReject) {
            let x = 0;
            // some code (try to change x to 5)
            if (x == 0) {
                myResolve("OK");
            } else {
                myReject("Error");
            }
        }
    );
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

// let myPromise = new Promise(function(sucess,failure){

// })
// myPromise.then(sucess,failure)
// function sucess(){

// }

//==========================async and await=======================






