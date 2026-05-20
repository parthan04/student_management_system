const userModel = require('../models/userModel');

const bcrypt = require('bcrypt');
//======CREATE USER======

const createUser=async(req,res)=>{

    try{ 

        const salt =await bcrypt.genSalt(10);
        const password=await bcrypt.hash(req.body.password,salt);
        
        const data={
            name:req.body.name,
            email:req.body.email,
            password:password
        };

        await userModel.addUser(data);
        res.status(201).json({
            "message":"user created",
            "data":data
        })
        
    }catch(err){
        
        console.log(err);

        res.status(500).json({
            message:"user not created",
            error:err.message
        })
        
    }

};


//======READ USER=======

const getAllUsers=async(req,res)=>{

    try {
       const users = await userModel.getUser();

       res.json(users);

    } catch(err){
        
        console.log(err)

        res.status(500).json({
            "message":"user not found SERVER ERROR",
            "error":err
        })
    }

};

//======UPDATE USER======

const updatAllUsers=async(req,res)=>{
    try{

        const id = req.params.id;
        await userModel.updateUser(id,req.body);

        res.status(200).json({
            "message":"user updated",
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            "message":"user not updated SERVER ERROR",
            "error":err
        })
    }

};

//======DELETE USER======

const deleteAllUser=async(req,res)=>{
    try{
    const id = req.params.id;

    await userModel.deleteUser(id);

    res.status(200).json({
        "message":"user deleted",
        "data":id
    })

    }catch(err){

        console.log(err)
        res.status(500).json({
            "message":"user not deleted SERVER ERROR",
            "error":err
        });
    }

}

module.exports = {
    createUser,
    getAllUsers,
    updatAllUsers,
    deleteAllUser
};