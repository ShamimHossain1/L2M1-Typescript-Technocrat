{   
    // Conditional type

type Sauda = {
    name: string;
    age: number;
    address: string;
    country: string;
}

type CheckSauda<T> = T extends keyof Sauda ? true : false; 
type HasCountry = CheckSauda<"name">; // false

}