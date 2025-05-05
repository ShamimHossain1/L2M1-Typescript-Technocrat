{
    // Promise


    const getTodo = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    }
    getTodo();



    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'Hello World';
            if (data) {
                resolve(data);
            } else {
                reject("Error: No data found");
            }
        });

    }

    const promise = async () => {
        const data = await createPromise();
        console.log(data);
    }
    // promise();


}