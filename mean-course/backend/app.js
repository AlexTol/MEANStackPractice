const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
  // lets processes from different ports communicate with server
  res.setHeader("Access-Control-Allow-Origin", "*");
  // list of acceptable headers
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});
//Alex
//4B9K7unwJg3IK1Y7
app.post("/api/posts", (req,res,next) => {
  const posts = req.body;
  console.log(posts);
  res.status(201).json({
    messag: 'Post added successfully'
  });
});

app.get('/api/posts' ,(req,res,next) => {
  const posts = [
    {id: 'asfasf112312',
    title: 'First server-side post',
    content: 'This is coming from the server'},
    {id: 'a12swedrfgtyh',
    title: 'Second server-side post',
    content: 'This is coming from the server'}
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  }); // returns json data
  next();
} );

module.exports = app;
