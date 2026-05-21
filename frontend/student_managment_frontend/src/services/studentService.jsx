import api from "./api";


export const createStudent=(data)=>api.post("/api/students/add_student",data);
export const getStudents=()=>api.get("/api/students/get_students");
export const updateStudent=(id,data)=>api.put(`/api/students/update_student/${id}`,data);
export const deleteStudent=(id)=>api.delete(`/api/students/delete_student/${id}`);