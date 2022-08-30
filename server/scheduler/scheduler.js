const schedule = require("node-schedule");
const axios = require("axios");

const startScheduler = () => {
    console.log("STARTED");
    let count = 1;
    return schedule.scheduleJob('*/10 * * * * *', async() => {
        console.log(count);
        count++;
    })
};

module.exports = startScheduler;