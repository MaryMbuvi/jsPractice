/* let prod = (a, b) => a * b;
alert(prod(5, 8));
 */

/* let prod = function(a, b) {
    return a * b;
};
alert(prod(5, 6)); */

/* let age = prompt("Your age?", 20);

let welcome = (age > 18) ?
    () => alert("You can proceed to login") :
    () => alert("Permission to login denied");

welcome(); */

//two functions are seperated using a full colon
//a function with no arguments should always have parenthesis
//a function with one argument can have or not have parenthesis

/* 
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
      "Do you agree?",
      () => alert("You agreed"),
      () => alert("You diagreed")
  ); */

/* 
if (confirm("Are you under 18 years?") == true) {
    alert("You can enroll on this course");
} else {
    alert("Dummy!");
} */

let text = confirm("Are you under 18 years?");
if (text == true) {
    alert("You can enroll on this course");
} else {
    alert("Dummy!");
}