function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}
alert(pow(2, 3));


//linked list
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            }
        }
    }
}


/* let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

//preapend a new value
list = { value: "newVal", next: list };

//remove a value from the middle
list.next = list.next.next;*/