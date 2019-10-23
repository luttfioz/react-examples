function variables() {
    console.log('---variables---')
    const MAX_VALUE = 16;

    for (let number of [1, 2, 3, 4]) {
        console.log(number);
    }
    try {
        console.log(number);
    } catch (error) {
        console.error(error);
    }
    try {
        MAX_VALUE = 17;

    } catch (error) {
        console.error(error);
    }
}


function* generator(value) {
    let num = value;
    yield num;

    num = num * 2;
    yield num;

    num = num ** 2;
    yield num;

    yield num / 2;
}

function generatorConsume() {
    console.log('---generatorConsume---')
    // Create the generator object
    const generatorObject = generator(5);
    // Start end resume the executions
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
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
    console.log('---classes---')
    // Creating an instance
    var person = new Person('Faruk', 'Yazici', 28);
    console.log(person);
    // Accessing functions
    console.log(person.formatted());
    // Getter example
    console.log(person.name)
    console.log(person.fullname)
    // Setter example
    person._fname = 'Murat'
    console.log(person.name)
}

function templates() {
    let people = [new Person('Murat', 'Karakas', 37), new Person('Faruk', 'Yazici', 28)];
    for (let person of people) {
        console.log(`Fullname: ${person.fullname}, Age: ${person._age}`);
    }
}

function arrowFunctionExpression() {
    console.log('---arrowFunctionExpression---')

    const numbers = [8, 6, 9, 4, 1, 2, 3];
    let numbersSorted = numbers.sort((a, b) => a - b);
    console.log(numbersSorted);
}

function arrowFunctionMapFilter() {
    console.log('---arrowFunctionMapFilter---')

    let people = [new Person('Sedat', 'Öztürk', 24), new Person('Murat', 'Karakas', 37), new Person('Faruk', 'Yazici', 27)];
    var fullnames = people.filter(p => p._age >= 25).map(p => p.fullname);
    console.log(fullnames);
}

function objectLiterals() {
    console.log('---objectLiterals---')

    let name = 'Defne Ece',
        age = 7;
    let person = {
        name,
        age
    };

    console.log(person.name + ' => ' + person.age)

}

function destructuringAssignments() {
    console.log('---destructuringAssignments---')
    var [a, b] = [1, 2]
    console.log('normal order', a, b);

    [a, b] = [b, a]
    console.log('swap order', a, b);

    var person = {
        name: 'Murat',
        surname: 'Karakas'
    };

    var { name, surname } = person;
    console.log(name, surname);

}

function spreadOperator() {
    console.log('---spreadOperator---')

    let arr1 = ['a', 'b', 'c'];
    let arr2 = [...arr1, 'd', 'e'];
    console.log(arr2);

    let obj1 = { name: 'Faruk', age: 27 };
    let obj2 = { ...obj1, surname: 'Yazici' };
    console.log(obj2);
}

function setUsage() {
    console.log('---setUsage---')
    let names = new Set();
    names.add('Murat');
    names.add('Esma');
    names.add('Burak');
    names.add('Ela');
    names.add('Murat'); // Won't be added again
    console.log(names);

    console.log(names.has('Murat'))
    console.log(names.has('Faruk'))
}

export {
    variables,
    generatorConsume,
    classes,
    templates,
    arrowFunctionExpression,
    arrowFunctionMapFilter,
    objectLiterals,
    destructuringAssignments,
    spreadOperator,
    setUsage
}
