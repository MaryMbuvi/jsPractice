//method --> a function that is a property of an object

/* let item = {
    label: "Cement",
    price: 600,
    quantity: "1 bag",
    type: "Simba",
}

item.isMarked = function() {
    alert("Marked already");
    alert("isMarked" in item);
}

item.isMarked();
 */


/* function isMarked() {
    alert("Marked already");
}
let item = {
        label: "Cement",
        price: 600,
        quantity: "1 bag",
        type: "Simba",
    }
    //add a method marked as a property of item
item.marked = isMarked();
alert("marked" in item);
for (let key in item) {
    alert(item[key]);
} */

/* admin = {
    addUser: function() {
        alert("Proceed to add user");
    },
}
admin.addUser(); */

//method shorthand 
/* admin = {
    addUser() {
        alert("Proceed to add user");
    }
}
admin.addUser(); */


//using this --> used to access properties within the object being referenced
/* let item = {
    name: "rice",
    price() {
        alert(this.name + " is 100 sh");
    }
}
item.price(); */

//this == undefined
"use strict"

/* function codeX() {
    alert(this);
}
codeX(); */

//When a function is declared, it may use this, but that this has no value until the function is called.


let calculator = {
    read() {
        this.a = +prompt("Enter firt value", 2);
        this.b = +prompt("Enter second value", 3);
    },
    sum() {
        return this.a + this.b;
    },
    product() {
        return this.a * this.b;
    },
};



calculator.read();
alert(calculator.sum());
alert(calculator.product());