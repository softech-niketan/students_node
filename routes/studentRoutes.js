const express = require("express");
const {
  getstudents,
  getstudentById,
  createStudent,
  update,
  deletestudent,
  register_student_getall,
  addusers,
  getusers,
  addbatch,
  getbatches,
  addassignment,
  getassignment,
  register,
  addStudentAssignment,
  getStudentAssignment,
} = require("../controllers/studentcontroller");

//router object
const router = express.Router();

//routs

//get all student
router.get("/getall", getstudents);
router.get("/register_student_getall", register_student_getall);

//get student by id
router.get("/get/:id", getstudentById);

//create student
router.post("/create", createStudent);

//update student
router.put("/update/:id", update);

//delete student
router.delete("/delete/:id", deletestudent);

//create users
router.post("/addusers", addusers);

//get all users
router.get("/getusers", getusers);

//create Batches
router.post("/addbatch", addbatch);

//get all batches
router.get("/getbatches", getbatches);

//Add Assignment
router.post("/addassignment", addassignment);

//get all assignment
router.get("/getassignment", getassignment);

//create Register login
router.post("/register", register);

//Add Students Assignment
router.post("/addStudentAssignment", addStudentAssignment);

//get all Students assignment
router.get("/getStudentAssignment", getStudentAssignment);



module.exports = router;
