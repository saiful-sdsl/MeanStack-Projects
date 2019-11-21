const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // can connect from any host.
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PUT, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  console.log("This line will always called!!");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/students", (req, res, next) => {
  const student = req.body;
  console.log(JSON.stringify(req.body));
  console.log(
    "Server Got a student> name: " + student.lastName + ", " + student.firstName
  );
  res.json("Post request has been successful.");
});

app.use("/students", (req, res, next) => {
  const students = [
    {
      studentID: "1",
      firstName: "Md Saiful",
      lastName: "Islam",
      email: "saiful@gmail.com",
      specialization: "Java, Android",
      highetEducation: "Master's in ICT",
      phoneNumber: "4075261848",
      selfIntro: "Here is my sample intro of Md Saiful Islam"
    },
    {
      studentID: "2",
      firstName: "Abu",
      lastName: "Noman",
      email: "noman@gmail.com",
      specialization: ".Net, Java",
      highetEducation: "Bachelor in ICT",
      phoneNumber: "4075261849",
      selfIntro: "Here is my sample intro of Abu Noman"
    },
    {
      studentID: "3",
      firstName: "Sharaban",
      lastName: "Tahora",
      email: "sharaban@gmail.com",
      specialization: "C++",
      highetEducation: "Bachelor in ICT",
      phoneNumber: "4075261847",
      selfIntro: "Here is my sample intro of Saraban Tahora"
    }
  ];
  res.json(students);
});

module.exports = app;
