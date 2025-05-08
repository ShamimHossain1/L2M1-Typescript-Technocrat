{
    // Type guards 

    // typeof operator

    const add = (a: number | string, b: number | string): number | string => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        else {
            return a.toString() + b.toString();
        }
    };

    // in guard
    type user = {
        name: string;
        age: number;
    }
    type admin = {
        name: string;
        age: number;
        role: "admin";
    };

    function getUser(user: user | admin) {
        if("role" in user){
            console.log(user.role);
        }
        else{
            console.log(user.name);
        }
    }
    
    getUser({name: "John", age: 25});

}