const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/pages/index.html");
});

app.get("/skills", (req,res) => {
    res.sendFile(__dirname+"/pages/my_skills.html");
});


app.listen(port, "0.0.0.0", () => {
  console.log("Server started on port " + port);
});
