---
sidebar_position: 1
---

# JavaScript

JavaScript is **the Programming Language for the Web**. JavaScript can update and change both HTML and CSS. It is a powerful programming language that adds interactivity and dynamic behaviour to web pages. JavaScript can calculate, manipulate and validate data. Many of the popular frameworks like React, Vue uses javascript which is great tool for building web applications.

## Basic JavaScript

### **Variables:**

Variables are used to store and manipulate data in JavaScript. Variables are declared using the `var`, `let`, or `const` keyword, followed by the variable name and an optional initial value.

```jsx
var a;  // -> by default value is undefined
var name = "John";
let age = 25;
const PI = 3.14159;    // -> Value cannot be changed throughout the program
											//-> const must be initializes
```

### **Data Types:**

JavaScript supports several data types, including primitive types like numbers, strings, booleans, null, and undefined, as well as complex types like objects and arrays.

```jsx
let number = 42;
let text = "Hello, world!";
let isTrue = true;
let person = { name: "John", age: 25 };
let fruits = ["apple", "banana", "orange"];
```

### **Operators:**

JavaScript includes a variety of operators for performing arithmetic, comparison, logical, and assignment operations.

```jsx
let a = 5;
let b = 3;
let sum = a + b;
let isGreater = a > b;
let logicalAnd = true && false;
let assignment = 10;
assignment += 5; // equivalent to assignment = assignment + 5;
```

### **Conditional Statements:**

Conditional statements allow you to perform different actions based on different conditions. The `if`, `else if`, and `else` statements are commonly used for branching logic.

```jsx
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}
```

### **Loops:**

Loops are used to execute a block of code repeatedly. JavaScript provides `for`, `while`, and `do...while` loops for different looping scenarios.

```jsx
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
```

### **Functions:**

Functions are reusable blocks of code that can be called and executed. They can take inputs (parameters) and return outputs (return values).

```jsx
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John");

function add(a, b) {
  return a + b;
}

let sum = add(3, 5);
console.log(sum);
```

### **Arrays:**

Arrays are used to store multiple values in a single variable. JavaScript arrays can contain elements of different data types.

```jsx
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Accessing elements
fruits.push("grape"); // Adding elements to last
fruits.pop(); // Removing the last elements
```

### **Objects:**

Objects allow you to store and organise related data and functions. They consist of key-value pairs, where keys are strings (properties) and values can be of any data type (values).

```jsx
let person = {
  name: "John",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York"
  }
};

console.log(person.name); // Accessing properties
person.job = "Developer"; // Adding properties
```

**Add function in object**

```jsx
let person = {
    name: "John",
    age: 25,
    address: {
      street: "123 Main St",
      city: "New York",
    },
   // add function in object
    greet: function() {
        console.log("Hello, my name is " + this.name + ".");
      }
  };
  
  console.log(person); // Accessing properties
  person.job = "Developer"; // Adding properties
  console.log(person);
  person.greet();
```

### **DOM Manipulation:**

The Document Object Model (DOM) represents the HTML structure of a web page. JavaScript can be used to manipulate the DOM, access and modify elements, and handle events.

```jsx
let element = document.getElementById("myElement"); //Accessing an element by ID
element.innerHTML = "New content"; // Modifying the content
element.addEventListener("click", function() {
  console.log("Element clicked!");
}); // Adding an event listener
```

## **Intermediate JavaScript**

### **ES6 Features**

Introduce some ES6 (ECMAScript 2015) features like let/const, arrow functions, template literals, etc.

- **Arrow Function**: An arrow function is a concise way of writing a function in JavaScript. It allows implicit return and automatically binds the **`this`** context to the surrounding scope.
- **Template Literal**: Template literals are a new way of creating strings in JavaScript. They allow embedded expressions using **`${}`** to insert variables or expressions into the string.

```jsx
// Arrow Function
const add = (a, b) => 
{
		a + b;
}

// Template Literal
const name = "Alice";
console.log(`Hello, ${name}!`);
// old -> console.log('Hello' + 'name!');
```

### **Callbacks and Promises [callback request hai (function, api) aur promise milta hai request execute hone ke baad]**

- **Callbacks**: Callbacks are functions passed as arguments to another function and are executed after the completion of that function. They are commonly used for handling asynchronous operations in JavaScript.
- **Promises**: Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner and more structured way of handling asynchronous code.

```jsx
// Callback Example
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched successfully!");
  }, 2000);
}

fetchData((data) => {
  console.log(data); // "Data fetched successfully!"
});

// Promise Example
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched with Promise!");
    }, 2000);
  });
}

fetchDataPromise().then((data) => {
  console.log(data); // "Data fetched with Promise!"
});
```

