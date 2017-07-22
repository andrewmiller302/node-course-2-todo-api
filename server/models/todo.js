var mongoose = require('mongoose')

//creating a Model
//ToDo Model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    defualt: null
    
  }
});

module.exports= {Todo};