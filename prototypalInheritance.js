let user = {
    name: "Mary",
    age: 25,
};

let user_new = {
    team: "Accounts",
};

user_new.__proto__ = user;
alert(user_new.name);