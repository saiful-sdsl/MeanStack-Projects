const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const student = require("./models/student");
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // can connect from any host.
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    console.log("This line will always called!!");
    next();
  });

mongoose
  .connect("mongodb://localhost:27017/IT6203", { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo DB Successfully Connected.");
  })
  .catch(() => {
    console.log("Error connecting mongo DB.");
  });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



app.post("/students", (req, res, next) => {
  /*const student = req.body;
  console.log(JSON.stringify(req.body));
  console.log(
    "Got a student> name: " + student.lastName + ", " + student.firstName
  );*/

  const aStudent = new student({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  aStudent
    .save()
    .then(() => {
      console.log("A student data has been saved.");
      res.status(201).json("Post has been successful.");
    })
    .catch(err => {
      console.log("Failed to save student data. error: " + err);
    });
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/students/:id", (req, res, next) => {
  student
    .deleteOne({ id: req.params.id })
    .then(result => {
      console.log("Deleted msg: "+ result);
      res.status(200).json("A student has been Deleted! id: " + req.params.id);
    })
    .catch(err => {
      console.log("A error occured while delete: " + err);
    });
});

app.use("/students", (req, res, next) => {
  student
    .find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log("Error:${err}");
      res.status(500).json(err);
    });

  /*const students = [
    { id: "1", firstName: "John", lastName: "Doe" },
    { id: "2", firstName: "Md Saiful", lastName: "Islam" },
    { id: "3", firstName: "Sharaban", lastName: "Tahora" }
  ];
  res.json(students);*/
});

module.exports = app;
