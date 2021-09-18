//internal format is UTF-16
/* 
 *backticks allow us to embed any expression into the string 
 *allows a string to span multiple lines 
 */

"Use Strict"
let userList = `Users:
* Mary
* Kim
* Alice
`;
console.log(userList);

/* alert('I\'m Mary \\'); // to show escape chracter
alert("Wanna know the how\n long this is".length); //length is a property

let str = 'adminList';
alert(str[3]);
alert(str[str.length - 2]);
alert(str.length);

alert(str[1000]); // undefined
alert(str.charAt(1000)); // '' (an empty string) */


/* let str = "As i set mass to ass ashley felt ashamed";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    alert(pos);
}
 */
//Betwisee 
/* alert(~2); //-(2+1) == -3
let str = "Wanna know the how";
if (~str.indexOf('Ann')) {
    alert("Found you!");
} else {
    alert("Keep looking!");
} */

/* alert("As i set mass to ass ashley felt ashamed".includes('as', 5)); //true
alert("Ashamed".startsWith('as')); //false
alert("Ashamed".endsWith('ed')); //true */


//Getting a substring: substring(start, end), substr(start, length) and slice(atart, end)
//slice is more flexible as it allows negative arguments

/* let str = "stringify";
alert(str.slice(1, 5)); //trin
alert(str.slice(1)); //tringify

alert(str.slice(2, 6)); // "ring" 
alert(str.slice(6, 2)); // "" (an empty string)
alert(str.substring(6, 2)); //"ring"

alert(str.substr(2, 5));
alert( str.substr(-4, 2) ); // 'gi' */


/* "Use Strict"

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("john")); */



/* function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('XXX');
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));
 */


/* function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }
    return str;
}
alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20)); */

/* function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert(extractCurrencyValue('$123')); */