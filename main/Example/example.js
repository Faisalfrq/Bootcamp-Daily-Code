



let x = prompt(" enter your age")
let y = prompt("Enter you gender")
 if( x >=18 && x<50 && y == "Male" ){
console.log("You are 18 year adult")
 }else if(x >=18 && x<50 && y == "Female"){
    console.log("You are a 18 year old Female");
 }else if(x <18 && x<50 && y == "Male"){
    console.log("You are a baby boy")
 }else if(x>50 && y == "Male"){
    console.log("you are a old man")
 }else{
    console.log("enter valid age")
}