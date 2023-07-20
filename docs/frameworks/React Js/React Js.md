---
sidebar_position: 1
---

# React Js

React js ek frontend , open source javascript ki library h . jo ki useful h develop krne ke liye user interfaces specifically for applications with a single page. 

The important feature of react are:

1. it supports server side rendering
2. it will make use of virtual DOM instead of real dom 
3. it follow unidirection data flow

## Advantages-

1. use of virtual DOM to improve efficiency - each time the data changes in a react app , a new virtual DOM is created . It is faster than rendering UI inside the browser .
2. Reusable Components- the reuse of components increase the pace of development.
3. It provide to chose the tools , libraries for application based on your requirement .

## UseState() - state change krna h website mein

It is a built in React Hook that allows you for having state variables in functional components . It should be used when the DOM has something that is dynamically controlling . 

1. import first 

`import { useState } from "react";`

`useState` accepts an initial state and returns two values:

- The current state.
- A function that updates the state.

```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState ("red");
return <h1>My favorite color is {color}!</h1>
}
```

The first value, `color`, is our current state.

The second value, `setColor`, is the function that is used to update our state.

### Update State

```jsx
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState ("red");
return (
<h1>My favorite color is {color}!</h1>
<button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}
```

# Keys  -particular id har ek element ka

key ek special type ka string attribute h jisko include kia jata h jb list of element use hote h  eg- map 

```jsx
const ids = [1,2,3,4,5];
const listElements = ids.map((id)=>{
return(
<li key={id.toString()}>
  {id}
</li>
)
})
```

**Importance of keys -**

- Keys help react identify which elements were added, changed or removed.
- Keys should be given to array elements for providing a unique identity for each element.
- Without keys, React does not understand the order or uniqueness of each element.
- With keys, React has an idea of which particular element was deleted, edited, and added.
- Keys are generally used for displaying a list of data coming from an API.

# JSX - js ke andr html

JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).

```jsx
const container = (
<div>
  <p>This is a text</p>
</div>
);
ReactDOM.render(container,rootElement);
```

# Functional and class component

Functional components are nothing but JavaScript functions and therefore can be declared using an arrow function or the function keyword:

Class components, on the other hand, are declared using the ES6 class:

functional and class components handle props:

Any prop provided as an argument to a functional component can be directly used inside HTML elements: **this** keyword is used in the case of class components.

# Virtual Dom and its working

For every DOM object, there is a corresponding virtual DOM object(copy), which has the same properties. The main difference between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly.

One of them is used to store the current state of the objects and the other to store the previous state of the objects. Whenever the virtual DOM gets updated, react compares the two virtual DOMs and gets to know about which virtual DOM objects were updated. After knowing which objects were updated, react renders only those objects inside the real DOM instead of rendering the complete real DOM.

Let's take an example — though a very naive one: If you have something messed up in a room in your home and you need to clean it, what will be your first step? Will you be cleaning your room which is messed up or the whole house? The answer is definitely that you will be cleaning only the room which requires the cleaning. That's what the virtual DOM does.

Ordinary JS traverses or renders the whole DOM instead of rendering only the part which requires changes.

So whenever you have any changes, as in you want to add another `<div>` to your DOM then the virtual DOM will be created which actually does not do any changes in the actual DOM. Now with this virtual DOM, you will be checking the difference between this and your current DOM. And only the part which is different (in this case the new `<div>`) will be added instead of re-rendering the whole DOM.

# Props

props are the data passed from a parent component into a child component.

Every React component accepts a single object argument called props (which stands for “properties”).  These props can be passed to a component using HTML attributes and the component accepts these props as an argument.

Using props, we can pass data from one component to another.

*Passing props to a component:*

**Note- State object is not available in functional components but, we can use React Hooks to add state to a functional component.**

- **React State** Every component in react has a built-in state object, which contains all the property values that belong to that component. In other words, the state object controls the behaviour of a component. Any change in the property values of the state object leads to the re-rendering of the component.

### **What are the differences between controlled and uncontrolled components?**

Controlled and uncontrolled components are just different approaches to handling input from elements in react.

• **Uncontrolled component:** In an uncontrolled component, the value of the input element is handled by the DOM itself. Input elements inside uncontrolled components work just like normal HTML input form elements.

• **Controlled component:** In a controlled component, the value of the input element is controlled by React. We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well.

### **What are the different phases of the component lifecycle?**

There are four different phases in the lifecycle of React component. They are:

- **Initialization:** During this phase, React component will prepare by setting up the default props and initial state for the upcoming tough journey.
- **Mounting:** Mounting refers to putting the elements into the browser DOM. Since React uses VirtualDOM, the entire browser DOM which has been currently rendered would not be refreshed. This phase includes the lifecycle methods `componentWillMount` and `componentDidMount`.
- **Updating:** In this phase, a component will be updated when there is a change in the state or props of a component. This phase will have lifecycle methods like `componentWillUpdate`, `shouldComponentUpdate`, `render`, and `componentDidUpdate`.
- **Unmounting:** In this last phase of the component lifecycle, the component will be removed from the DOM or will be unmounted from the browser DOM. This phase will have the lifecycle method named `componentWillUnmount`.

**Custom Hooks:** A custom Hook is basically a function of JavaScript. The Custom Hook working is similar to a regular function. The “use” at the beginning of the Custom Hook Name is required for React to understand that this is a custom Hook and also it will describe that this specific function follows the rules of Hooks.

### **What is React Router?**

React Router refers to the standard library used for routing in React. It permits us for building a single-page web application in React with navigation without even refreshing the page when the user navigates. It also allows to change the browser URL and will keep the user interface in sync with the URL. React Router will make use of the component structure for calling the components

### **What is the use of useEffect React Hooks?**

The useEffect React Hook is used for performing the side effects in functional components. With the help of useEffect, you will inform React that your component requires something to be done after rendering the component or after a state change. The function you have passed(can be referred to as “effect”) will be remembered by React and call afterwards the performance of DOM updates is over. Using this, we can perform various calculations such as data fetching, setting up document title, manipulating DOM directly, etc, that don’t target the output value. The useEffect hook will run by default after the first render and also after each update of the component. React will guarantee that the DOM will be updated by the time when the effect has run by it.

There are 2 rules which must be followed while you code with Hooks:

- React Hooks must be called only at the top level. It is not allowed to call them inside the nested functions, loops, or conditions.
- It is allowed to call the Hooks only from the React Function Components

