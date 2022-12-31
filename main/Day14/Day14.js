//======================MAP TASK

function example1(){
    let employee=[
        {
            id: 1,
            name:"faisal",
            salary:50000
        },
        {
            id: 2,
            name:"asad",
            salary:30000
        },
        {
            id: 3,
            name:"abdullah",
            salary:20000
        },
    ]

    let x= employee.map(sry => {  //map accesses all elements in array
        return  sry.salary
     })
     console.log(x)
     let sum =0
    x.forEach(item=>{
        sum+=item
    })
    console.log(sum)
}
//============================Map task 2
function example2(){
    let menu=[
        {
            name:"item1",
            quantity: 1,
            price: 1000,
        },
        {
            name:"item2",
            quantity: 2,
            price: 2000,
        },
        {
            name:"item1",
            quantity: 3,
            price: 3000,
        },
    ]
    let x= menu.map(qlty=>{
        return qlty.quantity*qlty.price
    })
    console.log(x)
    let sum=0;
    x.forEach(item=>{
        sum+=item
    })
    console.log(sum)
}
//=====================reduce method=====================
function example3(){
    let menu=[
        {
            name:"item1",
            quantity: 1,
            price: 1000,
        },
        {
            name:"item2",
            quantity: 2,
            price: 2000,
        },
        {
            name:"item1",
            quantity: 3,
            price: 3000,
        },
    ]
    let x= menu.reduce((sum,qlty)=>{
        let y = qlty.quantity*qlty.price;
        console.log(y)
        return sum+=y
    },0)//return type [],{} if no type then returns object 
    console.log(x)
}
//=====================Reduce method by lecturer=================
function example4(){
    let menu=[
        {
            name:"item1",
            quantity: 1,
            price: 1000,
        },
        {
            name:"item2",
            quantity: 2,
            price: 2000,
        },
        {
            name:"item1",
            quantity: 3,
            price: 3000,
        },
    ]
    let x= menu.reduce((total,curitem)=>{
        let {quantity,price}=curitem     //destructuring 
        total.quantity+=quantity
        total.price+=price*quantity
        return total
    },{
        quantity:0,
        price:0
    })//return type [],{} if no type then returns object 
    console.log(x)
}
//===========================ASYNC AWAIT==============================
function example5(){

    const fetchApi=async()=>{
        try{
            
            let response=await fetch("https://jsonplaceholder.typicode.com/posts")
            console.log(response)

            let data= await response.json();
            console.log(data)

            let x= data.map(item => `<li>${item.title}</li>`)

            document.getElementById("list").innerHTML=x.join(',')
            // let js= JSON.parse(data);
    
            // console.log(js[0])

        }catch(error){
            console.log(error)
        }
    }
    fetchApi();
    
}

// react is a library used only to build UI 
//angular is framework used for developing differen kind of aps

//commands
//-NPX