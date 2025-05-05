{
    // Function with generics

    const createArray = (param: string): string[]=>{
        return [param];
    }

    const res1 = createArray("Hello World");
    // console.log(res1); 

    const createArrayWithGeneric = <T>(param: T): T[]=>{
        return [param];
    }


    const res2 = createArrayWithGeneric<string>("Hello World");
    const res3 = createArrayWithGeneric<number>(1);
    const res4 = createArrayWithGeneric<boolean>(true);
    const res5 = createArrayWithGeneric<{name: string, age: number}>({name: "John Doe", age: 30});

    // console.log(res2);
    // console.log(res3);
    // console.log(res4);
    // console.log(res5);


    
}