# Javascript String Methods

### Javascript String Length
The length property returns the length of a string:
```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```

### Extracting String Character
There are 4 methods for extracting string characters:
-  The `at(position)` Method
- The `charAt(position)` Method
- The `charCodeAt(position)` Method
- Using property access [] like in arrays

### Javascript String charAt()
The charAt() method returns the character at a specified index (position) in a string.

```js
let text = "Hello world";
let char = text.charAt(0);
```
### Javascript String charCodeAt()
The charCodeAt() method returns the code of the character at a specified index in a string. The Methods returns  a UTF-16 code( an integer between 0 and 65535)

```js
let text = "Hello World"
let char = text.charCodeAt(0);
```
### Javascript String at()

ES2022 introduced the string method at() :

```js
const name = "diwacreation3";
let letter = name.at(3);
```
### Javascript String toUpperCase()

```js
let text = "diwacreation3";
let result = text.toUpperCase();
```

### Javascript String toLowerCase()

```js
let text = "Diwacreation3"; //string
let res =text.toLowerCase();
```

### Javascript String repeat()
The `repeat()` method returns a string with a number of copies of a string. The `repeat()` method returns a new string.

```js
let text = "diwacreation3";
let result = text.repeat(3);
```

# Javascript Arrays
An array is a special variable, that can hold more than one value: Why Use Arrays?
If you have a list of items (a list of car names, for example). storing the snack in a single variable could look like this:
```js
let snack = "Momo";
let snack1 = "Chatpatey";
let snack2 = "Panipuri";
```
However, what if you want to loop through the snack and find a specific one? And what if you had not 3 snacks, but 300?

The solution is an array!

### Javascript Array length
The length property returns the length (size) of an array:

```js
const snack = ["fry momo", "steam momo", "panipuri", "Chatpatey"];
let size = snack.length;
```

# Javascript Date Objects 

Javascript Date Objects let us work with dates:

## Creating Date Objects 
Date Objects are created with the `new Date()` Constructor.  There are 9 ways to create a new date object:

```js
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)

```

# Javascript Math object
The Javascript Math object allows you to perform mathematical tasks on numbers.

Example
```js
Math.PI;
```
## The Math Object 
Unlike other objects, the math object has no Constructor. The math object is Static. All methods and properties can be used without creating a Math object first.

## Math Properties (Constants)

The Syntax for any Math property is : `math.property.`

Example

```js
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

```

# Javascript Random

## `Math.random()`
`Math.random()` returns a random number between 0 (inclusive), and 1 (exclusive)

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math.random()</h2>

<p>Math.random() returns a random number between 0 (included) and 1 (excluded):</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = Math.random();
</script>

</body>
</html>
```
# javascript if, else, and else if
Conditional statements are used to perform different actions based on different conditions.

### Conditional Statements 
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this. In JavaScript, we have the following conditional statements:

- use `if` to specify a block of a code to be executed, if the specified condition is true,

- Use else to specify a block of code to be executed, if the same condition is false

- Use else if to specify a new condition to test, if the first condition is false
Use the switch to specify many alternative blocks of code to be executed

## The if Statement
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax 
```js
if(condition)
{
    // block of code to be executedif the condition is true
}
```

Example
```js
if(hour < 18)
{
    greeting = "Good day";
}
```
## The else Statement
Use the else statement to specify a block of code to be executed if the condition is false.
``` js
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

```js
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## The else if Statement
Use the else if statement to specify a new condition if the first condition is false.

```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

```js
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```
