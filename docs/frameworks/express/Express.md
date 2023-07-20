---
sidebar_position: 1
---

# Express

Express.js is a web framework for Node.js. It is a fast, robust and asynchronous in nature. Express help us to build `[Node.Js](https://www.notion.so/Node-Js-53f476cc73e240c8bd91c411627adb82?pvs=21)` application very easily and fastly.

## Installing Express

First we have to setup a node application so simply create a folder and run the following command.

```bash
npm init -y
```

After this we will install the express package from npm

```bash
npm install express
```

## Simple Express Application

```jsx
var express = require('express');  
var app = express();  

app.get('/', function (req, res) {  
  res.send('Hello World!');  
});  

app.listen(3000);
```

So here first we import the express package and we create a instance of express and store it into app variable. Now we can access express using app variable. And we create a `get` request at `/` so whenever anyone visits the home page we will get the message of Hello World. And the the very bottom we just start the server using the listen command and inside that we define the port.

So our server is up and running on `http://localhost:3000/`

## Different types of Methods

| Method | Description |
| --- | --- |
| GET | When we use the GET method, we're asking the server to give us information about a specific thing, like a webpage or a piece of data. It's like looking at a picture without changing anything, just observing. |
| POST | With the POST method, we're sending new data to the server. It's like filling out a form or submitting information. The server will then take that data and create a new object or entity based on it. |
| PUT | If we use the PUT method, we're asking the server to update or modify an existing object or entity. It's like editing something we already have. If the object doesn't exist, the server can create a new one based on the data we provide. |
| DELETE | The DELETE method is used to ask the server to remove or delete a specific resource. It's like throwing away something we no longer need. By using DELETE, we're telling the server to get rid of the resource we're referring to. |

We can have more than one request with same name but the method should be different

```jsx
var express = require('express');  
var app = express();  

app.get('/', function (req, res) {  
  res.send('Get Request Called!');  
});

app.post('/', function (req, res) {  
  res.send('POST Request Called!');  
});  

app.listen(3000);
```