### **AJAX and Fetch: (Promise Method)**

- **AJAX**: Asynchronous JavaScript and XML, allows you to make asynchronous HTTP requests to the server without reloading the entire page. It's used to fetch or send data to the server.
- **Fetch API**: **(Mostly Used)** The Fetch API is a modern replacement for XMLHttpRequest. It provides a more straightforward and cleaner interface for making HTTP requests.

```jsx
fetch("<https://api.example.com/data>")   // callback
  .then(response => response.json())       //-> promise
  .then(data => console.log(data))
  .catch(error => console.error(error));    //-> catch error
```

### **Async/Await**

- **Async/Await**: Async/await is a syntactical improvement for handling asynchronous operations in JavaScript. It allows writing asynchronous code in a `more synchronous manner`, making it easier to read and understand.

```jsx
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John", age: 30 });
    }, 1500);
  });
}

// main
async function getUserData() {
  const user = await fetchUserData();
  // rukna h tab hi aage kare
  console.log(user); // { name: "John", age: 30 }
}

getUserData();
```

## **Advanced JavaScript**

### **Modules**

- **Modules**: Modules in JavaScript allow organising code into separate files, making it easier to manage and reuse code across different parts of an application. The **`import`** and **`export`** keywords are used to work with modules.

```jsx
// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(5, 10)); // 15
```

```jsx
//package.json
{
    "type": "module"
}
```

### **Error Handling**

- **Error Handling**: Error handling is crucial to handle unexpected issues that may occur during program execution. The **`try-catch`** block allows catching and handling errors gracefully.

```jsx
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // "Cannot divide by zero."
```

### **Regular Expressions**

- **Regular Expressions**: Regular expressions are `patterns` used to match and manipulate text. They provide powerful text search and manipulation capabilities and are commonly used for validation and parsing tasks.

```jsx
const pattern = /\d{2}-\d{2}-\d{4}/;
const text = "Date of Birth: 07-16-2023";
console.log(pattern.test(text)); // true
```

## JavaScript Functions (Optional Just for Reference)

### **Array Functions**

1. **`Array.isArray()`**: Checks if a given value is an array.
2. **`Array.prototype.map()`**: Creates a new array by applying a function to each element of an existing array.
3. **`Array.prototype.filter()`**: Creates a new array with elements that pass a specified condition.
4. **`Array.prototype.reduce()`**: Reduces an array to a single value by applying a function to each element.
5. **`Array.prototype.forEach()`**: Executes a provided function once for each array element.

### **String Functions**

1. **`String.prototype.length`**: Returns the length of a string.
2. **`String.prototype.charAt()`**: Returns the character at a specified index in a string.
3. **`String.prototype.indexOf()`**: Returns the index of the first occurrence of a specified value in a string.
4. **`String.prototype.split()`**: Splits a string into an array of substrings based on a specified separator.
5. **`String.prototype.slice()`**: Extracts a portion of a string and returns it as a new string.

### **Math Functions**

1. **`Math.random()`**: Returns a random number between 0 and 1.
2. **`Math.floor()`**: Rounds a number down to the nearest integer.
3. **`Math.ceil()`**: Rounds a number up to the nearest integer.
4. **`Math.max()`**: Returns the largest number from a list of arguments.
5. **`Math.min()`**: Returns the smallest number from a list of arguments.

### **Date Functions**

1. **`Date()`**: Creates a new Date object representing the current date and time.
2. **`Date.prototype.getFullYear()`**: Returns the year of a Date object.
3. **`Date.prototype.getMonth()`**: Returns the month (0-11) of a Date object.
4. **`Date.prototype.getDate()`**: Returns the day of the month (1-31) of a Date object.
5. **`Date.prototype.getDay()`**: Returns the day of the week (0-6) of a Date object.

### **JSON Functions**

1. **`JSON.stringify()`**: Converts a JavaScript object to a JSON string.
2. **`JSON.parse()`**: Parses a JSON string and returns a JavaScript object.

### **Miscellaneous Functions**

1. **`console.log()`**: Outputs a message to the console.
2. **`setTimeout()`**: Executes a function once after a specified delay.
3. **`setInterval()`**: Executes a function repeatedly with a fixed time delay between each call.
4. **`parseInt()`**: Parses a string and returns an integer.
5. **`parseFloat()`**: Parses a string and returns a floating-point number.

[JavaScript Cheat Sheet & Quick Reference](https://quickref.me/javascript)