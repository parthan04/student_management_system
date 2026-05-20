import api from "./api";

export const createUser = (data) => api.post("/users/add_user", data);
export const getAllUsers = () => api.get("/users/get_user");
export const updateUser = (id, data) => api.put(`/users/update_user/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/delete_user/${id}`);