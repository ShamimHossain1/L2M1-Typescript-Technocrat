{ 
    // Inheritance
    class Animal {
        constructor(public name: string, public age: number) {};
        move() {
            console.log(`${this.name} is moving`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, age: number, public breed: string) {
            super(name, age); 
        }
        bark() {
            console.log(`${this.name} is barking`);
        }
    }



    const dog = new Dog("Buddy", 3, "Golden Retriever");

    
    dog.move(); // Output: Buddy is moving
    dog.bark(); // Output: Buddy is barking

}
