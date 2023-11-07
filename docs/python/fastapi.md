---
sidebar_position: 2
---
# FastAPI

``FastAPI`` is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints. It's a great choice for beginners because of its simplicity and automatic generation of interactive API documentation. 

## What is an API
An API, or **Application Programming Interface**, is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information, enabling them to work together, share data, and perform specific tasks.

## Getting Started with fastapi
Let's get started with FastAPI step by step:

**1. Installation:**
   First, make sure you have Python 3.6 or later installed. Then, install FastAPI and a tool called Uvicorn, which helps run FastAPI applications.

   You can install them using pip:

   ```bash
   pip install fastapi
   pip install uvicorn
   ```

:::note
**Using a Virtual Environment**
You can even use virtual environments to keep our project seperate from rest  of the items so that all the dependencies related to that speicific projects stays in that environment.

   ```bash
   python3 -m venv myenv
   source myenv/bin/activate
   ```
   Now our virtual environment will be activated and inside this you can install all the dependencies start working on our proejct.
:::

**2. Your First FastAPI Application:**
   Let's create a simple "Hello, FastAPI!" application.

   Create a file named `main.py` and add the following code:

   ```python
   from fastapi import FastAPI

   app = FastAPI()

   @app.get("/")
   def read_root():
       return {"message": "Hello, FastAPI!"}
   ```

**3. Running Your Application:**
   Now, you can run your FastAPI application using Uvicorn:

   ```bash
   uvicorn main:app --reload
   ```

   This will start your FastAPI application, and you can access it in your web browser at `http://localhost:8000`. You should see the "Hello, FastAPI!" message.

**4. Interactive API Documentation:**
   One of the great features of FastAPI is automatic generation of interactive API documentation. To access it, open your browser and go to `http://localhost:8000/docs`. You will see a Swagger-based interface that allows you to interact with your API and understand how it works.

**5. Request Parameters:**
   You can also define route parameters. For example, let's create an endpoint that accepts a user's ID as a parameter:

   ```python
   @app.get("/users/{user_id}")
   def read_user(user_id: int):
       return {"user_id": user_id}
   ```

   This code defines a `/users/{user_id}` endpoint that takes an integer `user_id` as a parameter. We can even take multiple path parameters.

**6. Query Parameters:**
   FastAPI makes it easy to handle query parameters as well. Here's an example:

   ```python
   @app.get("/items/")
   def read_item(skip: int = 0, limit: int = 10):
       return {"skip": skip, "limit": limit}
   ```

   This code defines an `/items/` endpoint that accepts optional `skip` and `limit` query parameters.

**7. Path Parameters and Query Parameters:**
   You can combine path parameters and query parameters in a single endpoint:

   ```python
   @app.get("/items/{item_id}")
   def read_item(item_id: int, skip: int = 0, limit: int = 10):
       return {"item_id": item_id, "skip": skip, "limit": limit}
   ```

   This code defines an `/items/{item_id}` endpoint that takes an `item_id` as a path parameter and optional `skip` and `limit` query parameters.

**8. Creating API Endpoints:**
   FastAPI allows you to define routes and endpoints easily. For example, let's create an endpoint that accepts POST requests to receive user data:

   ```python
   from pydantic import BaseModel

   class User(BaseModel):
       username: str
       email: str

   @app.post("/create-user/")
   def create_user(user: User):
       return user
   ```

   This code defines a `/create-user/` endpoint that expects a JSON payload with `username` and `email` fields.


## Building a TODO App
Let's create a small project using FastAPI step by step. In this project, we'll build a simple "To-Do List" API with the following features:

1. Create a new task.
2. Retrieve all tasks.
3. Retrieve a specific task.
4. Update a task.
5. Delete a task.

**Step 1: Project Setup**

First, create a new directory for your project and set up a virtual environment:

```bash
mkdir fastapi_todo
cd fastapi_todo
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

Now, install FastAPI and Uvicorn:

```bash
pip install fastapi uvicorn
```

**Step 2: Create a FastAPI Application**

Inside your project directory, create a file named `main.py` to define your FastAPI application:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the To-Do List API"}
```

**Step 3: Define a Task Model**

We'll use Pydantic to define a data model for tasks. Import BaseModel from pydantic and then define a class of Task.

```python
from pydantic import BaseModel

class Task(BaseModel):
    id: int
    title: str
    description: str
    done: bool
```

**Step 4: Create a Database Mock**

For simplicity, we'll use an in-memory Python list to simulate a database.

```python
from typing import List

tasks_db: List[Task] = []
```

**Step 5: Create API Endpoints**

Update your `main.py` file to include CRUD (Create, Read, Update, Delete) operations for tasks:

```python
from fastapi import FastAPI, HTTPException
from typing import List
from pydantic import BaseModel

app = FastAPI()

class Task(BaseModel):
    id: int
    title: str
    description: str
    done: bool

tasks_db: List[Task] = []

@app.post("/tasks/", response_model=Task)
def create_task(task: Task):
    task.id = len(tasks_db) + 1
    tasks_db.append(task)
    return task

@app.get("/tasks/", response_model=List[Task])
def read_tasks(skip: int = 0, limit: int = 10):
    return tasks_db[skip : skip + limit]

@app.get("/tasks/{task_id}", response_model=Task)
def read_task(task_id: int):
    task = next((t for t in tasks_db if t.id == task_id), None)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, updated_task: Task):
    task = next((t for t in tasks_db if t.id == task_id), None)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    
    task.title = updated_task.title
    task.description = updated_task.description
    task.done = updated_task.done
    
    return task

@app.delete("/tasks/{task_id}", response_model=Task)
def delete_task(task_id: int):
    task = next((t for t in tasks_db if t.id == task_id), None)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    
    tasks_db.remove(task)
    return task
```

**Step 6: Run Your FastAPI Application**

To run your FastAPI application, use Uvicorn:

```bash
uvicorn main:app --reload
```

Your API will be available at `http://localhost:8000`. You can access the interactive documentation at `http://localhost:8000/docs` to test your API endpoints.

Congratulations! You've created a simple To-Do List API using FastAPI. You can expand upon this project by adding more features, such as user authentication, data persistence (using a database), and more advanced error handling.

## Customizing the API Docs
Customizing the Swagger documentation in FastAPI allows you to provide additional information, change the appearance, and provide more context about your API. You can achieve this by modifying the OpenAPI schema. Here's how you can customize the Swagger documentation:

**1. Changing the API Title and Description:**
    You can change the title and description of your API by modifying the FastAPI FastAPI() instance like this:

```python
from fastapi import FastAPI

app = FastAPI(
    title="Custom Title",
    description="Custom description of your API",
    version="1.0.0",
)
```

**2. Customizing Tags:**
    Tags are used to group endpoints in the Swagger UI. You can assign tags to your endpoints like this:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/", tags=["Tasks"])
def read_items():
    return {"message": "Read items"}
```

There are even more customization options that  we can look.
