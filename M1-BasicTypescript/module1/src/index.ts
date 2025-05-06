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

const arr : number[] = [1, 2, 3, 4, 5];
const newArray: number[] = arr.map((elem: number): number => elem * 2);

// Type Aliases
type Student = {
    name: string;
    rollNumber: number;
    isStudent: boolean;
}

const student: Student = {
    name: "Shamim",
    rollNumber: 12345,
    isStudent: true
}

type ADD = (num1: number, num2: number) => number;
const addFunction: ADD = (num1, num2)=> {
    return num1 + num2;
}

// Union Types

type StringOrNumber = string | number;
const userId: StringOrNumber = 12345;
const userName: StringOrNumber = "Shamim";