# es6-demos

ECMAScript 6 is also known as ES6 and ECMAScript 2015. ES6 is a major update to JavaScript that includes dozens of new features. This tutorial covers the new useful features that came along with ES6:


1. [Getting Started](#getting-started)
2. [ES6 Modules](#modules)
3. [ES6 Variables](#variables)
4. [ES6 Classes](#classes)
5. [ES6 Templated Strings](#templating)
6. [ES6 Arrow Functions](#arrow-functions)
7. [ES6 Object Literals](#object-literals)
8. [ES6 Destructing Assignments](#destructing-assignments)
9. [ES6 Spread Operator](#spread-operator)
10. [ES6 Generator Functions](#generators)
11. [ES6 Sets](#set-usage)
12. [Conclusion](#conclusion)

<a name="getting-started"/>

## Getting Started

Clone the repository: \
`git clone https://gitlab.eteration.com/academy/tutorials/react/es6-demos.git`

You'll be working in setup directory. From the terminal, navigate into the setup directory. \
Run `npm start` to launch the project. \
Implement the solutions following the steps below. Solution directory contains the completed solutions of the ES6 tutorial.


<a name="modules"/>

## ES6 Modules

ES6 supports modules. Modules are simply a way to write JavaScript in different files.

* Each file has its own scope (not the global)

* Each file decides what to export from its module

* The functions or variables in a module are not available for use, unless the module file exports them.

The **export** statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs with the import statement.

There are two different types of export, **named** and **default**. You can have multiple named exports per module but only one default export.

```
function variables() { 
    console.log('variables')
};
export default variables;
```
or exporting multiple features at once:
```
function fun1() { console.log('function 1') }
function fun2() { console.log('function 2') }
var variable1 = 100
export {
    fun1,
    fun2,
    variable1
}
```
Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object. They are imported with curly brackets.

But a default export can be imported with any name, without the brackets.

To use the module in another file:

```
// Named imports
import {
    fun1,
    fun2
    variable1
} from './operations'

// Default import
import variables from './operations'
```

#### Note
Since a module can have only one default export, it's name does not matter when importing. The following will import variables function as well.
```
// Default import
import f from './operations'
```

#### Note
It's possible to import a named export with a different name using **x as y**:

```
import { variable1 as v1 } from './operations'
```

<a name="variables"/>

## ES6 Variables

A variable must be declared before it is used. ES5 syntax used the **`var`** keyword to achieve the same. ES6 introduces new ways to declare variables.

### let 
* Creates a scope variable.
* Accessible only in its scope.

```
function variables() {
    for (let number of [1, 2, 3, 4]) {
        console.log(number);
    }
    try {
        console.log(number);
    } catch (error) {
        console.error(error);
    }
}
```

### const 
* Creates a constant variable.
* Its value is read-only and cannot be changed.

```
const MAX_VALUE = 16;
try {
    MAX_VALUE = 17;

} catch (error) {
    console.error(error);
}
```

<a name="classes"/>

## ES6 Classes

ES6 introduces classes and a way to create classical OOP.
The class keyword is followed by the class name.

A class definition can include the following:

* **Constructors** − Responsible for allocating memory for the objects of the class. Data variables of the class should be initialized here. 

* **Functions** − Functions represent actions an object can take. They are also at times referred to as methods.

* **Get & Set** - ES6 classes brings a new syntax for getters and setters on object properties. Get and set allows us to run code on the reading or writing of a property.

These components put together are termed as the data members of the class.

**Note** − A class body can only contain methods, but not data properties.

```
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
```

<a name="templating"/>

## ES6 Templated Strings

ES6 supports templated strings. Template literals provide an easy way to interpolate variables and expressions into strings.

You do so by using the `${...}` syntax.

```
function templates() {
    let people = [new Person('Murat', 'Karakas', 37), new Person('Faruk', 'Yazici', 28)];
    for (let person of people) {
        console.log(`Fullname: ${person.fullname}, Age: ${person._age}`);
    }
}
```

Inside the `${}` you can add anything, even expressions.

<a name="arrow-functions"/>

## ES6 Arrow Functions

Arrow functions simplify the creation of functions. There are 3 parts of an arrow function:
* **Parameters** − A function may optionally have parameters.

* **The arrow/lambda notation (=>):** It is also called as the goes to operator.

* **Statements** − Represents the function’s body.

The following function:
```
function(a, b){
    return a - b;
}
```
can be simplified with the following arrow function:
```
(a, b) => { return a - b }
```

If the body contains only a return statement, curly brackets and return keyword can be omitted:

```
(a, b) => a - b
```

If the function contains only one parameter, argument parantheses can be omitted:

```
a => a * 2

// equals to

function(a) {
    return a * 2;
}
```

One common use case for arrow functions is array manipulation and filtering. It’s common that you’ll need to map or reduce an array. Arrow functions are more concise and easier to read in these cases:

```
// Arrow function used inside an Array sort
function arrowFunctionExpression() {
    const numbers = [8, 6, 9, 4, 1, 2, 3];
    let numbersSorted = numbers.sort((a, b) => a - b);
    console.log(numbersSorted);
}
```

```
// Arrow functions used inside an Array filter and map
function arrowFunctionMapFilter() {
    let people = [new Person('Sedat', 'Öztürk', 24), new Person('Murat', 'Karakas', 37), new Person('Faruk', 'Yazici', 27)];
    var fullnames = people.filter(p => p._age >= 25).map(p => p.fullname);
    console.log(fullnames);
}
```

<a name="object-literals"/>

## ES6 Object Literals

ES6 adds a new feature (rule) to the way of defining properties. In ES6, assigning a property value that matches a property name, you can omit the property value.

Let's create an object from the following variables:
```
function objectLiterals() {
    let name = 'Defne'
    let age = 7
}
```

Instead of:

```
let person = {
    name: name,
    age: age
};
```
you can write:

```
let person = {
    name,
    age
};


console.log(person.name + ' => ' + person.age)
```

<a name="destructing-assignments"/>

## ES6 Destructing Assignments

Destructuring assignments allow to set values to objects in an easier way. It is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables.

* Destructing assignment with arrays:

```
function destructingAssignments() {
    var [a, b] = [1, 2];
    console.log(a, b);
}
```

* Swapping values:

```
[a, b] = [b, a];
console.log(a, b);
```

* Destructing assignment with objects:

```
var person = {
    name: 'Murat',
    surname: 'Karakas'
};

var { name, surname } = person;

console.log(name, surname);

```

<a name="spread-operator"/>

## ES6 Spread Operator

The operator’s shape is three consecutive dots and is written as: `...`
The spread operator allows us to expand elements. It collects a bunch of items and puts them into other arrays and objects.

* Usage with arrays:

```
function spreadOperator() {
    let arr1 = ['a', 'b', 'c'];
}
```

You can use the spread operator to collect all its elements into another array:
```
let arr2 = [ ...arr1, 'd', 'e'];
console.log(arr2);
```

* Usage with objects:
```
let obj1 = {name: 'Faruk', age: 27};
```

You can use the spread operator to collect its fields into another object:
```
let obj2 = { ...obj1, surname: 'Yazici' };
console.log(obj2);
```

<a name="generators"/>


## ES6 Generator Functions

Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

A generator function produces a sequence of values via `yield`, a data consumer consumes those values via the iterator method `next()`. Generators are denoted by suffixing the function keyword with an asterisk `(*)`; otherwise, their syntax is identical to regular functions. For example, the following generator function produces a number at each yield:

```
function* generator(value) {
    let num = value;
    yield num;
    
    num = num * 2;
    yield num;

    num = num ** 2;
    yield num;

    yield num/2;
}
```

#### Note
*ES2016 introduced a shorthand for exponential operations. Instead of `Math.pow(a, 2)` you can write `a ** 2`.*

This function shows how to retrieve the yielded values via the generator object. When called initially, generator functions do not execute any of their code, instead they return a type of iterator called a `Generator`. Using `next`, you can retrieve the next yielded value:

```
function generatorConsume() {
    // Create the generator object
    const generatorObject = generator(5);

    // Start end resume the executions
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
    console.log(generatorObject.next());
}
```

The result of next() is always an object:


**value -** the yielded value.\
**done -** false if the code is not finished yet, otherwise true.


<a name="set-usage"/>

## ES6 Sets

The Set object lets you store unique values of any type, whether primitive values or object references.

```
function setUsage() {
    let names = new Set();
    names.add('Murat');
    names.add('Esma');
    names.add('Burak');
    names.add('Ela');
    names.add('Murat'); // Won't be added again
    console.log(names);
}
```

It's possible to check if an element exist, with the **has** method:
```
console.log(names.has('Murat'))
console.log(names.has('Faruk'))
```


<a name="conclusion"/>

## Conclusion

You can export all of the functions above from `operations.js`:

```
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
```

You can import all the exported functions to `main.js`, and execute them:

```
import {
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
} from './operations'


variables();
generatorConsume();
classes();
templates(),
arrowFunctionExpression();
arrowFunctionMapFilter();
objectLiterals();
destructuringAssignments();
spreadOperator();
setUsage();
```


