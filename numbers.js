//Regular numbers are stored in 64-bit format IEEE-754

/* let num = 5.25565;
alert(num.toFixed(3)); */

/* function Obj(name) {
    this.name = name;
    this.balance = 500;
    this.welcome = function() {
        alert("Welcome " + this.name + ", your balance is " + `${this.balance+100}` + " ksh.");
    };
}

let user = new Obj("Alice");
user.welcome(); */


//Numbers
/* 1e3 = 1 * 1000;  */ //e3 means *1000
/* let ms = 1.23e-6; //six zeros to the left from 1
alert(ms);

alert(0 * ff); //Hex form of 255 
let a = 0b11111111; //binary form of 255 
let b = 0o377; //octal form of 255

let num = 255;
alert(num.toString(16)) //ff */

//base= 16 hex colors 0..9 or A..F
//base= 2 bitwise operations o or 1
//base= 36 the max. 0..9 or A..Z

alert(123456..toString(36)); //two dots are for calling a method

//math.floor rounds down
//math.ceil rounds up
//math.round rounds to the nearest int
//math.trunc removes everything after the decimal point without rounding off

/* let num = 12.3422;
alert(num.toFixed(6)); //"12.342200"
alert(+num.toFixed(6)); //12.3422

let sum = 0.1 + 0.2
alert(+sum.toFixed(2) == 0.3);

alert(isNaN(NaN)); //true
alert(NaN === NaN); //false

let number = +prompt("Enter a number:", '');

//true unless you enter Infinity
alert(isFinite(number));

alert(parseInt(`100pt`)); //100
alert(parseFloat(`10.25px`)); //10.25
alert(parseInt(`a234`)); //NaN
alert(parseInt('0xff', 16)); // 255 --> parseInt(str, radix)

alert(Math.random()); //returns any random number from 0 to 1 (not including 1)
alert(Math.max(2, 22, 8, 85, 12));
alert(Math.pow(2, 0)); */


/* let calculator = {
    read() {
        this.a = +prompt("Enter first number", 1);
        this.b = +prompt("Enter second number", 1);
    },
    sum() {
        return this.a + this.b;
    },
}
calculator.read();
alert(calculator.sum());
 */

/* alert(1.35.toFixed(20));
alert(6.35.toFixed(20));
alert(Math.round(6.35*10)/10); */


/* function readNumber(num) {
    +prompt("Please enter any number:", '');
    if (!isFinite) {
        continue;
    } else if (isFinite) {
        alert(num);
    }
}
readNumber(); */



/* function readNumber() {
    let num;
    do {
        num = prompt("Please enter any number", '')
    } while (!isFinite(num));

    if (num == null || num == '') return null;

    return +num;
}
alert(`Read: ${readNumber()}`); */