
//this file is only resposable for our routs
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} =require('./db/mongoose.js')
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js')

var app = express();

//midle wear to send json to express app
//.use sets up the middle wear
//bodyParser is the midle wear
app.use(bodyParser.json());

//req.body body gets stored by bodyParser
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//2nd route show list of all todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () =>{
  console.log('Started on port 3000');
  
});



//sample to make a new todo
//Modle was moved to the todo folder 
//1. make new var and call Todo var as a prototype
//this would include the poperies form the Object Model

/*var newTodo = new Todo({
  text: 'Cook dinner'
});

//2. save to the database
this would be where I would use then and error handling with a promise

newTodo.save().then((doc) => {
  console.log('Save todo', doc);
}, (e) => {
  console.log('Unable to save todo');
});*/

/*var myTodo = new Todo({
  text: 'Pick up the dog',
  completed: true,
  completedAt: 10
});

myTodo.save().then((doc) =>{
  console.log('Save todo', doc);
}, (e) => {
  console.log('Unable to save todo');
});*/

module.exports = {app};