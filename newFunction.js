//syntax -- new Function
/* let func = new Function('a', 'b', 'return a * b'); 
alert(func(3, 4));
alert(func(4, 7));*/

//arrow function
/* let func = (a, b) => a * b;
alert(func(3, 4));
alert(func(4, 7)); */

//function declaration
function func(a, b) {
    return a * b;
}
alert(func(3, 4));
alert(func(4, 7));