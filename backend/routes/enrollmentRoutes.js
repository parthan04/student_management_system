const express = require("express");

const router = express.Router();

const enrollmentController = require("../controllers/enrollmentController");

//CREATE ROUTES
router.post("/add_enrollment",enrollmentController.createEnrollment);

//READ ROUTES
router.get("/get_enrollment", enrollmentController.getAllEnrollments);

//GET FULL ENROLLMENT DETAILS
router.get("/full_enrollment_details",enrollmentController.getFullEnrollmentDetails)

//UPDATE ROUTES
router.put("/update_enrollment/:id",enrollmentController.updateEnrollment);

//DELETE ROUTES
router.delete("/delete_enrollment/:id",enrollmentController.deleteEnrollment);

module.exports = router;
