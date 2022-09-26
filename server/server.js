const express = require("express");
const connectDB = require("./config/db");
const startScheduler = require("./scheduler/scheduler");

const app = express();

// connect to database
connectDB();
startScheduler();

app.use(express.json({ extended: false }));


app.use("/api/authenticate", require("./routes/api/authenticate"));
app.use("/api/login", require("./routes/api/login"));
app.use("/api/tweet", require("./routes/api/tweet"));
app.use("/api/thread", require("./routes/api/thread"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));