//const MongoClient = require('mongodb').MongoClient;

//using desrturing to pull client
//this lets me pull off items of the Mongo object
//below lets me run the MongoClient (like above) and make new ObjectID on the fly
const {MongoClient, ObjectID} = require('mongodb');

//exsample make new object ID
/*var obj = new ObjectID();
console.log(obj);*/


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
   return console.log('unable to connect to MongoDB server')
  }
  console.log('Conected to MongoDB server');
  
//  db.collection('Todos').insertOne({
//    text: 'Something to do',
//    completed: false
//  }, (err, result) =>{
//    if(err){
//      return console.log('Unalbe to insert todo', err)
//    }
//    
//    console.log(JSON.stringify(result.ops, undefined, 2));
//  });
  
  //insert new doc into Users (name, age, location)
  
//  db.collection('Users').insertOne({
//    name: 'Drew',
//    age: 42,
//    location: 'Oakland'
//  }, (err, result) =>{
//    if(err){
//      return console.log('Unable to insert users', err)
//    }
//    console.log(JSON.stringify(result.ops, undefined, 2));    
//  });
  
  //Accessing the ID property to get the timestamp
  
  /*db.collection('Users').insertOne({
    name: 'Drew',
    age: 42,
    location: 'Oakland'
  }, (err, result) =>{
    if(err){
      return console.log('Unable to insert users', err)
    }
    //results will let you string on to print just the timestamp
    console.log(result.ops[0]._id.getTimestamp());    
  });*/
  
  db.close();
  
});