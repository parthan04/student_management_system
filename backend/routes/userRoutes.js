const express = require('express');

const router = express.Router();

const studentController=require('../controllers/userController');

//CREATE ROUTES
router.post('/add_user',studentController.createUser);

//READ ROUTES
router.get('/get_user',studentController.getAllUsers);

//UPDATE ROUTES
router.put('/update_user/:id',studentController.updatAllUsers);

//DELETE ROUTES
router.delete('/delete_user/:id',studentController.deleteAllUser);

module.exports = router;