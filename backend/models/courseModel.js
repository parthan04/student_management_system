// DB CONNECTION
const db = require('../config/db');

// ======CREATE COURSE======

const addCourse = async(data)=>{

    const query="INSERT INTO courses(course_name,duration,fees) VALUES (?,?,?)";
    
    const [rows] = await db.query(
        query,
        [
            data.course_name,
            data.duration,
            data.fees
        ]
    );
    
    return rows;
};
    


//======READ COURSE======

const getCourses=async()=>{

    const query="SELECT * FROM courses";

    const [rows] = await db.query(query);
    return rows;

};

// ======UPDATE COURSE=======

const updateCourse = async(id,data)=>{

    const query="UPDATE courses SET course_name=?,duration=?,fees=? WHERE course_id=?";

    const [rows] = await db.query(
        query,
        [
            data.course_name,
            data.duration,
            data.fees,
            id
        ]
    );

    return rows;
}; 

// ======DELETE COURSE=======

const deleteCourse=async(id)=>{
    
    const query="DELETE FROM courses WHERE course_id=?";

    const [rows] = await db.query(query,
        [
            id
        ]
    );
    return rows;
};

module.exports = {
    addCourse,
    getCourses,
    updateCourse,
    deleteCourse
};