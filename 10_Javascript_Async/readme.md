# Javascript Callbacks
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

## Function Sequence
Javascript Functions are executed in the sequence.

```js
function display(data)
{
    document.write(data);
}
function first()
{
    display("hello");
}
function second()
{
    display("Namaste");
}
first();
second();

```

## Sequence Control
Sometimes we would like to have better control over when to execute a function.

We could call a calculator 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>JAvascript Sequence </h2>
    <div id="res"></div>
    <script>
        function display(someData){
            document.getElementById("res").innerHTML = someData;
        }

        function Calculator(num, num1){
            let sum = num + num1;
            return sum;
        }
        let result = Calculator(6,3);
        display(result);
    </script>
</body>
</html>
```

# Asynchronous Javascript
Functions running in parallel with other functions are called asynchronous

## Waiting for a Timeout
When using the javascript function `setTimeout()`, you can specify a callback function to be executed on timeout:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Javascript setTimeout </h2>
    <div id="res"></div>

    <script>
        setTimeout(purpose, 2000);

        function purpose()
        {
            document.getElementById("res").innerHTML = "I Love You Unreal Engine ❤️❤️";
        }
    </script>
</body>
</html>
```

In the example above, `purpose` is used as a callback. `purpose` is passed to `setTimeout()` as an argument.
2000 is the number of milliseconds before time-out, so `purpose()` will be called after 2 seconds.

## Waiting for Intervals:
When using the Javascript function `setInterval()`, you can specify a callback function to be executed for each interval:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        #res{
            font-size: 20px;
            letter-spacing: .2em;
            font-weight: 900;
            color: rgb(2, 0, 66);
        }
    </style>
    <h3>using setInterval() to display the time every second </h3>
    <div id="res"></div>

    <script>
        setInterval(displayDate, 1000);

        function displayDate()
        {
            let d = new Date();
            document.getElementById("res").innerHTML =
            d.getHours() + ":" +
            d.getMinutes() + ":" +
            d.getSeconds();
        }
    </script>
</body>
</html>
```
