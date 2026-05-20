// DB CONNECTION
const db = require("../config/db");

// ======CREATE STUDENT ======

const addStudent = async (data) => {
  const query =
    "INSERT INTO students(student_name,age,gender,address,phone) VALUES (?,?,?,?,?)";

  const [rows] = await db.query(query, [
    data.student_name,
    data.age,
    data.gender,
    data.address,
    data.phone,
  ]);

  return rows;
};

//======READ USER======

const getStudents = async () => {
  const query = "SELECT * FROM students";

  const [rows] = await db.query(query);
  return rows;
};

// ======UPDATE USER=======

const updateStudent = async (id, data) => {
  const query =
    "UPDATE students SET student_name=? ,age=?,gender=?,address=?,phone=? WHERE student_id=?";

  const [rows] = await db.query(query, [
    data.student_name,
    data.age,
    data.gender,
    data.address,
    data.phone,
    id,
  ]);

  return rows;
};

// ======DELETE USER=======

const deleteStudent = async (id) => {
  const query = "DELETE FROM students WHERE student_id=?";

  const [rows] = await db.query(query, [id]);
  return rows;
};

module.exports = {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
