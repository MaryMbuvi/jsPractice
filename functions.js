//function --> a set of statements designed to perform a particular task.

//Function Declaration
/* function getMarks(marks) {
    if (marks > 60) {
        return true;
    } else {
        return false;
    }
}

let marks = prompt("Enter your marks here: ", 50);
if (getMarks(marks)) {
    alert("Proceed to the next level.");
} else {
    alert("You failed.");
} */

/* function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i); // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
} */

/* let name = 'Jeff';

function showMessage() {
    let message = "Hello " + name + ", " + "I'm learning JavaScript!"
    alert(message);
}

showMessage(); */



//Function Expression
/* let showMessage = function(){
    alert("Hello there");
}; */

//callback functions => functions that are passed as arguments to other functions.
/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

ask(
    "Do you agree?",
    function() { alert("You agreed"); },
    function() { alert("You disagreed"); }
); */

/* let age = prompt("Your age?", 15);

if (age < 18) {
    welcome = function() {
        alert("You can log in...");
    };
} else {
    welcome = function() {
        alert("Underage");
    }
}; */

let age = prompt("Your age?", 18);

let welcome = (age >= 18) ?
    function() { alert("You can log in..."); } :
    function() { alert("Underage"); };

welcome();

//function declarations are more