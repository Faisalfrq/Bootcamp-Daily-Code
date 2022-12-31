//todays task

//github-task-team

//async-promises

//dom manipulation

//==================MAP==========================
function mapExample(){
    let menus = [
        {
            id:1,
            item: "pizza",
            category: "lunch"
        },
        {
            id:2,
            item: "burger",
            category: "lunch"
        },
        {
            id:3,
            item: "Biryani",
            category: "dinner"
        },
        {
            id:4,
            item: "Karahi",
            category: "dinner"
        },
        {
            id:5,
            item: "Chane",
            category: "breakfast"
        },
        {
            id:6,
            item: "Sandwich",
            category: "breakfast"
        }
    ]
    //MAP 
    let x= menus.map(menu => {  //map accesses all elements in array
       return menu.category 
    })
    console.log(x)
    x= new Set(x); // using new Set to remove repetition
    console.log(x)
    let y= ["All", "Tea", ...x] // converting object back to array
    console.log(y)
    
    let category = y.map(cate => `<button>${cate}</button>`) //passing html through JS

    console.log(category) 

    document.getElementById("btn").innerHTML=category.join(',') //categories gets call back for each mapped item

    let categoryOptions = menus.map(menu=> {
        return menu
    })
    
    console.log(categoryOptions)
    
    let z= document.getElementById('btn').innerText

    console.log(z)
}

function example2(){
    
    let person={
        id:1,
        name:'faisal',
        job:'xyz',
        address:{
            country: {
                value:'Pakistan', 
                city:'Rawalpindi'
            }
        }
    }
    //object destructure
    console.log(person.address.country.city)
    let {id,name,job,address:{country:{value,city}}}=person

    console.log(city)
}

function example3(){
    const obj = {name:"Faisal",
                address:{
                    country: {
                        value:'Pakistan', 
                        city:'Islamabad'
                    }
                }
            }
    let{name,address:{country:{value,city}}}=obj 
    
    document.getElementById("btn").innerText=value
}