const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => { 
console.log("Your app is listening on: " + "http://localhost:" + listener.address().port);
});
