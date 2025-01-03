// Create web server
// 1. Require express module
// 2. Create an express app
// 3. Create a GET route to /comments
// 4. Send a JSON response with some comments
// 5. Listen on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    {username: 'Todd', comment: 'lol so funny'},
    {username: 'Skyler', comment: 'I like turtles'},
    {username: 'Sk8erBoi', comment: 'Plz delete this post.'}
  ]);
});

app.listen(3000);
console.log('Server is listening on port 3000');

// Run this file in your terminal with node comments.js and visit http://localhost:3000/comments in your browser. You should see the JSON response with the comments.

// Create a new file called index.html and add the following HTML code:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Comments</title>
// </head>
// <body>
//   <h1>Comments</h1>
//   <ul id="comments"></ul>
//   <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
//   <script>
//     $.get('http://localhost:3000/comments', (comments) => {
//       comments.forEach((comment) => {
//         $('<li></li>').text(`${comment.username}: ${comment.comment}`).appendTo('#comments');
//       });
//     });
//   </script>
// </body>
// </html>

// Open index.html in your browser. You should see the comments displayed on the page. This example demonstrates how to build a simple web server with Node.js and Express and how to make AJAX requests to an API endpoint.

// 3. Create a static file server