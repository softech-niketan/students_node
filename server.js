const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mysqlpool = require("./config/db");
const cors = require("cors");
const multer = require("multer");
//const colors = require('colors');

//configar
dotenv.config({ path: "" });

//rest object
const app = express();

//moddleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// const uploads = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       // Generating a filename with timestamp
//       const filename = file.fieldname + "-" + file.lastModified + ".jpg";
//       cb(null, filename);
//     },
//   }),
// }).single("user_file");

const uploads = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },

    filename: function (req, file, cb) {
      // const randomFilename = file.fieldname + "-" + Date.now() + +".jpg";

      console.log("filee", file);
      console.log(file.fieldname);
      cb(null, file.fieldname + "-" + file.originalname + ".jpg");
    },
  }),
}).single("user_file");

//routes
app.use("/api/v1/student", require("./routes/studentRoutes"));

app.post("/uploads", uploads, (req, resp) => {
  //  console.log(req.body.photoFile.lastModified)
  // const uploadedFilename = req.file.filename;
  // resp.json(uploadedFilename);
  resp.send("data coming");
});
app.use("/uploads", express.static("uploads"));

// app.get("/uploads/get/", express.static("uploads"), (req, res) => {
//   // Logic to retrieve data from your database or file
//   res.send("Get data endpoint");
// });

app.get("/test", (req, res) => {
  res.status(200).send("<h1> node js </h1>");
});

//port
const port = process.env.PORT || 8000;

//conditionally listen
mysqlpool
  .query("SELECT 1")
  .then(() => {
    //my sql
    console.log("mysql db connected");
    //listen
    app.listen(port, () => {
      console.log(`server runing on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
