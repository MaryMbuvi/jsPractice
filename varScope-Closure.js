//code blocks
{
    // Only visible inside this block
    let message = "Hello";
    alert(message);
}


//Nested functions => created inside another function

function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    }
}

let counter = makeCounter();
alert(counter());
alert(counter());

//Lexical environment
// A closure is a function that remembers its outer variables and can access them.