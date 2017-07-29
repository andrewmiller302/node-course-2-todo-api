const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '5971829916961d0c385c81e0';

//var id = '5976bda20aefcc801d558ae3';
//
//if(!ObjectID.isValid(id)){
//  console.log('ID not valid');
//}
//
//Todo.find({
//  _id: id
//}).then((todos) => {
//  console.log('Todos', todos)
//});
//
//Todo.findOne({
//  _id: id
//}).then((todo) => {
//  console.log('Todo', todo)
//});
//
//Todo.findById(id).then((todo) => {
//  if (!tod){
//    return console.log('Id not found');
//  }
//  console.log('Todo By Id', todo)
//}).catch((e) => console.log(e));

//User.findByID
User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found')
  }
  console.log('User', user)
}).catch((e) => console.log(e));