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

# Javascript Promise 
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and Consuming code

## Javascript promise Object
A Promise contains both the producing code and calls to the consuming code:

Promise Syntax

```js
let myPromise = new promise(function(resolve, reject){
    // producing code (may take some time)
    resolve(); //when sucessful
    reject(); // when error
});

// Consuming code (must wait for a fulfilled promise )
myPromise.then(
    function(value) {
        /// code if sucessful
    },
    function(error) {
        // code if some error
    }
);
```
When the producing code obtains the result, it should call one of the two callbacks:

| When | Call|
|------|------|
|Sucess | resolve(result value) |
| Error | reject(error object) |

## promise Object properties 
A javascript Promise object can be:
- Pending
- Fulfilled
- rejected 

The Promise object supports two properties: `state` and `result`.

| myPromise.state | myPromise.result |
| ----------------|------------------|
| "pending"   | undefined |
| "fulfilled" | a result value |
| "rejected" | an error object |

## Promise How to 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="res"></div>

    <script>
        function display(info){
            document.getElementById("res").innerHTML = info;
        }
        let myPromise = new Promise(function(resolve, reject){
            let value = 0;

            if(value == 0){
                resolve("Sucess");
            } else {
                reject("Error");
            }
        });

        myPromise.then(
            function(value) {display(value);},
            function(error) {display(error);}
        );
    </script>
</body>
</html>
```
## Javascript Promise Example
- Waiting for a file 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="res"></div>

    <script>
        function display(Somedata){
            document.getElementById("res").innerHTML = Somedata;
        }
        function getFile(callBack){
            let req = new XMLHttpRequest();
            req.onload = function(){
                if(req.status == 200){
                    callBack(this.responseText);
                } else {
                    callBack("Error: " + req.status);
                }
            }
            req.open('GET', "interval.html");
            req.send();
        }
        getFile(display);
    </script>
</body>
</html>
```
# Javascript Async
"async and await make promises easier to write"
async makes a function return a Promise
await makes a function wait for a Promise

## Async Syntax
The keyword `async` before a function makes the function return a promise:

```js
async function display(){
    return "Hello";
}
```

Example

```html
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript async / await</h1>
<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

async function myFunction() {return "Hello";}

myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);</script>

</body>
</html>
```

## Await Syntax

The `await` keyword can only be used inside an `async` function.

The `await` keyword makes the function pause the execution and wait for a resolved promise before it continues

```js
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```