# Javascript Objects

### Real-Life Objects, Properties, and Methods

In Real life, a car is an Object. A car has properties like weight and color and methods like start and stop. 

## Javascript Objects 
We have already learned that JavaScript variables are containers for data values. This code assigns a simple value (fiat) to a variable named car:
```js
let car = "Fiat";
```
Objects are variables too. but objects can contain many values. 
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
# javascript events

HTML events are things that happen to HTML elements. When javascript is used in HTML pages, javascript can react to these events 

## HTML Events
An HTML event can be something the browser does or something a user does. Here are some examples of HTML events:

- An HTML web page has finished loading
- An HTML input field was changed 
- An HTML button was clicked 

Javascript lets execute code when events are detected. HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

with single quotes
```js
<element event = 'some javascript'>
```
With double quotes:
```js
<element event = "some Javascript">
````
Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript events</title>
</head>
<body>
    <h1>Javascript HTML Events</h1>
    <h2>The onclick Attribute</h2>
    <button onclick="document.getElementById('date').innerHTML=Date()" >Click for date</button>
    <div id="date"></div>
</body>

</html>
```
