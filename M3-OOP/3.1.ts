// {
    // Class declaration
    class Animal {
           name: string;
           age: number;

           constructor(name: string, age: number) {
               this.name = name;
               this.age = age;
           }

    }

    const animal = new Animal("Dog", 5);
    console.log(animal.name); // Output: Dog
    console.log(animal.age); // Output: 5


// }