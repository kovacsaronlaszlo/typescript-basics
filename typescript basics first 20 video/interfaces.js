"use strict";
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
var someObj = {
    firstName: "Test",
    lastName: "Text 2",
    foo: 10,
    getFullName: function () { return "TestFn"; },
};
aPerson = someObj;
