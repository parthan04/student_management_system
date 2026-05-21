import api from "./api";

export const createEnrollment = (data) => api.post("/api/enrollments/add_enrollment", data);
export const getEnrollment = () => api.get("/api/enrollments/get_enrollment");
export const getAllEnrollment = () => api.get("/api/enrollments/full_enrollment_details");
export const updateEnrollment = (id, data) => api.put(`/api/enrollments/update_enrollment/${id}`, data);
export const deleteEnrollment = (id) => api.delete(`/api/enrollments/delete_enrollment/${id}`);