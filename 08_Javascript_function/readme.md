# Javascript Function
Javascript functions are defined with the function keyword. We can use a function declaration or function expression.

## Function Declarations
```js
function add(a, b)
{
    return a + b;
}
```

## The Function() Constructor
Functions can also be defined with a built-in javascript function constructor called `Function()`.

```js
const add = function(a,b) {return a + b};

let num = add(3,6);
```
## function Hoisting

Hoisting is Javascript default behavior of moving declarations to the top of the current scope. Hoisting applies to variable declarations and to function declarations 

```js
multiply(3);

function multiply(num){
    return num * num;
}
```

## Arrow Function
Arrow function allows a short syntax for writing function expressions. We don't need the `function` keyword, the `return` keyword, and the curly brackets. 

Arrow functions do not have their own `this`. They are not well suited for defining object methods.

Using `const` is safer than `var` because a function expression is always a constant value.

```js
const add = (a,b) => {return a + b};
let add(3,6);
```
## Function call()
With the `call()` method, we can write a method that can be used on different objects.

```js
const snack = {
    name: "momo",
    type: "Chicken",
    order: function(){
        return this.type + " " + this.name;
    }
}

console.log(snack.order());

```
Call Example
```js
const snack = {
    snackName: function()
    {
        return this.type + " " + this.name;
    }
}

const snack0 ={
    type: "Chicken",
    name: "MOMO"
}

const snack1 = {
    type: "Buff",
    name: "MOMO"
}

snack.snackName.call(snack0);
```