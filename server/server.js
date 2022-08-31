const express = require("express");
const connectDB = require("./config/db");
const startScheduler = require("./scheduler/scheduler");

const app = express();

// connect to database
connectDB();
startScheduler();

app.use(express.json({ extended: false }));


app.use("/api/authenticate", require("./routes/api/authenticate"));
app.use("/api/tweet", require("./routes/api/tweet"));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));