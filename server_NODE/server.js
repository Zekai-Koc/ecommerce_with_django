const express = require("express");

const app = express();

app.get("/", (req, res) => {
   res.send("Hello World!");
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
   console.log(`App running on port ${port}`);
});
