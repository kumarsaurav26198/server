const dbConnect = require('./mongodb');

const insertData = async () => {
    let data = await dbConnect();
    let result = await data.insert(
        [
            {
                phoneNumber: "596.795.2437",
                createdDate: "2019-04-10T08:58:43",
                lastModified: "2012-05-06T18:35:18.474Z",
                consent: "false",
                campaignName: "Domingo Hyatt",
                channel: "parse",
                campaignId: 12
            },
            {
                phoneNumber: "596.795.2437",
                createdDate: "2019-04-10T08:58:43",
                lastModified: "2012-05-06T18:35:18.474Z",
                consent: "false",
                campaignName: "Domingo Hyatt",
                channel: "parse",
                campaignId: 13
            },
            {
                phoneNumber: "596.795.2437",
                createdDate: "2019-04-10T08:58:43",
                lastModified: "2012-05-06T18:35:18.474Z",
                consent: "false",
                campaignName: "Domingo Hyatt",
                channel: "parse",
                campaignId: 14
            },

        ]
    );
    if (result.acknowledged)
    {
        console.warn("data is inserted");
    }
};

insertData();

