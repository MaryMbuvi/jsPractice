//Two methods available: 
/**
 * setTimeout - allows us to run a function once after the interval of time
 * setInterval - allows us to run a function repeatedly, starting after the interval of time, 
 * then repeating continuously at that interval.
 */

//setTimeout

/* function sayHi(phrase, name) {
    alert(`${phrase} ${name}`);
}
setTimeout(sayHi, 1000, "Hello", "John"); // run "Hello John" after 1 sec

//arrow function
setTimeout(() => alert("Hello"), 1000); */

//setTimeout returns a timer identifier 
//clearTimeout -- for clearing setTimeout

//setInterval

/* let timerId = setInterval(() => {
    alert('tick')
}, 2000);

setTimeout(() => {
    clearInterval(timerId);
    alert('stop');
}, 5000);
 */


//pseudocode for nested setTimeout
/* let delay = 5000;
let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  
  timerId = setTimeout(request, delay);

}, delay); */