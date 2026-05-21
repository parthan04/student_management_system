import api from "./api";

export const createUser = (data) => api.post("/api/users/add_user", data);
export const getAllUsers = () => api.get("/api/users/get_user");
export const updateUser = (id, data) => api.put(`/api/users/update_user/${id}`, data);
export const deleteUser = (id) => api.delete(`/api/users/delete_user/${id}`);