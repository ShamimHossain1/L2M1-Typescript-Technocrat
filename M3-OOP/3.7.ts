{
    // static

    class A {
        static count : number = 0;
        increment() {
           A.count++;
        }
        decrement() {
            A.count--;
        }
    }

    const a = new A();
    a.increment();
    a.increment();
    console.log(A.count); 
    const b = new A();
    b.increment();
    console.log(A.count); 
    
   
}