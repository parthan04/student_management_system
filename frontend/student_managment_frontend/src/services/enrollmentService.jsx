import api from "./api";

export const createEnrollment = (data) => api.post("/enrollment/add_enrollment", data);
export const getEnrollment = () => api.get("/enrollment/get_enrollment");
export const getAllEnrollment = () => api.get("/enrollment/full_enrollment_details");
export const updateEnrollment = (id, data) => api.put(`/enrollment/update_enrollment/${id}`, data);
export const deleteEnrollment = (id) => api.delete(`/enrollment/delete_enrollment/${id}`);