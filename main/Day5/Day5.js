//if statement
function add(){
    let x = document.getElementById("nbr1").value;
    let y = document.getElementById("nbr2").value;
    let z = Number.parseInt(x) + Number.parseInt(y);

    
    if(z>10){
        document.getElementById("output").innerHTML= z;
    }else if(z<10){
        document.getElementById("output").innerHTML= x;
    }

}
//switch statement for multiple conditions
//alert for website popup
//prompt is used to get input from user. 
//100-80 = A //80-60 2nd 40-60 3rd under 40 F over 100 unput invalid

function callPrompt(){
    console.log("inside function")
    let score= prompt("please enter your marks to find your grade")
    
    //if(score>100){
    //    console.log("wrong input")
    //    document.getElementById("output").innerHTML= "wrong input";
    //}else if(score>80){
    //    console.log("A GRADE")
    //}else if(score>60){
    //    console.log("B GRADE")
    //}else if(score>40){
    //    console.log("C GRADE")
    //}else {
    //    console.log("Better Luck Next time")
    //}
    
    let score2=Number.parseInt(score)
    switch(true){
        case score2>100:
        //console.log("wrong input")
            console.log("wrong input");
            document.getElementById("output").innerHTML= "wrong input";
            break;
        case score2>80:
            console.log("A GRADE")
            document.getElementById("output").innerHTML= "A grade";
            break;
        case score>60:
            console.log("B GRADE")
            document.getElementById("output").innerHTML= "B grade";
            break;
        case score>40:
            console.log("C GRADE")
            document.getElementById("output").innerHTML= "C grade";
            break;
        case score<40:
            console.log("Better Luck Next time")
            document.getElementById("output").innerHTML= "Better Luck Next time";
            break;
    }
}
//strings
//string as arrays Stg[0] = first word of string
//slice and substrings
//toUpperCase/toLowerCase, trim
//operators
//arrays

//concating two arrays
function CStrings(){
    let q = document.getElementById("string1").value;
    let p = document.getElementById("string2").value;

    let o = q.concat(p)
    
    document.getElementById("output").innerHTML = o;
}
//subStringing first five item
function subStrng(){
    let q=document.getElementById("fullName").value;
    
    let p= q.substring(0,5)

    document.getElementById("output").innerHTML = p;
}
//pushing item in array
function pushArray(){
    let p=["item1","item2","item3","item4"]
    
    p.push("item5");
    
    let r=p.toString()

    document.getElementById("output").innerHTML = r;
}
//for loop
function forLoopArray(){
    let p=["item1","item2","item3","item4"]
    
    for(i=0;i<p.length;i++){
        document.getElementById("output").innerHTML += p[i];
    }   
}
//Print table 
function tableOf(){
    x = document.getElementById("number").value;
    x = Number.parseInt(x);

    for(i=10;i!=0;i--){
        p = x*i;
        document.getElementById("output").innerHTML += p;
    }

}
//display each name in a row
function displayNameInRow(){
    let a= document.getElementById("namesInArray").value;
    let b=a.split(",")
    
    for(i=0;i<b.length;i++){
        document.getElementById("output").innerHTML += b[i] ;
        //document.body.appendChild(div);
        console.log(b[i])
    }
}
//git