const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/studentsapi")
  .then(() => {
    console.log("connection succesfull");
  })
  .catch((e) => {
    console.log("No connection");
  });
