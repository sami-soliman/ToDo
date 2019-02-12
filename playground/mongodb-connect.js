//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDo',{useNewUrlParser: true},(err,client)=>{
    if(err)
    {
        return console.log('Unable to Connect to sever');
    }
    console.log('Connected to the server ');

    const db = client.db('ToDo');
    db.collection('ToDo').insertOne({
        text : 'go running',
        completed : false
    },(err,result)=>{
        if(err)
        {
            return console.log('Unable to Connect to sever', err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    client.close();
});