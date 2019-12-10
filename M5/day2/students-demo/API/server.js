const express = require("express");
const server = express();
const body_parser = require("body-parser");
const cors = require("cors");

const port = 4000;

let data = require("./data");

// parse JSON (application/json content-type)
server.use(body_parser.json());
server.use(cors);

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

// GET All students
server.get("/students", (req, res) => {
    // A preliminary check for missing data
    data.length > 0 ? res.json(data) : res.json({ message: "No Data" });
});

// GET One student
server.get("/student/:id", (req, res) => {
    // Student ID from data
    const studentID = req.param.id;
    // one student from data by ID
    const student = data.find(_s => _s.id === studentID);

    // Checking student exist
    if (student) {
        res.json(student);
    } else
        res.json({
            message: `Student ${studentID} doesn't exist`
        });
});

// POST One student
server.post("/student", (req, res) => {
    const student = req.body;
    console.log("Adding new student ", student);

    student._id = student.length++;
    student.creationTime = new Date();

    const studentEmail = req.param.email;
    const existingEmail = data.find(_e => _e.email === studentEmail);
    console.log("Student Email ", studentEmail);

    if (!existingEmail) {
        // Adding new student to array
        data.push(student);
        // Return update list
        res.json(data);
    } else res.json({ message: `Email ${studentEmail} already taken` });
});

// A test
server.get("/json", (req, res) => {
    res.json({ message: "Success" });
});

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
