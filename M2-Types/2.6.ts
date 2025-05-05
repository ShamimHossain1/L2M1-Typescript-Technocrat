{
    // Constraints


    const addCourse = <T extends { id: number, name: string, age: number }>(student: T) => {
        const course = "React";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourse({
        id: 1,
        name: "John Doe",
        age: 30,
    });
    const student2 = addCourse({
        id: 2,
        name: "SaUda",
        age: 35,
    });
    
    const student3 = addCourse({name:"sauda", age: 30, id: 1, email:"sauda"});
    console.log(student3);


}