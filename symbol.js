//a symbol is a primitive type for unique identifiers

/* let id = Symbol("This is an ID");
alert(id.toString());
alert(id.description); */


let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? this.name : this.money;
    }
};

alert(user);
alert(+user);
alert(user + 500);


//* converts operands to numbers 


/* let user = { name: "John" };

alert(user); // [object Object]
alert(user.valueOf() === user);
 */

/* The conversion algorithm is:

1. Call obj[Symbol.toPrimitive](hint) if the method exists,
2. Otherwise if hint is "string"
     try obj.toString() and obj.valueOf(), whatever exists.
3. Otherwise if hint is "number" or "default"
     try obj.valueOf() and obj.toString(), whatever exists. */