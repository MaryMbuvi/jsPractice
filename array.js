// arrays store ordered collections

//empty array
/* let arr = new Array();
let arr = []; //mostly used */


/* Queues support two main operations:
 *push
 *Shift
 * -->Use FIFO
 */

/**Stacks support two operations:
 * Push
 * Pop
 * -->Use LIFO
 */
//Arrays in js can work both as queues and stacks 

//push and pop work with the end of the array
//shift and unshift work with the beginning of the array
//Methods push/pop run fast, while shift/unshift are slow.

"Use Strict"
/* let names = ["Mary", "Alice", "Dan", "Kinuthia"];
alert(names.shift());
alert(names.pop());
alert(names);
names.push("John");
names.unshift("Kim");
alert(names);
alert(names[3]);


//Loops
for (let name of names) {
    alert(name);
} 

//length
names.length = 2;
alert(names);
names.length = 5;
alert(names); */


/* let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  alert( matrix[1][1] ); // 5, the central element */


/* let styles = ["Jazz", "Blues"];
alert(styles);
styles.push("Rock-n-Roll");
alert(styles);
styles[1] = "Classics";
alert(styles);
styles.pop[2];
alert(styles);
styles.unshift("Rap", "Reggae");
alert(styles); */


function sumInput() {
    let arr = [];

    while (true) {
        let value = prompt("Enter some value:", 0);

        if (value === '' || !isFinite.value || value === null) {
            break;
        }
        arr.push(+value);
    }

    let sum = 0;
    for (let key in arr) {
        sum += arr;
    }
    return sum;
}
alert(sumInput());