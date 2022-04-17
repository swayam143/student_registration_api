//19.45--20.45

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
//
//IMPORT DATABASE
//
require("./db/conn");
//
//IMPORT MODELS
//
const Student = require("./models/students");
//
//CREATE NEW STUDENTS
//
app.post("/students", async (req, res) => {
  console.log(req.body); // ====> this comes from body of json we type. In postman, in postman new creation and paste the localhost:8000/students as per our router and select post and enter data in body json

  try {
    const user = new Student(req.body);

    //to save postman data in our data base
    const createUser = await user.save();

    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }

  // res.send("hello from the other side");
});

//READ DATA FROM OUR API
app.get("/students", async (req, res) => {
  //to get api data in postman new request but this time select get method and click send and we get data
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

//Get INDIVIDUALS STUDENT FROM FROM OUR API

app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);

    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.send(e);
  }
});

//UPDATE STUDENTS BY ID

app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
  } catch (e) {
    res.send(e);
  }
});

//OUR SERVER
app.listen(port, () => {
  console.log("coonection setup");
});
