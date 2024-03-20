# Javascript Functions
A javascript function is a block of code designed to perform a particular task.

A javascript function is executed when "Something" invokes it (calls it.)

Example
```js
//Function to compute the product of num and num1
function addition(num,num1){
    return num * num1;
}
```
## Javascript Function Syntax
A javascript id defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscore, and dollar signs (same rule as variables). The parentheses may include parameter names seperated by commas:

(parameter1, parameter2, parameter...)

The code to be exectuted, by the function, is placed insdie curly brackets. {}

```js
function name(parameter1, parameter2, parameter3) {
    //code to be executed 
}
```

## Function Invocation
The code inside the function will execute when "something"  invokes (calls) the function:

- when an event occurs (when a user clicks a button)
- When it is invoked (called) from javascript code
- Automatically (self invoked)

## Function Return
When javascript reached a return statement, the function will stop executing.

If the function was invoked from a statement, javascript will "return" to execute the code after the invoking statements. Function often compute a return value. te return value is returned back to the caller; 

```js
// Function is called, the return value will endup in x 
let x = multiply(4,3);

function multiply(a,b) {
    // Function returns the product of a and b
    return a * b;
}
```

## The () Operator
The () operator invokes (calls) the function 

Convert Fahrenheit to Celsius

```js
function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}
let value = toCelsius(77);
```
## Local Variables
Variables declared within a javascript function become LOCAL to the function.

Local variables can only be accessed from within the function.

Example
```js
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
```