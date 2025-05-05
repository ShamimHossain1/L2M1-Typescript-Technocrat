{
    // interface - generic

    interface Developer<T>{
        name: string;
        age: number;
        computer:{
            brand: string;
            model: string;
        }
        smartWatch:T
    }


    const developer: Developer<string> ={
        name: "John Doe",
        age: 30,
        computer:{
            brand: "Apple",
            model: "MacBook Pro"
        },
        smartWatch:"Apple Watch"
    }


}