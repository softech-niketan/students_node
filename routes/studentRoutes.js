const express = require("express");
const {
  getstudents,
  getstudentById,
  createStudent,
  update,
  deletestudent,
  register_student_getall,
} = require("../controllers/studentcontroller");

//router object
const router = express.Router();

//routs

//get all student
router.get("/getall", getstudents);
router.get("/register_student_getall",register_student_getall)

//get student by id
router.get("/get/:id", getstudentById);

//create student
router.post("/create", createStudent);

//update student
router.put("/update/:id", update);

//delete student
router.delete("/delete/:id", deletestudent);

module.exports = router;
