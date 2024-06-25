class Person 
{
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, ssn: string) 
    {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = ssn;
    }

    getName(): string 
    {
        return this.name;
    }

    getAge(): number 
    {
        return this.age;
    }
}

// Example usage:
let person = new Person("Alice", 30, "123-45-6789");
console.log(person.getName());  // Output: "Alice"
console.log(person.getAge());   // Output: 30
