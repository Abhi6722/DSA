---
sidebar_position: 1
---

# JavaScript

JavaScript is **the Programming Language for the Web**. JavaScript can update and change both HTML and CSS. It is a powerful programming language that adds interactivity and dynamic behaviour to web pages. JavaScript can calculate, manipulate and validate data. Many of the popular frameworks like React, Vue uses javascript which is great tool for building web applications.

## Concepts

### **Variables:**

Variables are used to store and manipulate data in JavaScript. Variables are declared using the `var`, `let`, or `const` keyword, followed by the variable name and an optional initial value.

```jsx
var name = "John";
let age = 25;
const PI = 3.14159;
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
fruits.push("grape"); // Adding elements
fruits.pop(); // Removing elements
```

### **Objects:**

Objects allow you to store and organize related data and functions. They consist of key-value pairs, where keys are strings (properties) and values can be of any data type (values).

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

### **DOM Manipulation:**

The Document Object Model (DOM) represents the HTML structure of a web page. JavaScript can be used to manipulate the DOM, access and modify elements, and handle events.

```jsx
let element = document.getElementById("myElement"); //Accessing an element by ID
element.innerHTML = "New content"; // Modifying the content
element.addEventListener("click", function() {
  console.log("Element clicked!");
}); // Adding an event listener
```

### **AJAX and Fetch:**

AJAX (Asynchronous JavaScript and XML) and the Fetch API allow you to make HTTP requests from JavaScript to retrieve and send data to a server without reloading the entire page.

```jsx
fetch("<https://api.example.com/data>")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```