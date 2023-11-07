---
sidebar_position: 1
---

# Redux
Redux is a state management library commonly used with React to manage the state of your application. Redux Toolkit is a set of tools and best practices that simplify the process of working with Redux.

## Basic Concepts
**1. Introduction to Redux:**

Redux is a predictable state container for JavaScript applications. It helps manage the state of your application in a centralized manner, making it easier to maintain and reason about your application's state changes.

**2. Basic Redux Concepts:**

- **Actions:** These are plain JavaScript objects that represent events or changes in your application. They must have a `type` property that describes the action and may include additional data.

- **Reducers:** Reducers are pure functions that specify how the application's state changes in response to actions. They take the current state and an action as input and return a new state.

- **Store:** The store holds the application's state and provides methods to access and modify it. It is created using Redux.

**3. Getting Started with Redux Toolkit:**

To get started with Redux Toolkit, you'll need to install it in your project using npm or yarn:

```bash
npm install @reduxjs/toolkit
```

You can then create a Redux store using `configureStore` from Redux Toolkit and configure it as needed for your application.

**4. Slices in Redux Toolkit:**

Slices in Redux Toolkit allow you to organize your Redux code into modular pieces. You can define slices for different parts of your application and encapsulate reducers and actions within them.

**5. Working with Redux in React:**

To use Redux with React, you'll need to connect your React components to the Redux store using the `connect` function or React hooks like `useSelector` and `useDispatch`. You can dispatch actions and access state within your components.

**6. Async Data Handling:**

Redux Toolkit provides built-in support for handling asynchronous actions using thunks or `createAsyncThunk`. Thunks are functions that allow you to perform async operations and dispatch actions based on the results.

**7. Best Practices and Tips:**

Follow best practices like structuring your Redux code, using `createSlice` effectively, and using Redux DevTools for debugging. Avoid mutating state directly.

**8. Advanced Redux Concepts:**

Explore advanced concepts like middleware for handling side effects, selectors for efficient state access, and Immer for handling immutability in reducers.

**9. Examples and Projects:**

Build small projects and gradually integrate Redux Toolkit into larger applications to gain practical experience.

**10. Additional Resources:**

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Redux Official Documentation](https://redux.js.org/)
- Online tutorials and courses on Redux and Redux Toolkit are available on platforms like Udemy, Coursera, and YouTube.

Remember that learning Redux and Redux Toolkit is an iterative process. Start with the basics, practice, and gradually delve into more advanced topics as you become comfortable. Building real projects is the best way to solidify your understanding. Good luck with your Redux journey!

## Getting Started
Let's start by creating a empty React Project.

```bash
npx create-react-app redux-tut
```

Now let us install the Redux tootkit
```bash
npm install react-redux @reduxjs/toolkit
```

Now let us configure the store. Create a file called ``store.js``s inside any folder ex. ``redux``

```js title="src/redux/store.js"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        
    }
})
```
Here we will add all the reducers once we create. And this store will be used in the main file.

Now in the main file we have to import this store and we have to wrap our complete app inside a provider. We will import the store from the file we created and provider from react-redux and then wrap the ``<App />`` component

```js {5,6,11,13} title="src/index.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

Now we will create a another folder with the name ``features`` inside which we will add the slices to each individual feature. Let's create another folder named ``counter`` and inside it we will create a ``counterSlice.js`` with camelcase.

```js title="src/redux/features/counter/counterSlice.js"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

Now we have to import this reducer in our store.js file

```js title="src/redux/store.js"
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
    reducer:{
        // highlight-next-line
        counter: counterReducer,
    }
})
```

Now since our app is wraped with the store provider we will have this reducer available to our complete app.

Now let's make this counter component. Let's make a ``components`` folder and inside that a ``Counter.js`` file to make the counter component.

```js title="src/components/Counter.js"
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../redux/features/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </section>
    )
}
export default Counter
```

Now we will import this counter component in our ``App.js`` so that  we can display it on screen.

```js title="src/App.js"
import React from 'react'
// highlight-next-line
import Counter from './components/Counter'

const App = () => {
  return (
    // highlight-next-line
      <Counter />
  )
}

export default App
```
With all these setup we will have a basic counter component which shows the value of counter and two buttons to increment and decrement the value.

Now let's add couple of more features to get familier with Redux Toolkit.

```js title="src/redux/features/counter/counterSlice.js"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        //highlight-start
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
        //highlight-end
    }
});

// highlight-next-line
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

Now here the ``reset`` reducer is fairly simple as it just resets the value to 0 but the other one ``incrementByAmount`` one is little bit complex as it also takes ``action`` that is basically used to pass values and functions. And we can access the value inside the action using the ``action.payload`` line. Now we will just export the newly created reducers.

Now let's update the counter component to add these

```js title="src/components/Counter.js"
import { useSelector, useDispatch } from "react-redux";
// highlight-next-line
import { increment, decrement, reset, incrementByAmount } from '../redux/features/counter/counterSlice';
// highlight-next-line
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    // highlight-next-line
    const [incrementAmount, setIncrementAmount] = useState(0);

    // highlight-next-line
    const addValue = Number(incrementAmount) || 0;

    // highlight-start
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
    // highlight-end

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            // highlight-start
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
            // highlight-end
        </section>
    )
}
export default Counter
```

## Todo Application

Let's try to add one more feature to this application for TODOS. We can see how simple it is to add features like these. 

1. The first step is creating a new folder inside the ``features`` folder with the name ``todos`` and inside that a slice for todos with the name ``todoSlice.js``.

```js title="src/redux/features/todos/todoSlice.js"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        }
    }
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
```

2. Adding the slice to the store in ``store.js`` page.

```js {3,8} title="src/redux/store.js"
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import todoReducer from "./features/todos/todoSlice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoReducer,
    }
})
```

3. Now let's create a component to show the todos inside the ``components`` folder with the name ``Todos.js``.

```js title="src/components/Todos.js"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleComplete } from '../redux/features/todos/todoSlice';

const Todos = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            id: Date.now(),
            name: todo,
            completed: false
        }));
        setTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleComplete(todo))} />
                        <span>{todo.name}</span>
                        <button onClick={() => dispatch(removeTodo({
                            id: todo.id
                        }))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;
```

4. Now we can simply show the component inside the ``App.js`` file.

```js title="src/App.js"
import React from 'react'
import Todos from './components/Todos'

const App = () => {
  return (
    <>
      <Todos />
    </>
  )
}

export default App
```