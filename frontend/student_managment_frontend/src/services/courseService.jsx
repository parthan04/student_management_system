import api from "./api";

export const createCourse=(data)=>api.post("/api/courses/add_course",data);
export const getCourse=()=>api.get("/api/courses/get_course");
export const updateCourse=(id,data)=>api.put(`/api/courses/update_course/${id}`,data);
export const deleteCourse=(id)=>api.delete(`/api/courses/delete_course/${id}`)