<aside>
💡 Remember we can only make `get` through the browser and for other types of requests we need to make request using some kind of frontend or api testing tool like [Postman](https://www.postman.com).

</aside>

- Postman
    
    Postman is one of the most popular software testing tools which is used for API testing. With the help of this tool, developers can easily create, test, share, and document APIs.
    

A special method, `all`, is provided by Express to handle all types of http methods at a particular route using the same function. To use this method, try the following.

```jsx
app.all('/test', function(req, res){
   res.send("HTTP method doesn't have any effect on this route!");
});
```

## Building Dynamic Route

```jsx
var express = require('express');
var app = express();

app.get('/blog/:id', function(req, res){
   res.send('The Blog id requested is ' + req.params.id);
});

app.listen(3000);
```

So what this dynamic route does is when a user go to any route like `http://localhost:3000/blog/1` then we can extract the value of the url and that is known as parameter and we can access it using `req.params.id` and based on that id we can show the blog corresponding to that id.

- One More Example
    
    One More example can we, when we want to show the profile page of any user based on their email address then we can define the route as.
    
    ```jsx
    var express = require('express');
    var app = express();
    
    app.get('/profile/:email', function(req, res){
       res.send('The Profile for ' + req.params.id);
    });
    
    app.listen(3000);
    ```
    
    So when a user go to any route like `http://localhost:3000/profile/test@gmail.com` then we can extract the value of the email and show them the page related to their account and we can access the value using `req.params.email`
    

## Middleware

Middlewares in Express are functions that have access to the request `req`, response `res`, and the next middleware function in the application's request-response cycle. They can perform additional operations before or after handling a request, modify request/response objects, or terminate the request-response cycle. In simpler terms, middlewares act as a bridge between the incoming request and the route handlers.

```jsx
const express = require('express');

const app = express();

// Logger middleware to output current date with request method & URL
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
};

// Apply the logger middleware to all routes
app.use(loggerMiddleware);

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

Output on console when we visit `http://localhost:3000` 

```bash
Express % node app.js
Server is running on port 3000

[6/26/2023, 4:29:20 PM] GET /
```

## Express Project

### Movie API

Here's an example of a movie API built using Node.js and Express that can perform CRUD (Create, Read, Update, Delete) operations:

1. First, make sure you have Node.js installed on your machine.
2. Create a new directory for your project and navigate into it using the command line.
3. Initialize a new Node.js project by running the following command:
    
    ```bash
    npm init -y
    ```
    
4. Install the necessary dependencies (Express and body-parser) by running the following command:
    
    ```bash
    npm install express body-parser
    ```
    
5. Create a file named `index.js` in the project directory and add the following code to it:
    
    ```jsx
    const express = require('express');
    const bodyParser = require('body-parser');
    
    // Create an instance of Express
    const app = express();
    
    // Use body-parser middleware to parse incoming request bodies
    app.use(bodyParser.json());
    
    // Create an array to store movie data (replace with a database in a real-world scenario)
    let movies = [
      { id: 1, title: 'Movie 1', director: 'Director 1' },
      { id: 2, title: 'Movie 2', director: 'Director 2' }
    ];
    
    // GET /movies - Retrieve all movies
    app.get('/movies', (req, res) => {
      res.json(movies);
    });
    
    // GET /movies/:id - Retrieve a specific movie by ID
    app.get('/movies/:id', (req, res) => {
      const movieId = parseInt(req.params.id);
      const movie = movies.find((movie) => movie.id === movieId);
      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json({ error: 'Movie not found' });
      }
    });
    
    // POST /movies - Create a new movie
    app.post('/movies', (req, res) => {
      const { id, title, director } = req.body;
      const newMovie = { id, title, director };
      movies.push(newMovie);
      res.status(201).json({ message: 'Movie Added Successfully', movies});
    });
    
    // PUT /movies/:id - Update a movie
    app.put('/movies/:id', (req, res) => {
      const movieId = parseInt(req.params.id);
      const updatedMovie = req.body;
      const movieIndex = movies.findIndex((movie) => movie.id === movieId);
      if (movieIndex !== -1) {
        movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };
        res.json(movies[movieIndex]);
      } else {
        res.status(404).json({ error: 'Movie not found' });
      }
    });
    
    // DELETE /movies/:id - Delete a movie
    app.delete('/movies/:id', (req, res) => {
      const movieId = parseInt(req.params.id);
      const movieIndex = movies.findIndex((movie) => movie.id === movieId);
      if (movieIndex !== -1) {
        const deletedMovie = movies.splice(movieIndex, 1);
        res.json({ message: 'Movie Deleted Successfully', mo});
      } else {
        res.status(404).json({ error: 'Movie not found' });
      }
    });
    
    // Start the server
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
    ```
    
6. Save the file and go back to the command line. Start the server by running the following command:
    
    ```bash
    node index.js
    ```
    

Now, our movie API is running on port 3000. You can test the API endpoints using tools like Postman or by making HTTP requests from your applications.

#### Endpoints

- GET `/movies` - Retrieve all movies
- GET `/movies/:id` - Retrieve a specific movie by ID
- POST `/movies` - Create a new movie (provide `id`, `title`, and `director` in the request body)
- PUT `/movies/:id` - Update a movie by ID (provide updated movie data in the request body)
- DELETE `/movies/:id` - Delete a movie by ID

#### Test Using Postman

Here are the endpoints along with sample request bodies to test in Postman:

1. GET `/movies` - Retrieve all movies
    
    <aside>
    💡 Method: GET
    URL: `http://localhost:3000/movies`
    No request body required
    
    </aside>
    
    
2. GET `/movies/:id` - Retrieve a specific movie by ID
    
    <aside>
    💡 Method: GET
    URL: `http://localhost:3000/movies/1` (replace `1` with the desired movie ID)
    No request body required
    
    </aside>
    
    
3. POST `/movies` - Create a new movie
    
    <aside>
    💡 Method: POST
    URL: `http://localhost:3000/movies`
    Request Body (JSON):
    
    </aside>
    
    ```json
    {
      "id": 3,
      "title": "Movie 3",
      "director": "Director 3"
    }
    ```
    
4. PUT `/movies/:id` - Update a movie by ID
    
    <aside>
    💡 Method: PUT
    URL: `http://localhost:3000/movies/1` (replace `1` with the desired movie ID)
    Request Body (JSON):
    
    </aside>
    
    ```json
    {
      "title": "Updated Movie 1",
      "director": "Updated Director 1"
    }
    ```
    
    
5. DELETE `/movies/:id` - Delete a movie by ID
    
    <aside>
    💡 Method: DELETE
    URL: `http://localhost:3000/movies/1` (replace `1` with the desired movie ID)
    No request body required
    
    </aside>
    

---

## Interview Questions

1. **What is Express.js?**
    
    Express.js is a web application framework for Node.js. It provides a set of features and tools to build web applications and APIs easily. It simplifies common web development tasks and provides a flexible, minimalistic approach to building robust server-side applications.
    
2. **How do I install Express.js?**
    
    We can install Express.js using npm (Node Package Manager). We just have to write the command in our terminal.
    
    ```bash
    npm install express
    ```
    

1. **What is a middleware in Express.js?**
    
    Middleware in Express.js is like a middle person between the server and the route handling a request. It's a function that helps us do different things with the request and response objects. For example, we can use middleware to understand and process the data sent in the request, add extra information to the response. We can even check if the user is authenticated to make the request.
    
2. **How do I handle routes in Express.js?**
    
    Express.js provides a simple way to handle routes using the `app.get`, `app.post`, `app.put`, and `app.delete` methods. These methods allow you to define the HTTP method and the route path, along with the corresponding handler function to execute when that route is accessed.
    
3. **What is the purpose of template engines in Express.js?**
    
    In Express.js, we can use template engines like EJS to create HTML views that change based on the data we have. Template engines let us combine fixed parts of HTML (like headers and footers) with dynamic data.
    
4. **How can I handle errors in Express.js?**
    
    Express.js provides error handling middleware that can be used to handle errors that occur during request processing. By defining a middleware function with four parameters `(err, req, res, next)`, we can capture and handle errors, send appropriate error responses, and control the flow of error handling within our application.
    
5. **How can I serve static files using Express.js?**
    
    Express.js allows us to serve static files, such as HTML, CSS, JavaScript, images, etc., using the built-in `express.static` middleware. You need to specify the directory containing the static files, and Express will automatically handle serving those files when requested.
    
6. **What is the difference between app.get() and app.post() in Express.js?**
    
    `app.get()` is used to handle HTTP GET requests, where the server returns data to the client. It is typically used to retrieve information from the server. On the other hand, `app.post()` is used to handle HTTP POST requests, where the client sends data to the server to create or update resources. It is commonly used for form submissions or API endpoints that modify data.
    
    ```jsx
    const express = require('express');
    const app = express();
    
    // Serve static files from the "public" directory
    app.use(express.static('public'));
    
    // Serve index.html for the root route ("/")
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
    
    // Start the server
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
    ```
    
7. **How can I access query parameters in Express.js?**
    
    Query parameters can be accessed in Express.js using the `req.query` object. For example, if the URL contains `?name=John&age=25`, you can access the values of these parameters using `req.query.name` and `req.query.age` within your route handler.
    
8. **What is the purpose of Express Router?**
    
    Express Router allows you to create modular and reusable route handlers in Express.js. It helps in organizing your routes into separate files or modules, making your code more maintainable. You can define different routes for different parts of your application and then combine them using the Router to create a complete set of routes.
    
9. **How can I handle form data in Express.js?**
    
    To handle form data in Express.js, you need to use a middleware called `body-parser`. It allows you to parse and extract form data from the request body. You can install it using `npm install body-parser` and then include it in your Express application using `app.use(bodyParser.urlencoded({ extended: false }))`. After that, you can access form data using `req.body`.
    
10. **What is the purpose of Express middleware?**
    
    Middleware in Express.js allows you to perform various operations during the request-response cycle. It sits between the server and the route handler and can modify the request and response objects, execute additional logic, perform authentication, logging, error handling, and more. Middleware provides a way to modularize and reuse common functionality across routes.
    
11. **How can I handle file uploads in Express.js?**
    
    To handle file uploads in Express.js, we can use the `multer` middleware. Multer allows you to handle multipart/form-data, which is the format used for file uploads.
    