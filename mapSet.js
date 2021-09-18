//Map is a collection of keyed data items == object
//Unlike objects, keys in map are not converted to strings
//Map can use objects as keys
//MAp uses the algorithm ""SameValueZero"" to compare keys


/* new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count. */

let user = { name: "Mary" };

let loginCountMap = new Map();
loginCountMap.set(user, 12);
alert(loginCountMap.get(user));


//iteration over map
/**Uses 3 methods:
 * map.keys() – returns an iterable for keys,
 * map.values() – returns an iterable for values,
 * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 */


/* let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
}
 */
//Object.entries: Map from Object

/* let obj = {
    name: "user1",
    id: 025,
}

let objMap = new Map(Object.entries(obj));
alert(objMap.get('name')); */

//Object.fromEntries : Object from Map

/* let map = new Map();
map.set('name', 'Mary');
map.set('id', 540);

let mapObj = Object.fromEntries(map.entries()); // make a plain object(*)
alert(mapObj.name);
alert(mapObj.id); */


//set => "set of values" (without keys)
/**new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * set.add(value) – adds a value, returns the set itself.
 * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * set.has(value) – returns true if the value exists in the set, otherwise false.
 * set.clear() – removes everything from the set.
 * set.size – is the elements count. */

//Repeated calls of set.add(value) with the same value don't do anything

/* let set = new Set();

let john = { name: "John" };
let kim = { name: "Kim" };
let leon = { name: "Leon" };

set.add(john);
set.add(kim);
set.add(john);
set.add(kim);
set.add(leon);

alert(set.size);

for (let val of set) {
    alert(val.name);
} */


//iteration over Set
let set = new Set(['Oranges', 'Mangoes', 'Grapes', 'Pears']);
for (let val of set) {
    alert(val);
}