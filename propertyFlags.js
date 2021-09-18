"Use strict"
/* let user = {
    name: "Leah"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert(JSON.stringify(descriptor, null, 50)); */


//non-writable 

/*"use strict"

 let admin = {
    name: "Tom"
};

Object.defineProperty(admin, 'name', {
    writable: false
});

admin.name = "Roy";

alert(admin.name); */

//Making a property non-configurable is a one-way road. We cannot change it back with defineProperty
//The idea of “configurable: false” is to prevent changes of property flags and its deletion, while allowing to change its value.


//non-configurable
/* let admin = {
    name: "Tom"
};

Object.defineProperty(admin, 'name', {
    configurable: false
});

admin.name = "Roy";
alert(admin.name);
delete admin.name;

alert(admin.name); */

//object.defineProperties => allows to define many properties at once
let admin = {};
Object.defineProperties(admin, {
    name: { value: "Kim", writable: true },
    age: { value: 23, configurable: false },
});
let descriptor = Object.getOwnPropertyDescriptor(admin, 'name');
alert(JSON.stringify(descriptor, null, 4));

//sealing an object globally
Object.preventExtensions(obj) //forbids addition of new propertes
Object.seal(obj) //forbids adding/removing properties
Object.freeze(obj) // forbids adding/removing/changing