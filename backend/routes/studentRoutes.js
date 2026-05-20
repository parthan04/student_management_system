const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

//CREATE ROUTES
router.post("/add_student", studentController.createStudent);

//READ ROUTES
router.get("/get_students", studentController.getAllStudents);

//UPDATE ROUTES
router.put("/update_student/:id", studentController.updateStudent);

//DELETE ROUTES
router.delete("/delete_student/:id", studentController.deleteStudent);

module.exports = router;
