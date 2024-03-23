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