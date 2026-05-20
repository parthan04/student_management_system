// DB CONNECTION
const db = require('../config/db');

// ======CREATE USER ======

const addUser = async(data)=>{

    const query="INSERT INTO users(name,email,password,role) VALUES (?,?,?,?)";
    
    const [rows] = await db.query(
        query,
        [   
            data.name,
            data.email,
            data.password,
            data.role || "student"
        ]
    );
    
    return rows;
};
    


//======READ USER======

const getUser=async()=>{

    const query="SELECT * FROM users";

    const [rows] = await db.query(query);
    return rows;

};

// ======UPDATE USER=======

const updateUser = async(id,data)=>{

    const query="UPDATE users SET name=?,email=?,password=?,role=? WHERE user_id=?";

    const [rows] = await db.query(
        query,
        [
            data.name,
            data.email,
            data.password,
            data.role || "student",
            id
        ]
    );

    return rows;
}; 

// ======DELETE USER=======

const deleteUser=async(id)=>{
    
    const query="DELETE FROM users WHERE user_id=?";

    const [rows] = await db.query(query,
        [
            id
        ]
    );
    return rows;
};

module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
};