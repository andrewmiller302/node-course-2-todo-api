//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
   return console.log('unable to connect to MongoDB server')
  }
  console.log('Conected to MongoDB server');
  
  //finding items using toArray
  //below is finding item using the objectID
  //if wanted to find based on other property can use .find({key: value})
/*db.collection('Todos').find({
  _id: new ObjectID('596a3cdf807e623354047f46')
}).toArray().then((docs) => {
  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch todos', err)
  
});*/
  
  //count() function. Counts all the records within the collection.
 /* db.collection('Todos').find().count().then((count) => {
  console.log(`Todos count: ${count}`);
  
}, (err) => {
  console.log('Unable to fetch todos', err)
  
});*/
  
  db.collection('Users').find({name: 'Drew'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });
  
  //db.close();
  
});