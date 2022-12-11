
console.log("Hellow World")
//alert("TESTING");

//var use
age=10
var age
console.log(age)

//let use
//nbr=20; //error
let nbr=20
console.log(nbr)

//output print types
console.log("AGE : " +age)
console.log(`Age : ${age}`)

//all variables 
const P= true;
W = "S";
console.log( W + " "+ P + " " + age+" "+ nbr)
console.log( `${W} ${P} ${age} ${nbr}`)
//object "{}"

let a=10;
let b=2.3;
let c= a/b;
console.log(c)

//Task: Take input from html
function add(){
    
    let x = document.getElementById("nbr1").value;
    let y = document.getElementById("nbr2").value;

    //let fullName = x +" "+ y;
    //document.getElementById("output").textContent= fullName;
    
    //converting into int from string
    let z = Number.parseInt(x) + Number.parseInt(y);
    document.getElementById("output").innerHTML= z;
    //static and non-static function(static dont need object to call)
    //Number is class and parseInt is a static method


    //To convert int to string. Can concat with "" e.g z= int+""
}