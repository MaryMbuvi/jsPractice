/* function find_total(my_numbers) {
    //Insert your code here 
    my_numbers = [7, 1, 3, 2];
    let sum = 0;

    for (let key in my_numbers) {
        if (key % 2 == 0) {
            sum += 1;
        } else if (key % 2 != 0 && key != 5) {
            sum += 3;
        } else if (key == 5) {
            sum += 5;
        }
    }
    return sum;
}
alert(find_total()); */

/*function average(a, b) {
 
    return a + b / 2;
}

alert(average(2, 1)); */
/* let myInt = "Hey you";
alert(myInt.split(''));

import 'bootstrap@4.6.0'
import $ from 'jquery' */

// Declare a variable and store an
// integer value
// var num = 235345

// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers

/* var myArr = String(num).split("").map((num) => {
    return Number(num)
})

console.log(myArr)
 */

let x = prompt(`Enter a number here`, 0);
var myArr = String(x).split("").map((x) => {
    return Number(x);
})
let sum = myArr.reduce((previousVal, currentVal) => previousVal + currentVal);
let arr = String(sum).split("").map((sum) => {
    return Number(sum);
})
if (arr.length > 1) {
    let arrSum = arr.reduce((previousVal, currentVal) => previousVal + currentVal);
    console.log(arrSum);
} else console.log(arr);