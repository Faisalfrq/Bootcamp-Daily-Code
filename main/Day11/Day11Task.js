//------------------- inheritance using prototype--------------------
function Person(){
    
    this.fullName='';
    this.age=0;
    this.cnic='';

    Person.prototype.display= function(){
        console.log(this.fullName +" "+ this.age +" "+ this.cnic) ;
    }
}

function Student(){
    Person.call(this)
    this.rollNumber=0;
    this.major='';
    // Student.prototype.display= function(){
    //     console.log(
    //         this.fullName +" "+ this.age +" "+ this.cnic+
    //         this.rollNumber+" "+this.major
    //     ) ;
    // }
}

function Employee(){
    Person.call(this)
    this.salary=0;
    this.depratment='';
    
    // Employee.prototype.display= function(){
    //     console.log(
    //         this.fullName +" "+ this.age +" "+ this.cnic+
    //         this.salary+" "+this.depratment
    //     ) ;
    // }
}

function Teacher(){
    Employee.call(this)
    this.subject='';
    this.qualification='';

    // Teacher.prototype.display= function(){
    //     console.log(
    //         this.fullName +" "+ this.age +" "+ this.cnic+
    //         this.subject+" "+this.qualification
    //     ) ;
    // }
}
function Staff(){
    Employee.call(this)
    this.duty=''
}

Student.prototype= Object.create(Person.prototype);
Student.prototype.constructor = Person;

// Employee.prototype= Object.create(Person.prototype);
// Employee.prototype.constructor = Person;

// Teacher.prototype= Object.create(Employee.prototype);
// Teacher.prototype.constructor = Employee;

// Staff.prototype= Object.create(Employee.prototype);
// Staff.prototype.constructor = Employee;

// var objPerson = new Person();
 var objStudent = new Student();
// var objEmployee= new Employee();
// var objTeacher= new Teacher();

objStudent.fullName="Student Name"
objStudent.age=20
objStudent.cnic='111111111'

objStudent.major='CS'
objStudent.rollNumber=5


objStudent.display();

//=================METHOD===========================
// function Person2(){
//     let objPerson= {}
//     objPerson.name = "Test"
//     objPerson.age = 10

//     objPerson.myfunction()= function(){
//         console.log(this.name+" " +this.age)
//     }
//     return objPerson;
// }

// let myobj = Person();
// console.log(myobj)
// myobj.myfunction()

