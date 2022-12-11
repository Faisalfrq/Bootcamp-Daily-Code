function getArea(){
    let x=document.getElementById("sideA").value
    let y=document.getElementById("sideB").value
    let z=document.getElementById("sideC").value

    let Sum = Number.parseFloat(x)+Number.parseFloat(y)+Number.parseFloat(z)
    console.log(Sum)
    let S = Sum/2;
    let a= S-Number.parseFloat(x)
    let b= S-Number.parseFloat(y)
    let c= S-Number.parseFloat(z)

    let A = Math.sqrt(S*a*b*c)
    console.log(A)
    document.getElementById("output").innerHTML = A;
}
//find leap year
function leapYear(){
    year = document.getElementById("inputYear").value;

    let leap = new Date(year, 1, 29).getDate() === 29;
    if(leap){
        document.getElementById("output").innerHTML = "This is a leap year";
    }else{
        document.getElementById("output").innerHTML = "not a leap year";
    }
}
//quadratic equation
function quadEq(){
    let a=document.getElementById("sideA").value
    let b=document.getElementById("sideB").value
    let c=document.getElementById("sideC").value

    a=Number.parseFloat(a)
    b=Number.parseFloat(b)
    c=Number.parseFloat(c)

    let x= b*b;
    let y= a*c;
    
    let d= Math.sqrt(x-(4*y))
    console.log(d)

    if(d>0){
        let q= (-b+d)/(2*a)
        document.getElementById("output").innerHTML += q;
        q= (-b-d)/(2*a)
        document.getElementById("output2").innerHTML += q;
    }else if(d==0){
        let q=(-1*b)/(2*a)
        document.getElementById("output").innerHTML = q;
    }else if(d<0){

    }

    //document.getElementById("output").innerHTML = A;
}

//function func(a){return "f1"}
//function func(a){return "f2"}
//console.log(func());

// a = typeof a !== 'undefined' ? a : 0
//  = condition ? true: false
// default variable assigned as func(a=0,b=0)

//argument for multiple inputs
console.log("--------------ARGUMENTS ----------")
let userInput= print("P1","P2","P3","P4") 
//let userInput2= print("P5","P6","P7")
//let userInput3= print("Q1","Q2")
//let userInput4= print("Q3")

function print(){
    for(i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}
// Rest parameter
console.log("--------------Pass By VALUE----------")
//passbyValue
let a=10
let b=20
console.log("before calling funtion "+ a)
console.log(a + "+" + b +" = "+ passbyValue(a,b))
console.log("after calling the function " + a)
function passbyValue(a,b){
    a=a+b
    console.log("inside pass by value " + a)
    return a;
}
console.log("---------------Pass By Refrence-----------")
//pass by refrence
let num={x:10,y:20}
console.log("before calling funtion "+ num.x)

console.log("calling funtion "+ passbyRef(num))

console.log("after calling the function " + num.x)

function passbyRef(n){
    n.x = 20;

    console.log("inside pass by value " + n.x)

    return n.x;
}
//Function Exapression: ddeclare function without name, but called by variable
//use const 
//can be given a name to make it recursive

console.log("-----------P1------------")

const getRectArea = function(width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));
  //funtion expression task
  console.log("-----------FUNCTION EXPRESSION2--------")
  let z1 = 10
  let z2 = 20
  const someVariable= function(a,b){
        z3=a+b
        console.log("inside function and z3 = " + z3)
        return z3;
        someVariable(4,5)
    }
    console.log("calling by variable name: " + someVariable(z1,z2))
    
  console.log("-----------Arrow Funtions--------")
  //arrow function ES6
  //only for anonymous functions
  let arrowfunction = () => {
    return "Arrow Function";
  }
  let myFunction = (a, b) => a * b;
  //for anonymous function
  let hello = () =>{
    console.log("xyz")
  }
  console.log(hello())
  //making it more compact by arrow funtion works only for one line of code
  //can ignore curly braces around the code.
  hellow = () => "zyx"
  console.log(hellow())
  console.log("-----------Arrow Funtions TASK--------")
  let c1= 10;
  let c2= 5;
  let arrowFunction2 = (a,b) => {
    c3=a+b;
    console.log("inside arrow function")
    return c3;
  }
  console.log("Calling arrow function: " + arrowFunction2(c1,c2))
  
  console.log("-----------Arrow Funtions TASK--------")
  let c4={x:10}
  let arrowFunction3 = (m) => {
    console.log(m.x)
    m.x=20;
    console.log(m.x)
    //return m;
  }

  //console.log("Calling arrow function 3: " + arrowFunction2(c4))

  let arrowFunction4 = (a, b) => a + b;
    console.log(arrowFunction4(3,4))
  //null is an object
  // let a; => undefined;
  // let b = null;
  //a == b -> true 
  //a === b -> false
  console.log("-----------COPY WRITING example--------")
  let a1=["a","b","c","d","e","f","g"]
  console.log(a1.copyWithin(2,0,1))