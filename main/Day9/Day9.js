//------------------ MAP EXAMPLE---------------------
function MapExample1(){
    const numbers = [65, 44, 12, 4];
    const newArr = numbers.map(x=> myFunction(x))
    console.log(newArr)
    function myFunction(num) {
      return num * 2;
    }

}
//-------------------object level and access --------------------
function MapExample2(){
    const obj = {name:"Faisal",
                 education:{
                        degree:{
                                course:{
                                    value: "software Engineering"},
                                    year:"2021",
                                    Example:[5,6,7,7]
                                }
                        }, 
                 address:{
                        country:{
                                name:"Pakistan", 
                                city:{
                                    name:"Islamabad", 
                                    street:"15",  
                                    lane:"XYZ" 
                                    }
                                }
                        }
                };
    
    console.log("My name is "+ obj.name+ ". I have done " +obj.education.degree.course.value+ " in "+ obj.education.year+
    " and I live in "+obj.address.country.name +", city: "+ obj.address.country.city.name+ ", at street "  +obj.address.country.city.street)
}
//---------------------DOM----------------------
//document object model
//document=screen, object=tags, model= representational way
//
//let heading=document.getElementsByTagName('h1');
        //heading[0].innerHTML="hello"
        //console.log(heading);

        //
// let heading=document.getElementsByTagName('p');
// heading[0].innerHTML="<h3>Hello</h3>"
// heading[1].innerHTML="some text"

//change size and height
// let para1=document.getElementById('para1');
// console.log(para1.innerHTML)
// para1.style.color="red"
//para1.style.fontSize="30px"
//para1.style.transition="4s";

//change color on click
function change(){
    let box1=document.getElementsByClassName("box1")
    box1[0].style.color="red"
    box1[0].style.fontSize="50px"
    box1[0].style.transition="2s"
}
function change2(){
    let box=document.getElementsByClassName("box2")
    //box[0].style.color="red"
    //box[1].style.color="red"
    //box[2].style.color="red"
    for(i=0;i<box.length;i++){
        box[i].style.color="red"
        box[i].style.fontSize="50px"
        box[i].style.transition="2s"
        box[i].innerHTML="IN FOR LOOP"
    } 
}
function change3(){
    let heading = document.getElementsByTagName("h1");
    // let btn= document.getElementsByClassName("colorButton")
    // if(btn[0]){
    //     heading[0].style.color="red";
    // }else if(btn[1]){
    //     heading[0].style.color="blue";
    // }else if(btn[2]){
    //     heading[0].style.color="green";
    // }else if(btn[3]){
    //     heading[0].style.color="black";
    // }
    heading[0].style.color="red";
}
function change4(){
    let heading = document.getElementsByTagName("h1");
    heading[0].style.color="blue";
}
function change5(){
    let heading = document.getElementsByTagName("h1");
    heading[0].style.color="green";
}
function change6(){
    let heading = document.getElementsByTagName("h1");
    heading[0].style.color="black";
}
//-----------------FORM ------------------
let button=document.getElementById("btn")

let userName= document.getElementById("name");
let userPassword= document.getElementById("password");
let conPassword= document.getElementById("confirmPassword");
let userEmail= document.getElementById("email");

let showName=document.getElementById("showName");
let showPass=document.getElementById("showPass");

let userError=document.getElementById("userError")
let passError=document.getElementById("passError")
let passConError=document.getElementById("passConError")
let emailError=document.getElementById("emailError")

const validate=()=> {
    //FOR USERNAME
    if(userName.value===""){
        //alert("Enter Your Name")
        userError.innerHTML="enter your name";
        userName.style.border="1px solid red";
    }else if(userName.value.length<3 || userName.value.length>15){
        userError.innerHTML="Choose a name with length more than 3 and less than 15"
    }
    else{
        
        userError.innerHTML=" ";
        userName.style.border="1px solid black ";
    }
    //FOR PASSWORD
    if(userPassword.value===""){
        //alert("Enter Your Name")
        passError.innerHTML="enter your Password";
        userPassword.style.border="1px solid red";
        console.log("here")
    }
    else{
        passError.innerHTML=" ";
        userPassword.style.border="1px solid black ";
        userPassword.innerHTML=" "
    }
    //alert(userName.value +" "+ userPassword.value)
    //alert(userPassword.value)
    if(conPassword.value===""){
        //alert("Enter Your Name")
        passConError.innerHTML="enter your Password";
        conPassword.style.border="1px solid red";
        
    }else if(conPassword.value!==userPassword.value){
        passConError.innerHTML="Password is not same"
        conPassword.style.border="1px solid red";
        
    }
    else{
        passConError.innerHTML=" ";
        conPassword.style.border="1px solid black ";
        conPassword.innerHTML=" ";
        //conPassword.onfocus.value=" ";
    }
    //showName.innerHTML=userName.value;
    //showPass.innerHTML=userPassword.value;

    //---------------Email-----------
    //var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(userEmail.value===""){
        emailError.innerHTML="enter email"
        userEmail.style.border="1px solid red"
    }
    else if(userEmail.value.indexOf("@")<=0){
        emailError.innerHTML="@ ERROR";
        userEmail.style.border="1px solid red";
    }else if(userEmail.value.charAt(email.value.length-4)!=="."){
        emailError.innerHTML="DOT ERROR";
        userEmail.style.border="1px solid red";
    }else{
        emailError.innerHTML=" ";
        userEmail.style.border="1px solid black"
        userEmail.innerHTML=" "
        conPassword.onfocus.value=" ";

    }
    //if(userEmail.innerHTML.match(validRegex)){
    //    alert("wrongEmail")
    //}
    return false;
}
//-------------------EXAMPLE OF INDEX OF--------------------------
function exampleOfIndexOf(){
    let strng = "this is text"
 
    console.log(strng.indexOf("i"))
    console.log(strng.charAt(2))
}

