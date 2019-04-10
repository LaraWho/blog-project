const express = require("express");
const app = express();
require("dotenv").config();
const expressJWT = require("express-jwt");
const port = process.env.SERVER_PORT;
const mongoose = require("mongoose");
const path = require("path");

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "build")));

app.use("/add", expressJWT({ secret: process.env.SECRET }));

app.use("/auth", require("./routes/userRoutes"));
app.use("/api/articles", require("./routes/articleRoutes"));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/geoff-blog", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  });

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`server up on ${port}!`);
});
