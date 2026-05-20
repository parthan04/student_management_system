const studentModel = require("../models/studentModel");

// ======CREATE STUDENT======

const createStudent = async (req, res) => {
  try {
    await studentModel.addStudent(req.body);
    res.status(201).json({
      message: "student created",
    });
  } catch (err) {
    console.log("CREATE STUDENT ERROR:",err);

    res.status(500).json({
      message: "student not created",
      error:err.sqlMessage,
      errors:err.message
    });
  }
};

//======READ STUDENT======

const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.getStudents();

    res.status(200).json({
      message: "students found",
      data: students,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "students not found SERVER ERROR",
      error: err,
    });
  }
};

//======UPDATE STUDENT======

const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    await studentModel.updateStudent(id, req.body);

    res.status(200).json({
      message: "student updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "student not updated SERVER ERROR",
      error: err,
    });
  }
};

//======DELETE STUDENT======

const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    await studentModel.deleteStudent(id);

    res.status(200).json({
      message: "student deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "student not deleted SERVER ERROR",
      error: err,
    });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
};
