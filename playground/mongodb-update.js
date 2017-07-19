//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
   return console.log('unable to connect to MongoDB server')
  }
  console.log('Conected to MongoDB server');
  
 //findOneAndUpdate find items and update 
  //takes three arguments fileter (file to udpate), update, options, callback or promise, 
  //deatils can be found on MongoDB Native API site Under Collections (Method)
  
  /*db.collection('Todos').findOneAndUpdate({
    //filter
    _id: new ObjectID('596d8cad92ce10e441763e89')
  }, {
    //Update
    //use set update operator.
    //Operators can be found on MondgoDB site
    $set: {
      completed: true
    }
    }, {
    //option
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });*/
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID ('596a4917ad1def375cdc3a19')
  }, {
    $set: {
      name: 'Drew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
  //db.close();
  
});