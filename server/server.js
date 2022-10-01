const express = require("express");
const connectDB = require("./config/db");
const startScheduler = require("./scheduler/scheduler");
const cors = require("cors")

const app = express();

// connect to database
connectDB();
startScheduler();

app.use(cors());
app.use(express.json({ extended: false }));


app.use("/api/authenticate", require("./routes/api/authenticate"));
app.use("/api/login", require("./routes/api/login"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/accesstoken", require("./routes/api/token"));
app.use("/api/tweet", require("./routes/api/tweet"));
app.use("/api/thread", require("./routes/api/thread"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));