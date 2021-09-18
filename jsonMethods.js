/**
 * JSON.stringify to convert objects into JSON.
 * JSON.parse to convert JSON back into an object.
 */

//Formatting: space => JSON.stringify(value, replacer, space)
let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

alert(JSON.stringify(user, null, 3));

//JSON.parse => decoding a JSON-string 
//syntax => let val = JSON.parse(str, [reviver]);
//reviver => optional function that will be called for each (key, value) pair.

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert(user.friends[1]); // 1