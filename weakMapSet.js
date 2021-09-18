//WeakMap doesn't prevent garbage -collection of key objects
//The keys for WeakMap must be objects, not primitive values

let weakMap = new WeakMap();

let obj = {};
weakMap.set(obj, 8); //(object, key)

//if 
john = null; //john is removed from memory

//weakMap doesn't support iteration methods
/**WeakMap methods:
 * weakMap.get(key)
 * weakMap.set(key, value)
 * weakMap.delete(key)
 * weakMap.has(key)
 */

/**Additional data storage for objects which are stored/managed at another place 
 * Caching
 */

//WeakSet stores only objects
//Like Set, it supports add, has and delete, but not size, keys() and no iterations.