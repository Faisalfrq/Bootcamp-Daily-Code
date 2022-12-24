class Employee{
    name
    dept
    constructor(name='', dept='general'){
        this.name=name;
        this.dept=dept;

    }
    display(){
        console.log("Name "+ this.name + " Department "+this.dept)
    }
}
class Manager extends Employee{
    reports
    constructor(name,dept,reports = []){
        super(name,dept)
        this.reports=reports;
    }
}
class WorkerBee extends Employee{
    projects
    constructor(name,dept,projects=[]){
        super(name,dept)
        this.projects=projects;
    }
}
class salesPerson extends WorkerBee{
    quota
    dept
    constructor(projects,quota=100, dept='sales'){
        super(projects)
        this.quota=quota;
        this.dept=dept;
    }
}
class Engineer extends WorkerBee{
    machine
    dept
    constructor(projects,machine='', dept = 'engineering'){
        super(projects)
        this.machine=machine;
        this.dept=dept;
    }
}

var objEngineer = new Engineer();
objEngineer.display();

var objSales = new salesPerson()
objSales.display();

console.log('hello')