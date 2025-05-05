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





    const createArrayWithTuple = <T, U>(param: T, param2: U): [T, U]=>{
        return [param, param2];
    }


    const res6 = createArrayWithTuple<string, number>("Hello World", 1);
    const res7 = createArrayWithTuple<number, string>(1, "Hello World");
    const res8 = createArrayWithTuple<boolean, string>(true, "Hello World");
    const res9 = createArrayWithTuple<{name: string, age: number}, string>({name: "John Doe", age: 30}, "Hello World");

    // console.log(res6);
    // console.log(res7);
    // console.log(res8);
    // console.log(res9);

    const addCourse =<T> (student : T)=>{
        const course = "React";
        return {
            ...student,
            course
        }
    }

    const student = addCourse({
        name: "John Doe",
        age: 30,
    });
    console.log(student);


    
}