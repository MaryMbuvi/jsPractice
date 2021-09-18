//Decorator is a wrapper around a function that alters its behavior. The main job is still carried out by the function.

//Transparent caching
/* function slow(x) {
    // there can be a heavy CPU-intensive job here
    alert(`Called with ${x}`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {    // if there's such key in cache
        return cache.get(x); // read the result from it
      }
  
      let result = func(x);  // otherwise call func
  
      cache.set(x, result);  // and cache (remember) the result
      return result;
    };
  }
  
  slow = cachingDecorator(slow);
  
  alert( slow(1) ); // slow(1) is cached and the result returned
  alert( "Again: " + slow(1) ); // slow(1) result returned from cache
  
  alert( slow(2) ); // slow(2) is cached and the result returned
  alert( "Again: " + slow(2) ); // slow(2) result returned from cache
 */


//func.call
"use Strict"

function say(phrase) {
    alert(`${this.name} + ${phrase}`);
}
let user = { name: John };
let admin = { name: Kim };

say.apply(admin, "Hello");

//func.call(context, ...args);
//func.apply(context, args);