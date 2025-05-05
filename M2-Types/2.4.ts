{


    // interface - generic

    interface Developer<T,X = null>{
        name: string;
        age: number;
        computer:{
            brand: string;
            model: string;
        }
        smartWatch:T,
        bike?: X
    }


    interface SmartWatch{
        brand: string;
        model: string;
    }

    const developer: Developer<SmartWatch> ={
        name: "John Doe",
        age: 30,
        computer:{
            brand: "Apple",
            model: "MacBook Pro"
        },
        smartWatch:{
            brand: "Apple",
            model: "Apple Watch"
        }
    }


    type samsungWatch = {
        brand: string;
        model: string;
        releaseYear: number;
        heartTracker: boolean;
        waterResistant: boolean;
    }

    const developer2: Developer<samsungWatch> ={
        name: "Sauda",
        age: 30,
        computer:{
            brand: "Samsung",
            model: "Galaxy Book Pro"
        },
        smartWatch:{
            brand: "Samsung",
            model: "Galaxy Watch",
            releaseYear: 2022,
            heartTracker: true,
            waterResistant: true,
        }
    }


    const developer3: Developer<samsungWatch, string> ={
        name: "Sauda",
        age: 30,
        computer:{
            brand: "Samsung",
            model: "Galaxy Book Pro"
        },
        smartWatch:{
            brand: "Samsung",
            model: "Galaxy Watch",
            releaseYear: 2022,
            heartTracker: true,
            waterResistant: true,
        },
        bike:"BMW"
    }













}