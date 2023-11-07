---
sidebar_position: 1
---
# Introduction to Python

### What is Python?

Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and was first released in 1991. Python emphasises code clarity, making it easier to write, read, and maintain programs.

### Python Features:

1. **Readability:** Python code is easy to read due to its clean and consistent syntax. Indentation is used to define code blocks, reducing the need for curly braces or explicit keywords.
2. **Dynamically Typed:** Python is dynamically typed, meaning you don't need to declare the data type of a variable explicitly. The interpreter determines the type during runtime.
3. **Whitespace Indentation:** Python enforces indentation rules to define code structure. This promotes clean and organised code, but incorrect indentation can lead to errors.
4. **Rich Standard Library:** Python comes with an extensive standard library that provides modules and packages for various tasks, from file handling to web development.

### Installing Python:

Before you start coding in Python, you need to install it on your system. You can download the latest version from the official Python website: https://www.python.org/downloads/

### Variables and Data Types:

Python supports various data types to represent different kinds of values:

- **Numbers:** Integers (`int`) and floating-point numbers (`float`).
- **Strings:** Textual data enclosed in single (`'`) or double (`"`) quotes.
- **Lists:** Ordered collections of items, mutable and represented by square brackets (`[]`).
- **Tuples:** Ordered collections of items, immutable and represented by parentheses (`()`).
- **Dictionaries:** Key-value pairs, represented by curly braces (`{}`).
- **Sets:** Unordered collections of unique elements, represented by curly braces (`{}`).

```python
num_int = 10
num_float = 3.14
name = "John Doe"
fruits = ['apple', 'banana', 'cherry']
person = {'name': 'Alice', 'age': 30}

```

### Control Flow:

Python provides control structures to manage the flow of your program:

- **Conditional Statements (`if`, `elif`, `else`):** Used to execute different blocks of code based on conditions.
- **Loops (`for`, `while`):** Used for repetitive tasks. `for` loops iterate over sequences, and `while` loops repeat while a condition is true.

```python
if x > 0:
    print("Positive")
elif x < 0:
    print("Negative")
else:
    print("Zero")

for fruit in fruits:
    print(fruit)

i = 0
while i < 10:
    print(i)
    i += 1

```

### Functions:

Functions are reusable blocks of code that perform specific tasks. They help organize code and make it more modular.

```python
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)

```

### Object-Oriented Programming (OOP):

Python supports object-oriented programming, which helps you model real-world entities in code. Classes define the structure and behavior of objects.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name}."

person = Person("Bob", 25)
print(person.greet())

```

### Libraries and Packages:

Python's rich ecosystem of libraries and packages extends its functionality:

- **NumPy:** Numeric computations and array operations.
- **Pandas:** Data manipulation and analysis.
- **Matplotlib:** Data visualisation.
- **Requests:** HTTP requests.
- **Django:** Web development.

### Getting Help:

- Python's built-in `help()` function provides information about objects and their methods.
- Python's official documentation ([https://docs.python.org](https://docs.python.org/)) is an invaluable resource.