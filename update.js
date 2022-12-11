const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {
            phoneNumber: "596.795.2437"
        },
        {
            $set:

            {
                lastModified: "2012-05-06T18:35:18.474Z",
                consent: "ture",
                campaignName: "Domint",
                channel: "rohit",
                campaignId: 12
            }
        });
    console.warn(result);
};

updateData();