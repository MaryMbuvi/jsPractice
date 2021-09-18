let user = {
    age: 25
};

function func(phrase1, phrase2) {
    alert(phrase1 + " " + this.age + " " + phrase2);
}

let newFunc = func.bind(user);
newFunc("Hello, you're", "years old.");


//partial functions

function add(a, b) {
    return a + b;
}

let addNew = add.bind(null, 4); //this isn't used here but bing requires it, so we must put in something like null

alert(addNew(4));
alert(addNew(6));
alert(addNew(10));

//going partial without context => fixing arguments instead of the context