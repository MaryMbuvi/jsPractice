//arrow funcs have no this
//if this is accessed, it's taken from the outside
//arrow functs cannot be used as constructors 
//arrows do not have arguments 

let group = {
    phrase: "My name is",
    names: ["Kim", "Nancy", "Hellen"],

    showlist() {
        this.names.forEach(
            names => alert(this.phrase + ' ' + names + ".")
        );
    }
};

group.showlist();