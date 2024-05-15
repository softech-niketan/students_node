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
    const { name, class_name, date, in_time, webcam, user_id } = req.body;
    if (!name || !class_name || !date || !in_time || !webcam || !user_id) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO attendance(name, class_name, date, in_time, webcam, user_id ) VALUES ( ?, ?, ?, ?, ?, ?)",
      [name, class_name, date, in_time, webcam, user_id]
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
  //console.log(req);
  try {
    const ID = req.body.id;
    console.log("ID", ID);
    if (!ID) {
      return res.status(404).send({
        success: false,
        messsage: "invalid id please provoid id",
      });
    }
    const {
      user_name,
      user_password,
      status,
      email,
      in_time,
      date,
      user_role,
      total_fees,
    } = req.body;
    const data = await db.query(
      "UPDATE users SET user_name=?, user_password=?, status=?, email=?, in_time=?, date=?, user_role=?, total_fees=? WHERE id=?",
      [
        user_name,
        user_password,
        status,
        email,
        in_time,
        date,
        user_role,
        total_fees,
        ID,
      ]
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

const studentsassignment_remark = async (req, res) => {
  //console.log(req);
  try {
    const ID = req.body.id;
    console.log("ID", ID);
    if (!ID) {
      return res.status(404).send({
        success: false,
        messsage: "invalid id please provoid id",
      });
    }
    const {
      assignment_name,
      batch_name,
      upload_url,
      assignment_description,
      create_time,
      create_date,
      trainer_name,
      student_name,
      trainer_remark,
      remark_description,
    } = req.body;
    const data = await db.query(
      "UPDATE students_assignment SET assignment_name=?, batch_name=?, upload_url=?, assignment_description=?, create_time=?, create_date=?, trainer_name=?, student_name=?, trainer_remark=?, remark_description=? WHERE id=?",
      [
        assignment_name,
        batch_name,
        upload_url,
        assignment_description,
        create_time,
        create_date,
        trainer_name,
        student_name,
        trainer_remark,
        remark_description,
        ID,
      ]
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
      total_fees,
    } = req.body;
    if (
      !user_name ||
      !user_password ||
      !status ||
      !email ||
      !in_time ||
      !date ||
      !user_role ||
      !total_fees
    ) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO users(user_name, user_password, status, email, in_time, date, user_role, total_fees ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user_name,
        user_password,
        status,
        email,
        in_time,
        date,
        user_role,
        total_fees,
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

const getmyassignment = async (req, res) => {
  console.log("register", req.query.id);
  try {
    const id = req.query.id;

    //console.log("email1", password);
    const data = await db.query("SELECT * FROM assignment  WHERE id=? ", [id]);

    // const data = await db.query("SELECT * FROM users");
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

const getusersbyemailregister = async (req, res) => {
  // console.log("register", req)
  try {
    email = req.query.email;
    password = req.query.password;
    //console.log("email1", password);
    const data = await db.query("SELECT * FROM users  WHERE email=? ", [
      req.query.email,
    ]);

    // const data = await db.query("SELECT * FROM users");
    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      djdjd: email,
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

//get user by email in login
const getusersbyemail = async (req, res) => {
  try {
    email = req.query.email;
    password = req.query.password;
    //console.log("email1", password);
    const data = await db.query(
      "SELECT * FROM users  WHERE email=? AND user_password = ?",
      [email, password]
    );

    // const data = await db.query("SELECT * FROM users");
    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      djdjd: email,
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

//get user by id
const getusers_byid = async (req, res) => {
  try {
    //id = "1";
    const data = await db.query("SELECT * FROM users  WHERE id=?", [
      req.query.id,
    ]);

    //const data = await db.query("SELECT * FROM users ");
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

const getstudentassign_byid = async (req, res) => {
  console.log("id", req);
  try {
    //id = "1";
    const data = await db.query(
      "SELECT * FROM students_assignment  WHERE id=?",
      [req.query.id]
    );

    //const data = await db.query("SELECT * FROM users ");
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

//get all users
const getusers = async (req, res) => {
  try {
    //id = "1";
    //const data = await db.query("SELECT * FROM users  WHERE id=?", [id]);

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
      user_id,
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
      !end_time ||
      !user_id
    ) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO batches(batch_name, batch_type, batch_status, description,in_time, date, trainer_name,  start_time, end_time, user_id ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
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
        user_id,
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
      user_id,
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
      !end_date ||
      !user_id
    ) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }

    const data = await db.query(
      "INSERT INTO assignment(assignment_name, batch_name, batch_status, assignment_description,create_time, create_date, trainer_name,  start_date, end_date, user_id ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
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
        user_id,
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
  const email = req.body.email;
  console.log(req.body.email);
  try {
    const {
      user_name,
      email,
      user_password,
      status,
      user_role,
      class_name,
      in_time,
      date,
      total_fees,
    } = req.body;

    // Check if all required fields are provided
    if (
      !user_name ||
      !email ||
      !user_password ||
      !status ||
      !user_role ||
      !class_name ||
      !in_time ||
      !date ||
      !total_fees
    ) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Check if the email already exists in the database

    // SELECT COUNT(*) AS email_count FROM  users WHERE email = "admin@admin.com";
    // const emailExists = await db.query(
    //   "SELECT * FROM users  WHERE email=?",
    //   [req.query.email]
    // );

    const emailExists = await db.query(
      "SELECT COUNT(email) AS email_count FROM  users WHERE email=?",
      `${email}`
    );

    console.log("emailExists", emailExists[0][0].email_count);
    //  const countObj = emailExists[0][0]; // Accessing the first element of the first inner array

    // // Accessing the value of the key 'COUNT(*)' in the object
    // const countValue = countObj['COUNT(*)'];

    if (emailExists[0][0].email_count > 0) {
      return res.status(409).send({
        success: false,
        message: "Email already exists",
      });
    } else {
      const data = await db.query(
        "INSERT INTO users(user_name, email, user_password, status, user_role, class_name, in_time, date, total_fees) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          user_name,
          email,
          user_password,
          status,
          user_role,
          class_name,
          in_time,
          date,
          total_fees,
        ]
      );
      if (!data) {
        return res.status(500).send({
          success: false,
          message: "Error in insert query",
        });
      }

      res.status(201).send({
        success: true,
        message: "New student record created",
      });
    }

    // If email doesn't exist, insert new data into the database
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in create student API",
      error: error.message,
    });
  }
};

const register123 = async (req, res) => {
  console.log(req.body.email);
  try {
    const {
      user_name,
      email,
      user_password,
      status,
      user_role,
      class_name,
      in_time,
      date,
    } = req.body;

    // Check if all required fields are provided
    if (
      !user_name ||
      !email ||
      !user_password ||
      !status ||
      !user_role ||
      !class_name ||
      !in_time ||
      !date
    ) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Check if the email already exists in the database
    // const emailExists = await db.query("SELECT * FROM users WHERE email = ?", [
    //   req.body.email,

    // ]);
    // console.log("emailExists", emailExists);

    // if (emailExists.length > 1) {
    //   return res.status(409).send({
    //     success: false,
    //     message: "Email already exists",
    //   });
    // }
    // const email_data = await db.query("SELECT * FROM users  WHERE email=? ", [
    //   req.query.email,
    // ]);
    // console.log(email_data);

    // If email doesn't exist, insert new data into the database
    const data = await db.query(
      "INSERT INTO users(user_name, email, user_password, status, user_role, class_name, in_time, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user_name,
        email,
        user_password,
        status,
        user_role,
        class_name,
        in_time,
        date,
      ]
    );
    if (!data) {
      return res.status(500).send({
        success: false,
        message: "Error in insert query",
      });
    }

    res.status(201).send({
      success: true,
      message: "New student record created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in create student API",
      error: error.message,
    });
  }
};

//get My Assignment
const addStudentAssignment = async (req, res) => {
  //console.log(req);
  console.log("iddds", req.params.id);
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).send({
        success: false,
        messsage: "invalid student id",
      });
    }
    const data123 = await db.query("SELECT * FROM assignment WHERE id=?", [id]);
    if (!data123) {
      return res.status(404).send({
        success: false,
        messsage: "No record found",
      });
    }
    res.status(200).send({
      success: false,
      StudentDetails: data123[0],
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

//Add Students Assignment

const addStudentAssignment1 = async (req, res) => {
  console.log(req.body);
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
      trainer_remark,
      remark_description,
      user_id,
    } = req.body;
    if (
      !assignment_name ||
      !batch_name ||
      !upload_url ||
      !assignment_description ||
      !create_time ||
      !create_date ||
      !trainer_name ||
      !student_name ||
      !trainer_remark ||
      !remark_description ||
      !user_id
    ) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }
    const data = await db.query(
      "INSERT INTO students_assignment(assignment_name, batch_name, upload_url, assignment_description, create_time, create_date, trainer_name, student_name, trainer_remark, remark_description, user_id) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
      [
        assignment_name,
        batch_name,
        upload_url,
        assignment_description,
        create_time,
        create_date,
        trainer_name,
        student_name,
        trainer_remark,
        remark_description,
        user_id,
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

    // const data = await db.query(
    //   "SELECT COUNT(*) AS record_count FROM students_assignment"
    // );
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

const search_studentassign = async (req, res) => {
  //console.log("offset", req);
  try {
    const searchTerm = req.query.id;
    // const searchTerm = "sk";
    const currentPage = req.query.currentPage;
    console.log("currentPage24", currentPage);
    const limit = req.query.input;
    const offset = (currentPage - 1) * limit;
    //  const limit = "5";

    //   const offset = "0";
    console.log(offset);
    console.log(limit);
    console.log("searchTerm", searchTerm);

    // const data = await db.query(
    //   `SELECT * FROM students_assignment WHERE trainer_name LIKE '%${searchTerm}%' LIMIT ${limit} OFFSET ${offset}`
    // );
    const data = await db.query(`
    SELECT *, (SELECT COUNT(*) FROM students_assignment WHERE trainer_name LIKE '%${searchTerm}%' OR batch_name LIKE '%${searchTerm}%'  OR student_name LIKE '%${searchTerm}%' OR assignment_name LIKE '%${searchTerm}%') as total_count 
    FROM students_assignment 
    WHERE trainer_name LIKE '%${searchTerm}%' OR batch_name LIKE '%${searchTerm}%' OR student_name LIKE '%${searchTerm}%' OR assignment_name LIKE '%${searchTerm}%'
    LIMIT ${limit} OFFSET ${offset}
  `);

    console.log("242424", data);

    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "all student record2 ",
      //totalStudent: data[0].length,
      totalCount: data[0][0].total_count,
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

const search_viewassignment = async (req, res) => {
  //console.log("offset", req);
  try {
    const searchTerm = req.query.id;
    // const searchTerm = "sk";
    const currentPage = req.query.currentPage;
    console.log("currentPage24", currentPage);
    const limit = req.query.input;
    const offset = (currentPage - 1) * limit;
    const user_id = req.query.user_id;
    const user_role = req.query.user_role;
    console.log("user_role", user_role);
    //   const offset = "0";
    console.log(offset);
    console.log(limit);
    console.log("searchTerm", searchTerm);

    // const data = await db.query(
    //   `SELECT * FROM students_assignment WHERE trainer_name LIKE '%${searchTerm}%' LIMIT ${limit} OFFSET ${offset}`
    // );

    let data;
    if (user_role === "admin" || user_role === "student") {
      data = await db.query(`
      SELECT *, (SELECT COUNT(*) FROM assignment WHERE assignment_name LIKE '%${searchTerm}%' OR batch_name LIKE '%${searchTerm}%'  OR trainer_name LIKE '%${searchTerm}%' OR batch_status LIKE '%${searchTerm}%') as user_count 
      FROM assignment 
      WHERE assignment_name LIKE '%${searchTerm}%' OR batch_name LIKE '%${searchTerm}%' OR trainer_name LIKE '%${searchTerm}%' OR batch_status LIKE '%${searchTerm}%'
      LIMIT ${limit} OFFSET ${offset}
    `);
    } else {
      data = await db.query(`
        SELECT *, 
            (SELECT COUNT(*) FROM assignment WHERE (assignment_name LIKE '%${searchTerm}%' OR batch_name LIKE '%${searchTerm}%' OR trainer_name LIKE '%${searchTerm}%' OR batch_status LIKE '%${searchTerm}%') AND user_id = ${user_id}) as user_count,
            (SELECT COUNT(*) FROM assignment WHERE assignment_name LIKE '%${searchTerm}%' OR batch_name LIKE '%${searchTerm}%' OR trainer_name LIKE '%${searchTerm}%' OR batch_status LIKE '%${searchTerm}%') as total_count 
        FROM assignment 
        WHERE (assignment_name LIKE '%${searchTerm}%' OR batch_name LIKE '%${searchTerm}%' OR trainer_name LIKE '%${searchTerm}%' OR batch_status LIKE '%${searchTerm}%') AND user_id = ${user_id}
        LIMIT ${limit} OFFSET ${offset}
      `);
    }

    console.log("242424", data);

    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "all student record2 ",
      //totalStudent: data[0].length,
      user_count: data[0][0].user_count,
      totalCount: data[0][0].total_count,
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

const search_viewbatch = async (req, res) => {
  //console.log("offset", req);
  try {
    const searchTerm = req.query.id;
    // const searchTerm = "sk";
    const currentPage = req.query.currentPage;
    console.log("currentPage24", currentPage);
    const limit = req.query.input;
    const offset = (currentPage - 1) * limit;
    //  const limit = "5";

    //   const offset = "0";
    console.log(offset);
    console.log(limit);
    console.log("searchTerm", searchTerm);

    // const data = await db.query(
    //   `SELECT * FROM students_assignment WHERE trainer_name LIKE '%${searchTerm}%' LIMIT ${limit} OFFSET ${offset}`
    // );
    const data = await db.query(`
    SELECT *, (SELECT COUNT(*) FROM batches WHERE batch_name LIKE '%${searchTerm}%' OR batch_type LIKE '%${searchTerm}%'  OR trainer_name LIKE '%${searchTerm}%' OR batch_status LIKE '%${searchTerm}%') as total_count 
    FROM batches 
    WHERE batch_name LIKE '%${searchTerm}%' OR batch_type LIKE '%${searchTerm}%' OR trainer_name LIKE '%${searchTerm}%' OR batch_status LIKE '%${searchTerm}%'
    LIMIT ${limit} OFFSET ${offset}
  `);

    console.log("242424", data);

    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "all student record2 ",
      //totalStudent: data[0].length,
      totalCount: data[0][0].total_count,
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

const search_attendace = async (req, res) => {
  //console.log("offset", req);
  try {
    const searchTerm = req.query.id;
    // const searchTerm = "sk";
    const currentPage = req.query.currentPage;
    console.log("currentPage24", currentPage);
    const limit = req.query.input;
    const offset = (currentPage - 1) * limit;
    const user_id = req.query.user_id;
    const user_role = req.query.user_role;

    //  const limit = "5";

    //   const offset = "0";
    console.log(offset);
    console.log(limit);
    console.log("searchTerm", searchTerm);

    // const data = await db.query(
    //   `SELECT * FROM students_assignment WHERE trainer_name LIKE '%${searchTerm}%' LIMIT ${limit} OFFSET ${offset}`
    // );
    let data;
    if (user_role === "admin") {
      data = await db.query(`
  SELECT *, (SELECT COUNT(*) FROM attendance WHERE name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%'  OR date LIKE '%${searchTerm}%' OR in_time LIKE '%${searchTerm}%') as user_count 
  FROM attendance 
  WHERE name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR in_time LIKE '%${searchTerm}%'
  LIMIT ${limit} OFFSET ${offset}
  `);
    } else {
      data = await db.query(`
      SELECT *, 
          (SELECT COUNT(*) FROM attendance WHERE (name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR in_time LIKE '%${searchTerm}%') AND user_id = ${user_id}) as user_count,
          (SELECT COUNT(*) FROM attendance WHERE name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR in_time LIKE '%${searchTerm}%') as total_count 
      FROM attendance 
      WHERE (name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR in_time LIKE '%${searchTerm}%') AND user_id = ${user_id}
      LIMIT ${limit} OFFSET ${offset}
       `);
    }

    console.log("242424", data);

    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "all student record2 ",
      //totalStudent: data[0].length,

      user_count: data[0][0].user_count,
      totalCount: data[0][0].total_count,
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

const search_user = async (req, res) => {
  //console.log("offset", req);
  try {
    const searchTerm = req.query.id;
    // const searchTerm = "sk";
    const currentPage = req.query.currentPage;
    console.log("currentPage24", currentPage);
    const limit = req.query.input;
    const offset = (currentPage - 1) * limit;
    const user_id = req.query.user_id;
    const user_role = req.query.user_role;

    //  const limit = "5";

    //   const offset = "0";
    console.log(offset);
    console.log(limit);
    console.log("searchTerm", searchTerm);

    // const data = await db.query(
    //   `SELECT * FROM students_assignment WHERE trainer_name LIKE '%${searchTerm}%' LIMIT ${limit} OFFSET ${offset}`
    // );

    data = await db.query(`
  SELECT *, (SELECT COUNT(*) FROM users WHERE user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%'  OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%') as user_count 
  FROM users 
  WHERE user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%'
  LIMIT ${limit} OFFSET ${offset}
  `);

    console.log("242424", data);

    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "all student record2 ",
      //totalStudent: data[0].length,

      user_count: data[0][0].user_count,
      totalCount: data[0][0].total_count,
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

const search_user_students = async (req, res) => {
  //console.log("offset", req);
  try {
    const searchTerm = req.query.id;
    // const searchTerm = "sk";
    const currentPage = req.query.currentPage;
    console.log("currentPage24", currentPage);
    const limit = req.query.input;
    const offset = (currentPage - 1) * limit;

    //   const offset = "0";
    console.log(offset);
    console.log(limit);
    console.log("searchTerm", searchTerm);

    //   data = await db.query(`
    // SELECT *, (SELECT COUNT(*) FROM users WHERE user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%'  OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%') as user_count
    // FROM users
    // WHERE user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%'
    // LIMIT ${limit} OFFSET ${offset}
    // `);

    data = await db.query(`
    SELECT *, 
        (SELECT COUNT(*) FROM users WHERE (user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%') AND user_role = 'student') as user_count,
        (SELECT COUNT(*) FROM users WHERE user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%') as total_count 
    FROM users 
    WHERE (user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%') AND user_role = 'student'
    LIMIT ${limit} OFFSET ${offset}
     `);

    console.log("242424", data);

    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "all student record2 ",
      //totalStudent: data[0].length,

      user_count: data[0][0].user_count,
      totalCount: data[0][0].total_count,
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

const search_view_installment_fees = async (req, res) => {
  //console.log("offset", req);
  try {
    const searchTerm = req.query.id;
    // const searchTerm = "sk";
    const currentPage = req.query.currentPage;
    console.log("currentPage24", currentPage);
    const limit = req.query.input;
    const offset = (currentPage - 1) * limit;

    //   const offset = "0";
    console.log(offset);
    console.log(limit);
    console.log("searchTerm", searchTerm);

    // data = await db.query(`
    // SELECT  *, (SELECT COUNT(*) FROM students_fees WHERE student_name LIKE '%${searchTerm}%' OR fees_type LIKE '%${searchTerm}%'  OR description LIKE '%${searchTerm}%' OR create_date LIKE '%${searchTerm}%') as user_count
    // FROM students_fees
    // WHERE student_name LIKE '%${searchTerm}%' OR fees_type LIKE '%${searchTerm}%' OR description LIKE '%${searchTerm}%' OR create_date LIKE '%${searchTerm}%'
    // LIMIT ${limit} OFFSET ${offset}
    // `);
    data = await db.query(`
    SELECT   *,
        (SELECT COUNT(*) 
         FROM students_fees 
         WHERE student_name LIKE '%${searchTerm}%' 
            OR fees_type LIKE '%${searchTerm}%'  
            OR description LIKE '%${searchTerm}%' 
            OR create_date LIKE '%${searchTerm}%') AND user_id = 1  as user_count
    FROM students_fees
   
    WHERE student_name LIKE '%${searchTerm}%' 
        OR fees_type LIKE '%${searchTerm}%' 
        OR description LIKE '%${searchTerm}%' 
        OR create_date LIKE '%${searchTerm}%'
    ORDER BY id DESC
    LIMIT ${limit} OFFSET ${offset}
`);

    //     data = await db.query(`
    //     SELECT DISTINCT *,  (SELECT COUNT(*) FROM students_fees WHERE student_name LIKE '%${searchTerm}%' OR fees_type LIKE '%${searchTerm}%'  OR description LIKE '%${searchTerm}%' OR create_date LIKE '%${searchTerm}%') as user_count
    //     FROM students_fees
    //     WHERE student_name LIKE '%${searchTerm}%' OR fees_type LIKE '%${searchTerm}%' OR description LIKE '%${searchTerm}%' OR create_date LIKE '%${searchTerm}%'
    //     ORDER BY id DESC
    //     LIMIT ${limit} OFFSET ${offset}

    // `);

    // data = await db.query(`
    // SELECT *,
    //     (SELECT COUNT(*) FROM users WHERE (user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%') AND user_role = 'student') as user_count,
    //     (SELECT COUNT(*) FROM users WHERE user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%') as total_count
    // FROM users
    // WHERE (user_name LIKE '%${searchTerm}%' OR class_name LIKE '%${searchTerm}%' OR date LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%') AND user_role = 'student'
    // LIMIT ${limit} OFFSET ${offset}
    //  `);

    console.log("242424", data);

    if (!data) {
      return res.status(404).send({
        success: false,
        messsage: "No record ",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "all student record2 ",
      //totalStudent: data[0].length,

      user_count: data[0][0].user_count,
      totalCount: data[0][0].total_count,
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
const add_student_fees = async (req, res) => {
  try {
    const {
      student_name,
      create_time,
      create_date,
      total_fees,
      installment_fees,
      fees_type,
      description,
    } = req.body;
    if (
      !student_name ||
      !create_time ||
      !create_date ||
      !total_fees ||
      !installment_fees ||
      !fees_type ||
      !description
    ) {
      return res.status(500).send({
        success: false,
        messsage: "Please provide all fields",
      });
    }

    const data = await db.query(
      "INSERT INTO students_fees(student_name, create_time, create_date, total_fees,installment_fees, fees_type, description ) VALUES ( ?, ?, ?, ?, ?, ?, ? )",
      [
        student_name,
        create_time,
        create_date,
        total_fees,
        installment_fees,
        fees_type,
        description,
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
  addStudentAssignment1,
  getStudentAssignment,
  getusersbyemail,
  getusersbyemailregister,
  getusers_byid,
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
};
