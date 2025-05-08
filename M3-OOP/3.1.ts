// {
    // Class declaration
    class Animal {
        //   public name: string;
        //   public age: number;

           constructor(public name: string, public age: number) {
            //    this.name = name;
            //    this.age = age;
           }

              makeSound(): void {
                console.log(`${this.name} makes a sound.`);
              }

    }

    const animal = new Animal("Dog", 5);
    console.log(animal.name); // Output: Dog
    console.log(animal.age); // Output: 5
    animal.makeSound();


// }