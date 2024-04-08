# Javascript Classes 

Use the keyword `class` to create a class.
Always add a method named `constructor()`:

Syntax
```js
class className{
    constructor() {
        // some function 
    }
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
    <h2>Javascript Classes </h2>
    <div id="res"></div>

    <script>
        class Snack{
            constructor(name, price)
            {
                this.name = name;
                this.price = price;
            }
        }

        const snack0 = new Snack("MOMO", 120);
        const snack1 = new Snack("Chatpatey", 50);

        document.getElementById("res").innerHTML = "Snacks are: " + snack0.name + " "+  snack1.name; 
    </script>
</body>
</html>
```

## The Constructor Method

The Constructor method is a special method:

- it has to have the exact name "constructor"
- It is executed automatically when a new object is created
- It is used to initialize object properties 

## Class Methods 
Class methods are created with the same syntax as object methods. use the keyword `class` to create a class. 
Always add a `constructor()` method.

# Javascript Class Inheritance

To class a class inheritance, use the `extends` keyword. A class created with a class inheritance inherits all the methods from another class:

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
        class Car {
            constructor(brand)
            {
                this.carname = brand;
            }
            present()
            {
                return 'I have a ' + this.carname;
            }
        }

        class Model extends Car{
            constructor(brand, mod)
            {
                super(brand);
                this.model = mod;
            }
            show()
            {
                return this.present() + ' , It is a ' + this.model;
            }
        }

        const myCar = new Model ("Ford", "Mustang");
        document.getElementById("res").innerHTML = myCar.show();
    </script>
</body>
</html>
```

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods