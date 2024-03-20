# Javascript Objects

### Real-Life Objects, Properties, and Methods

In Real life, a car is an Object. A car has properties like weight and color and methods like start and stop. 

## Javascript Objects 
We have already learned that JavaScript variables are containers for data values. This code assigns a simple value (fiat) to a variable named car:
```js
let car = "Fiat";
```
Objects are variables too. But objects can contain many values. 
```js
const car = {type: "Fiat", model: "500", color:"blue"};
```

## Object Definition
We define a javascript object with an object literal:
```js
const person = {
    firstname: "Diwakar",
    lastName: "Phuyal",
    age: 19,
    eyeColor: "Brown"
};
```
## Accessing Object properties 
we can access object properties in two ways 
```js
objectName.propertyName
```
```js
person.lastName
```
## Object Methods
Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.

Example
```js
const person = {
    firstName: "Diwakar",
    lastName: "phuyal",
    id: 9639,
    fullName: function()
    {
        return this.firstName + " " + this.lastName;
    }
};

```