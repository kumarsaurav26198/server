const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany({ campaignId: 14 });
    console.log(result);

};

deleteData();