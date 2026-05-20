const express = require("express");

const router = express.Router();

const courseController = require("../controllers/courseController");

//CREATE ROUTES
router.post("/add_course", courseController.createCourse);

//READ ROUTES
router.get("/get_course", courseController.getAllcourses);

//UPDATE ROUTES
router.put("/update_course/:id",courseController.updateCourse);

//DELETE ROUTES
router.delete("/delete_course/:id",courseController.deleteCourse);

module.exports = router;
