const express = require("express");
const router = express.Router();

let students = [
  { id: 1, name: "student1" },
  { id: 2, name: "student2" },
];

router.get("/students", (req, res) => {
  res.status(200).send(students);
});

router.post("/students", (req, res) => {
  try {
    const { id, name } = req.body;    
    students.push(req.body[0]);
    return res
      .status(201)
      .send(`Student Created Succesffuly ${students.length}`);
  } catch (error) {
    return res.status(500).send("Student not created");
  }
});

module.exports = router;
