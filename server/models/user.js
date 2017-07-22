
var mongoose = require('mongoose');

//New model
//User
// email property -require it - trim it - set type - set min lenght of 1

var User = mongoose.model('User', {
  email :{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
  
});

module.exports = {User};


