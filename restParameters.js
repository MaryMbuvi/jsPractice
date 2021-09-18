//Rest Parameters

/* function showName(fName, sName, ...titles) {
    alert(`${fName} ${sName}`);
    alert(`${titles[0]} ${titles[1]} ${titles[2]}`)
}
showName("Nadia", "Cheryuot", "Major", "General", "Prof"); */


//Spread syntax => turns array into a list of arguments
/* let arr1 = [3, 105, 8];
let arr2 = [-8, 9, 85];
alert(Math.max(...arr1, ...arr2, 85));

let merged = [...arr1, ...arr2, 23, 34];
alert(merged);
 */

/* let str = "Counsel";
alert([...str]);
alert(Array.from(str)); */


let obj = { a: 1, b: 2, c: 3 };

let objCopy = {...obj }; // spread the object into a list of parameters then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}



/**
 * Rest parameters are used to create functions that accept any number of arguments.
 * The spread syntax is used to pass an array to functions that normally require a list of many arguments.
 */