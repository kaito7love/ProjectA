import axios from "../axios";

let handleLoginAPI = (email, password) => {
    return axios.post(`/api/login`, { email, password });
};

const getAllUsers = (id) => {
    return axios.get(`/api/get-users?id=${id}`);
};

const createUserService = (data) => {
    console.log("check create data service", data);

    return axios.post(`/api/create-user`, data);
};

const deleteUserService = (id) => {
    return axios.delete("/api/delete-user", {data: { id: id }});
};

const editUserService = (data) => {
    return axios.put("/api/edit-user", data);
};

export { handleLoginAPI, getAllUsers, createUserService, deleteUserService ,editUserService};
