class Person{
    constructor(name,age){
        this.name=name,
        this.age=age;
    }
    welcome(){
        console.log("Hello "+this.name);
    }
}

class Teacher extends Person{
    constructor(name,age,classStrength){
        super(name,age);
        this.classStrength = classStrength;
    }
}

class Student extends Person{
    constructor(name,age,cgpa){
        super(name,age);
        this.cgpa=cgpa;
    }
}

let person = new Person("Shyam",24);
person.welcome();
console.log(person);

let teacher = new Teacher("Aman",25,59);
console.log(teacher);

let student = new Student("Rohan",22,9);
student.welcome();
console.log(student);
