import api from "./api";

export const createEnrollment = (data) => api.post("/enrollments/add_enrollment", data);
export const getEnrollment = () => api.get("/enrollments/get_enrollment");
export const getAllEnrollment = () => api.get("/enrollments/full_enrollment_details");
export const updateEnrollment = (id, data) => api.put(`/enrollments/update_enrollment/${id}`, data);
export const deleteEnrollment = (id) => api.delete(`/enrollments/delete_enrollment/${id}`);