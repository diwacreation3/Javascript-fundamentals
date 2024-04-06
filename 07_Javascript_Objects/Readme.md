# Javascript Objects 

In JavaScript, objects are king. If you understand objects, you understand JavaScript.

JavaScript defines 7 types of primitive data types:

- string
- number 
- boolean
- null
- undefined
- symbol
- bigint

## Objects are variaable 
Javascript variables can contain single values:
```js
let person = "Diwakar Phuyal";
```
Javascript variables can also contain many values. Objects are variable too. But objects can contain many values.

```js
let person = {firstName: "Diwakar", lastName:"Phuyal", age: 19, eyeColor:"grey"};
```

## object for..in Loop
The javascript statements loops through the properties of an object.

Syntax
```js
for(let variable in object)
{
    // Code to be executed 
}
```
The block of code inside of the for...in loop will be executed once for each property.

Example 
```js
let txt;
const person = {
    fname: "Diwakar",
    lname: "phuyal",
    age: 19
};

for(let x in person){
    txt += person[x]
}
console.log(txt);
```

## Adding New properties 
You can add new properties to an existing object by simply giving it a value.
```js
person.nationality = "Nepali";
```
## Deleting properties 
The `delete` keyword deleted a property from an object:
```js
const person = {
    fname: "Diwakar",
    lname: "phuyal",
    age: 19,
    eyeColor: "blue"
};

delete person.eyeColor;
```
## Nested objects 
Values in an object can be another object:

```js
const snack = {
    snackName: "MOMO",
    type: "Chicken",
    price: 120,
    souce: {
        light: "Tomato",
        medium: "green chilli",
        strong: "Red chilli"
    }
}
```

## Nested Arrays and Objects 
values in objects can be arrays, and values in array can be objects:

```js
const hotel = {
    name: "Mr. MOMO",
    location: "nagarpalika road",
    menu : [
        {name: "Momo", flavor:["Chicken", "Veg", "Buff"]},
        {name: "Chowmin", flavor:["veg", "chicken", "Buff"]},
        {name: "chatpatey", flavour:["Normal", "Spicy", "soucy"]}
    ]
}
```