/* let admin = new Object(); //object constructor syntax
let admin = {}; //object literal syntax => literals = "key:value"*/

/* let admin = {
    userName: "Kim",
    department: "Sales", //trailing comma makes it easier to add/remove/move around properties
    "super admin": true //multiword properties
};

alert(admin.userName);
alert(admin.department);
alert(admin["super admin"]); */

/* let admin = {
    userName: "Kim",
    department: "Sales", //trailing comma makes it easier to add/remove/move around properties
    "super admin": true //multiword properties
};

let key = prompt("About the admin", "name");
alert(admin[key]); */


/* let fruit = prompt("Which fruit to buy?", "Pears");

let bag = {}
    bag[fruit]=5; */


/* 
let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
return bag;
 */
/* function createUser(name, age, isMale) {
    return {
        name,
        age,
    }
}
let user = createUser("Jane", 23);
alert(user.name);
alert(user.age); */


/* let marks = prompt("What did you score?", 60);

let award = {
    [marks]: 90
}
alert(award.marks); */


/* let fruit = {
    name: "apple",
    color: "green",
    shape: "circle",
}

for (let key in fruit) { //to iterate over an object
    alert(key);
    alert(fruit[key]);
}
alert("color" in fruit); //to check is property exists
 */
/*
The dot notation: obj.property.
Square brackets notation obj["property"].
to take a key from a variable obj[varWithKey]
 */

/* let user = {}

user.name = "John";
user.surname = "Smith";
user.name = "Pete"
delete user.name; */


/* function isEmppty(obj) {
    for (let key in isEmpty) {
        return false;
    }
    return true;
} */


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
delete salaries.John;

salaries.John = 200;

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);