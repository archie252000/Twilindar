const mongoose = require("mongoose");
const config = require("config");
const uri = config.get("mongoUri");

const connectDB = async() => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("DB Connected ....");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;