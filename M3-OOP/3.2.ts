{
    // Inheritance
    class Animal {
        constructor(public name: string) {}
        move() {
            console.log(`${this.name} is moving`);
        }
    }

    class Dog extends Animal {
        bark() {
            console.log(`${this.name} is barking`);
        }
    }

    const dog = new Dog("Buddy");
    
    dog.move(); // Output: Buddy is moving
    dog.bark(); // Output: Buddy is barking

}