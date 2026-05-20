import api from "./api";


export const createStudent=(data)=>api.post("/students/add_student",data);
export const getStudents=()=>api.get("/students/get_students");
export const updateStudent=(id,data)=>api.put(`/students/update_student/${id}`,data);
export const deleteStudent=(id)=>api.delete(`students/delete_student/${id}`);