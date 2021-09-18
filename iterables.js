//Iterables are objects that implement the Symbol.iterator method.
//Array-likes are objects that have indexes and length, so they look like arrays.
/* for (let letter of "This") {
    alert(letter);
}
 */
//Array.from takes an iterable or array-like value and makes a real Array from it.


//iterables syntax : obj[Symbol.iterator]()
//iterator must have the method next() tht returns {done: Boolean, value: any}



let arraylike = {
    0: "My name",
    1: "is Mary",
    length: 2,
}

let arr = Array.from(arraylike);
alert(arr[0]);
alert(arr.pop());