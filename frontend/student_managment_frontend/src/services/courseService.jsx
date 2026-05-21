import api from "./api";

export const createCourse=(data)=>api.post("/courses/add_course",data);
export const getCourse=()=>api.get("/courses/get_course");
export const updateCourse=(id,data)=>api.put(`/courses/update_course/${id}`,data);
export const deleteCourse=(id)=>api.delete(`/courses/delete_course/${id}`)