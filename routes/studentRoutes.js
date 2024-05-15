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
  getusersbyemail,
  getusersbyemailregister,
  getusers_byid,
  addStudentAssignment1,
  getmyassignment,
  getstudentassign_byid,
  studentsassignment_remark,
  search_studentassign,
  search_viewassignment,
  search_viewbatch,
  search_attendace,
  search_user,
  search_user_students,
  add_student_fees,
  search_view_installment_fees,
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

router.put("/studentsassignment_remark/:id", studentsassignment_remark);

router.get("/getusers_byid/:id", getusers_byid);

router.get("/getstudentassign_byid/:id", getstudentassign_byid);

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

router.post("/add_student_fees", add_student_fees);


//Add Students Assignment
router.get("/addStudentAssignment/:id", addStudentAssignment);

router.post("/addStudentAssignment1", addStudentAssignment1);

router.get("/getmyassignment/:id", getmyassignment);

//get all Students assignment
router.get("/getStudentAssignment", getStudentAssignment);

router.get("/getusersbyemail", getusersbyemail);

router.get("/getusersbyemailregister", getusersbyemailregister);

router.get("/search_studentassign", search_studentassign);

router.get("/search_viewassignment", search_viewassignment);

router.get("/search_viewbatch", search_viewbatch);

router.get("/search_attendace",search_attendace );

router.get("/search_view_installment_fees",search_view_installment_fees );


router.get("/search_user_students",search_user_students );





module.exports = router;
