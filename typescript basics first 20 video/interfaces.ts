interface Person {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements Person {
    firstName: string;    
    lastName: string;
    getFullName(): string {
        return this.firstName + " " + this.lastName
    }
}

let aPerson: Person = new Foo();

let someObj = {
    firstName: "Test",
    lastName: "Text 2",
    foo: 10,
    getFullName: () => "TestFn",
};

aPerson = someObj;
