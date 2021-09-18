//arr.splice --> Used to insert, remove and replace elements


/*let fruits = ["apple", "pears", "kiwi"];
let removed = fruits.splice(0, 2); //remove two elements from index 0
alert(fruits); //"kiwi"
alert(fruits.length); //1
alert(removed);

fruits.splice(1, 0, "grapes", "banana"); //set deleteCount to zero
alert(fruits);
alert(fruits.length); */


//arr.slice 
/* alert(fruits.slice(-2)); // "pears", "kiwi"
alert(fruits.slice(1, 2)); //pears

//arr.concat
alert(fruits.concat(["orange", "lemon"]));

//iterate: for each
fruits.forEach(alert);

//searching in array --> indexOf, lastIndexOf, includes

alert(fruits.indexOf("pears")); //1
alert(fruits.indexOf("berry")); //-1
alert(fruits.includes("kiwi")) //true


//arr.find && arr.filter && map
let users = [
    { name: "Jane", id: 01 },
    { name: "Mary", id: 02 },
    { name: "Kim", id: 03 },
];

let user = users.find(item => item.id == 2);
alert(user.name); //Mary

//sort && reverse
let arr = [1, 2, 15, -2, -15];

//arr.sort(function(a, b) { return a - b; });
arr.sort((a, b) => a - b);

alert(arr);

//localCompare for strings
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (wrong)

alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (correct!)

arr.reverse();
alert(arr);
 */

//split and join
/*let fruits = "Kiwi, Apple, Banana";
 let splitFruit = fruits.split(', ');
for (let fruit of splitFruit) {
    alert(`This is a ${fruit}.`);
} */

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//reduce/reduceRight
/* let arr = [4, 5, 2, 3, 2, ];

let result = arr.reduce((sum, current) => sum + current, 0);
alert(result);
alert(Array.isArray(arr)); //true
alert(Array.isArray(fruits)); //false

arr.forEach(alert); */



/* function camelize(str) {
    return str.split('-').map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}
alert(camelize("background-color"));
alert(camelize("list-style")); */