# Javascript for loop
Loops are handy if you want to run the same code over and over again, each time with a different value 

## Different Kinds of Loops
Javascript supports different kinds of loops:
- `for` - loops through a block of code a number of times.
- `for/in` - loops through the properties of an object.

- `for/of`- loops through the values of an iterable object
- `while` - loops through a block of code while a specified condition is true
- `do/while` - also loops through a block of code while a specified condition is true

## The For loop
```html
 <p id ="texts"> </p>
<script>
    let text = "";
for(let i= 0; i<5; i++)
{
    text += "The number is " + i + "<br>";
}
document.getElementById("texts").innerHTML = text;
</script>
```

## The For in Loop
the javascript `for in ` statement loops through the properties of an object:

Syntax:

```js
for(key in object)
{
    //Code Block to be executed 
}
```
Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>javascript For in Loop</h1>
    <div id="result"></div>

    <script>
        const person = {fname: "Diwakar", lname:"Phuyal", age: 19};

        let txt = "";
        for(let x in person){
            txt += person[x] + " ";
        }

        document.getElementById("result").innerHTML = txt;
    </script>
</body>
</html>
```

## The While Loop
The `while` loop loops through a block of code as long as a specified condition is true.

Syntax
```js
while(condition){
    // code block to be executed
}
```
Example 
```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript While Loop</h2>

<p id="demo"></p>

<script>
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```


