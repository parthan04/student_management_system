// DB CONNECTION
const db = require('../config/db');

// ======CREATE ENROLLMENT ======

const addenrollment = async(data)=>{

    const query="INSERT INTO enrollments(student_id,course_id,status) VALUES (?,?,?)";
    
    const [rows] = await db.query(
        query,
        [
            data.student_id,
            data.course_id,
            data.status ||"active"
        ]
    );
    
    return rows;
};
    


//======READ ENROLLMENT======

const getenrollments=async()=>{

    const query="SELECT * FROM enrollments";

    const [rows] = await db.query(query);
    return rows;

};

// ======UPDATE ENROLLMENT=======

const updateenrollment = async(id,data)=>{

    const query=`UPDATE enrollments 
                 SET 
                    student_id=?,
                    course_id=?,
                    enrollment_date=?,
                    status=?
                WHERE enrollment_id=?
                `;

    const [rows] = await db.query(
        query,
        [   
            data.student_id,
            data.course_id,
            data.enrollment_date,
            data.status,
            id
        ]
    );

    return rows;
}; 

// ======DELETE ENROLLMENT=======

const deleteenrollment=async(id)=>{
    
    const query="DELETE FROM enrollments WHERE enrollment_id=?";

    const [rows] = await db.query(query,
        [
            id
        ]
    );
    return rows;
};

//===========GET FULL ENROLLMENT DETAILS===========

const getFullEnrollmentDetails=async()=>{

    const query=`
        SELECT 
            enrollments.enrollment_id,
            enrollments.student_id,
            enrollments.course_id,

            students.student_name,
            students.phone,

            courses.course_name,
            courses.duration,
            courses.fees,

            enrollments.enrollment_date,
            enrollments.status

        FROM enrollments

        INNER JOIN students
        ON enrollments.student_id =
        students.student_id

        INNER JOIN courses
        ON enrollments.course_id =
        courses.course_id
    `;
    
    const [rows] = 
    await db.query(query);

    return rows;
};


module.exports = {
    addenrollment,
    getenrollments,
    updateenrollment,
    deleteenrollment,
    getFullEnrollmentDetails
};