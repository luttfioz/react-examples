function variables() {
    console.log('variables')
};
export default variables;


function fun1() { console.log('function 1') }
function fun2() { console.log('function 2') }
var variable1 = 100
export {
    fun1,
    fun2,
    variable1,
    classes,
    templates,
    objectLiterals
}


class Person {
    constructor(fname, lname, age) {
        this._fname = fname;
        this._lname = lname;
        this._age = age;
    }
    get name() {
        return this._fname.toUpperCase();
    }
    set name(fname) {
        this._fname = fname;
    }
    get fullname() {
        return this._fname + ' ' + this._lname;
    }
    formatted() {
        return 'Name is: ' + this._fname;
    }
}

function classes() {   
    // Creating an instance
    const person = new Person('Faruk', 'Yazici', 28)
    console.log(person)
    // Accessing functions
    console.log(person.formatted())
    // Getter example
    console.log(person.name)
    console.log(person.fullname)
    // Setter example
    person.name = 'Murat'
    console.log(person.name)
}


function templates() {
    let people = [new Person('Murat', 'Karakas', 37), new Person('Faruk', 'Yazici', 28)];
    for (let person of people) {
        console.log(`Fullname: ${person.fullname}, Age: ${person._age}`);
    }
}


function objectLiterals() {
    let name = 'Defne'
    let age = 7

    let person = {
        name,
        age
    };
    
    
    console.log(person)
    
}
