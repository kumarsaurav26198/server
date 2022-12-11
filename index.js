const dbConnect = require('./mongodb');

dbConnect().then((res) => {
    console.log('Connected to MongoDB');
    res.find({}).toArray().then((data) => {
        console.log(data);
    });
});
// const main = async () => {
//     let data = await dbConnect();
//     console.log('Selected data');

//     data = await data.find({ phoneNumber: "(905) 925-5818 x2122" }).toArray();
//     console.log(data);
// };
// main();


// At the end of the point  remove MongoDB from thsi file to seprate file

// const dbConnect = require('./mongodb');
// const db = dbConnect();
// console.log(dbConnect);



//  Mongodb with express

//  At the end of the this step we got data from mongoDb

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const databaseName = 'kaspro';
// const client = new MongoClient(url);

// async function getData() {
//     let result = await client.connect();
//     db = result.db(databaseName);
//     collection = db.collection('ConsentDataList');
//     let data = await collection.find({}).toArray();
//     console.log(data);
// }
// getData();


// const http = require('http');
// const ConsentListData = require('./data');
// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'text/plain' });
//     resp.write(JSON.stringify(ConsentListData));
//     resp.end();
// }).listen(27017);



// const express = require('express');
// const app = express();
// app.get("", (req, resp) => {
//     resp.send("<h1> This is home page</h1>");
// });
// app.get("/about", (req, resp) => {
//     resp.send("<h1> This is about page </h1>");
// });
// app.listen(4000);


//  express basic user interface

// const express = require('express');
// const app = express();
// app.get("", (req, resp) => {
//     resp.send("<h1> This is home page</h1>");
// });
// app.get("/about", (req, resp) => {
//     resp.send("<h1> This is about page </h1>");
// });
// app.listen(4000);


//  basic file system

// const fs = require('fs');
// fs.writeFileSync("data.js", "Magnet");


//  create   basic Api

// const http = require('http');
// const ConsentListData = require('./data');
// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'text/plain' });
//     resp.write(JSON.stringify(ConsentListData));
//     resp.end();
// }).listen(27017);


//  second

// const http = require('http');

// http.createServer((req, resp) => {
//     resp.write(" Hello Magnet");
//     resp.end();
// }).listen(4000);


// First

// const fs = require('fs');
// console.warn("hello node js");
// const arr = [1, 2, 3, 4, 5, 6, 6, 8];
// const respult = arr.filter((item) => {
//     return item === 6;
// });
// console.warn(respult);
// fs.writeFileSync("hello.txt", "Magnet");
// console.log("->>", __dirname);
// console.log("->>", __filename);