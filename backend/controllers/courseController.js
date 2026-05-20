const courseModel = require("../models/courseModel");

// ======CREATE COURSE======

const createCourse = async (req, res) => {
    
  try {
    await courseModel.addCourse(req.body);
    res.status(201).json({
      message: "course created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "course not created",
    });
  }
};

//======READ COURSE======

const getAllcourses = async (req, res) => {
  try {
    const courses = await courseModel.getCourses();

    res.status(200).json({
      message: "courses found",
      data: courses,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "courses not found SERVER ERROR",
      error: err,
    });
  }
};

//======UPDATE COURSE======

const updateCourse = async (req, res) => {
  try {
    const id = req.params.id;
    await courseModel.updateCourse(id, req.body);

    res.status(200).json({
      message: "course updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "course not updated SERVER ERROR",
      error: err,
    });
  }
};

//======DELETE COURSE======

const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    await courseModel.deleteCourse(id);

    res.status(200).json({
      message: "course deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "course not deleted SERVER ERROR",
      error: err,
    });
  }
};

module.exports = {
  createCourse,
  getAllcourses,
  updateCourse,
  deleteCourse,
};
