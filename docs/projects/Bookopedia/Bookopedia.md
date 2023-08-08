---
sidebar_position: 3
---

# Bookopedia

Tell me about your project

 Bookopedia is a book application that allows users to explore and discover a wide range of books. The search feature enables users to find books based on various criteria such as title, author, genre, or keywords. It was designed using flutter and to  get the feature of login and fetch the books i have used firebase  . • Users can create an account to save their favorite books. It has also a preference page in which user can select their preferences according to their interest . 

What inspired you?

Few of my friends liked to read books a lot and on one day when we were talking among ourselves we suddenly remebered about the old comics that we would get in trains like chacha Chaudhary and how much we miss these. So this motivated me to build a place where i can list all those books and comics that we used to read and enjoy.

How did you used firebase in your project?

In this application we used Firebase to add several features to our application. Firstly I used the firebase authentication system in order to set up the authentication system using which user can sign up for a new account and login into an existing account. After that I used firebase in order to store the database of our books according to different genre. I stored the book image and book in firebase too and connected the links in the database. So when the user logins into our application a request is made to firebase and all the books are displayed on the screen. 

Why flutter?

The main reason of choosing flutter was that it is an open source cross platform framework using which we can write a single codebase and then later convert it into all the platforms whether it be android ios mac windows linux or even we. So using flutter helped me to make our application available to every type of audience out there.

Problems you ran into?

During this application the first problem we ran into was that in home page i wanted to show different books of different genre so in order to achieve that we were trying the scrollable row approach and in thati was facing the overflow issue so in order to achieve this i used singlechildscrollview and this helped me to remove the overflow issue.

The second problem i faced was while creating the databse. So in order to create a book firstly we had to upload the book image and pdf in firebase cloudstore and then copy both of those links and add in firebase firestore database that was very tough since we needed to add lots of books. So in order to achieve this i created a simple application using flutter that help me to uplaod the books. It basically had option to select the pdf and image and then a form to take other details like book name, description author rating genre and when we click on uplaod button it first uplaod the bookpdf and image to firebase and after that use both the link to upload in database. By using this application i dont have to manually do everything.