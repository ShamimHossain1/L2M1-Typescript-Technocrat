
// Type assertions

let anything : any;

anything = 1;
anything = "hello";
// anything = true;

let a =(anything as string).length;
console.log(a);

const kgToGm = (val: string | number) => {
    if(typeof val === 'string'){
        return parseFloat(val) * 1000;
    }
    if(typeof val === 'number'){
        return val * 1000;
    }
};


console.log(kgToGm(1));
console.log(kgToGm("1"));


interface User {
    name: string;
    age: number;
}

interface User2  {
    name: string;
    age: number;
    email: string;
}

type User3 = User & User2; 

interface User4 extends User2 {
    country: string;
}

// Type for  Arrays, and Functions

type Roll = number [];
interface Roll2 {
    [index: number]: number;
}

const RollNumbers: Roll2 = [1, 2, 3, 4, 5, 6];


type SUM = (num: number, num1: number) => number;
interface SUM2 {
    (num: number, num1: number): number;
}
const sum1 : SUM2 = (num, num1)=> num+num1;
const sum2 : SUM = (num, num1)=> num+num1;

// generic types

const rollNumbers : number[] = [1, 2, 3, 4, 5, 6];

const rollNumbers2 : Array<number> = [1, 2, 3, 4, 5, 6];
const rollNumbers3 : Array<string> = ["1", "2", "3", "4", "5", "6"];


type genericType<T> =  Array<T>;

const rollNumbers4 : genericType<number> = [1, 2, 3, 4, 5, 6];
const rollNumbers5 : genericType<string> = ["1", "2", "3", "4", "5", "6"];  

type tupleGeneric<T, U>= [T, U];

const rollNumbers6 : tupleGeneric<number, string> = [1, "1"];
const rollNumbers7 : tupleGeneric<string, number> = ["1", 1];

