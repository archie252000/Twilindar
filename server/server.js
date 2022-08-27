const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect to database
connectDB();

app.use(express.json({ extended: false }));


app.use("/api/authenticate", require("./routes/api/authenticate"))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));