console.log('test');
//--------------------OBJECT ORIENTED JS
class Person{
    name;
    #age; // use # to make it private variable.- Part of encapusulation
    grade;
    //constructor if not declared then default is used
    //useed to initialize variables
    //this is used for an objected created of this class
    constructor(name,age,grade){
        this.name=name; // we are setting global variable value
        this.#age=age;
        this.grade=grade;
    }
    //non static function- can only be called with obj. 
    introduction(){
        //here we are using this to refer to value store in global variable
        console.log("I am " + this.name + " age " + this.#age + " grade " + this.grade)
    }
    //ENCAPSULATION
    
    //setter getter to access variable in person
    setAge(userInput){
        this.#age = userInput;
    }
    getAge(){
        return this.#age;
    }
    display(){
        console.log("Person")
    }
}
function objExample(){
    //constructor
    const objPerson = new Person("name",10,'A');
    //non static attributes are called through obj
    objPerson.introduction();
    const objPerson2=new Person("name2",20,'B')
    objPerson2.name="new name"
    //objPerson2.#age=30;
    objPerson2.introduction();
    //static is shared by all object and is referred by class name not pbject

    //setter Getter
    objPerson2.setAge(120);
    console.log(objPerson2.getAge())
}

//----------------------inheritance example
class Teacher extends Person{
    //Inheritance
    //use overriding function to hide parents function
    constructor(name, age){
        super(name,age) // calls parent class constructor
    }
    display(){
        console.log("teacher")
    }
}
function inheritanceExample(){
    const obj= new Teacher()
    //contains all functions of parents
    obj.name="Teacher name"
    obj.setAge(50)
    obj.introduction();
}
//--------------------polymorphism
class Student extends Person{
    display(){
        console.log("student")
    }
}
function polymorphismExample(){
    const obj1= new Person();
    const obj2= new Teacher();
    const obj3= new Student();
    
    var x=[obj1,obj2,obj3]
    x.forEach(element => {element.display();})
    //if one of the childs display dont work then it refers to parents display

}
function polymorphismExample2(){
    const obj1= new Person();
    const obj2= new Teacher();
    const obj3= new Student();
    var option = 1; //getting user input
    var selectedOption;
    if(option == 1){selectedOption=obj1 }
    else if(option == 2){selectedOption=obj2 }
    else if(option == 3){selectedOption=obj3 }

    selectedOption.display(); // same function called upon users input
}
//--------------------- method chaining------------

function chainingExample(){
    var input= "this is a string input"
    var spt= input.split(' ');
    var arrSort = spt.sort();
    var fltr= arrSort.filter(a=>{a.length > 2});
    var mp = fltr.map(m=> m+ ' input')
    console.log(mp);
    //or
    console.log(input.split(',').sort().filter(a=>{a > 5}))
}
//-------------------EXAMPLE------------------
class Calculator{
    input1;
    input2;
    output;
    readinput(a,b){
        this.input1=a;
        this.input2=b;

        return this;
    }
    add(){
        this.output=this.input1+this.input2
        return this;
    }
    display(){
        console.log(this.output)
    }
}
function chainingExample2(){
    const objCal= new Calculator()
    objCal.readinput(2,3)
    objCal.add();
    objCal.display();
    //chaining here.
    objCal.readinput(2,3).add().display()
}
