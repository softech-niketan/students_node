// get all student list

const db = require("../config/db");

//get all student
const getstudents = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM attendance");
    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "all student record ",
      totalStudent: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messsage: "error in get all student api",
      error,
    });
  }
};

const register_student_getall = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM students");
    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "all student record ",
      totalStudent: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messsage: "error in get all student api",
      error,
    });
  }
};
//get student by id

const getstudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        messsage: "invalid student id",
      });
    }
    const data = await db.query(`SELECT * FROM students WHERE id=?`, [
      studentId,
    ]);
    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record found",
      });
    }
    res.status(200).send({
      success: false,
      StudentDetails: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messsage: "error in get student bu id api",
      error,
    });
  }
};

//create student

const createStudent = async (req, res) => {
  try {
    const { name, class_name, date, in_time, webcam } = req.body;
    if (!name || !class_name || !date || !in_time || !webcam) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO attendance(name, class_name, date, in_time, webcam ) VALUES ( ?, ?, ?, ?, ?)",
      [name, class_name, date, in_time, webcam]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "erro in insert query",
      });
    }
    res.status(201).send({
      success: false,
      messsage: "new student create record",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messsage: "error in create student api",
      error,
    });
  }
};
//update
const update = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        messsage: "invalid id please provoid id",
      });
    }
    const { name, email, password, class_name } = req.body;
    const data = await db.query(
      "UPDATE students SET name=?, email=?, password=?, class_name=? WHERE id=?",
      [name, email, password, class_name, studentId]
    );
    if (!data) {
      return res.status(500).send({
        success: false,
        messsage: "error in update query",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "update student",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messsage: "error in update student api",
      error,
    });
  }
};

//delete student
const deletestudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        messsage: "please provoide student id",
      });
    }
    await db.query("DELETE FROM students WHERE id=?", [studentId]);
    res.status(200).send({
      success: true,
      messsage: "delete student",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messsage: "error in delete student api",
      error,
    });
  }
};
module.exports = {
  getstudents,
  getstudentById,
  createStudent,
  update,
  deletestudent,
  register_student_getall,
};
