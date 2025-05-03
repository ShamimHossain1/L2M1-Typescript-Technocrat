let course = "Next level TypeScript";
console.log(course);
console.log("Hello World!");
console.log("Hello World!");

let firstName: string = "Shamim";
let rollNumber: number = 12345;
let isStudent: boolean = true;
let courses: string[] = ["JavaScript", "TypeScript", "React", "NodeJS"];
let x: undefined = undefined;
let y: null = null;

const user: {
    name: string;
    rollNumber: number;
    isStudent: boolean;
} = {
    name: "Shamim",
    rollNumber: 12345,
    isStudent: true
}

console.log(user);

function add(num1: number, num2: number): number {
    return num1 + num2;
};

add(5, 10);

const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
};

const poorUser ={
    name: "Shamim",
    rollNumber: 12345,
    isStudent: true,
    balance: 1000,
    addBalance(balance: number): number {
        return this.balance + balance;
    }
}