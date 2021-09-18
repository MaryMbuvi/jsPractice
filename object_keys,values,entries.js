/**
 * An Object created by literal notation or new Object are know as plain object. example :
 *      let a = {aaa : 1}
 *      let b = new Object()
 * while Object created using function are not plain object
 *      let C = function(){}
 *      let d = new C()
 */

/**Methods available for plain objects:
 * Object.keys(obj) – returns an array of keys.
 * Object.values(obj) – returns an array of values.
 * Object.entries(obj) – returns an array of [key, value] pairs.
 */

/**So:
 * Map => map.keys()
 * Object => Object.keys(obj) //key difference between Map and Plain objects
 * Also, Object.* returns real array objects 
 */

let salaries = {
    "John": 500,
    "Kendy": 200,
    "Leon": 300,
};

/* function sumSalaries(salaries) {
    let sum = 0;;

    for (let values of Object.values(salaries)) {
        sum += values;
    }
    return sum;
}
alert(sumSalaries(salaries)); */