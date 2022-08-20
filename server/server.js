const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.get("/", function(req, res) {
    res.send("HERE");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));