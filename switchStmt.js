let bal = prompt('Enter your balance here:', 145);

switch (bal) {
    case 1:
        bal < 500;
        alert("Balance is too low. Please add float");
        break;
    case 2:
        bal > 500 && bal <= 1000;
        alert("Your balance is exactly 500");
        break;
    case 3:
        bal > 1000;
        alert("Your balance is running low");
        break;
    default:
        alert("Enough balance!!");
}

/* let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert("I don't know such values");
} */