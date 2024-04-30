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

//create Users add
const addusers = async (req, res) => {
  try {
    const {
      user_name,
      user_password,
      status,
      email,
      in_time,
      date,
      user_role,
    } = req.body;
    if (
      !user_name ||
      !user_password ||
      !status ||
      !email ||
      !in_time ||
      !date ||
      !user_role
    ) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO users(user_name, user_password, status, email, in_time, date, user_role ) VALUES ( ?, ?, ?, ?, ?, ?, ?)",
      [user_name, user_password, status, email, in_time, date, user_role]
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

//get all users
const getusers = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM users");
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

//create Batches add
const addbatch = async (req, res) => {
  try {
    const {
      batch_name,
      batch_type,
      batch_status,
      description,
      in_time,
      date,
      trainer_name,
      start_time,
      end_time,
    } = req.body;
    if (
      !batch_name ||
      !batch_type ||
      !batch_status ||
      !description ||
      !in_time ||
      !date ||
      !trainer_name ||
      !start_time ||
      !end_time
    ) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO batches(batch_name, batch_type, batch_status, description,in_time, date, trainer_name,  start_time, end_time ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ? )",
      [
        batch_name,
        batch_type,
        batch_status,
        description,
        in_time,
        date,
        trainer_name,
        start_time,
        end_time,
      ]
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

//get all batches
const getbatches = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM batches");
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

//Add Assignment
const addassignment = async (req, res) => {
  try {
    const {
      assignment_name,
      batch_name,
      batch_status,
      assignment_description,
      create_time,
      create_date,
      trainer_name,
      start_date,
      end_date,
    } = req.body;
    if (
      !assignment_name ||
      !batch_name ||
      !batch_status ||
      !assignment_description ||
      !create_time ||
      !create_date ||
      !trainer_name ||
      !start_date ||
      !end_date
    ) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO assignment(assignment_name, batch_name, batch_status, assignment_description,create_time, create_date, trainer_name,  start_date, end_date ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ? )",
      [
        assignment_name,
        batch_name,
        batch_status,
        assignment_description,
        create_time,
        create_date,
        trainer_name,
        start_date,
        end_date,
      ]
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

//get all assignment
const getassignment = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM assignment");
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

//Add Register login

const register = async (req, res) => {
  try {
    const { name, email, password, class_name, in_time, date } = req.body;
    if (!name || !email || !password || !class_name || !in_time || !date) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO students(name, email, password, class_name,in_time, date) VALUES ( ?, ?, ?, ?, ?, ? )",
      [name, email, password, class_name, in_time, date]
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

//Add Students Assignment

const addStudentAssignment = async (req, res) => {
  try {
    const {
      assignment_name,
      batch_name,
      upload_url,
      assignment_description,
      create_time,
      create_date,
      trainer_name,
      student_name,
    } = req.body;
    if (
      !assignment_name ||
      !batch_name ||
      !upload_url ||
      !assignment_description ||
      !create_time ||
      !create_date ||
      !trainer_name ||
      !student_name
    ) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO students_assignment(assignment_name, batch_name, upload_url, assignment_description, create_time, create_date, trainer_name, student_name) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )",
      [
        assignment_name,
        batch_name,
        upload_url,
        assignment_description,
        create_time,
        create_date,
        trainer_name,
        student_name,
      ]
    );
    console.log(data);
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
//get all Students assignment
const getStudentAssignment = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM students_assignment");
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
module.exports = {
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
};
