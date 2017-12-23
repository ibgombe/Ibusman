var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/UserManager',
function(err, db) {
console.log('Connected to MongoDB!');

// using the db connection object, save the collection 'testing' to a separate variable:

var collection = db.collection('testing');

// insert a new item using the collection's insert function:
collection.insert({'title': 'Snowcrash'}, function(err, docs) {

// on successful insertion, log to the screen the ne
// collection's details:
    console.log(docs.length + ' record inserted.');
    console.log(docs[0].title + ' – ' + docs[0]._id);

    // finally close the connection:
    db.close();
});
});