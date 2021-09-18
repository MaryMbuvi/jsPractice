/* let accessAllowed;
let age = prompt("Your age?", "");

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed); */

let role = prompt("Who's there?", "");
if (role === "Admin") {
    let password = prompt("Your password?", "");
    if (password === "") {
        alert("Canceled");
    } else if (password == "TheMaster") {
        alert("Welcome");
    } else {
        alert("Wrong password");
    }
} else if (role === null || escape) {
    alert("Canceled");
} else {
    alert("Unknown user");
}