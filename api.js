const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
const mongodb = require('mongodb');

app.use(express.json());
app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data);

});
app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insert(req.body);
    resp.send(result);

});
app.put("/:phoneNumber", async (req, resp) => {
    console.log(req.body);
    const data = await dbConnect();
    let result = data.updateOne(
        { phoneNumber: req.params.phoneNumber },
        { $set: req.body }
    );
    resp.send(result);
});

app.delete("/:id", async (req, resp) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    resp.send(result);
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }.`);
});