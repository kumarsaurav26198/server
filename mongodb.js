const { MongoClient } = require('mongodb');
const url = "mongodb+srv://kasprodeveloper:kasprodeveloper@cluster0.kfk5xza.mongodb.net/test";
const databaseName = 'kaspro';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('bankuser');
    // let data = await collection.find({}).toArray();
    console.log(db);
}
module.exports = dbConnect;