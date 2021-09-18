//Constructor functions have two main convenctions 
//They are named with capital letter first.
//They should be executed only with "new" operator.

/* function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack")
alert(user.name); */



//encapsulation 
/* let user = new function() {
    this.name = "Alice";
    this.isAdmin = true;
}
alert(user.name);
 */

"Use Strict"

function User(name) {
    this.name = name;
    this.sayHi = function() {
        alert("Hello " + this.name);
    };
}
let user = new User("Kim");
user.sayHi();



/* 
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false */