{
    // utility types
    // pick

    type User = {
        name: string;
        age: number;
        address?: string;
        country: string;
    }

    type Name = Pick<User, "name">; 

    // omit type

    type Contact = Omit<User, "name" | "age">;

    // Required type
    type RequiredType = Required<User>;

    // Partial type
    type PartialType = Partial<User>;

    // Readonly type
    type ReadonlyType = Readonly<User>;

    // Record type
    type RecordType = Record<string, string>;

    
} 