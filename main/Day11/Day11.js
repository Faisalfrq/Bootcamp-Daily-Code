//===============Hoisting===============
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//classes dont hoist but variables and functions do

//=============Anonymous classes/class expression==========

let Rectangle = class{
    //making height private to use setter and getter
    #height;
    width;
    constructor(height,width){
        this.height= height;
        this.width=width;
    }
   // getters, Methods 
    get area(){
        return this.calArea()
    }
    calArea(){
        return this.height*this.width
    }
//------------getter setter---------------
    get height(){
        return this.#height;
    }
    set height(height){
        this.height=height;
    }
//--------- static methods------------
//can only be called with class name while non static are called with object

    static myfunc(){
        console.log("static function")
    }
}
console.log(Rectangle.name); // name is a default 
//================setter getter================

//rect.height(20); //will call setter
//console(rect.height())//will call getter


//--------- static methods------------R
Rectangle.myfunc();
//repeated 
//=====================Inheritance Example=========
class Animal{
    name = "Animal-Name"
    constructor(name){
        this.name=name;
    }
    Adisplay(){
        console.log("Animal Display: " )
    }
}
class Dog extends Animal{
    
    display(){
        console.log("DOG Display")
    }
}
let objDog= new Dog()
objDog.Adisplay()

//==========Dot Notation and Bracket notation--------
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
//prototyper based OOP
//Defualt classes like Date
let date = new Date();
console.log(date)
console.log("---------------------------------------------")

let p= { Reg: 4, Full_name:"ABD"}
let c= { Class: "A" }

//--------------------------------b is a prototype based object--------------
function Bike(){
    this.name = 'Bike'
}
//calling function using oop 
var b = new Bike();
function Venom(){
    Bike.call(this);
    console.log('i am in venom')
}
//bike parent and venom child using prototype
Venom.prototype= Object.create(Bike.prototype);
Venom.prototype.constructor = Bike;

var bk = new Bike();
var v = new Venom();
v.name="Venom"

console.log(bk.name,v.name) // Bike is parent and we can use name in variabe from v

//-------------------function Inheritance------------------