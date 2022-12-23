class Person{
    nameX='default';
    gender= 'default';
    age= 0;
    cnic= '0000000000000';
    constructor(name,gender,age,cnic){
        this.nameX=name;
        this.gender=gender;
        this.age=age;
        this.cnic=cnic;
    }
    display(){
        console.log(nameX+" "+ gender+" "+age+" "+ cnic)
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
    Exam;
    constructor(name, age,gender,cnic, department,salary,designation, exam, classAssigned){
        super(name,age,gender,cnic,department,salary,designation)
        this.Exam=exam;
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
objStudent1.name="StudentName"
objStudent1.gender="StudentGender"
objStudent1.age=20
objStudent1.cnic="111111111111"
//now student attributes
objStudent1.rollNumber=01;
objStudent1.fee=200;
console.log(objStudent1.name+" "+ objStudent1.gender+" "+objStudent1.age+" "+ 
            objStudent1.cnic+" "+objStudent1.rollNumber+" "+objStudent1.fee)

const objStudent2= new Student();
const objTeacher1= new Teacher();
const objTeacher2= new Teacher();
const objStaff1= new Staff();
const objStaff2= new Staff();




