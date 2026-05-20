const enrollmentModel = require("../models/enrollmentModel");

// ======CREATE ENROLLMENT======

const createEnrollment = async (req, res) => {
  try {
    await enrollmentModel.addenrollment(req.body);
    res.status(201).json({
      message: "enrollment created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "enrollment not created",
    });
  }
};

//======READ ENROLLMENT======

const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await enrollmentModel.getenrollments();

    res.status(200).json({
      message: "enrollments found",
      data: enrollments,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "enrollments not found SERVER ERROR",
      error: err.message,
    });
  }
};


//===========GET FULL ENROLLMENT DETAILS==========

const getFullEnrollmentDetails=async(req,res)=>{
  try{

    const fullEnrollmentDetails=await enrollmentModel.getFullEnrollmentDetails();
    res.status(200).json({
      "message":"full details fetched successfully",
      "data":fullEnrollmentDetails
    })

  }catch(err){
    console.log(err);
    res.status(500).json({
      "message":"full details not fetched SERVER ERROR",
      "error":err
    })
  }
}

//======UPDATE ENROLLMENT======

const updateEnrollment = async (req, res) => {
  try {
    const id = req.params.id;
    await enrollmentModel.updateenrollment(id,req.body);

    res.status(200).json({
      message: "enrollment updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "enrollment not updated SERVER ERROR",
      error: err,
    });
  }
};

//======DELETE ENROLLMENT======

const deleteEnrollment = async (req, res) => {
  try {
    const id = req.params.id;
    await enrollmentModel.deleteenrollment(id);

    res.status(200).json({
      message: "enrollment deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "enrollment not deleted SERVER ERROR",
      error: err,
    });
  }
};


module.exports = {
  createEnrollment,
  getAllEnrollments,
  updateEnrollment,
  deleteEnrollment,
  getFullEnrollmentDetails
};
