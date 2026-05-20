const db = require("./db");

const usersTable = `
      CREATE TABLE users
      (
            user_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(15) NOT NULL,
            email VARCHAR(20) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("admin","student") DEFAULT "student",
            createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
`;

const studentsTable = `
      CREATE TABLE students
      (
            student_id INT AUTO_INCREMENT PRIMARY KEY,
            age INT NOT NULL,
            gender ENUM("male","female","other") NOT NULL,
            address VARCHAR(255) NOT NULL,
            phone VARCHAR(10) NOT NULL,
            createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            
      );
`

const coursesTable = `
      CREATE TABLE courses (

            course_id INT AUTO_INCREMENT PRIMARY KEY,
            course_name VARCHAR(100) NOT NULL,
            duration VARCHAR(50),
            fees DECIMAL(10,2)

      );
`;

const enrollmentsTable = `
      CREATE TABLE enrollments
      (
                enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
                student_id INT,
                course_id INT,
                
                enrollment_date DATE,
                status ENUM("active","inactive") DEFAULT "active",
                
                FOREIGN KEY (student_id)
                REFERENCES students(student_id)
                ON DELETE CASCADE,

                FOREIGN KEY (course_id)
                REFERENCES courses(course_id)
                ON DELETE CASCADE
      )
`;

// TABLE CONNECTION AND EXECUTION QUERY
const tables = [
        usersTable,
        studentsTable,
        coursesTable,
        enrollmentsTable
];

const createTables = async () => {
    
    try {
         for(const table of tables){
            await db.query(table);
         }
         console.log("all tables created successfully");
    } catch(err) {
        console.log(err,"error created table");
    }
}

createTables();
