class Person{
    name='default';
    gender= 'default';
    age= 0;
    cnic= '0000000000000';
    constructor(name,gender,age,cnic){
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.cnic=cnic;
    }

    display(){
        console.log("name: "+this.name+" gender: "+ this.gender+" age: "+
        this.age+" cnic: "+ this.cnic)
    }

}
class Student extends Person{
    fee;
    rollNumber;
    constructor(name, age,gender,cnic,fee,rollNumber){
        super(name, age,gender,cnic)
        this.fee=fee;
        this.rollNumber=rollNumber;

    }
}
class Employee extends Person{
    department;
    designation;
    salary;
    constructor(name, age,gender,cnic, department,salary,designation){
        super(name,age,gender,cnic)
        this.department=department;
        this.designation=designation;
        this.salary=salary
    }
}
class Teacher extends Employee{
    classAssigned;
    course;
    constructor(name, age,gender,cnic, department,salary,designation, course, classAssigned){
        super(name,age,gender,cnic,department,salary,designation)
        this.course=course;
        this.classAssigned=classAssigned
    }
}
class Staff extends Employee{
    staffAttribute1;
    staffAttribute2;
    constructor(name, age,gender,cnic, department,salary,designation,staffAttribute1,staffAttribute2){
        super(name,age,gender,cnic,department,salary,designation)
        this.staffAttribute1=staffAttribute1;
        this.staffAttribute2=staffAttribute2;
    }
}

const objStudent1= new Student();
//setting inherited persong attributes
objStudent1.name="Faisal"
objStudent1.gender="male"
objStudent1.age=25
objStudent1.cnic="111111111111"
//now student attributes
objStudent1.rollNumber=01;
objStudent1.fee=200;

objStudent1.display();
console.log(objStudent1.name+" "+ objStudent1.gender+" "+objStudent1.age+" "+ 
            objStudent1.cnic+" "+objStudent1.rollNumber+" "+objStudent1.fee)
//student 2
const objStudent2= new Student();
objStudent2.name="Sameer"
objStudent2.gender="maler"
objStudent2.age=25
objStudent2.cnic="222222222222"
//now student attributes
objStudent2.rollNumber=01;
objStudent2.fee=200;

objStudent2.display();
console.log(objStudent2.name+" "+ objStudent2.gender+" "+objStudent2.age+" "+ 
            objStudent2.cnic+" "+objStudent2.rollNumber+" "+objStudent2.fee)
console.log("----------------------TEACHER OBJS---------------------------")
const objTeacher1= new Teacher();
objTeacher1.name="Abdullah"
objTeacher1.gender="Male"
objTeacher1.age=40
objTeacher1.cnic="1111111111111111111111111111"

objTeacher1.department="physics"
objTeacher1.designation="TEACHER"
objTeacher1.salary=111111

objTeacher1.classAssigned="A"
objTeacher1.course="Physics"

objTeacher1.display();
console.log(objTeacher1.name+" "+ objTeacher1.gender+" "+objTeacher1.age+" "+ 
            objTeacher1.cnic+" "+objTeacher1.department+" "+objTeacher1.designation+
            " "+objTeacher1.salary+" "+objTeacher1.classAssigned+" "+objTeacher1.course
            )

const objTeacher2= new Teacher();
objTeacher2.name="Ahmad"
objTeacher2.gender="Male"
objTeacher2.age=42
objTeacher2.cnic="222222222222222222"

objTeacher2.department="CS"
objTeacher2.designation="TEACHER"
objTeacher2.salary=22222222222

objTeacher2.classAssigned="B"
objTeacher2.course="Algorithms"

objTeacher2.display();
console.log(objTeacher2.name+" "+ objTeacher2.gender+" "+objTeacher2.age+" "+ 
            objTeacher2.cnic+" "+objTeacher2.department+" "+objTeacher2.designation+
            " "+objTeacher2.salary+" "+objTeacher2.classAssigned+" "+objTeacher2.course
            )

const objStaff1= new Staff();
const objStaff2= new Staff();



