import api from "./api";

export const createCourse=(data)=>api.post("/course/add_course",data);
export const getCourse=()=>api.get("/course/get_course");
export const updateCourse=(id,data)=>api.put(`/course/update_course/${id}`,data);
export const deleteCourse=(id)=>api.delete(`/course/delete_course/${id}`)