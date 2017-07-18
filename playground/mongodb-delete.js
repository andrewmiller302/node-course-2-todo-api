//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
   return console.log('unable to connect to MongoDB server')
  }
  console.log('Conected to MongoDB server');
  
 //deleteMany lets you remove multiple documents
  
  /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    console.log(result);
  });;*/
  
  //deleteOne
  /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
    
  });*/
  
  
  //findOneAndDelete find one delete it and retun the values
//  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//    console.log(result);
//  });
  
  //challege Remove dups of Drew 
  
  /*db.collection('Users').deleteMany({name: 'Drew'}).then((result) => {
    console.log(result);
  });*/
  
  //challege use findOneAndDelete with ID to remove the item.
  
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('596d921f92ce10e44176402b')
  }).then((result) => {
    console.log(result);
  });
  
  //db.close();
  
});