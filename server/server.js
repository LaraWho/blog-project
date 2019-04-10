const express = require("express");
const app = express();
require("dotenv").config();
const expressJWT = require("express-jwt");
const port = process.env.SERVER_PORT;
const mongoose = require("mongoose");

app.use(express.json());

app.use("/add", expressJWT({ secret: process.env.SECRET }));

app.use("/auth", require("./routes/userRoutes"));
app.use("/api/articles", require("./routes/articleRoutes"));

mongoose
  .connect("mongodb://localhost:27017/geoff-blog", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB!");
  });

app.listen(port, () => {
  console.log(`server up on ${port}!`);
});
