---
sidebar_position: 1
---

# Clash of Fists

The Rock Paper Scissors game is a classic and timeless game enjoyed by people of all ages. This project aims to develop an interactive and real-time multiplayer version of the Rock Paper Scissors game using React and [Socket.io](http://socket.io/). The game will allow players to compete against each other in a virtual environment, testing their skills and luck.

Live Link : [Rock Paper Scissors](https://rock-paper-scissor-abhi6722.vercel.app/)


## Overview

The Rock Paper Scissors game is a classic and timeless game enjoyed by people of all ages. This project aims to develop an interactive and real-time multiplayer version of the Rock Paper Scissors game using React and [Socket.io](http://socket.io/). The game will allow players to compete against each other in a virtual environment, testing their skills and luck.

## Features

1. Lobby System: The project will implement a lobby system where players can join and create game rooms. Each game room will accommodate two players who will compete against each other.
2. Real-Time Gameplay: The game will utilize the Socket.io library to establish real-time communication between players. This means that players will be able to see their opponent's moves instantly and the game results will be displayed immediately.
3. Player Interaction: The project will allow players to interact with each other during the game. They can send messages, emojis, or use a chat system to communicate and create a more engaging experience.
4. Game Logic: The Rock Paper Scissors game logic will be implemented on the server-side to ensure fairness and prevent cheating. The server will determine the winner based on the chosen moves of the players.
5. Leaderboard and Statistics: The project will keep track of players' game statistics, including the number of wins, losses, and ties. A leaderboard will be displayed to showcase the top-performing players.
6. Responsive UI: The user interface will be designed using React to ensure a responsive and user-friendly experience. It will be compatible with different devices and screen sizes, including desktop and mobile.
7. Styling and Visuals: The project will incorporate appealing visuals and animations to enhance the gameplay experience and make it visually engaging.

## Tech Stack

- React
- Node Js
- Socket.io

## Getting Started

To get started with Rock Paper Scissor we will divide the application in two parts, follow these steps:

### For Server

Create a folder with name Rock Paper Scissor and Create two folder inside it with name Client and Server. and then cd into the server folder.

1. Open the terminal in VS Code and cd inside it
    
    ```bash
    cd server
    ```
    
2. Initialise a node application in it using the `npm` command  
    
    ```bash
    npm init -y
    ```
    
3. Now let us install some important dependencies that will be needed in our application
    
    ```bash
    npm i dotenv express shortid socket.io
    ```
    
    - `**dotenv**` - The dotenv module is used to configure environment variables from a **`.env`** file.
    - `**express**` - Express is a popular web framework for Node.js. It helps us to build web applications and APIs easily.
    - `**shortid`** - It will help to generate unique and short IDs such as rooms in case of our application.
    - `**socket.io**` - It is a JavaScript library that enables real-time, bidirectional communication between the server and clients.
    
4. Create a file with name `index.js` and this will serve as the main starting file
    
    ```jsx
    //index.js
    const express = require("express");
    
    const app = express();
    const port = 3000;
    
    // Define a basic route
    app.get("/", (req, res) => {
      res.send("Hello, World!");
    });
    
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    ```
    
    - Explanation
        
        In this code, we import the **`express`** module and create an instance of the Express application using **`express()`**. We define a basic route using **`app.get()`** which responds with "Hello, World!" when the root URL (**`"/"`**) is accessed.
        
        Finally, we start the server by calling **`app.listen()`** and passing it the desired port number (in this case, **`3000`**). The callback function inside **`app.listen()`** will be executed once the server is successfully started, and it logs a message to the console indicating that the server is running.
        
        To run this application, make sure you have Node.js installed on your system. Save the code to a file (e.g., **`server.js`**) and navigate to the file's directory in your terminal. Then, run the command **`node server.js`**. The server will start and you can access it by visiting `[**http://localhost:3000](http://localhost:3000)`** in your browser.
        
5. Now let us write the complete code for `index.js` and understand each line.
    
    ```jsx
    //index.js
    const dotenv = require("dotenv");
    const express = require("express");
    const { createServer } = require("http");
    const { Server } = require("socket.io");
    const roomHandler = require("./roomHandler");
    
    dotenv.config();
    const app = express();
    
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
      cors: { origin: "*" },
    });
    
    const rooms = [];
    
    io.on("connection", (socket) => {
      console.log("connected", socket.id);
      roomHandler(io, socket, rooms);
    
      socket.on("disconnect", () => {
        console.log("disconnected", socket.id);
      });
    });
    
    const port = process.env.PORT || 8080;
    httpServer.listen(port, () => console.log(`Listening on port ${port}`));
    ```
    
    - Explanation
        1. Import necessary modules: **`dotenv`, `express` ,** **`http`, `socket.io`**
        2. Configure environment variables:
            - The **`dotenv.config()`** function loads environment variables from the **`.env`** file.
        3. Create an Express app:
            - An Express application instance is created using **`express()`** and stored in the **`app`** variable.
        4. Create an HTTP server and Socket.io server:
            - The **`createServer`** function from the **`http`** module is used to create an HTTP server, passing the **`app`** as the request listener.
            - The **`Server`** class from the **`socket.io`** module is used to create a Socket.io server instance, passing the HTTP server.
            - The **`cors`** option is set to allow all origins (**`"*"`**) for cross-origin resource sharing.
        5. Now lets Initialise an empty **`rooms`** array to store room data.
        6. Handle client connections and disconnections:
            - The **`io.on("connection")`** event listener is set up to handle incoming client connections.
            - When a client connects, the server logs the client's ID and invokes the **`roomHandler`** function to handle room-related actions.
            - When a client disconnects, the server logs the client's ID.
        7. Set the server to listen on a port:
            - The **`process.env.PORT`** environment variable is used as the port number, or it defaults to **`8080`** if not specified.
            - The server starts listening on the specified port, and a message is logged to the console indicating the port number.
        
6. Now let us write the code for `roomHandler.js` and understand each line.
    
    ```jsx
    // roomHandler.js
    const shortId = require("shortid");
    
    const roomHandler = (io, socket, rooms) => {
      const create = (payload, callback) => {
        if (payload.type === "stranger") {
          const index = rooms.findIndex(
            (room) => room.vacant === true && room.private === false
          );
          if (index >= 0) {
            const room = rooms[index];
            room.players[socket.id] = {
              option: null,
              optionLock: false,
              score: 0,
            };
            room.vacant = false;
            socket.join(room.roomId);
            io.to(room.roomId).emit("room:get", room);
            callback(null, room.roomId);
          } else {
            const room = {
              roomId: shortId.generate(),
              players: {
                [socket.id]: {
                  option: null,
                  optionLock: false,
                  score: 0,
                },
              },
              vacant: true,
              private: false,
              type: payload.type,
            };
            rooms.push(room);
            socket.join(room.roomId);
            io.to(room.roomId).emit("room:get", room);
            callback(null, room.roomId);
          }
        } else {
          const room = {
            roomId: shortId.generate(),
            players: {
              [socket.id]: {
                option: null,
                optionLock: false,
                score: 0,
              },
            },
            vacant: true,
            private: true,
            type: payload.type,
          };
          rooms.push(room);
          socket.join(room.roomId);
          io.to(room.roomId).emit("room:get", room);
          callback(null, room.roomId);
        }
      };
    
      const join = (payload, callback) => {
        const index = rooms.findIndex((room) => room.roomId === payload.roomId);
        if (index >= 0) {
          const room = rooms[index];
          if (room.players[socket.id]) return callback(null);
    
          if (room.vacant && room.private) {
            room.players[socket.id] = {
              option: null,
              optionLock: false,
              score: 0,
            };
            room.vacant = false;
            rooms.push(room);
            socket.join(room.roomId);
            io.to(room.roomId).emit("room:get", room);
            callback(null, room);
          } else {
            callback({ error: true });
          }
        } else {
          callback({ error: true });
        }
      };
    
      const update = (payload) => {
        const index = rooms.findIndex((room) => room.roomId === payload.roomId);
        if (index >= 0) {
          rooms[index] = payload;
          io.to(payload.roomId).emit("room:get", payload);
        }
      };
    
      socket.on("room:create", create);
      socket.on("room:join", join);
      socket.on("room:update", update);
    };
    
    module.exports = roomHandler;
    ```
    
    - Explanation
        1. In this `**roomHandler**` function firstly we have imported the `**shortid`** module and inside the function we get three parameters io, socket, rooms where io is the instance of the http server, socket is the connection and room is the room id. Now we define three function.  
        2. **`create`**:
            
            This function is called when a client wants to create a new room. It takes a **`payload`** object and a **`callback`** function as parameters. The **`payload`** object contains information about the room type. If the room type is "**stranger**," the function checks if there is an available room with a vacant spot and not private. If an available room is found, the client is added to the existing room. If no available room is found, a new room is created with a unique room ID generated using **`shortId.generate()`**. The new room is added to the **`rooms`** array and the client joins the room. The room information is sent to all clients in the room using **`io.to(room.roomId).emit("room:get", room)`**. The **`callback`** function is invoked with the room ID as a parameter.
            
        3. **`join`**:
            
            This function is called when a client wants to join an existing room. It takes a **`payload`** object and a **`callback`** function as parameters. The **`payload`** object contains the room ID that the client wants to join. The function searches for the room with the provided room ID in the **`rooms`** array. If the room is found and the client is not already a player in the room, they are added as a player. If the room is vacant and private, the client is not allowed to join. If the client successfully joins the room, the room information is sent to all clients in the room using **`io.to(room.roomId).emit("room:get", room)`**. The **`callback`** function is invoked with the room information as a parameter if successful, or an error object if not.
            
        4. **`update`**:
            
            This function is called when a room needs to be updated with new information. It takes a **`payload`** object as a parameter, which contains the updated room information. The function searches for the room with the provided room ID in the **`rooms`** array. If the room is found, it is updated with the new information. The updated room information is sent to all clients in the room using **`io.to(payload.roomId).emit("room:get", payload)`**.
            
        5. Socket event listeners:
            
            The module sets up event listeners for specific socket events. When the event **`room:create`** is emitted from a client, the **`create`** function is called. When the event **`room:join`** is emitted from a client, the **`join`** function is called. When the event **`room:update`** is emitted from a client, the **`update`** function is called.
            
        6. Finally, the **`roomHandler`** module is exported so that it can be used in other parts of the application.
        
7. Create a .env file and add the PORT
    
    ```
    PORT=3000
    ```
    
8. Run the server using the following command.
    
    ```bash
    node index.js
    ```
    
9. This will start our server and now we can move on to the server side of the project

### For Client

1. Now lets building the fun part of this application that is the UI part and for building a beautiful UI we are going to use React. Now first go into the Client folder and initialise a empty react app using **`create-react-app`** command.
    
    ```bash
    cd ..    
    cd client
    npm create-react-app init
    ```
    

### Assets

In Next.Js application we define the assets inside our `public` folder. And we can access it from anywhere by using the `src=”/icon.png"` 

[loading.gif](Clash%20of%20Fists%20bb032a50f85f4109bbfa94f334d27b48/loading.gif)

[icon.png](Clash%20of%20Fists%20bb032a50f85f4109bbfa94f334d27b48/icon.png)

## Contributing

Contributions to WriteRight are welcome and encouraged! To contribute to the project, please follow these steps:

- Fork the repository.
- Create a new branch for your changes.
- Make your changes and commit them.
- Push your changes to your forked repository.
- Create a pull request to merge your changes into the main repository.
- Please ensure that your code follows the project's coding standards and that your changes do not introduce any bugs or security vulnerabilities.

## License

Rock Paper Scissor is open source software licensed under the MIT License. See LICENSE for more information.

## Project: Rock-Paper-Scissors Game

Collaborated in a team of [team size] to develop a web-based rock-paper-scissors game.
Led the frontend development using React, implementing interactive user interfaces and game logic.
Worked closely with the design team to create an engaging and visually appealing user experience.
Utilized React com

## Interview Questions

1. **Tell us about your project**
    
    "Clash of Fists" is a web-based multiplayer version of the classic game of Rock Paper Scissors developed using React and Socket.io. The game is designed to allow players to compete against each other in real-time, testing their skills and luck. The game has a lobby feature where players can join or create a room and share with their friends and play together. Players also have a option to join a random room where they will be matched up against some random player. We have also used the Scoket.io feature to include the chat functionality where users can chat among each other.
    
    Each game consists of maximum 5 rounds in which the player securing first 3 wins will be the winner. 
    
2. **How did you implemented this multiplayer option?**
    
    In this project we have used socket.io which is the main tool for establishing constant connection between devices. So whenever the user creates a room a socket io room is created and user can share the link and anyone can join in that room and what is does is it allows users to seamlessly contact with each other with the help of which our chat feature also works.
    
3. ******Explain the actual logic how two players can see same thing on the screen.******
    
    So this is achieved using the socket io. When two users join the same room it looks for requests from both the user and once both the user choose their option (i.e., rock,paper or scissor) we then display the UI based on the selected options and all the score calculation part is done on backend itself so that no cheating can be done.
    

1. **What inspired you?**
    
    So I build this project during my summer breaks and in my college we used to randomly play rock, paper, scissor in our breaks and canteen. So I thought of implementing the same thing online so that I can play with my friends. 
    
2. **Challenges you ran into**
    
    So while building this game, all the things were new to me and I didn’t exactly knew how to go this multiplayer stuff so initially I had to look into a lots of tutorial videos which explained how to build a chat application and how to build games using socket io. And after watching and reading through different documentations I was able to develop the game. One major issue that I faced was while integrating the chat feature in the same application because I dont wanted to make seperate port or room for chat and seperate for game. So I achieved it using the same room for game also and chat also.
    
    **Optional:** When I was integrating the chat feature in the game I was facing issue with the UI part so in order to resolve that I made the chatbox floating type so that it can stay above the screen and in the same time it does not covers the game screen too.
    
     
    
3. **Why did you choose react?**
    
    I decided to choose React since it is a very popular framework and very fast for creating single page applications. In React we can divide the project into different components and design each component individually and then integrate it together. And the website is also fast and we can create beautiful UI’s with it easily.
    
    NodeJS
    a. Simple and allows freedom to use javascript on server side
    b. It has node package manager
    c. Single threaded: works fine for small project like mine
    d. Its asynchronous architecture allows non-blocking execution
    •
    Why not Java?
    For larger application with high load, java can be preferred due to
    its multi threadedness.
    a.
    •
    • Why not PHP
    Slower performance owing to synchronous architecture
    • ExpressJS
    Express is just a library that uses Node-Functions to make it easier
    for you to implement a Webserver- managing routes and handling
    requests
    ○
    It contains several middleware components that can be used on
    request and response
    
    WebSockets
    Solved one of the biggest problems of server
    communication by providing a full-duplex two-way communication
    bridge. It provides both the server and client the ability to send data at
    any point of time, which was not provided by any of the old methods.
    [Socket.io](http://socket.io/)
    Easy to work with
    Support websocket protocol
    Supports broadcasting, which was not supported by websocket
    alone