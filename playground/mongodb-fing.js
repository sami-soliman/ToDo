const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDo',{useNewUrlParser: true},(err,client)=>{
    if(err)
    {
        return console.log('Unable to Connect to sever');
    }
    console.log('Connected to the server ');

    const db = client.db('ToDo');

    // get documents
    db.collection('ToDo').find(
        {
            _id : new ObjectID('5c60eb679bc23e3440b7874c')
        }
    ).toArray().then(
        (docs)=>{
            console.log('ToDo thing');
            console.log(JSON.stringify(docs,undefined,2));
        },
        (err)=>{
            console.log('oops unable to fetch data');
        }
    )

    // count number of documents
    db.collection('ToDo').find(
        {
            completed : false,
        }
    ).count().then(
        (count)=>{
            console.log(`you did not complete  ${count} ToDo things `);
        },
        (err)=>{
            console.log('oops !! someting went wrond ');
        }
    )
    
    client.close();
    })
    