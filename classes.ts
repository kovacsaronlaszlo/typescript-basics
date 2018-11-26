export class Person {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullname() {
        return this.firstName + " " + this.lastName;
    }
}

var aPerson = new Person('Aron', 'Kovacs');
console.log(aPerson.getFullname());