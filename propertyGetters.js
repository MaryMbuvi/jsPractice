/**data properties (have a value)
 * accessor properties => they execute on getting and setting a value
 * For accessor properties, there is no value or writable, but instead there are get and set functi
 * 
 */

let admin = {
    name: "Jim",
    surname: "Nadia",

    get fullname() {
        return (`${this.name} ${this.surname}`);
    }
};

alert(admin.fullname);