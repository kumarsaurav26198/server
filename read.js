const dbConnect = require('./mongodb');

const main = async () => {
    let data = await dbConnect();
    console.log('Selected data');

    data = await data.find({ campaignId: 14 }).toArray();
    console.log(data);
};
main();