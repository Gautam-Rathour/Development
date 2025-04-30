// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// arr1.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// arr2.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// // console.log("hello");

// // ====================================================================
// // ====================================================================

// // Factory function  : --

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }


// let p1 = PersonMaker("adam", 45); //copy
// let p2 = PersonMaker("raman", 39); // copy

// // ====================================================================
// // ====================================================================

// Constructors - doesn't return anything & start with capital  : --

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// }
// let p1 = new Person("adam", 45);
// let p2 = new Person("raman", 39); 


// console.log(name + age);

// // ====================================================================

// class Person {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//     }

//     talk () {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }


// let p1 = new Person("raman", 34);
// let p2 = new Person("mohani", 44);

// // ====================================================================
// // ====================================================================


// class Person {
//     constructor(name, age) {
//         console.log("person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, marks) {
//         console.log("student class constructor");
//         super(name, age); // parent class constructor is being called
//         this.marks = marks;
//     }
    
// }
// // let stu1 = new Student("adam", 55, 95);
// // console.log(stu1);

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age); // parent class constructor is being called
//         this.subject = subject;
//     }
// }
// let Tech1 = new Teacher("adam", 55, 95);

// // ====================================================================
// // ====================================================================

class Mammal { // base class // parent
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    
    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal { // child
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("wooff..");
    }
}

class Cat extends Mammal { // child
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow..");
    }
}














