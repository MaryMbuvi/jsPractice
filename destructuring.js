//Destructuring assignment allows us to "unpack" arrays or objects into a bunch of variables.

/* let [userName, Idname, , firstName] = ["knzy", 054, "Kenzy", "Duane"];
alert(firstName); */

/* let [userName, Idname, , firstName] = "knzy, 054, Kenzy, Duane".split(', ');
alert(firstName) */


/* let user = new Map();
user.set("Name", "John");
user.set("Deprtment", "Legal");

for (let [key, value] of user) {
    alert(`${key} : ${value}`);
} */

//swapping variables
/* let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); */

//The rest'...'
//should go last in the destructuring assignment
//value of rest is the array of the remaining array elements

/* let [userName, ...rest] = ["knzy", 054, "Kenzy", "Duane"];
alert(userName);
alert(rest[1]);

//Default values
//absent values on the right are considered undefined
let [firstName = "John", surname = "Kago"] = ["Kimberley"];
alert(`${firstName} ${surname}`); */


//Object destructuring

/* let obj = {
    firstname: "John",
    userName: "Jonte",
    surname: "Chike",
}

let { firstName, id = 02, surname: sname, hasRelative = prompt("Relative") } = obj;
alert(`${sname} of id ${id}, has a relative ${hasRelative}`); */


//The rest pattern "..."
//used when object properties > variables 

/* let obj = {
    firstname: "John",
    userName: "Jonte",
    surname: "Chike",
}

let { title, ...rest } = obj;
alert(rest.userName);
 */

/* let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
    title,
    width: w = 100, // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
}) {
    alert(`${title} ${w} ${h}`); // My Menu 100 200
    alert(item1); // Item1
    alert(item2); // Item2
}

showMenu(options); */

/* showMenu({}); // ok, all values are default

showMenu(); // this would give an error */


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

/* function topSalary(salaries) {
    maxSalary = 0;
    maxName = null;

    for (let [key, value] of Object.entries(salaries)) {
        if (maxSalary == Math.max(value)) {
            maxSalary = value;
            maxName = key;
        }
    }
    return maxName;
}
alert(maxName); */

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}
alert(maxName);