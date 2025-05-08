{
    // instanceof guard

    class Animal {
       
        constructor(public name: string, public species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`${this.name} makes a sound.`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string, public breed: string) {
            super(name, species); // Call the parent constructor
            this.breed = breed;
        }
        bark() {
            console.log(`${this.name} barks.`);
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string, public breed: string) {
            super(name, species); // Call the parent constructor
            this.breed = breed;
        }
        meow() {
            console.log(`${this.name} meows.`);
        }
    }


    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    };
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    };

    const getAnimal = (animal: Animal) => {
        if ( isDog(animal)) {
            console.log(`${animal.name} is a dog of breed ${animal.breed}.`);
        } else if (isCat(animal)) {
            console.log(`${animal.name} is a cat of breed ${animal.breed}.`);
        } 
    };

    const dog = new Dog("Buddy", "Canine", "Golden Retriever");
    const cat = new Cat("Whiskers", "Feline", "Persian");
    dog.bark(); // Output: Buddy barks.
    cat.meow(); // Output: Whiskers meows.

}

