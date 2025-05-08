// polymorphism
{
    class Person {
        getSleep(){
            console.log('I am sleeping 8 hours a day');
        }

    }
    class Student extends Person {
        getSleep(){
            console.log('I am sleeping 6 hours a day');
        }
    }

 const getSleepHr = (person: Person) => {
    person.getSleep();
 }
    const person = new Person();
    const student = new Student();

    // getSleepHr(person); 
    // getSleepHr(student); 

    class Shape {
        getArea() : number {
            return 0;
        }
    }

    class Circle extends Shape {
        constructor(public r: number) {
            super();
        }
      
        getArea() : number {
            return Math.PI*this.r*this.r;
        }
    }

    class Square extends Shape {
        constructor(public l: number, public W: number) {
            super();
        }
        getArea() : number {
            return this.l*this.W;
        }
    }

    const getArea = (shape: Shape) => {
        console.log(shape.getArea());
    }

    const circle = new Circle(5);
    const square = new Square(5, 10);
    getArea(circle); 
    getArea(square); 

}///////