{
// Generic constraints with keyof operator


type Vehicle ={
    bike: string;
    car: string;
    plane: string;
}

type Owner = "bike" | "car" | "plane";

type Owner2= keyof Vehicle; // bike | car | plane

// const person: Owner2 ="bike";
// console.log(person);


const getPropertyValue=<X, Y extends keyof X>(obj: X, key: Y)=>{
    return obj[key];
}

const object = {
    name: "Shamim",
    age: 30,
    address: "Dhaka",
    country: "Bangladesh",
}


const value = getPropertyValue(object, "name");
console.log(value); // Shamim




}